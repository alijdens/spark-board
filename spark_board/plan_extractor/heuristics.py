from .transformations_dag import Metadata, TransformationColumn, TransformationNode, TransformationType, Condition

from typing import Dict, List


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
        new_node = TransformationNode(
            type=TransformationType.Join,
            metadata=self._merge_metadata(project_node.metadata, join_node.metadata),
            children=join_node.children,
            columns=self._merge_columns(project_node.columns, join_node.columns, join_node.metadata["condition2"]),
        )
        for c in new_node.columns.values():
            c.node_id = new_node.id
        return new_node

    def _merge_metadata(self, pmeta: Metadata, jmeta: Metadata) -> Metadata:
        return {
            "condition": jmeta["condition2"].sql,
            "join_type": jmeta["join_type"],
            "schema_string": pmeta["schema_string"],
        }

    def _merge_columns(self, pcols: Dict[int, TransformationColumn], jcols: Dict[int, TransformationColumn], cond: Condition) -> Dict[int, TransformationColumn]:
        result = {}
        for col_id, col in pcols.items():
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

            result[col_id] = TransformationColumn(
                name=col.name,
                id=col.id,
                type=col.type,
                node_id=col.node_id,
                links=links,
                tree_string=tree_string,
            )

        print(f"Result columns: {result}")
        return result


def flatten(l: List[List]) -> List:
    return [item for sublist in l for item in sublist]


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