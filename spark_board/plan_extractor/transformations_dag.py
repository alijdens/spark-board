import enum, dataclasses
from typing import List, Dict, Any, Generator, Optional


class TransformationType(enum.Enum):
    Alias = "alias"
    Project = "project"
    Filter = "filter"
    Join = "join"
    Source = "source"
    LogicalRDD = "logical_rdd"
    Relation = "relation"
    Generate = "generate"
    Aggregate = "aggregate"
    Window = "window"
    Sort = "sort"
    Union = "union"
    Limit = "limit"
    Repartition = "repartition"
    Deduplicate = "deduplicate"
    Except = "except"
    Intersect = "intersect"
    Sample = "sample"
    Expand = "expand"
    Unknown = "unknown"


Metadata = Dict[str, Any]


@dataclasses.dataclass
class TransformationColumn(object):
    name: str
    id: int
    type: str
    node_id: Optional[int]
    tree_string: str

    # List of the columns in previous nodes which form this column. This can be used
    # to navigate recursively until the data sources and discover its origins.
    links: List['TransformationColumn']


@dataclasses.dataclass
class TransformationNode:
    type: TransformationType
    metadata: Metadata  # TODO: make it more transformation-type specific
    children: List['TransformationNode']
    columns: Dict[int, TransformationColumn]

    @property
    def id(self) -> int:
        return id(self)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, TransformationNode):
            return False

        return self.type == other.type and self.metadata == other.metadata and self.children == other.children

    def __hash__(self) -> int:
        return hash(id(self))

    def pprint(self, indent: int = 0) -> None:
        """Prints a human readable representation of the tree."""

        print("  " * indent + f"{self.type.name} {self.metadata}")
        for child in self.children:
            child.pprint(indent=indent + 1)


@dataclasses.dataclass
class JoinCondition:
    # SQL string representation of the condition.
    sql_str: str
    # Tree string representation of the condition.
    tree_string: str
    # The join condition is an equality of two columns with the same
    # name, or a conjunction of such equalities.
    # For example: 
    # - a = a -> True
    # - a > a -> False
    # - a = a AND b = b -> True
    # - a1 = a2 AND b1 = b2 -> False
    is_equi_join: bool
    # If is_equi_join is True, this dictionary contains a mapping from 
    # the names of the columns (used in the equi join condition), to the
    # column ids. Otherwise, this is an empty dictionary
    equi_join_columns: Dict[str, List[int]]
