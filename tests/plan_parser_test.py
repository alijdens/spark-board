# -*- coding: utf-8 -*-

from .context import spark, StructType, StructField, StringType, F, Window
from plan_extractor.plan_parser import build_tree, Node, NodeType
from typing import List

import unittest


class PlanParserTestSuite(unittest.TestCase):
    """Plan parser test cases."""

    def test_select_and_two_filters(self):
        df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        df = df.filter(df.age > 18)
        df = df.filter(df.city == "CABA")
        df = df.select("name", "age", df.dni.alias("user DNI"))

        project = build_tree(df)
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

        project = build_tree(df)
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

        aggregate = build_tree(df)
        self._expect_aggregate(node=aggregate,
                               expected_aggregate_expressions=['city', 'sum(children) AS total_children', 'avg(height) AS avg_height'],
                               expected_grouping_expressions=['avg(height) AS avg_height'])


    def test_join(self):
        people = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        cities = spark.createDataFrame([], schema="struct<city:string, zip_code:string, lat:float, lon:float>")

        people = people.filter(people.age > 18)
        people = people.filter(people.city == "CABA")

        df = people.join(cities, on=["city"])
        df = df.select("name", "age", "city", "zip_code")

        project = build_tree(df)
        self._expect_project(node=project, expected_column_names=['name', 'age', 'city', 'zip_code'])

        project = project.children[0]
        self._expect_project(node=project, expected_column_names=['city', 'dni', 'name', 'age', 'weight', 'zip_code', 'lat', 'lon'])

        inner_join = project.children[0]
        self._expect_join(node=inner_join,
                          expected_condition='Some((city#38 = city#44))',
                          expected_join_type='Inner')

        filter_by_city = inner_join.children[0]
        self._expect_filter(node=filter_by_city, expected_condition="(city = 'CABA')")

        filter_by_age = filter_by_city.children[0]
        self._expect_filter(node=filter_by_age, expected_condition="(age > 18)")

        people_rdd = filter_by_age.children[0]
        self._expect_rdd(node=people_rdd)

        cities_rdd = inner_join.children[1]
        self._expect_rdd(node=cities_rdd)


    def test_window(self):
        df = spark.createDataFrame([], schema="struct<revenue: float, date: string>")
        # create a 3 day rolling average of the revenue
        window = Window.partitionBy().orderBy(df.date).rowsBetween(-3, 0)
        df = df.withColumn("rolling_avg", F.avg(df.revenue).over(window))

        project = build_tree(df)
        self._expect_project(node=project, expected_column_names=['revenue', 'date', 'rolling_avg'])

        project = project.children[0]
        self._expect_project(node=project, expected_column_names=['revenue', 'date', 'rolling_avg', 'rolling_avg'])

        window = project.children[0]
        self._expect_window(node=window)

        project = window.children[0]
        self._expect_project(node=project, expected_column_names=['revenue', 'date'])

        rdd = project.children[0]
        self._expect_rdd(node=rdd)

    
    def test_with_column(self):
        df = spark.createDataFrame([], schema="struct<user:string, income:double, expenses:double>")

        df = df.withColumn("surplus", df.income - df.expenses)
        df = df.withColumn("savings", df.surplus / 2)
        df = df.withColumn("chocolate_money", df.surplus - df.savings)

        project = build_tree(df)
        self._expect_project(node=project, expected_column_names=['user', 'income', 'expenses', 'surplus', 'savings', 'surplus'])

        project = project.children[0]
        self._expect_project(node=project, expected_column_names=['user', 'income', 'expenses', 'surplus', 'surplus'])

        project = project.children[0]
        self._expect_project(node=project, expected_column_names=['user', 'income', 'expenses', 'income'])

        rdd = project.children[0]
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
        
        filter_metadata = node.metadata
        assert filter_metadata['condition'] == expected_condition

        assert len(node.children) == 1


    def _expect_rdd(self, node: Node):
        assert node.type == NodeType.LogicalRDD, f'Expected LogicalRDD node but "{node.type}" found'

        # TODO: assert metadata

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


    def _expect_join(self, node: Node, expected_condition, expected_join_type):
        assert node.type == NodeType.Join, f'Expected Join node but "{node.type}" found'

        join_metadata = node.metadata
        assert join_metadata['condition'] == expected_condition
        assert join_metadata['join_type'] == expected_join_type

        assert len(node.children) == 2


    def _expect_window(self, node: Node):
        assert node.type == NodeType.Window, f'Expected Window node but "{node.type}" found'
        
        # TODO: assert metadata

        assert len(node.children) == 1


if __name__ == '__main__':
    unittest.main()
