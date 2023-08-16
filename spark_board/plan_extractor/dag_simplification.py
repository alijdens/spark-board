from .transformations_dag import Metadata, TransformationColumn, TransformationNode, TransformationType, JoinCondition

from typing import Dict, List, Set, TypeVar


class DagSimplifier(object):
    """
    The DAG Simplifiers detect certain pattern in a DAG, and map them to
    a simplified version of it.
    For example, four filters in a row could be simplified as one filter
    with four conditions.
    """

    def can_apply(self, dag: TransformationNode) -> bool:
        """Determines whether a pattern can be simplified by this simplifier or not"""
        raise NotImplementedError("Abstract method")
    
    def apply(self, original: TransformationNode) -> TransformationNode:
        """Returns a simplified version of the original DAG"""
        raise NotImplementedError("Abstract method")


class MergeJoinAndProject(DagSimplifier):
    """
    When the PySpark dataframe has a join, the resulting DAG has
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
        project_node = dag
        if len(project_node.children) != 1:
            return False
        join_node = project_node.children[0]
        if join_node.type != TransformationType.Join:
            return False
        if join_node.metadata["join_type"] == "Cross":
            # Cross Join doesn't add the extra Project, so removing it would be wrong
            return False
        if join_node in self.already_merged_joins:
            # Avoid collapsing all subsequent Projects
            return False
        condition = join_node.metadata["condition"]
        if not condition.is_equi_join:
            return False
        project_column_names = [c.name for c in project_node.columns.values()]
        join_column_names = [c.name for c in join_node.columns.values()]
        collapsed_col_names = [n for n in condition.equi_join_columns.keys()]
        return sorted(project_column_names + collapsed_col_names) == sorted(join_column_names)

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

    def _merge_columns(self, pcols: Dict[int, TransformationColumn], jcols: Dict[int, TransformationColumn], cond: JoinCondition) -> Dict[int, TransformationColumn]:
        for col in pcols.values():
            assert len(col.links) == 1
            link = col.links[0]

            links = []
            tree_string = ""
            if link.name in cond.equi_join_columns.keys():
                links = flatten([jcols[i].links for i in cond.equi_join_columns[link.name]])
                tree_string = cond.tree_string
            else:
                links = jcols[link.id].links
                tree_string = col.tree_string

            col.links = links
            col.tree_string = tree_string

        return pcols

class MergeDatasourceAndAlias(DagSimplifier):
    """
    When the PySpark dataframe represents a named table, it generates
    two nodes: one containing the table data itself, and another one
    containing an alias. This simplifier unifies both adding an
    attribute to the table node.
    When the datasource is a logical RDD, the alias is not added, so
    this simplifier considers that case and skips it.
    """

    def __init__(self) -> None:
        self.already_merged_relations: Set[TransformationNode] = set()

    def can_apply(self, df: TransformationNode) -> bool:
        if df.type != TransformationType.Alias:
            return False
        alias_node = df
        if alias_node in self.already_merged_relations:
            return False
        if len(alias_node.children) != 1:
            return False
        relation_node = alias_node.children[0]
        if relation_node.type != TransformationType.Relation:
            return False
        return True

    def apply(self, original: TransformationNode) -> TransformationNode:
        alias_node = original
        relation_node = original.children[0]
        new_node = TransformationNode(
            type=TransformationType.Relation,
            metadata=relation_node.metadata,
            children=relation_node.children,
            columns=self._remove_links(alias_node.columns),
        )
        for c in new_node.columns.values():
            c.node_id = new_node.id
        self.already_merged_relations.add(new_node)
        return new_node

    def _remove_links(self, alias_cols: Dict[int, TransformationColumn]) -> Dict[int, TransformationColumn]:
        for col in alias_cols.values():
            col.links = []
        return alias_cols


T = TypeVar("T")
def flatten(l: List[List[T]]) -> List[T]:
    return [item for sublist in l for item in sublist]


all_heuristics = [
    MergeJoinAndProject(),
    MergeDatasourceAndAlias(),
]


def simplify(raw_dag: TransformationNode) -> TransformationNode:
    # heuristics are applied with a "child-first" policy
    raw_dag.children = [simplify(child) for child in raw_dag.children]

    result_dag = raw_dag
    for heuristic in all_heuristics:
        if heuristic.can_apply(result_dag):
            result_dag = heuristic.apply(result_dag)
    return result_dag
