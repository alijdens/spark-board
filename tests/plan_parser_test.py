# -*- coding: utf-8 -*-

from .context import spark, StructType, StructField, StringType, F
from plan_extractor.explain_parser import build_graph, Node, NodeType
from typing import List

import unittest


class PlanParserTestSuite(unittest.TestCase):
    """Plan parser test cases."""

    def test_select_and_two_filters(self):
        df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        df = df.filter(df.age > 18)
        df = df.filter(df.city == "CABA")
        df = df.select("name", "age", df.dni.alias("user DNI"))

        project = build_graph(df)
        self._expect_project(node=project, expected_column_names=["name", "age", "dni"])

        filter_by_city = project.children[0]
        self._expect_filter(node=filter_by_city, expected_condition="(city = 'CABA')")

        filter_by_age = filter_by_city.children[0]
        self._expect_filter(node=filter_by_age, expected_condition="(age > 18)")

        rdd = filter_by_age.children[0]
        self._expect_rdd(node=rdd)


    def test_explode(self):
        df = spark.createDataFrame([], schema="struct<user:string, cars:array<string>>")
        df = df.withColumn("car", F.explode(df.cars))

        project = build_graph(df)
        self._expect_project(node=project, expected_column_names=['user', 'cars', 'car'])

        generate = project.children[0]
        self._expect_generate(node=generate, expected_generator='explode(cars)')

        rdd = generate.children[0]
        self._expect_rdd(node=rdd)


    def test_group_by(self):
        df = spark.createDataFrame([], schema="struct<user:string, city:string, children:int, height:double>")
        df = df.groupBy("city").agg(
            F.sum(df.children).alias("total_children"),
            F.avg(df.height).alias("avg_height"),
        )

        aggregate = build_graph(df)
        self._expect_aggregate(node=aggregate,
                               expected_aggregate_expressions=['city', 'sum(children) AS total_children', 'avg(height) AS avg_height'],
                               expected_grouping_expressions=['avg(height) AS avg_height'])


    def _expect_project(self, node: Node, expected_column_names: List):
        assert node.type == NodeType.Project, f'Expected Project node but "{node.type}" found'

        project_metadata = node.metadata
        found_columns = project_metadata['columns']
        found_col_names = [col['name'] for col in found_columns]
        assert expected_column_names == found_col_names

        assert len(node.children) == 1


    def _expect_filter(self, node: Node, expected_condition):
        assert node.type == NodeType.Filter, f'Expected Filter node but "{node.type}" found'
        
        filter_metadata = node.metadata
        assert filter_metadata['condition'] == expected_condition

        assert len(node.children) == 1


    def _expect_rdd(self, node: Node):
        assert node.type == NodeType.LogicalRDD, f'Expected LogicalRDD node but "{node.type}" found'
        assert len(node.children) == 0


    def _expect_generate(self, node: Node, expected_generator):
        assert node.type == NodeType.Generate, f'Expected Generate node but "{node.type}" found'

        generate_metadata = node.metadata
        assert generate_metadata['generator'] == expected_generator

        assert len(node.children) == 1


    def _expect_aggregate(self, node: Node, expected_aggregate_expressions: List, expected_grouping_expressions: List):
        assert node.type == NodeType.Aggregate, f'Expected Aggregate node but "{node.type}" found'

        aggregate_metadata = node.metadata
        assert aggregate_metadata['aggregate_expressions'] == expected_aggregate_expressions
        assert aggregate_metadata['grouping_expressions'] == expected_grouping_expressions

        assert len(node.children) == 1


if __name__ == '__main__':
    unittest.main()
