from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder


class UnionNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # Nothing to extract here
        pass

    def _get_type(self) -> TransformationType:
        return TransformationType.Union

    def _expected_number_of_nodes(self) -> Optional[int]:
        # Might be any number greater than 1
        return None
