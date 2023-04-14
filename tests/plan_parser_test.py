# -*- coding: utf-8 -*-

from .context import spark, StructType, StructField, StringType, F, Window
from spark_board.plan_extractor.plan_parser import build_tree, Node, NodeType
from typing import List

import unittest


class PlanParserTestSuite(unittest.TestCase):
    """Plan parser test cases."""

    def test_select_and_two_filters(self):
        df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        df = df.filter(df.age > 18)
        df = df.filter(df.city == "CABA")
        df = df.select("name", "age", df.dni.alias("user DNI"))

        schema = ("root\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- user DNI: integer (nullable = true)\n")

        project = build_tree(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=["name", "age", "dni"])

        schema = ("root\n"
                  " |-- dni: integer (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- weight: float (nullable = true)\n"
                  " |-- city: string (nullable = true)\n")

        filter_by_city = project.children[0]
        self._expect_filter(node=filter_by_city, expected_schema=schema, expected_condition="(city = 'CABA')")

        filter_by_age = filter_by_city.children[0]
        self._expect_filter(node=filter_by_age, expected_schema=schema, expected_condition="(age > 18)")

        rdd = filter_by_age.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def test_explode(self):
        df = spark.createDataFrame([], schema="struct<user:string, cars:array<string>>")
        df = df.withColumn("car", F.explode(df.cars))

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- cars: array (nullable = true)\n"
                  " |    |-- element: string (containsNull = true)\n"
                  " |-- car: string (nullable = true)\n")

        project = build_tree(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'cars', 'car'])

        generate = project.children[0]
        self._expect_generate(node=generate, expected_schema=schema, expected_generator='explode(cars)')

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- cars: array (nullable = true)\n"
                  " |    |-- element: string (containsNull = true)\n")

        rdd = generate.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def test_group_by(self):
        df = spark.createDataFrame([], schema="struct<user:string, city:string, children:int, height:double>")
        df = df.groupBy("city").agg(
            F.sum(df.children).alias("total_children"),
            F.avg(df.height).alias("avg_height"),
        )

        aggregate = build_tree(df)

        schema = ("root\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- total_children: long (nullable = true)\n"
                  " |-- avg_height: double (nullable = true)\n")

        self._expect_aggregate(node=aggregate,
                               expected_schema=schema,
                               expected_aggregate_expressions=['city', 'sum(children) AS total_children', 'avg(height) AS avg_height'],
                               expected_grouping_expressions=['city'])


    def test_join(self):
        people = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        cities = spark.createDataFrame([], schema="struct<city:string, zip_code:string, lat:float, lon:float>")

        people = people.filter(people.age > 18)
        people = people.filter(people.city == "CABA")

        df = people.join(cities, on=["city"])
        df = df.select("name", "age", "city", "zip_code")

        schema = ("root\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- zip_code: string (nullable = true)\n")

        project = build_tree(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['name', 'age', 'city', 'zip_code'])

        schema = ("root\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- dni: integer (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- weight: float (nullable = true)\n"
                  " |-- zip_code: string (nullable = true)\n"
                  " |-- lat: float (nullable = true)\n"
                  " |-- lon: float (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['city', 'dni', 'name', 'age', 'weight', 'zip_code', 'lat', 'lon'])

        schema = ("root\n"
                  " |-- dni: integer (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- weight: float (nullable = true)\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- zip_code: string (nullable = true)\n"
                  " |-- lat: float (nullable = true)\n"
                  " |-- lon: float (nullable = true)\n")

        inner_join = project.children[0]
        self._expect_join(node=inner_join,
                          expected_schema=schema,
                          expected_condition='Some((city#38 = city#44))',
                          expected_join_type='Inner')

        schema = ("root\n"
                  " |-- dni: integer (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- weight: float (nullable = true)\n"
                  " |-- city: string (nullable = true)\n")

        filter_by_city = inner_join.children[0]
        self._expect_filter(node=filter_by_city, expected_schema=schema, expected_condition="(city = 'CABA')")

        filter_by_age = filter_by_city.children[0]
        self._expect_filter(node=filter_by_age, expected_schema=schema, expected_condition="(age > 18)")

        people_rdd = filter_by_age.children[0]
        self._expect_rdd(node=people_rdd, expected_schema=schema)

        schema = ("root\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- zip_code: string (nullable = true)\n"
                  " |-- lat: float (nullable = true)\n"
                  " |-- lon: float (nullable = true)\n")

        cities_rdd = inner_join.children[1]
        self._expect_rdd(node=cities_rdd, expected_schema=schema)


    def test_window(self):
        df = spark.createDataFrame([], schema="struct<revenue: float, date: string>")
        # create a 3 day rolling average of the revenue
        window = Window.partitionBy().orderBy(df.date).rowsBetween(-3, 0)
        df = df.withColumn("rolling_avg", F.avg(df.revenue).over(window))

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n")

        project = build_tree(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['revenue', 'date', 'rolling_avg'])

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['revenue', 'date', 'rolling_avg', 'rolling_avg'])

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n")

        window = project.children[0]
        self._expect_window(node=window, expected_schema=schema)

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n")

        project = window.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['revenue', 'date'])

        rdd = project.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def test_with_column(self):
        df = spark.createDataFrame([], schema="struct<user:string, income:double, expenses:double>")

        df = df.withColumn("surplus", df.income - df.expenses)
        df = df.withColumn("savings", df.surplus / 2)
        df = df.withColumn("chocolate_money", df.surplus - df.savings)

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n"
                  " |-- surplus: double (nullable = true)\n"
                  " |-- savings: double (nullable = true)\n"
                  " |-- chocolate_money: double (nullable = true)\n")

        project = build_tree(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'income', 'expenses', 'surplus', 'savings', 'surplus'])

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n"
                  " |-- surplus: double (nullable = true)\n"
                  " |-- savings: double (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'income', 'expenses', 'surplus', 'surplus'])

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n"
                  " |-- surplus: double (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'income', 'expenses', 'income'])

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n")

        rdd = project.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def test_order_by(self):
        df = spark.createDataFrame([], schema="struct<user:string, income:double, expenses:double>")
        df = df.orderBy(df.income, df.expenses.desc())
        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n")

        sort = build_tree(df)
        self._expect_sort(node=sort, expected_schema=schema, expected_order=['income ASC NULLS FIRST', 'expenses DESC NULLS LAST'])

        rdd = sort.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def _expect_project(self, node: Node, expected_schema: str, expected_column_names: List):
        assert node.type == NodeType.Project, f'Expected Project node but "{node.type}" found'

        found_columns = node.metadata['columns']
        found_col_names = [col['name'] for col in found_columns]
        assert expected_column_names == found_col_names
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_filter(self, node: Node, expected_schema: str, expected_condition):
        assert node.type == NodeType.Filter, f'Expected Filter node but "{node.type}" found'
        
        assert node.metadata['condition'] == expected_condition
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_rdd(self, node: Node, expected_schema: str):
        assert node.type == NodeType.LogicalRDD, f'Expected LogicalRDD node but "{node.type}" found'

        # TODO: assert metadata
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 0


    def _expect_generate(self, node: Node, expected_schema: str, expected_generator):
        assert node.type == NodeType.Generate, f'Expected Generate node but "{node.type}" found'

        assert node.metadata['generator'] == expected_generator
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_aggregate(self, node: Node, expected_schema: str, expected_aggregate_expressions: List, expected_grouping_expressions: List):
        assert node.type == NodeType.Aggregate, f'Expected Aggregate node but "{node.type}" found'

        assert node.metadata['aggregate_expressions'] == expected_aggregate_expressions
        assert node.metadata['grouping_expressions'] == expected_grouping_expressions
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_join(self, node: Node, expected_schema: str, expected_condition, expected_join_type):
        assert node.type == NodeType.Join, f'Expected Join node but "{node.type}" found'

        assert node.metadata['condition'] == expected_condition
        assert node.metadata['join_type'] == expected_join_type
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 2


    def _expect_window(self, node: Node, expected_schema: str):
        assert node.type == NodeType.Window, f'Expected Window node but "{node.type}" found'
        
        # TODO: assert metadata
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_sort(self, node: Node, expected_schema: str, expected_order: List):
        assert node.type == NodeType.Sort, f'Expected Sort node but "{node.type}" found'
        
        assert node.metadata['order'] == expected_order
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


if __name__ == '__main__':
    unittest.main()
