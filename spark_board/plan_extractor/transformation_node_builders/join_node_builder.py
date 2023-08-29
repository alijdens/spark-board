from py4j.java_gateway import JavaObject
from typing import Dict, List, Optional, Tuple

from ..transformations_dag import JoinCondition, Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


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
