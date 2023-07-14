from .transformations_dag import Metadata, TransformationColumn, TransformationNode, TransformationType, Condition

from typing import Dict, List, Set, TypeVar


class DagSimplifier(object):

    def can_apply(self, dag: TransformationNode) -> bool:
        raise NotImplementedError("Abstract method")
    
    def apply(self, original: TransformationNode) -> TransformationNode:
        raise NotImplementedError("Abstract method")


class MergeJoinAndProject(DagSimplifier):
    """When the PySpark dataframe has a join, the resulting DAG has
    two nodes: one is a Join, and the other is a Project. With this simplification
    both nodes are merged.
    When joining by column name, the node has one column representing the
    column coming from the "left" df, and another for the "right" df. Our
    resulting merged join node contains only one column that has links
    to the two origin columns.
    """

    def __init__(self) -> None:
        self.already_merged_joins: Set[TransformationNode] = set()

    def can_apply(self, dag: TransformationNode) -> bool:
        if dag.type != TransformationType.Project:
            return False
        if len(dag.children) != 1:
            return False
        if dag.children[0].type != TransformationType.Join:
            return False
        if dag.children[0].metadata["join_type"] == "Cross":
            # Cross Join doesn't add the extra Project, so removing it would be wrong
            return False
        if dag.children[0] in self.already_merged_joins:
            # Avoid collapsing all subsequent Projects
            return False
        return True

    def apply(self, original: TransformationNode) -> TransformationNode:
        project_node = original
        join_node = original.children[0]
        new_node = TransformationNode(
            type=TransformationType.Join,
            metadata=self._merge_metadata(project_node.metadata, join_node.metadata),
            children=join_node.children,
            columns=self._merge_columns(project_node.columns, join_node.columns, join_node.metadata["condition"]),
        )
        for c in new_node.columns.values():
            c.node_id = new_node.id
        self.already_merged_joins.add(new_node)
        return new_node

    def _merge_metadata(self, proj_meta: Metadata, join_meta: Metadata) -> Metadata:
        return {
            "condition": join_meta["condition"],
            "join_type": join_meta["join_type"],
            "schema_string": proj_meta["schema_string"],
        }

    def _merge_columns(self, pcols: Dict[int, TransformationColumn], jcols: Dict[int, TransformationColumn], cond: Condition) -> Dict[int, TransformationColumn]:
        for col in pcols.values():
            assert len(col.links) == 1
            link = col.links[0]

            links = []
            tree_string = ""
            if link.id in cond.column_ids:
                links = flatten([jcols[i].links for i in cond.column_ids])
                tree_string = cond.tree_string
            else:
                links = jcols[link.id].links
                tree_string = col.tree_string

            col.links = links
            col.tree_string = tree_string

        return pcols


T = TypeVar("T")
def flatten(l: List[List[T]]) -> List[T]:
    return [item for sublist in l for item in sublist]


all_heuristics = [
    MergeJoinAndProject()
]


def simplify(raw_dag: TransformationNode) -> TransformationNode:
    # heuristics are applied with a "child-first" policy
    raw_dag.children = [simplify(child) for child in raw_dag.children]

    result_dag = raw_dag
    for heuristic in all_heuristics:
        if heuristic.can_apply(result_dag):
            result_dag = heuristic.apply(result_dag)
    return result_dag