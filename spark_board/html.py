import os
import shutil
import json
import dataclasses

from .plan_extractor import plan_parser, dag
from .plan_extractor.plan_parser import NodeType, NodeColumn
from pyspark.sql import DataFrame
from typing import Dict, Any, List, Tuple


# string template to build the JS file containing the graph definition as nodes
# and links objects required by the framework that will draw them
MODEL_FILE_TEMPLATE = """
const model_defaultSettings = {settings};

const model_initialNodes = {nodes};

const model_initialEdges = {links};
"""

class Encoder(json.JSONEncoder):
    def default(self, o: Any) -> Any:
        if isinstance(o, dag.Position):
            return {"x": o.x, "y": o.y}
        return json.JSONEncoder.default(self, o)    


@dataclasses.dataclass
class DefaultSettings:
    """Default settings for the HTML DAG renderer."""

    animationEnabled: bool = True
    animationEnabledOnDrag: bool = True


def dump_dataframe(df: DataFrame, output_dir: str, overwrite: bool, default_settings: DefaultSettings) -> None:
    """Create a visual representation of the given `dag` in HTML. The HTML
    files will be saved in the `output_dir` directory. If `overwrite` is
    True, the output directory will be deleted if it already exists."""

    tree = plan_parser.build_tree(df=df)
    nodes, links = get_nodes_and_links(tree)

    model_file = MODEL_FILE_TEMPLATE.format(
        nodes=json.dumps(nodes, indent=4, cls=Encoder),
        links=json.dumps(links, indent=4),
        settings=json.dumps(dataclasses.asdict(default_settings), indent=4),
    )

    if overwrite and os.path.exists(output_dir):
        shutil.rmtree(output_dir)

    # copy the ui directory to the output directory
    here = os.path.dirname(__file__)
    shutil.copytree(os.path.join(here, "ui"), output_dir)

    # create the output file with the model data
    with open(os.path.join(output_dir, "model.js"), "w") as fp:
        fp.write(model_file)


def _get_column_id(column: plan_parser.NodeColumn) -> str:
    return f"{str(column.node_id)}->{str(column.id)}"


def _column_as_dict(column: plan_parser.NodeColumn) -> Dict[str, object]:
    return {
        "id": _get_column_id(column),
        "type": "column",
        "parentNode": str(column.node_id),
        "extent": "parent",
        "expandParent": True,
        "data": {
            "id": column.id,
            "name": column.name,
            "type": column.type,
            "tree_string": column.tree_string,
            "linked_columns": [_get_column_id(link) for link in column.links]
        },
    } 


def _transformation_as_dict(node: plan_parser.Node) -> Dict[str, object]:
    # map the Node.type to the type required by the HTML DAG renderer
    node_type_map = {
        NodeType.Project: 'Project',
        NodeType.Filter: 'Filter',
        NodeType.LogicalRDD: 'Table',
        NodeType.Generate: 'Transform',
        NodeType.Aggregate: 'Group',
        NodeType.Join: 'Join',
        NodeType.Sort: 'Sort',
        NodeType.Window: 'Window',
        NodeType.Union: 'Union',
        NodeType.Limit: 'Limit',
    }

    return {
        # each node must have a unique ID
        "id": str(node.id),
        # the type of the node for react-flow to use the correct component
        "type": "transformation",
        # data passed to the node upon creation
        "data": {
            # store the transformation type
            "type": node_type_map[node.type],
            # label to display in the node
            "label": node_type_map[node.type],
            # Metadata depending on node type
            **node.metadata,
            "columns": [_column_as_dict(column) for column in node.columns.values()],
        },
    }


def _transformation_link_as_dict(data: dag.DFSNodeData, node: plan_parser.Node) -> Dict[str, object]:
    return {
        "id": f"{data.parent_id}-{node.id}",
        "source": str(data.parent_id),
        "target": str(node.id),
    }


def _column_link_as_dict(source_column: NodeColumn, target_column: NodeColumn) -> Dict[str, Any]:
    source = f"{str(source_column.node_id)}->{str(source_column.id)}"
    target = f"{str(target_column.node_id)}->{str(target_column.id)}"
    return {
        "id": f"({source})-({target})",
        "source": source,
        "target": target,
        "animated": True,
    }


def get_nodes_and_links(tree: plan_parser.Node) -> Tuple[List[Any], List[Any]]:
    """Convert the tree into a list of nodes and links for the HTML DAG."""

    transformation_nodes, transformation_links, column_nodes, column_links = [], [], [], []
    for data, node in dag.dfs(tree):
        transformation_nodes.append(_transformation_as_dict(node))
        # if the parent is None, it means we are at the root of the tree
        if data.parent_id is not None:
            transformation_links.append(_transformation_link_as_dict(data, node))

        for column in node.columns.values():
            column_nodes.append(_column_as_dict(column))
            for link in column.links:
                column_links.append(_column_link_as_dict(column, link))

    return transformation_nodes + column_nodes, transformation_links + column_links
