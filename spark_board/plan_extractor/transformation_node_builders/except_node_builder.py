from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder


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
