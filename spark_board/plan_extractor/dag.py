import dataclasses
from collections import defaultdict
from typing import Generator, Tuple, Optional, List, Dict
from .plan_parser import Node


@dataclasses.dataclass
class DFSData:
    # unique identifier of the node in the context of the DFS
    node_id: int

    # identifier of the parent node in the context of the DFS
    # Note that, for the root node only, the `parent_id` is None
    parent_id: Optional[int]

    parent: Node

    # the depth of the node in the DFS
    depth: int


class Position:
    __slots__ = ("x", "y")
    def __init__(self, x: float = 0, y: float = 0) -> None:
        self.x = x
        self.y = y


def dfs(root: Node) -> Generator[Tuple[DFSData, Node], None, None]:
    """Returns a generator that iterates over the tree in depth-first order.
    Each element yielded by the generator is a tuple of (DFSData, node)."""

    # counter to assign a unique identifier to each node
    next_node_id = 0
    parents: Dict[int, Optional[int]] = {next_node_id: None}
    nodes: Dict[int, Node] = {next_node_id: root}
    stack: List[int] = [next_node_id]
    depths: Dict[int, int] = {next_node_id: 0}

    while stack:
        node_id = stack.pop()

        # yield the node data and the node itself
        data = DFSData(
            node_id=node_id,
            parent_id=parents[node_id],
            parent=nodes[parents[node_id]] if parents[node_id] is not None else None,
            depth=depths[node_id],
        )
        yield data, nodes[node_id]

        # push all children to the stack in order to iterate them later
        # we assume this is a tree, so no cycles should happen here
        for child in nodes[node_id].children:
            next_node_id += 1
            nodes[next_node_id] = child
            parents[next_node_id] = node_id
            depths[next_node_id] = depths[node_id] + 1

            stack.append(next_node_id)


def build_layout(root: Node) -> Dict[Node, Position]:
    """Given a DAG, return the X and Y coordinates of each node in it to build
    a proper 2D layout."""

    # algorithm explanation: all nodes are placed in the middle (vertically) of
    # their children according to a DFS ordering (this rule applied recursively).
    # Leaf nodes (i.e. those without children) will be placed as if they've been
    # stacked vertically. except the X coordinate which is calculated using the
    # node depth in the DAG.
    positions: Dict[Node, Position] = defaultdict(Position)
    leaf_nodes_found = 0

    def _calculate_position(node: Node, depth: int = 0):
        positions[node].x = 200 * depth

        nonlocal leaf_nodes_found
        if not node.children:
            # leaf nodes are positioned one "step" below the last leaf node
            # positioned so far
            positions[node].y = leaf_nodes_found * 100
            leaf_nodes_found += 1
        else:
            # find the position of the first and last child
            child_y_positions = [
                _calculate_position(child, depth=depth + 1)
                for child in node.children
            ]
            child_y_start, child_y_end = min(child_y_positions), max(child_y_positions)
 
            # calculate the middle point between this node's first and last child
            positions[node].y = (child_y_start + child_y_end) / 2

        return positions[node].y

    _calculate_position(root)
    return positions
