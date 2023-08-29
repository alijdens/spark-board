from py4j.java_gateway import JavaObject
from typing import List, Dict, Optional, Callable

from ..transformations_dag import Metadata, TransformationColumn, TransformationNode, TransformationType
from ..py4j_utils import iterate_java_object


class TransformationNodeBuilder(object):

    def build(self, java_node: JavaObject, on_node: Callable[[JavaObject, bool], TransformationNode], allow_unknown_transformations: bool = True) -> TransformationNode:
        if self._expected_number_of_nodes() is not None:
            assert java_node.children().size() == self._expected_number_of_nodes(), java_node.children().size()

        metadata: Dict[str, str] = {}
        self._extract_common_metadata(java_node, metadata)
        self._extract_metadata(java_node, metadata)

        children = [on_node(child, allow_unknown_transformations) for child in iterate_java_object(java_node.children())]
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
