import enum
import dataclasses
from py4j.java_gateway import JavaObject
from pyspark.sql import DataFrame
from typing import List, Dict, Any, Generator


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
class NodeColumn(object):
    name: str
    id: int
    type: str
    node_id: int

    # List of the columns in previous nodes which form this column. This can be used
    # to navigate recursively until the data sources and discover its origins.
    links: List['NodeColumn']


Metadata = Dict[str, Any]


@dataclasses.dataclass
class Node:
    id: int
    type: NodeType
    metadata: Metadata  # TODO: make it more node-type specific
    children: List['Node']
    columns: Dict[int, NodeColumn]

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Node):
            return False

        return self.type == other.type and self.metadata == other.metadata and self.children == other.children

    def __hash__(self) -> int:
        return hash(id(self))

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


def build_tree(df: DataFrame) -> Node:
    first_child = _get_last_transformation(df)
    return parse_transformation(node=first_child)


def parse_transformation(node: JavaObject) -> Node:
    # objects that can parse each transformation sub-tree
    parsers: Dict[str, NodeParser] = {
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


def iterate_java_object(iterable: JavaObject) -> Generator[JavaObject, None, None]:
    it = iterable.iterator()
    while it.hasNext():
        yield it.next()


class NodeParser(object):

    def parse(self, java_node: JavaObject) -> Node:
        assert java_node.children().size() == self._expected_number_of_nodes(), java_node.children().size()

        metadata: Dict[str, str] = {}
        self._parse_common_metadata(java_node, metadata)
        self._parse_metadata(java_node, metadata)

        children = [parse_transformation(child) for child in iterate_java_object(java_node.children())]
        columns = self._parse_columns(java_node, children)

        return Node(
            id=id(self),
            type=self._get_type(),
            metadata=metadata,
            children=children,
            columns=columns
        )

    def _get_columns(self, java_node: JavaObject) -> JavaObject:
        return java_node.output()

    def _parse_columns(self, java_node: JavaObject, children: List[Node]) -> Dict[int, NodeColumn]:
        columns = {}
        for java_column in iterate_java_object(self._get_columns(java_node)):
            column_id = java_column.exprId().id()
            parsed_column = self._parse_column(java_column, children)
            columns[column_id] = parsed_column
        return columns

    def _parse_column(self, java_column: JavaObject, children: List[Node]) -> NodeColumn:
        if java_column.nodeName() not in ["Alias", "AttributeReference"]:
            raise NotImplementedError(f"Project column type not supported: {java_column.nodeName()}")

        column_name = java_column.name()
        column_id = java_column.exprId().id()
        data_type = java_column.dataType().simpleString()
        reference_ids = [reference.exprId().id() for reference in iterate_java_object(java_column.references())]

        # For each referenced column, search it in the children in order to add a link
        links = []
        for ref_id in reference_ids:
            for child in children:
                if ref_id in child.columns:
                    links.append(child.columns[ref_id])

        return NodeColumn(
            name=column_name,
            id=column_id,
            type=data_type,
            node_id=id(self),
            links=links
        )

    def _parse_common_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["schema_string"] = node.schemaString()

    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        pass

    def _get_type(self) -> NodeType:
        raise NotImplementedError("Abstract method")

    def _expected_number_of_nodes(self) -> int:
        raise NotImplementedError("Abstract method")


class ProjectParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: Something besides the columns?
        pass

    def _get_columns(self, node: JavaObject) -> JavaObject:
        return node.projectList()

    def _get_type(self) -> NodeType:
        return NodeType.Project

    def _expected_number_of_nodes(self) -> int:
        return 1


class FilterParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["condition"] = node.condition().sql()

    def _get_type(self) -> NodeType:
        return NodeType.Filter

    def _expected_number_of_nodes(self) -> int:
        return 1


class LogicalRDDParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: collect metadata about RDD columns
        pass

    def _get_type(self) -> NodeType:
        return NodeType.LogicalRDD

    def _expected_number_of_nodes(self) -> int:
        return 0


class JoinParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["condition"] = node.condition().toString()
        metadata["join_type"] = node.joinType().toString()

    def _get_type(self) -> NodeType:
        return NodeType.Join

    def _expected_number_of_nodes(self) -> int:
        return 2


class GenerateParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["generator"] = node.generator().sql()

    def _get_type(self) -> NodeType:
        return NodeType.Generate

    def _expected_number_of_nodes(self) -> int:
        return 1


class AggregateParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
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

    def _expected_number_of_nodes(self) -> int:
        return 1


class WindowParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        # TODO: parse metadata
        pass

    def _get_type(self) -> NodeType:
        return NodeType.Window

    def _expected_number_of_nodes(self) -> int:
        return 1


class SortParser(NodeParser):
    def _parse_metadata(self, node: JavaObject, metadata: Metadata) -> None:
        metadata["order"] = [c.sql() for c in iterate_java_object(node.order())]

    def _get_type(self) -> NodeType:
        return NodeType.Sort

    def _expected_number_of_nodes(self) -> int:
        return 1
