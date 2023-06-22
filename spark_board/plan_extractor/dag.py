import dataclasses
from collections import defaultdict
from typing import Generator, Tuple, Optional, List, Dict
from .transformations_dag import TransformationNode


@dataclasses.dataclass
class DFSNodeData:
    # identifier of the parent node
    # Note that, for the root node only, the `parent_id` is None
    parent_id: Optional[int]

    # parent node reference
    parent: Optional[TransformationNode]

    # the depth of the node in the DFS
    depth: int


def dfs(root: TransformationNode) -> Generator[Tuple[DFSNodeData, TransformationNode], None, None]:
    """Returns a generator that iterates over the tree in depth-first order.
    Each element yielded by the generator is a tuple of (DFSNodeData, node)."""

    parents: Dict[int, Optional[int]] = {root.id: None}
    nodes: Dict[int, TransformationNode] = {root.id: root}
    stack: List[int] = [root.id]
    depths: Dict[int, int] = {root.id: 0}

    while stack:
        node_id = stack.pop()

        # yield the node data and the node itself
        parent_id = parents[node_id]
        data = DFSNodeData(
            parent_id=parents[node_id],
            parent=nodes[parent_id] if parent_id is not None else None,
            depth=depths[node_id],
        )
        yield data, nodes[node_id]

        # push all children to the stack in order to iterate them later
        # we assume this is a tree, so no cycles should happen here
        for child in nodes[node_id].children:
            nodes[child.id] = child
            parents[child.id] = node_id
            depths[child.id] = depths[node_id] + 1

            stack.append(child.id)
