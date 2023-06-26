import os
import shutil
import json
import dataclasses

from .default_settings import DefaultSettings as DefaultSettings  # explicit re-export for mypy
from .plan_extractor import dag
from .plan_extractor.dag_builder import build_dag
from .plan_extractor.transformations_dag import TransformationColumn, TransformationNode, TransformationType

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
        return json.JSONEncoder.default(self, o)    


def dump_dataframe(df: DataFrame, output_dir: str, overwrite: bool, default_settings: DefaultSettings) -> None:
    """Create a visual representation of the given `dag` in HTML. The HTML
    files will be saved in the `output_dir` directory. If `overwrite` is
    True, the output directory will be deleted if it already exists."""

    tree = build_dag(df=df)
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


def _get_column_id(column: TransformationColumn) -> str:
    return f"{str(column.node_id)}->{str(column.id)}"


def _column_as_dict(column: TransformationColumn) -> Dict[str, object]:
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


def _transformation_as_dict(node: TransformationNode) -> Dict[str, object]:
    # map the Node.type to the type required by the HTML DAG renderer
    node_type_map = {
        TransformationType.Alias: 'Alias',
        TransformationType.Project: 'Project',
        TransformationType.Filter: 'Filter',
        TransformationType.LogicalRDD: 'Table',
        TransformationType.Generate: 'Transform',
        TransformationType.Aggregate: 'Group',
        TransformationType.Join: 'Join',
        TransformationType.Sort: 'Sort',
        TransformationType.Window: 'Window',
        TransformationType.Union: 'Union',
        TransformationType.Limit: 'Limit',
        TransformationType.Repartition: 'Repartition',
        TransformationType.Deduplicate: 'Deduplicate',
        TransformationType.Except: 'Except',
        TransformationType.Intersect: 'Intersect',
        TransformationType.Sample: 'Sample',
        TransformationType.Expand: 'Expand',
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


def _transformation_link_as_dict(data: dag.DFSNodeData, node: TransformationNode) -> Dict[str, object]:
    return {
        "id": f"{data.parent_id}-{node.id}",
        "source": str(data.parent_id),
        "target": str(node.id),
    }


def _column_link_as_dict(source_column: TransformationColumn, target_column: TransformationColumn) -> Dict[str, Any]:
    source = f"{str(source_column.node_id)}->{str(source_column.id)}"
    target = f"{str(target_column.node_id)}->{str(target_column.id)}"
    return {
        "id": f"({source})-({target})",
        "source": source,
        "target": target,
        "animated": True,
    }


def get_nodes_and_links(tree: TransformationNode) -> Tuple[List[Any], List[Any]]:
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
