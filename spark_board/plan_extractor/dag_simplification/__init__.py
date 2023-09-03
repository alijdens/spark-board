from ..transformations_dag import TransformationNode

from .dag_simplifier import DagSimplifier
from .merge_join_and_project import MergeJoinAndProject
from .merge_datasource_and_alias import MergeDatasourceAndAlias

from typing import Dict, List, Set, TypeVar


def default_simplifiers() -> List[DagSimplifier]:
    """
    Returns the list of default simplifiers implemented within spark_board.
    """
    return [
        MergeJoinAndProject(),
        MergeDatasourceAndAlias(),
    ]


def simplify(raw_dag: TransformationNode, simplifiers: List[DagSimplifier]=default_simplifiers()) -> TransformationNode:
    """
    Applies the passed simplifiers to the passed DAG, with a "child-first" policy:
    the simplifiers ar applied to the leaves of the tree first, so when a simplifier
    is being applied to a node, the children are already simplified.

    :param      raw_dag:      The DAG to be simplified.
    :param      simplifiers:  The simplifiers to apply.

    :returns:   The simplified DAG.
    """
    raw_dag.children = [simplify(child) for child in raw_dag.children]

    result_dag = raw_dag
    for simplifier in simplifiers:
        if simplifier.can_apply(result_dag):
            result_dag = simplifier.apply(result_dag)
    return result_dag
