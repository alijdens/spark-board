from typing import Dict, Optional

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
def _default_node_builders() -> Dict[str, 'TransformationNodeBuilder']:
    return {
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


class Repository(object):
    def __init__(self, initial_node_builders: Dict[str, TransformationNodeBuilder] = {}, allow_unknown_transformations: bool=True) -> None:
        """
        Constructs a new instance.
        :param      initial_node_builders:          The initial node builders
        :param      allow_unknown_transformations:  Configures the behavior if an unknown transformation node name is found.
                                                    If True, a syntetic node will be added to the DAG;
                                                    If False, an error will be thrown.
        """
        self.transformation_builders = initial_node_builders
        self.allow_unknown_transformations = allow_unknown_transformations

    def get_builder(self, node_name: str) -> TransformationNodeBuilder:
        default: Optional[TransformationNodeBuilder] = UnknownNodeBuilder() if self.allow_unknown_transformations else None

        builder = self.transformation_builders.get(node_name, default)
        if not builder:
            raise NotImplementedError(f"Transformation not supported: '{node_name}'")

        return builder

    def add_builder(self, node_name: str, builder: TransformationNodeBuilder) -> 'Repository':
        self.transformation_builders[node_name] = builder
        return self

    def remove_builder(self, node_name: str) -> 'Repository':
        self.transformation_builders.pop(node_name)
        return self

    def set_allow_unknown(self, new_value: bool) -> 'Repository':
        self.allow_unknown_transformations = new_value
        return self


def create_empty() -> Repository:
    return Repository()


def create_default() -> Repository:
    return Repository(_default_node_builders())
