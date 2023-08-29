from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder


class WindowNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: parse metadata
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Window

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1
