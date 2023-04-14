import os
import json

from .plan_extractor import plan_parser
from .plan_extractor.plan_parser import NodeType
from pyspark.sql import DataFrame


def dump_dataframe(df: DataFrame) -> None:
    tree = plan_parser.build_tree(df=df)

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

    here = os.path.dirname(__file__)
    with open(os.path.join(here, 'template.html')) as fp:
        template = fp.read()

    template = template.replace('<<< NODES >>>', json.dumps(nodes))
    template = template.replace('<<< LINKS >>>', json.dumps(links))

    with open(os.path.join('out.html'), 'w') as fp:
        fp.write(template)
