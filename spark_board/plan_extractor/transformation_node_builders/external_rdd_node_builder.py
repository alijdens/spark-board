from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder


class ExternalRDDNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["type"] = "External RDD"

    def _get_type(self) -> TransformationType:
        return TransformationType.ExternalRDD

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 0
