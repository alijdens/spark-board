from py4j.java_gateway import JavaObject
from typing import List, Dict, Any, Generator, Optional

from .transformations_dag import TransformationNode, Metadata, TransformationType, TransformationColumn
from .py4j_utils import iterate_java_object


class TransformationNodeBuilder(object):

    def build(self, java_node: JavaObject) -> TransformationNode:
        assert java_node.children().size() == self._expected_number_of_nodes(), java_node.children().size()

        metadata: Dict[str, str] = {}
        self._extract_common_metadata(java_node, metadata)
        self._extract_metadata(java_node, metadata)

        children = [build_dag_from_java_object(child) for child in iterate_java_object(java_node.children())]
        columns = self._extract_columns(java_node, children)

        node = TransformationNode(
            type=self._get_type(),
            metadata=metadata,
            children=children,
            columns=columns
        )
        for column in columns.values():
            column.node_id = node.id

        return node

    def _get_columns(self, java_node: JavaObject) -> JavaObject:
        return java_node.output()

    def _extract_columns(self, java_node: JavaObject, children: List[TransformationNode]) -> Dict[int, TransformationColumn]:
        columns = {}
        for java_column in iterate_java_object(self._get_columns(java_node)):
            column_id = java_column.exprId().id()
            parsed_column = self._extract_column(java_column, children)
            columns[column_id] = parsed_column
        return columns

    def _extract_column(self, java_column: JavaObject, children: List[TransformationNode]) -> TransformationColumn:
        if java_column.nodeName() not in ["Alias", "AttributeReference"]:
            raise NotImplementedError(f"Project column type not supported: {java_column.nodeName()}")

        column_name = java_column.name()
        column_id = java_column.exprId().id()
        data_type = java_column.dataType().simpleString()
        reference_ids = [reference.exprId().id() for reference in iterate_java_object(java_column.references())]
        tree_string = java_column.treeString()

        # For each referenced column, search it in the children in order to add a link
        links = []
        for ref_id in reference_ids:
            for child in children:
                if ref_id in child.columns:
                    links.append(child.columns[ref_id])

        return TransformationColumn(
            name=column_name,
            id=column_id,
            type=data_type,
            node_id=None,
            links=links,
            tree_string=tree_string
        )

    def _extract_common_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["schema_string"] = node.schemaString()

    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        pass

    def _get_type(self) -> TransformationType:
        raise NotImplementedError("Abstract method")

    def _expected_number_of_nodes(self) -> int:
        raise NotImplementedError("Abstract method")


class ProjectNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: Something besides the columns?
        pass

    def _get_columns(self, node: JavaObject) -> JavaObject:
        return node.projectList()

    def _get_type(self) -> TransformationType:
        return TransformationType.Project

    def _expected_number_of_nodes(self) -> int:
        return 1


class FilterNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["condition"] = node.condition().sql()

    def _get_type(self) -> TransformationType:
        return TransformationType.Filter

    def _expected_number_of_nodes(self) -> int:
        return 1


class LogicalRDDNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: collect metadata about RDD columns
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.LogicalRDD

    def _expected_number_of_nodes(self) -> int:
        return 0


class JoinNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["condition"] = node.condition().toString()
        metadata["join_type"] = node.joinType().toString()

    def _get_type(self) -> TransformationType:
        return TransformationType.Join

    def _expected_number_of_nodes(self) -> int:
        return 2


class GenerateNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["generator"] = node.generator().sql()

    def _get_type(self) -> TransformationType:
        return TransformationType.Generate

    def _expected_number_of_nodes(self) -> int:
        return 1


class AggregateNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        aggregate_expressions = []
        for aggregate_expression in iterate_java_object(node.aggregateExpressions()):
            aggregate_expressions.append(aggregate_expression.sql())

        grouping_expressions = []
        for grouping_expression in iterate_java_object(node.groupingExpressions()):
            grouping_expressions.append(grouping_expression.sql())

        metadata['aggregate_expressions'] = aggregate_expressions
        metadata['grouping_expressions'] = grouping_expressions

    def _get_type(self) -> TransformationType:
        return TransformationType.Aggregate

    def _expected_number_of_nodes(self) -> int:
        return 1


class WindowNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: parse metadata
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Window

    def _expected_number_of_nodes(self) -> int:
        return 1


class SortNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["order"] = [c.sql() for c in iterate_java_object(node.order())]

    def _get_type(self) -> TransformationType:
        return TransformationType.Sort

    def _expected_number_of_nodes(self) -> int:
        return 1


class UnionNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: parse metadata
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Union

    def _expected_number_of_nodes(self) -> int:
        return 2


class GlobalLimitNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # metadata["limit"] = TODO: parse limit
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Limit

    def _expected_number_of_nodes(self) -> int:
        return 1


def build_dag_from_java_object(node: JavaObject) -> TransformationNode:
    # objects that can parse each transformation sub-tree
    transformation_builders: Dict[str, 'TransformationNodeBuilder'] = {
        "Project": ProjectNodeBuilder(),
        "Filter": FilterNodeBuilder(),
        "LogicalRDD": LogicalRDDNodeBuilder(),
        "Join": JoinNodeBuilder(),
        "Generate": GenerateNodeBuilder(),
        "Aggregate": AggregateNodeBuilder(),
        "Window": WindowNodeBuilder(),
        "Sort": SortNodeBuilder(),
        "Union": UnionNodeBuilder(),
        "GlobalLimit": GlobalLimitNodeBuilder(),
        "LocalLimit": GlobalLimitNodeBuilder(),  # TODO: is this correct?
        # "relation": RelationNodeBuilder(),
    }

    builder = transformation_builders.get(node.nodeName())
    if not builder:
        raise NotImplementedError(f"Transformation not supported: '{node.nodeName()}'")

    return builder.build(node)
