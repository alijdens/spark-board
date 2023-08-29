from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder


class UnknownNodeBuilder(TransformationNodeBuilder):
    """This class is used to build nodes for transformations that are not supported.
    Instead of failing and leaving the users without any visualization, we can opt
    to return an "unknown" transformation and at least provide some kind of output.
    """

    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["inferred_type"] = node.getClass().getSimpleName()
        # toString() is a method of the `TreeNode` class, so it should be available in all nodes
        metadata["representation"] = node.toString()

    def _get_type(self) -> TransformationType:
        return TransformationType.Unknown

    def _expected_number_of_nodes(self) -> Optional[int]:
        return None
