from py4j.java_gateway import JavaObject
from typing import List, Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


class ExpandNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["projections"] = [self._proj(proj) for proj in iterate_java_object(node.projections())]

    def _proj(self, proj: List[JavaObject]) -> List[str]:
        return [col.sql() for col in iterate_java_object(proj)]

    def _get_type(self) -> TransformationType:
        return TransformationType.Expand

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1
