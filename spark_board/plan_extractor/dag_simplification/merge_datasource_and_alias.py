from typing import Dict, Set

from ..transformations_dag import Metadata, TransformationColumn, TransformationNode, TransformationType

from .dag_simplifier import DagSimplifier


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
