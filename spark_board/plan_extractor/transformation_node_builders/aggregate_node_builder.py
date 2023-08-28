from py4j.java_gateway import JavaObject
from typing import Optional

from ..transformations_dag import Metadata, TransformationType
from .transformation_node_builder import TransformationNodeBuilder

from ..py4j_utils import iterate_java_object


class AggregateNodeBuilder(TransformationNodeBuilder):
    def _extract_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        aggregate_expressions = []
        for aggregate_expression in iterate_java_object(node.aggregateExpressions()):
            aggregate_expressions.append(aggregate_expression.sql())

        grouping_expressions = []
        for grouping_expression in iterate_java_object(node.groupingExpressions()):
            grouping_expressions.append(grouping_expression.sql())

        metadata['aggregate_expressions'] = aggregate_expressions
        metadata['grouping_expressions'] = grouping_expressions

    def _get_type(self) -> TransformationType:
        return TransformationType.Aggregate

    def _get_columns(self, java_node: JavaObject) -> JavaObject:
        return java_node.aggregateExpressions()

    def _expected_number_of_nodes(self) -> Optional[int]:
        return 1
