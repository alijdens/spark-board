# -*- coding: utf-8 -*-

from .context import spark, StructType, StructField, StringType
from plan_extractor.explain_parser import build_graph, Node, NodeType
from typing import List

import unittest

class PlanParserTestSuite(unittest.TestCase):
    """Plan parser test cases."""

    def test_plan_parser(self):
        df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        df = df.filter(df.age > 18)
        df = df.filter(df.city == "CABA")
        df = df.select("name", "age", df.dni.alias("user DNI"))

        project = build_graph(df)
        self._expect_project(node=project, expected_column_names=["name", "age", "dni"])

        filter_by_city = project.children[0]
        self._expect_filter(node=filter_by_city, expected_condition="city == CABA")

        filter_by_age = filter_by_city.children[0]
        self._expect_filter(node=filter_by_age, expected_condition="age > 18")

        rdd = filter_by_age.children[0]
        self._expect_rdd(node=rdd)


    def _expect_project(self, node: Node, expected_column_names: List):
        assert node.type == NodeType.Project, f'Expected Project node but "{node.type}" found'

        project_metadata = node.metadata
        found_columns = project_metadata['columns']
        found_col_names = [col['name'] for col in found_columns]
        assert expected_column_names == found_col_names

        assert len(node.children) == 1


    def _expect_filter(self, node: Node, expected_condition):
        assert node.type == NodeType.Filter, f'Expected Filter node but "{node.type}" found'
        assert len(node.children) == 1


    def _expect_rdd(self, node: Node):
        assert node.type == NodeType.LogicalRDD, f'Expected LogicalRDD node but "{node.type}" found'
        assert len(node.children) == 0


if __name__ == '__main__':
    unittest.main()
