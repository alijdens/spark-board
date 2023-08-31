from py4j.java_gateway import JavaObject
from typing import Any, Dict, List, Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


class SortNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["order"] = self._order_as_dict(node.order())

    def _get_type(self) -> TransformationType:
        return TransformationType.Sort

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1

    def _order_as_dict(self, java_order: JavaObject) -> Dict[str, Any]:
        criterias = [o for o in iterate_java_object(java_order)]
        if len(criterias) == 1:
            direction = 'Ascending' if criterias[0].isAscending() else 'Descending'
            column_names = [f"'{ref.sql()}'" for ref in iterate_java_object(criterias[0].references())]
            simple_str = f"{direction} by {', '.join(column_names)}"

            return {
                "SQLs": [criterias[0].sql()],
                "simple_str": simple_str,
            }
        else:
            return {
                "SQLs": [c.sql() for c in criterias],
                "simple_str": "Multiple Columns"
            }
