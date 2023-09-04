from typing import Callable, Dict, Optional

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


def _default_node_builders() -> Dict[str, 'TransformationNodeBuilder']:
    """
    Returns the default set of objects that can parse each transformation sub-tree.
    """
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
    """
    This class describes a repository of 'TransformationNodeBuilder's indexed by name.
    The repository is dynamic: builders can be added/removed from the repository.
    If an unknown transformation name is requested, it will return an UnknownNodeBuilder by default,
    but this behavior can be changed by using the method 'with_default_builder'.
    """

    def __init__(self, initial_node_builders: Dict[str, TransformationNodeBuilder] = {}, allow_unknown_transformations: bool=True) -> None:
        """
        Constructs a new instance.
        :param      initial_node_builders:          The initial node builders
        :param      allow_unknown_transformations:  Configures the behavior if an unknown transformation node name is found.
                                                    If True, a syntetic node will be added to the DAG;
                                                    If False, an error will be thrown.
        """
        self.transformation_builders: Dict[str, TransformationNodeBuilder] = initial_node_builders
        self.default_node_builder_provider: Callable[[str], TransformationNodeBuilder] = self._print_warning_and_return_unknown_builder

    def _print_warning_and_return_unknown_builder(self, name: str) -> TransformationNodeBuilder:
        print(f"[WARN] Unknown node name: '{name}'")
        return UnknownNodeBuilder()

    def get_builder(self, node_name: str) -> TransformationNodeBuilder:
        builder = self.transformation_builders.get(node_name)
        if not builder:
            builder = self.default_node_builder_provider(node_name)
        return builder

    def add_builder(self, node_name: str, builder: TransformationNodeBuilder) -> 'Repository':
        self.transformation_builders[node_name] = builder
        return self

    def remove_builder(self, node_name: str) -> 'Repository':
        self.transformation_builders.pop(node_name)
        return self

    def with_default_builder(self, provider: Callable[[str], TransformationNodeBuilder]) -> 'Repository':
        """This method sets the callback that will be called whenever a node whose transformation
        type is not known is encountered. This allows defining how those nodes will be handled (which
        information will be shown/extracted from it) or whether to fail, for example."""
        self.default_node_builder_provider = provider
        return self


def _raise_error_on_unknown_node(unknown_node_name: str) -> TransformationNodeBuilder:
    raise NotImplementedError(f"Transformation not supported: '{unknown_node_name}'")


def create_empty() -> Repository:
    """
    Creates a 'Repository' without any builder.
    If a builder is requested, it will return an 'UnknownNodeBuilder' by default.
    """
    return Repository()


def create_default() -> Repository:
    """
    Creates a 'Repository' with the default set of 'TransformationNodeBuilder's.
    If a builder with an unknown name is requested, it will return an 'UnknownNodeBuilder' by default.
    """
    return Repository(_default_node_builders())


def create_strict() -> Repository:
    """
    Creates a 'Repository' with the default set of 'TransformationNodeBuilder's.
    If a builder with an unknown name is requested, it will raise a 'NotImplementedError'.
    """
    return create_default().with_default_builder(_raise_error_on_unknown_node)
