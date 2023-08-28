from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


class RepartitionNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["num_partitions"] = node.numPartitions()
        metadata["expressions"] = [exp.sql() for exp in iterate_java_object(node.expressions())]

    def _get_type(self) -> TransformationType:
        return TransformationType.Repartition

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1
