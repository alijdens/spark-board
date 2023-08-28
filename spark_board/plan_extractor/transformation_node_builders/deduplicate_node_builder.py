from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


class DeduplicateNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["deduplicate_columns"] = [col.sql() for col in iterate_java_object(node.references())]

    def _get_type(self) -> TransformationType:
        return TransformationType.Deduplicate

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1
