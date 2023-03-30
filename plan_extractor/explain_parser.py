import enum
import dataclasses
from typing import List, Optional, Dict, Callable, Union
from tree_sitter import Language, Parser, Tree, TreeCursor, Node as TSNode


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


def assert_node_type(walker: TreeCursor, expected: Union[str, List[str]]):
    if isinstance(expected, str):
        expected = [expected]

    if walker.node.has_error:
        find_error(walker.node)

    assert walker.node.type in expected, f"Expected {expected} but got {walker.node.type} ({walker.node.text})"


def find_error(node: TSNode, depth=0):
    print('  ' * depth, node, node.type, node.text, node.children)
    if (node.has_error or node.type == "ERROR") and node.child_count == 0:
        assert False, f"{node.type} ({node.text})"

    for child in node.children:
        find_error(child, depth=depth + 1)
            

class ExplainParser:
    def __init__(self):
        Language.build_library(
            # Store the library in the `build` directory
            'build/my-languages.so',

            # Include one or more languages
            [
                './tree-sitter-spark-explain'
            ]
        )

        PYSPARK_EXPLAIN_LANGUAGE = Language('build/my-languages.so', 'PYSPARK_EXPLAIN')
        self.parser = Parser()
        self.parser.set_language(PYSPARK_EXPLAIN_LANGUAGE)


    def parse(self, explain_str):
        return self.parser.parse(bytes(explain_str, "utf8"))

    def parse_graph(self, plan: str) -> Node:
        tree = self.parse(explain_str=plan)
        return self.build_graph(tree=tree)

    def build_graph(self, tree: Tree) -> Node:
        walker = tree.walk()

        # skip the first project that was added by the explain generator
        assert walker.goto_first_child()
        assert_node_type(walker, "'Project [*]\n")

        # there shouldn't be any children to this node
        assert not walker.goto_first_child()
        assert walker.goto_next_sibling()

        # now we should be at the last transformation (root)
        # recursively parse all the transformations building the DAG of nodes
        return self.parse_transformation(walker=walker)

    def parse_transformation(self, walker: TreeCursor) -> Node:
        assert_node_type(walker, "transformation")

        # go inside the transformation
        assert walker.goto_first_child()

        # functions that can walk each transformation sub-tree
        parsers: Dict[str, Callable[[TreeCursor], Node]] = {
            "project": self._parse_project,
            # "rdd": self._parse_rdd,
            "filter": self._parse_filter,
            # "relation": self._parse_relation,
            # "join": self._parse_join,
        }
        parse_func = parsers.get(walker.node.type)
        if not parse_func:
            raise NotImplementedError(f"Transformation not supported: {walker.node.type}")
        
        node = parse_func(walker)

        # assign parent to node children
        for child in node.children:
            child.parent = node

        return node

    def _parse_project(self, walker: TreeCursor):
        # check we are in the correct node
        assert_node_type(walker, "project")

        assert walker.goto_first_child()
        # now we should be in the projection Id that starts the definition
        assert_node_type(walker, "Project")

        # sibling nodes should be the selected columns
        assert walker.goto_next_sibling()
        assert_node_type(walker, "columns")

        # columns are a list of column definitions surrounded by "[]" and sepparated
        # by comma
        assert walker.goto_first_child()
        assert_node_type(walker, "[")
        assert walker.goto_next_sibling()

        columns = []
        while walker.node.type != "]":
            assert_node_type(walker, "column")
            assert walker.goto_first_child()
            assert_node_type(walker, "column_name")
            col_name = walker.node.text

            assert walker.goto_next_sibling()
            assert_node_type(walker, "#")  # col name/id separator

            assert walker.goto_next_sibling()
            assert_node_type(walker, "number")
            columns.append((col_name, walker.node.text))  # TODO: see if we can use the col number as key in dict

            # column may be renamed ("AS" clause)
            if walker.goto_next_sibling():
                assert_node_type(walker, " AS ")
                assert walker.goto_next_sibling()

                assert_node_type(walker, "column_name")
                col_name = walker.node.text

                assert walker.goto_next_sibling()
                assert_node_type(walker, "#")

                assert walker.goto_next_sibling()
                assert_node_type(walker, "number")

                columns.append((col_name, walker.node.text))
                assert not walker.goto_next_sibling()

            # return to the column list definition
            assert walker.goto_parent()

            # now we expect either a comma (for the next column) of the "]"
            assert walker.goto_next_sibling()
            if walker.node.type == ", ":
                # skip the comma separating the column definitions
                assert walker.goto_next_sibling()

        # after the columns we don't expect anything else in the column list
        assert not walker.goto_next_sibling()

        # return to the original node
        assert walker.goto_parent()  # return to "columns"
        assert walker.goto_parent()  # return to "project"
        assert not walker.goto_next_sibling()  # there shouldn't be anything else in the projection

        assert walker.goto_parent()  # return to "transformation"
        assert walker.goto_next_sibling()  # next "transformation"

        child = self.parse_transformation(walker=walker)
        return Node(type="project", metadata={"columns": columns}, children=[child])

    def _parse_filter(self, walker: TreeCursor) -> Node:
        # check we are in the correct node
        assert_node_type(walker, "filter")

        assert walker.goto_first_child()
        # now we should be in the filter Id that starts the definition
        assert_node_type(walker, "Filter")

        assert walker.goto_next_sibling()
        assert_node_type(walker, "condition")

        # sibling nodes should be the filter condition
        assert walker.goto_first_child()
        assert_node_type(walker, "(")

        # go to the first operand in the condition
        assert walker.goto_next_sibling()
        assert_node_type(walker, ["literal", "column"])
        left_op = walker.node.text

        # now we should get an operator
        assert walker.goto_next_sibling()
        assert_node_type(walker, "operator")
        op = walker.node.text

        assert walker.goto_next_sibling()
        assert_node_type(walker, ["literal", "column"])
        right_op = walker.node.text

        assert walker.goto_next_sibling()
        assert_node_type(walker, ")")

        assert walker.goto_parent()  # escape "condition"
        assert walker.goto_parent()  # escape "filter"

        child = self.parse_transformation(walker=walker)
        return Node(type="filter", metadata={"left_op": left_op, "op": op, "right_op": right_op}, children=[child])
