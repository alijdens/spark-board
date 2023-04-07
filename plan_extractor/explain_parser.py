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
    LogicalRDD = "logical_rdd"
    Generate = "generate"
    Aggregate = "aggregate"
    Window = "window"


@dataclasses.dataclass
class Node:
    type: NodeType
    metadata: dict  # TODO: make it more type specific
    children: List['Node']

    def pprint(self, indent: int = 0) -> None:
        """Prints a human readable representation of the tree."""

        print("  " * indent + f"{self.type.name} {self.metadata}")
        for child in self.children:
            child.pprint(indent=indent + 1)


def _get_last_transformation(df: DataFrame) -> JavaObject:
    # we add a dummy projection of all columns to Spark resolves the next
    # transformations in the plan. Otherwise, the columns will be "unresolved"
    df = df.select("*")
    root = df._jdf.queryExecution().logical()

    # skip the 'Project [*]' node
    return next(iterate_java_object(root.children()))


def build_graph(df: DataFrame) -> Node:
    first_child = _get_last_transformation(df)
    return parse_transformation(node=first_child)


def parse_transformation(node: JavaObject) -> Node:
    # functions that can walk each transformation sub-tree
    parsers: Dict[str, Callable[[JavaObject], Node]] = {
        "Project": _parse_project,
        "Filter": _parse_filter,
        "LogicalRDD": _parse_logical_rdd,
        "Join": _parse_join,
        "Generate": _parse_generate,
        "Aggregate": _parse_aggregate,
        "Window": _parse_window,
        # "relation": _parse_relation,
    }
    parse_func = parsers.get(node.nodeName())
    if not parse_func:
        raise NotImplementedError(f"Transformation not supported: '{node.nodeName()}'")

    return parse_func(node)


def _parse_project(node: JavaObject):
    columns = []
    for col in iterate_java_object(node.projectList()):
        # TODO: col.dataType() and col.nullable() might be useful too
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

    return Node(
        type=NodeType.Project,
        metadata={"columns": columns},
        # recursive call to continue the DFS on the transformations tree
        children=[parse_transformation(node.child())],
    )


def _parse_filter(node: JavaObject) -> Node:
    assert node.children().size() == 1, node.children.size()

    return Node(
        type=NodeType.Filter,
        metadata={"condition": node.condition().sql()},
        children=[parse_transformation(node.child())],
    )


def _parse_logical_rdd(node: JavaObject) -> Node:
    assert node.children().size() == 0, node.children().size()

    # TODO: collect metadata about RDD columns
    return Node(
        type=NodeType.LogicalRDD,
        metadata={},
        children=[],
    )


def _parse_generate(node: JavaObject) -> Node:
    assert node.children().size() == 1, node.children().size()

    return Node(
        type=NodeType.Generate,
        metadata={"generator": node.generator().sql()},
        children=[parse_transformation(node.child())],
    )


def _parse_aggregate(node: JavaObject) -> Node:
    assert node.children().size() == 1, node.children().size()

    aggregate_expressions = []
    for aggregate_expression in iterate_java_object(node.aggregateExpressions()):
        aggregate_expressions.append(aggregate_expression.sql())

    grouping_expressions = []
    for grouping_expression in iterate_java_object(node.groupingExpressions()):
        grouping_expressions.append(aggregate_expression.sql())

    return Node(
        type=NodeType.Aggregate,
        metadata={'aggregate_expressions': aggregate_expressions, 'grouping_expressions': grouping_expressions},
        children=[parse_transformation(node.child())],
    )


def _parse_window(node: JavaObject) -> Node:
    assert node.children().size() == 1, node.children().size()

    # TODO: parse metadata

    return Node(
        type=NodeType.Window,
        metadata={},
        children=[parse_transformation(node.child())],
    )


def _parse_join(node: JavaObject) -> Node:
    # joins have two children because they combine 2 data frames into 1
    assert node.children().size() == 2, node.children().size()

    return Node(
        type=NodeType.Join,
        metadata={"condition": node.condition().toString(), "join_type": node.joinType().toString()},
        children=[
            parse_transformation(child) for child in iterate_java_object(node.children())
        ],
    )


def iterate_java_object(iterable: JavaObject):
    it = iterable.iterator()
    while it.hasNext():
        yield it.next()
