import enum
import dataclasses
from py4j.java_gateway import JavaObject
from pyspark.sql import DataFrame
from typing import List, Optional, Dict, Callable, Union


class NodeType(enum.Enum):
    Project = "project"
    Filter = "filter"
    Join = "join"
    Source = "source"


@dataclasses.dataclass
class Node:
    type: NodeType
    metadata: dict  # TODO: make it more type specific
    parent: Optional['Node']
    children: List['Node']


def build_graph(df: DataFrame) -> Node:
    root = df._jdf.queryExecution().logical()

    # TODO: skip the 'Project [*]' node
    return parse_transformation(node=root)

    for transformation in iterate_java_object(plan.children()):
        parse_transformation(node=transformation)


def parse_transformation(node: JavaObject) -> Node:
    # functions that can walk each transformation sub-tree
    parsers: Dict[str, Callable[[JavaObject], Node]] = {
        "Project": _parse_project,
        "Filter": _parse_filter,
        # "rdd": _parse_rdd,
        # "relation": _parse_relation,
        # "join": _parse_join,
    }
    parse_func = parsers.get(node.nodeName())
    if not parse_func:
        raise NotImplementedError(f"Transformation not supported: {node.nodeName()}")

    return parse_func(node)


def _parse_project(node: JavaObject):
    columns = []
    for col in iterate_java_object(node.projectList().iterator()):
        # TODO: col.dataType() might be useful too
        if col.nodeName() == "Alias":
            alias = col.name()

            reference = col.references().head()
            referenced_col_name, referenced_col_id = reference.name(), reference.exprId().id()

            columns.append({"alias": alias, "name": referenced_col_name, "id": referenced_col_id})
        elif col.nodeName() == "AttributeReference":
            col_name, col_id = col.name(), col.exprId().id()
            columns.append({"name": col_name, "id": col_id})
        else:
            raise NotImplementedError(f"Project column type not supported: {col.nodeName()}")

    # project should only have a single child
    assert node.children().size() == 1

    return [
        Node(
            type=NodeType.Project,
            metadata={"columns": columns},
            # recursive call to continue the DFS on the transformations tree
            children=parse_transformation(node.child()),
        )
    ]


def _parse_filter(node: JavaObject) -> Node:
    for algo in iterate_java_object(node.condition().children()):
        if algo.nodeName() == "AttributeReference":
            print(algo.toJSON())
        elif algo.nodeName() == "Literal":
            print(algo.toJSON())

    return [
        Node(
            type=NodeType.Filter,
            metadata={},
            parent=None,
            children=parse_transformation(node.child()),
        )
    ]


def iterate_java_object(iterable: JavaObject):
    it = iterable.iterator()
    while it.hasNext():
        yield it.next()
