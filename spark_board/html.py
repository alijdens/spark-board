import os
import shutil
import json

from .plan_extractor import plan_parser
from .plan_extractor.plan_parser import NodeType
from pyspark.sql import DataFrame


def dump_dataframe(df: DataFrame, output_dir: str, overwrite: bool) -> None:
    """Create a visual representation of the given `dag` in HTML. The HTML
    files will be saved in the `output_dir` directory. If `overwrite` is
    True, the output directory will be deleted if it already exists."""

    tree = plan_parser.build_tree(df=df)
    nodes, links = get_nodes_and_links(tree)

    # open the index.html template to later replace the nodes and links
    # in the placeholders
    here = os.path.dirname(__file__)
    with open(os.path.join(here, "ui", "index.html")) as fp:
        template = fp.read()

    # replace the placeholders with the actual data
    template = template.replace('"<<< NODES >>>"', json.dumps(nodes))
    template = template.replace('"<<< LINKS >>>"', json.dumps(links))

    if overwrite and os.path.exists(output_dir):
        shutil.rmtree(output_dir)

    # copy the ui directory to the output directory
    shutil.copytree(os.path.join(here, "ui"), output_dir)

    # save the new index.html in the output directory but with the data
    # replaced
    with open(os.path.join(output_dir, "index.html"), 'w') as fp:
        fp.write(template)


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

    nodes, links = [], []
    for node_id, parent_id, node in tree.dfs():
        nodes.append({
            "key": node_id,
            "type": node_type_map[node.type],
            "name": node.type.value,
            "schema_string": node.metadata["schema_string"]})

        # if the parent is None, it means we are at the root of the tree
        if parent_id is not None:
            links.append({"from": node_id, "frompid": "OUT", "to": parent_id, "topid": "L"})

    return nodes, links
