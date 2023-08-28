from py4j.java_gateway import JavaObject
from typing import List, Dict, Any, Generator, Optional, Tuple

from ..transformations_dag import JoinCondition, Metadata, TransformationColumn, TransformationNode, TransformationType
from ..py4j_utils import iterate_java_object

from .aggregate_node_builder import AggregateNodeBuilder
from .alias_node_builder import AliasNodeBuilder
from .deduplicate_node_builder import DeduplicateNodeBuilder
from .except_node_builder import ExceptNodeBuilder, ExceptAllNodeBuilder
from .expand_node_builder import ExpandNodeBuilder
from .filter_node_builder import FilterNodeBuilder
from .generate_node_builder import GenerateNodeBuilder
from .intersect_node_builder import IntersectNodeBuilder, IntersectAllNodeBuilder
from .join_node_builder import JoinNodeBuilder
from .limit_node_builder import LimitNodeBuilder
from .logical_rdd_node_builder import LogicalRDDNodeBuilder
from .logical_relation_node_builder import LogicalRelationNodeBuilder
from .project_node_builder import ProjectNodeBuilder
from .repartition_node_builder import RepartitionNodeBuilder
from .sample_node_builder import SampleNodeBuilder
from .sort_node_builder import SortNodeBuilder
from .transformation_node_builder import TransformationNodeBuilder
from .union_node_builder import UnionNodeBuilder
from .unknown_node_builder import UnknownNodeBuilder
from .window_node_builder import WindowNodeBuilder


# objects that can parse each transformation sub-tree
transformation_builders: Dict[str, 'TransformationNodeBuilder'] = {
    "SubqueryAlias": AliasNodeBuilder(),
    "Project": ProjectNodeBuilder(),
    "Filter": FilterNodeBuilder(),
    "LogicalRDD": LogicalRDDNodeBuilder(),
    "LogicalRelation": LogicalRelationNodeBuilder(),
    "Join": JoinNodeBuilder(),
    "Generate": GenerateNodeBuilder(),
    "Aggregate": AggregateNodeBuilder(),
    "Window": WindowNodeBuilder(),
    "Sort": SortNodeBuilder(),
    "Union": UnionNodeBuilder(),
    "GlobalLimit": LimitNodeBuilder(),
    "LocalLimit": LimitNodeBuilder(),
    "Repartition": RepartitionNodeBuilder(),
    "Deduplicate": DeduplicateNodeBuilder(),
    "Except": ExceptNodeBuilder(),
    "Except All": ExceptAllNodeBuilder(),
    "Intersect": IntersectNodeBuilder(),
    "Intersect All": IntersectAllNodeBuilder(),
    "Sample": SampleNodeBuilder(),
    "RepartitionByExpression": RepartitionNodeBuilder(),
    "Expand": ExpandNodeBuilder(),
}

def build_dag_from_java_object(node: JavaObject, allow_unknown_transformations: bool = True) -> TransformationNode:
    default: Optional['TransformationNodeBuilder'] = UnknownNodeBuilder() if allow_unknown_transformations else None

    builder = transformation_builders.get(node.nodeName(), default)
    if not builder:
        raise NotImplementedError(f"Transformation not supported: '{node.nodeName()}'")

    return builder.build(node, build_dag_from_java_object, allow_unknown_transformations=allow_unknown_transformations)
