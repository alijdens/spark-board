import os
import json

from pyspark.sql import DataFrame
from plan_extractor.extractor import PlanExtractor


def dump_dataframe(df:DataFrame) -> None:
    extractor = PlanExtractor(df=df)
    tree = extractor.extract()

    walker = tree.walk()
    assert walker.goto_first_child()
    assert walker.node.type == "'Project [*]\n"

    assert not walker.goto_first_child()
    assert walker.goto_next_sibling()

    i = 1
    nodes, links = [], []
    while walker.node.type == 'transformation':
        assert walker.goto_first_child()

        # skip prefix
        assert walker.goto_next_sibling()

        if walker.node.type == 'project':
            nodes.append({"key": i, "type": "Project", "name": "Project"})
        elif walker.node.type == 'rdd':
            nodes.append({"key": i, "type": "Table", "name": "RDD"})
        elif walker.node.type == 'filter':
            nodes.append({"key": i, "type": "Filter", "name": "Filter"})
        elif walker.node.type == 'relation':
            nodes.append({"key": i, "type": "Table", "name": "Table"})

        assert not walker.goto_next_sibling()
        assert walker.goto_parent()

        if walker.goto_next_sibling():
            links.append({"from": i + 1, "frompid":"OUT", "to": i, "topid":"L"})
        else:
            break

        i += 1

    here = os.path.dirname(__file__)
    with open(os.path.join(here, 'template.html')) as fp:
        template = fp.read()

    template = template.replace('<<< NODES >>>', json.dumps(nodes))
    template = template.replace('<<< LINKS >>>', json.dumps(links))

    with open(os.path.join('out.html'), 'w') as fp:
        fp.write(template)
