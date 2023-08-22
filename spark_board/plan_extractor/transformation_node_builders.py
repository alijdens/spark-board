from py4j.java_gateway import JavaObject
from typing import List, Dict, Any, Generator, Optional, Tuple

from .transformations_dag import JoinCondition, Metadata, TransformationColumn, TransformationNode, TransformationType
from .py4j_utils import iterate_java_object


class TransformationNodeBuilder(object):

    def build(self, java_node: JavaObject) -> TransformationNode:
        if self._expected_number_of_nodes() is not None:
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
            raise NotImplementedError(f"Column type not supported: {java_column.nodeName()}")

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

    def _expected_number_of_nodes(self) -> Optional[int]:
        raise NotImplementedError("Abstract method")


class ProjectNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: Something besides the columns?
        pass

    def _get_columns(self, node: JavaObject) -> JavaObject:
        return node.projectList()

    def _get_type(self) -> TransformationType:
        return TransformationType.Project

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class FilterNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["condition"] = node.condition().sql()

    def _get_type(self) -> TransformationType:
        return TransformationType.Filter

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class LogicalRDDNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: collect metadata about RDD columns
        metadata["type"] = "Logical RDD"

    def _get_type(self) -> TransformationType:
        return TransformationType.LogicalRDD

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 0


class LogicalRelationNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["type"] = "relation"
        metadata["file_format"] = node.relation().fileFormat().toString()

        catalog_table_option = node.catalogTable()
        if not catalog_table_option.isEmpty():
            catalog_table = catalog_table_option.get()
            metadata["database"] = catalog_table.database()
            metadata["table"] = catalog_table.identifier().table()
            metadata["partition_columns"] = [name for name in iterate_java_object(catalog_table.partitionColumnNames())]
            metadata["storage"] = catalog_table.storage().toString()

    def _get_type(self) -> TransformationType:
        return TransformationType.Relation

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 0


class JoinNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["join_type"] = node.joinType().toString()
        metadata["condition"] = self._extract_condition(node)

    def _get_type(self) -> TransformationType:
        return TransformationType.Join

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 2

    def _extract_condition(self, node: JavaObject) -> JoinCondition:
        if node.condition().isEmpty():
            return JoinCondition("", "", False, {})
        cond = node.condition().get()
        is_equi_join, equi_join_columns = self._is_equi_join(cond)
        reference_ids = [ref.exprId().id() for ref in iterate_java_object(cond.references())]
        return JoinCondition(cond.sql(), cond.treeString(), is_equi_join, equi_join_columns)

    def _get_column_name(self, java_object: JavaObject) -> Optional[str]:
        if java_object.nodeName() == "AttributeReference":
            return str(java_object.name())
        elif java_object.nodeName() == "Cast":
            return self._get_column_name(java_object.child())
        else:
            return None

    def _is_equi_join(self, cond: JavaObject) -> Tuple[bool, Dict[str, List[int]]]:
        node_name = cond.nodeName()
        if node_name == "EqualTo":
            cols = [col for col in iterate_java_object(cond.children())]
            reference_ids = [ref.exprId().id() for ref in iterate_java_object(cond.references())]
            if len(cols) != 2:
                return False, {}
            name1 = self._get_column_name(cols[0])
            name2 = self._get_column_name(cols[1])
            if name1 is not None and name1 == name2:
                return True, {name1: reference_ids}
            else:
                return False, {}

        if node_name == "And":
            equi_join_columns = {}
            for child in iterate_java_object(cond.children()):
                child_is_equi, child_cols = self._is_equi_join(child)
                if child_is_equi:
                    equi_join_columns.update(child_cols)
                else:
                    return False, {}
            return True, equi_join_columns

        return False, {}


class GenerateNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["generator"] = node.generator().sql()

    def _get_type(self) -> TransformationType:
        return TransformationType.Generate

    def _expected_number_of_nodes(self) -> Optional[int]:
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

    def _get_columns(self, java_node: JavaObject) -> JavaObject:
        return java_node.aggregateExpressions()

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class WindowNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: parse metadata
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Window

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class SortNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["order"] = [c.sql() for c in iterate_java_object(node.order())]

    def _get_type(self) -> TransformationType:
        return TransformationType.Sort

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class UnionNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # Nothing to extract here
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Union

    def _expected_number_of_nodes(self) -> Optional[int]:
        # Might be any number greater than 1
        return None


class LimitNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["limit_expr"] = node.limitExpr().toString()

    def _get_type(self) -> TransformationType:
        return TransformationType.Limit

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class AliasNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["alias"] = node.identifier().toString()

    def _get_type(self) -> TransformationType:
        return TransformationType.Alias

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class RepartitionNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["num_partitions"] = node.numPartitions()
        metadata["expressions"] = [exp.sql() for exp in iterate_java_object(node.expressions())]

    def _get_type(self) -> TransformationType:
        return TransformationType.Repartition

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class DeduplicateNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["deduplicate_columns"] = [col.sql() for col in iterate_java_object(node.references())]

    def _get_type(self) -> TransformationType:
        return TransformationType.Deduplicate

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class ExceptAllNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["preserves_duplicates"] = True

    def _get_type(self) -> TransformationType:
        return TransformationType.Except

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 2


class ExceptNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["preserves_duplicates"] = False

    def _get_type(self) -> TransformationType:
        return TransformationType.Except

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 2


class IntersectNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["preserves_duplicates"] = False

    def _get_type(self) -> TransformationType:
        return TransformationType.Intersect

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 2


class IntersectAllNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["preserves_duplicates"] = True

    def _get_type(self) -> TransformationType:
        return TransformationType.Intersect

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 2


class SampleNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["seed"] = node.seed()
        metadata["fraction"] = node.fraction()


    def _get_type(self) -> TransformationType:
        return TransformationType.Sample

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


class ExpandNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["projections"] = [self._proj(proj) for proj in iterate_java_object(node.projections())]

    def _proj(self, proj: List[JavaObject]) -> List[str]:
        return [col.sql() for col in iterate_java_object(proj)]

    def _get_type(self) -> TransformationType:
        return TransformationType.Expand

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1


def build_dag_from_java_object(node: JavaObject) -> TransformationNode:
    # objects that can parse each transformation sub-tree
    transformation_builders: Dict[str, 'TransformationNodeBuilder'] = {
        "SubqueryAlias": AliasNodeBuilder(),
        "Project": ProjectNodeBuilder(),
        "Filter": FilterNodeBuilder(),
        "LogicalRDD": LogicalRDDNodeBuilder(),
        "LogicalRelation": LogicalRelationNodeBuilder(),
        "Join": JoinNodeBuilder(),
        "Generate": GenerateNodeBuilder(),
        "Aggregate": AggregateNodeBuilder(),
        "Window": WindowNodeBuilder(),
        "Sort": SortNodeBuilder(),
        "Union": UnionNodeBuilder(),
        "GlobalLimit": LimitNodeBuilder(),
        "LocalLimit": LimitNodeBuilder(),
        "Repartition": RepartitionNodeBuilder(),
        "Deduplicate": DeduplicateNodeBuilder(),
        "Except": ExceptNodeBuilder(),
        "Except All": ExceptAllNodeBuilder(),
        "Intersect": IntersectNodeBuilder(),
        "Intersect All": IntersectAllNodeBuilder(),
        "Sample": SampleNodeBuilder(),
        "RepartitionByExpression": RepartitionNodeBuilder(),
        "Expand": ExpandNodeBuilder(),
    }

    builder = transformation_builders.get(node.nodeName())
    if not builder:
        raise NotImplementedError(f"Transformation not supported: '{node.nodeName()}'")

    return builder.build(node)
