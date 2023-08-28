from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

class ProjectNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # Nothing to do here
        pass

    def _get_columns(self, node: JavaObject) -> JavaObject:
        return node.projectList()

    def _get_type(self) -> TransformationType:
        return TransformationType.Project

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1
