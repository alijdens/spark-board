from .transformations_dag import TransformationColumn, TransformationNode, TransformationType, Condition

from typing import Dict


class Heuristic(object):

    def can_apply(self, dag: TransformationNode) -> bool:
        raise NotImplementedError("Abstract method")
    
    def apply(self, original: TransformationNode) -> TransformationNode:
        raise NotImplementedError("Abstract method")


class MergeJoinAndProject(Heuristic):

    def can_apply(self, dag: TransformationNode) -> bool:
        return dag.type == TransformationType.Project and len(dag.children) == 1 and dag.children[0].type == TransformationType.Join
    
    def apply(self, original: TransformationNode) -> TransformationNode:
        project_node = original
        join_node = original.children[0]
        return TransformationNode(
            type=TransformationType.Join,
            metadata=join_node.metadata,
            children=join_node.children,
            columns=self._merge_columns(project_node.columns, join_node.columns),
        )

    def _merge_columns(self, pcols: Dict[int, TransformationColumn], jcols: Dict[int, TransformationColumn]) -> Dict[int, TransformationColumn]:
        return pcols


all_heuristics = [
    MergeJoinAndProject()
]


def apply_heuristics(raw_dag: TransformationNode) -> TransformationNode:
    raw_dag.children = [apply_heuristics(child) for child in raw_dag.children]

    result_dag = raw_dag
    for heuristic in all_heuristics:
        if heuristic.can_apply(result_dag):
            result_dag = heuristic.apply(result_dag)
    return result_dag