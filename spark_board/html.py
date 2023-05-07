import os
import shutil
import json

from .plan_extractor import plan_parser, dag
from .plan_extractor.plan_parser import NodeType
from pyspark.sql import DataFrame


# string template to build the JS file containing the graph definition as nodes
# and links objects required by the framework that will draw them
MODEL_FILE_TEMPLATE = """
const model_initialNodes = {nodes};

const model_initialEdges = {links};
"""

class Encoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, dag.Position):
            return {"x": o.x, "y": o.y}
        return json.JSONEncoder.default(self, o)    


def dump_dataframe(df: DataFrame, output_dir: str, overwrite: bool) -> None:
    """Create a visual representation of the given `dag` in HTML. The HTML
    files will be saved in the `output_dir` directory. If `overwrite` is
    True, the output directory will be deleted if it already exists."""

    tree = plan_parser.build_tree(df=df)
    nodes, links = get_nodes_and_links(tree)

    model_file = MODEL_FILE_TEMPLATE.format(
        nodes=json.dumps(nodes, indent=4, cls=Encoder),
        links=json.dumps(links, indent=4),
    )

    if overwrite and os.path.exists(output_dir):
        shutil.rmtree(output_dir)

    # copy the ui directory to the output directory
    here = os.path.dirname(__file__)
    shutil.copytree(os.path.join(here, "ui"), output_dir)

    # create the output file with the model data
    with open(os.path.join(output_dir, "model.js"), "w") as fp:
        fp.write(model_file)


def get_nodes_and_links(tree: plan_parser.Node):
    """Convert the tree into a list of nodes and links for the HTML DAG."""

    # map the Node.type to the type required by the HTML DAG renderer
    node_type_map = {
        NodeType.Project: 'Project',
        NodeType.Filter: 'Filter',
        NodeType.LogicalRDD: 'Table',
        NodeType.Generate: 'Transform',
        NodeType.Aggregate: 'Group',
        NodeType.Join: 'Join',
        NodeType.Sort: 'Sort',
    }

    positions = dag.build_layout(tree)

    nodes, links = [], []
    for data, node in dag.dfs(tree):
        nodes.append({
            # each node must have a unique ID
            "id": str(data.node_id),
            # the type of the node for react-flow to use the correct component
            "type": "transformation",
            # data passed to the node upon creation
            "data": {
                # store the transformation type
                "type": node_type_map[node.type],
                # label to display in the node
                "label": node_type_map[node.type],
                # SQL schema of the transformation
                "schema_string": node.metadata["schema_string"],
            },
            "position": positions[node],
        })

        # if the parent is None, it means we are at the root of the tree
        if data.parent_id is not None:
            links.append({
                "id": f"{data.parent_id}-{data.node_id}",
                "source": str(data.parent_id),
                "target": str(data.node_id),
            })

    return nodes, links
