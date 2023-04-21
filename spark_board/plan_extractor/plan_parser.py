import enum
import dataclasses
from py4j.java_gateway import JavaObject
from pyspark.sql import DataFrame
from typing import List, Dict, Callable, Generator, Tuple, Optional


class NodeType(enum.Enum):
    Project = "project"
    Filter = "filter"
    Join = "join"
    Source = "source"
    LogicalRDD = "logical_rdd"
    Generate = "generate"
    Aggregate = "aggregate"
    Window = "window"
    Sort = "sort"


@dataclasses.dataclass
class Node:
    type: NodeType
    metadata: dict  # TODO: make it more type specific
    children: List['Node']
    columns: Dict

    def pprint(self, indent: int = 0) -> None:
        """Prints a human readable representation of the tree."""

        print("  " * indent + f"{self.type.name} {self.metadata}")
        for child in self.children:
            child.pprint(indent=indent + 1)

    def dfs(self) -> Generator[Tuple[int, Optional[int], 'Node'], None, None]:
        """Returns a generator that iterates over the tree in depth-first order.
        Each element yielded by the generator is a tuple of (node_id, parent_id, node).
        The `node_id` is a unique identifier of the node, `parent_id` is the identifier
        of the parent node, and `node` is the node itself.
        Note that, for the root node only, the `parent_id` is None."""

        # counter to assign a unique identifier to each node
        next_node_id = 0
        parents, nodes = {next_node_id: None}, {next_node_id: self}
        stack = [next_node_id]

        while stack:
            node_id = stack.pop()

            # yield the node ID, its parent ID, and the node itself
            yield node_id, parents[node_id], nodes[node_id]

            # push all children to the stack in order to iterate them later
            # we assume this is a tree, so no cycles should happen here
            for child in nodes[node_id].children:
                next_node_id += 1
                nodes[next_node_id] = child
                parents[next_node_id] = node_id
                stack.append(next_node_id)


def _get_last_transformation(df: DataFrame) -> JavaObject:
    # we add a dummy projection of all columns to Spark resolves the next
    # transformations in the plan. Otherwise, the columns will be "unresolved"
    df = df.select("*")
    root = df._jdf.queryExecution().logical()

    # skip the 'Project [*]' node
    return next(iterate_java_object(root.children()))


def build_tree(df: DataFrame) -> Node:
    first_child = _get_last_transformation(df)
    return parse_transformation(node=first_child)


def parse_transformation(node: JavaObject) -> Node:
    # objects that can parse each transformation sub-tree
    parsers: Dict[str, Callable[[JavaObject], Node]] = {
        "Project": ProjectParser(),
        "Filter": FilterParser(),
        "LogicalRDD": LogicalRDDParser(),
        "Join": JoinParser(),
        "Generate": GenerateParser(),
        "Aggregate": AggregateParser(),
        "Window": WindowParser(),
        "Sort": SortParser(),
        # "relation": RelationParser(),
    }
    parser = parsers.get(node.nodeName())
    if not parser:
        raise NotImplementedError(f"Transformation not supported: '{node.nodeName()}'")

    return parser.parse(node)


def iterate_java_object(iterable: JavaObject):
    it = iterable.iterator()
    while it.hasNext():
        yield it.next()


class NodeParser(object):
    def parse(self, node: JavaObject) -> Node:
        assert node.children().size() == self._expected_number_of_nodes(), node.children().size()

        metadata = {}
        self._parse_common_metadata(node, metadata)
        self._parse_metadata(node, metadata)

        children = [parse_transformation(child) for child in iterate_java_object(node.children())]
        columns = self._parse_columns(node, children)

        return Node(
            type=self._get_type(),
            metadata=metadata,
            children=children,
            columns=columns
        )

    def _get_columns(self, node: JavaObject) -> JavaObject:
        return node.output()

    def _parse_columns(self, node: JavaObject, children: List) -> Dict:
        columns = {}
        for col in iterate_java_object(self._get_columns(node)):
            ref_id = col.exprId().id()

            parsed_column = self._parse_column(col, children)
            columns[ref_id] = parsed_column
        return columns

    def _parse_column(self, col: JavaObject, children: List) -> Dict:
        if col.nodeName() not in ["Alias", "AttributeReference"]:
            raise NotImplementedError(f"Project column type not supported: {col.nodeName()}")

        col_name, col_id = col.name(), col.exprId().id()
        references = [reference.exprId().id() for reference in iterate_java_object(col.references())]
        links = []
        for ref_id in references:
            for child in children:
                if ref_id in child.columns:
                    links.append(child.columns[ref_id])
        return {
            "name": col_name,
            "id": col_id,
            "type": col.dataType().simpleString(),
            "links": links
        }

    def _parse_common_metadata(self, node: JavaObject, metadata: Dict):
        metadata["schema_string"] = node.schemaString()

    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        pass

    def _get_type(self) -> NodeType:
        raise NotImplementedError("Abstract method")

    def _expected_number_of_nodes(self):
        raise NotImplementedError("Abstract method")


class ProjectParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        # TODO: Something besides the columns?
        pass

    def _get_columns(self, node: JavaObject) -> JavaObject:
        return node.projectList()

    def _get_type(self) -> NodeType:
        return NodeType.Project

    def _expected_number_of_nodes(self):
        return 1


class FilterParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        metadata["condition"] = node.condition().sql()

    def _get_type(self) -> NodeType:
        return NodeType.Filter

    def _expected_number_of_nodes(self):
        return 1


class LogicalRDDParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        # TODO: collect metadata about RDD columns
        pass

    def _get_type(self) -> NodeType:
        return NodeType.LogicalRDD

    def _expected_number_of_nodes(self):
        return 0


class JoinParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        metadata["condition"] = node.condition().toString()
        metadata["join_type"] = node.joinType().toString()

    def _get_type(self) -> NodeType:
        return NodeType.Join

    def _expected_number_of_nodes(self):
        return 2


class GenerateParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        metadata["generator"] = node.generator().sql()

    def _get_type(self) -> NodeType:
        return NodeType.Generate

    def _expected_number_of_nodes(self):
        return 1


class AggregateParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        aggregate_expressions = []
        for aggregate_expression in iterate_java_object(node.aggregateExpressions()):
            aggregate_expressions.append(aggregate_expression.sql())

        grouping_expressions = []
        for grouping_expression in iterate_java_object(node.groupingExpressions()):
            grouping_expressions.append(grouping_expression.sql())

        metadata['aggregate_expressions'] = aggregate_expressions
        metadata['grouping_expressions'] = grouping_expressions

    def _get_type(self) -> NodeType:
        return NodeType.Aggregate

    def _expected_number_of_nodes(self):
        return 1


class WindowParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        # TODO: parse metadata
        pass

    def _get_type(self) -> NodeType:
        return NodeType.Window

    def _expected_number_of_nodes(self):
        return 1


class SortParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Dict):
        metadata["order"] = [c.sql() for c in iterate_java_object(node.order())]

    def _get_type(self) -> NodeType:
        return NodeType.Sort

    def _expected_number_of_nodes(self):
        return 1
