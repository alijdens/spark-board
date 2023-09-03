# -*- coding: utf-8 -*-

from pyspark.context import SparkContext
from pyspark.sql.session import SparkSession
from pyspark.sql.types import StructType, StructField, StringType
from pyspark.sql import functions as F
from pyspark.sql.window import Window
from typing import Any, Dict, List

from tests.context import spark

from spark_board.plan_extractor.dag_builder import build_dag
from spark_board.plan_extractor.dag_simplification import default_simplifiers
from spark_board.plan_extractor.transformations_dag import TransformationNode, TransformationType

import unittest


class DagBuilderUnitTestSuite(unittest.TestCase):
    """DAG builder test cases."""

    def test_select_and_two_filters(self) -> None:
        df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
        df = df.filter(df.age > 18)
        df = df.filter(df.city == "CABA")
        df = df.select("name", "age", df.dni.alias("user DNI"))

        schema = ("root\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- age: integer (nullable = true)\n"
                  " |-- user DNI: integer (nullable = true)\n")

        project = build_dag(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=["name", "age", "user DNI"])

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


    def test_explode(self) -> None:
        df = spark.createDataFrame([], schema="struct<user:string, cars:array<string>>")
        df = df.withColumn("car", F.explode(df.cars))

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- cars: array (nullable = true)\n"
                  " |    |-- element: string (containsNull = true)\n"
                  " |-- car: string (nullable = true)\n")

        project = build_dag(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'cars', 'car'])

        generate = project.children[0]
        self._expect_generate(node=generate, expected_schema=schema, expected_generator='explode(cars)')

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- cars: array (nullable = true)\n"
                  " |    |-- element: string (containsNull = true)\n")

        rdd = generate.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def test_group_by(self) -> None:
        df = spark.createDataFrame([], schema="struct<user:string, city:string, children:int, height:double>")
        df = df.groupBy("city").agg(
            F.sum(df.children).alias("total_children"),
            F.avg(df.height).alias("avg_height"),
        )

        aggregate = build_dag(df)

        schema = ("root\n"
                  " |-- city: string (nullable = true)\n"
                  " |-- total_children: long (nullable = true)\n"
                  " |-- avg_height: double (nullable = true)\n")

        self._expect_aggregate(node=aggregate,
                               expected_schema=schema,
                               expected_aggregate_expressions=['city', 'sum(children) AS total_children', 'avg(height) AS avg_height'],
                               expected_grouping_expressions=['city'],
                               expected_grouping_column='city')


    def test_join(self) -> None:
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

        project = build_dag(df)
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

        inner_join = project.children[0]
        self._expect_join(node=inner_join,
                          expected_schema=schema,
                          expected_condition='(city = city)',
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

    def test_data_source_not_simplified(self) -> None:
        # convert into table
        spark.createDataFrame([], schema="struct<dni:int, name:string>").write.saveAsTable("table")
        
        df = spark.table("table")
        dag = build_dag(df=df, dag_simplifiers=[])

        # TODO: it seems that tables generate 2 nodes: an "Alias" and the "DataSource"
        #       we could drop the alias in the final DAG because it's redundant
        assert dag.type == TransformationType.Alias

        assert len(dag.children) == 1

        table = dag.children[0]

        assert table.type == TransformationType.Relation
        assert table.children == []
        assert table.metadata["table"] == "table"
        spark.sql(f"drop table table")

    def test_data_source_simplified(self) -> None:
        # convert into table
        spark.createDataFrame([], schema="struct<dni:int, name:string>").write.saveAsTable("table")

        df = spark.table("table")
        dag = build_dag(df=df, dag_simplifiers=default_simplifiers())

        assert dag.type == TransformationType.Relation
        assert dag.children == []
        assert dag.metadata["table"] == "table"
        spark.sql(f"drop table table")

    def test_join_simple(self) -> None:
        ab = spark.createDataFrame([], schema="struct<a: double, b: double>")
        bc = spark.createDataFrame([], schema="struct<b: double, c: double>")
        df = ab.join(bc, on=["b"])

        dag = build_dag(df)

        schema = ("root\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(b = b)',
                          expected_join_type='Inner')

    def test_multi_join_different_columns(self) -> None:
        abc = spark.createDataFrame([], schema="struct<a: double, b: double, c: double>")
        bcd = spark.createDataFrame([], schema="struct<b: double, c: double, d: double>")
        df = abc.join(bcd, on=["b", "c"]).join(bcd, on=["b"]).join(abc, on=["c"])

        dag = build_dag(df)
        schema = ("root\n"
                  " |-- c: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- d: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n"
                  " |-- d: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(c = c)',
                          expected_join_type='Inner')

        dag = dag.children[0]
        schema = ("root\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- d: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n"
                  " |-- d: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(b = b)',
                          expected_join_type='Inner')
        dag = dag.children[0]
        schema = ("root\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- d: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='((b = b) AND (c = c))',
                          expected_join_type='Inner')

    def test_multi_join_same_column(self) -> None:
        ab = spark.createDataFrame([], schema="struct<a: double, b: double>")
        ac = spark.createDataFrame([], schema="struct<a: double, c: double>")
        ad = spark.createDataFrame([], schema="struct<a: double, d: double>")
        df = ab.join(ac, on=["a"]).join(ad, on=["a"])

        dag = build_dag(df)
        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n"
                  " |-- d: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(a = a)',
                          expected_join_type='Inner')
        dag = dag.children[0]
        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(a = a)',
                          expected_join_type='Inner')

    def test_join_arbitrary_condition(self) -> None:
        ab = spark.createDataFrame([], schema="struct<a: double, b: double>")
        ac = spark.createDataFrame([], schema="struct<a: double, c: double>")
        df = ab.join(ac, on=[ab.a == ac.a])

        dag = build_dag(df)
        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(a = a)',
                          expected_join_type='Inner')

    def test_join_arbitrary_condition_and_select(self) -> None:
        ab = spark.createDataFrame([], schema="struct<a: double, b: double>")
        ac = spark.createDataFrame([], schema="struct<a: double, c: double>")
        df = ab.join(ac, on=[ab.a == ac.a])
        df = df.select("*")

        dag = build_dag(df)
        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["a", "b", "a", "c"])
        dag = dag.children[0]
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(a = a)',
                          expected_join_type='Inner')

    def test_join_casting_column(self) -> None:
        # Notice the different types for columns named "b"
        ab = spark.createDataFrame([], schema="struct<a: double, b: double>")
        bc = spark.createDataFrame([], schema="struct<b: int, c: double>")
        df = ab.join(bc, on=["b"])

        dag = build_dag(df)

        schema = ("root\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='(b = CAST(b AS DOUBLE))',
                          expected_join_type='Inner')

    def test_window(self) -> None:
        df = spark.createDataFrame([], schema="struct<revenue: float, date: string>")
        # create a 3 day rolling average of the revenue
        window = Window.partitionBy().orderBy(df.date).rowsBetween(-3, 0)
        df = df.withColumn("rolling_avg", F.avg(df.revenue).over(window))

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n")

        project = build_dag(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['revenue', 'date', 'rolling_avg'])

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['revenue', 'date', 'rolling_avg'])

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n"
                  " |-- rolling_avg: double (nullable = true)\n")

        window_node = project.children[0]
        self._expect_window(node=window_node, expected_schema=schema)

        schema = ("root\n"
                  " |-- revenue: float (nullable = true)\n"
                  " |-- date: string (nullable = true)\n")

        project = window_node.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['revenue', 'date'])

        rdd = project.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    def test_multi_with_column(self) -> None:
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

        project = build_dag(df)
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'income', 'expenses', 'surplus', 'savings', 'chocolate_money'])

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n"
                  " |-- surplus: double (nullable = true)\n"
                  " |-- savings: double (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'income', 'expenses', 'surplus', 'savings'])

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n"
                  " |-- surplus: double (nullable = true)\n")

        project = project.children[0]
        self._expect_project(node=project, expected_schema=schema, expected_column_names=['user', 'income', 'expenses', 'surplus'])

        schema = ("root\n"
                  " |-- user: string (nullable = true)\n"
                  " |-- income: double (nullable = true)\n"
                  " |-- expenses: double (nullable = true)\n")

        rdd = project.children[0]
        self._expect_rdd(node=rdd, expected_schema=schema)


    """
    From here, all tests are only considering one transformation
    """

    def test_aggregate(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.agg(F.min(df.a))
        
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- min(a): double (nullable = true)\n")
        self._expect_aggregate(node=dag,
                               expected_schema=schema,
                               expected_aggregate_expressions=['min(a) AS `min(a)`'],
                               expected_grouping_expressions=[],
                               expected_grouping_column="No Grouping Column")

    def test_alias(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.alias("df_as_1")

        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_alias(node=dag, expected_schema=schema, expected_alias="df_as_1")

    def test_coalesce(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.coalesce(2)

        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_repartition(node=dag, expected_schema=schema, expected_num_partitions=2, expected_expressions=[])

    def test_cross_join(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double>")
        df2 = spark.createDataFrame([], schema="struct<b:double, c:double>")
        df = df1.crossJoin(df2)
        df = df.select("*")

        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")

        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["a", "b", "b", "c"])

        dag = dag.children[0]
        self._expect_join(node=dag,
                          expected_schema=schema,
                          expected_condition='',
                          expected_join_type='Cross')

    def test_describe(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.describe(["name"])
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- summary: string (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["summary", "name"])

    def test_distinct(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.distinct()
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_deduplicate(node=dag, expected_schema=schema, expected_deduplicate_columns=['a', 'b', 'name'])

    def test_drop(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.drop("a")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["b", "name"])

    def test_drop_duplicates(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.dropDuplicates(["name"])
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_deduplicate(node=dag, expected_schema=schema, expected_deduplicate_columns=["name"])

    def test_dropna(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.dropna()
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_filter(node=dag, expected_schema=schema, expected_condition="atleastnnonnulls(a, b, name)")

    def test_except_all(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df1.exceptAll(df2)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_except(node=dag, expected_schema=schema, expected_preserves_duplicates=True)

    def test_fillna(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.fillna(5, ["a", "b"])
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = false)\n"
                  " |-- b: double (nullable = false)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["a", "b", "name"])

    def test_filter(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.filter(df.a > 10)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_filter(node=dag, expected_schema=schema, expected_condition="(a > CAST(10 AS DOUBLE))")

    def test_intersect(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df1.intersect(df2)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_intersect(node=dag, expected_schema=schema)

    def test_limit(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.limit(5)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_limit(node=dag, expected_schema=schema, expected_limit_expr="5")

    def test_order_by(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.orderBy("name")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_sort(node=dag, expected_schema=schema, expected_order={
          'SQLs': ['name ASC NULLS FIRST'],
          'simple_str': "Ascending by 'name'"
        })

    def test_random_split(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.randomSplit([.5, .5])[0]
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_sample(node=dag, expected_schema=schema, expected_fraction=0.5)

    def test_repartition(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.repartition(10, "name")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_repartition(node=dag, expected_schema=schema, expected_num_partitions=10, expected_expressions=["name"])

    def test_replace(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.replace("a", "new")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["a", "b", "name"])

    def test_rollup(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.rollup("a", "name").agg(F.min(df.a))
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- min(a): double (nullable = true)\n")
        self._expect_aggregate(node=dag,
                               expected_schema=schema,
                               expected_aggregate_expressions=['a', 'name', 'min(a) AS `min(a)`'],
                               expected_grouping_expressions=['a', 'name', 'spark_grouping_id'],
                               expected_grouping_column="Multiple Columns")

        dag = dag.children[0]
        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- spark_grouping_id: long (nullable = false)\n")
        self._expect_expand(node=dag,
                            expected_schema=schema,
                            expected_projections=[
                                ['a', 'b', 'name', 'a', 'name', '0L'],
                                ['a', 'b', 'name', 'a', 'CAST(NULL AS STRING)', '1L'],
                                ['a', 'b', 'name', 'CAST(NULL AS DOUBLE)', 'CAST(NULL AS STRING)', '3L']
                            ])

    def test_sample(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.sample(withReplacement=True, fraction=0.5, seed=3)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_sample(node=dag, expected_schema=schema, expected_fraction=0.5)

    def test_sample_by(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.sampleBy("name", fractions={0: 0.1, 1: 0.2}, seed=3)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_filter(node=dag, expected_schema=schema, expected_condition="UDF(name, rand(3))")

    def test_select_expr(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.selectExpr("*")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=["a", "b", "name"])

    def test_sort_within_partitions(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.sortWithinPartitions("name", ascending=False)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_sort(node=dag, expected_schema=schema, expected_order={
          'SQLs': ['name DESC NULLS LAST'],
          'simple_str': "Descending by 'name'",
        })

    def test_sort_two_columns(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.sort("a", F.col("b").desc())
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_sort(node=dag, expected_schema=schema, expected_order={
          'SQLs': [
            'a ASC NULLS FIRST',
            'b DESC NULLS LAST',
          ],
          'simple_str': "Multiple Columns",
        })

    def test_subtract(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df1.subtract(df2)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_except(node=dag, expected_schema=schema, expected_preserves_duplicates=False)

    def test_to_df(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.toDF("first_num", "second_num", "name")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- first_num: double (nullable = true)\n"
                  " |-- second_num: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=['first_num', 'second_num', 'name'])

    def test_union(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df1.union(df2)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_union(node=dag, expected_schema=schema, expected_number_of_children=2)

    def test_union_union(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df3 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df1.union(df2).union(df3)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_union(node=dag, expected_schema=schema, expected_number_of_children=3)

    def test_union_all(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df1.unionAll(df2)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_union(node=dag, expected_schema=schema, expected_number_of_children=2)

    def test_union_by_name(self) -> None:
        df1 = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df2 = spark.createDataFrame([], schema="struct<a:double, c:double, name:string>")
        df = df1.unionByName(df2, allowMissingColumns=True)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- c: double (nullable = true)\n")
        self._expect_union(node=dag, expected_schema=schema, expected_number_of_children=2)

    def test_where(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.where(df.a > 10)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n")
        self._expect_filter(node=dag, expected_schema=schema, expected_condition="(a > CAST(10 AS DOUBLE))")

    def test_with_column_renamed(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.withColumnRenamed("name", "new_name")
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- new_name: string (nullable = true)\n")
        self._expect_project(node=dag, expected_schema=schema, expected_column_names=['a', 'b', 'new_name'])

    def test_with_column(self) -> None:
        df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
        df = df.withColumn("aplusb", df.a + df.b)
        dag = build_dag(df)

        schema = ("root\n"
                  " |-- a: double (nullable = true)\n"
                  " |-- b: double (nullable = true)\n"
                  " |-- name: string (nullable = true)\n"
                  " |-- aplusb: double (nullable = true)\n")

        self._expect_project(node=dag, expected_schema=schema, expected_column_names=['a', 'b', 'name', 'aplusb'])

    """
    Expectations:
    """

    def _expect_union(self, node: TransformationNode, expected_schema: str, expected_number_of_children: int) -> None:
        assert node.type == TransformationType.Union, f'Expected Union node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == expected_number_of_children


    def _expect_expand(self, node: TransformationNode, expected_schema: str, expected_projections: List[List[str]]) -> None:
        assert node.type == TransformationType.Expand, f'Expected Expand node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema
        assert node.metadata['projections'] == expected_projections

        assert len(node.children) == 1


    def _expect_sample(self, node: TransformationNode, expected_schema: str, expected_fraction: float) -> None:
        assert node.type == TransformationType.Sample, f'Expected Sample node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema
        assert node.metadata['fraction'] == expected_fraction
        assert node.metadata['seed'] is not None

        assert len(node.children) == 1


    def _expect_limit(self, node: TransformationNode, expected_schema: str, expected_limit_expr: str) -> None:
        assert node.type == TransformationType.Limit, f'Expected Limit node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema
        assert node.metadata['limit_expr'] == expected_limit_expr

        assert len(node.children) == 1


    def _expect_intersect(self, node: TransformationNode, expected_schema: str) -> None:
        assert node.type == TransformationType.Intersect, f'Expected Intersect node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 2


    def _expect_except(self, node: TransformationNode, expected_schema: str, expected_preserves_duplicates: bool) -> None:
        assert node.type == TransformationType.Except, f'Expected Except node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema
        assert node.metadata['preserves_duplicates'] == expected_preserves_duplicates

        assert len(node.children) == 2


    def _expect_deduplicate(self, node: TransformationNode, expected_schema: str, expected_deduplicate_columns: List[str]) -> None:
        assert node.type == TransformationType.Deduplicate, f'Expected Deduplicate node but "{node.type}" found'

        assert node.metadata['schema_string'] == expected_schema
        assert node.metadata['deduplicate_columns'] == expected_deduplicate_columns

        assert len(node.children) == 1


    def _expect_alias(self, node: TransformationNode, expected_schema: str, expected_alias: str) -> None:
        assert node.type == TransformationType.Alias, f'Expected Alias node but "{node.type}" found'
        
        assert node.metadata['schema_string'] == expected_schema
        assert node.metadata['alias'] == expected_alias

        assert len(node.children) == 1


    def _expect_repartition(self, node: TransformationNode, expected_schema: str, expected_num_partitions: int, expected_expressions: List[str]) -> None:
        assert node.type == TransformationType.Repartition, f'Expected Repartition node but "{node.type}" found'
        
        assert node.metadata["num_partitions"] == expected_num_partitions
        assert node.metadata["expressions"] == expected_expressions
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_project(self, node: TransformationNode, expected_schema: str, expected_column_names: List[str]) -> None:
        assert node.type == TransformationType.Project, f'Expected Project node but "{node.type}" found'

        found_columns = node.columns.values()
        found_col_names = [col.name for col in found_columns]
        assert expected_column_names == found_col_names
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_filter(self, node: TransformationNode, expected_schema: str, expected_condition: str) -> None:
        assert node.type == TransformationType.Filter, f'Expected Filter node but "{node.type}" found'
        
        assert node.metadata['condition'] == expected_condition
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_rdd(self, node: TransformationNode, expected_schema: str) -> None:
        assert node.type == TransformationType.LogicalRDD, f'Expected LogicalRDD node but "{node.type}" found'

        # TODO: assert metadata
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 0


    def _expect_generate(self, node: TransformationNode, expected_schema: str, expected_generator: str) -> None:
        assert node.type == TransformationType.Generate, f'Expected Generate node but "{node.type}" found'

        assert node.metadata['generator'] == expected_generator
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_aggregate(self, node: TransformationNode, expected_schema: str, expected_aggregate_expressions: List[str], expected_grouping_expressions: List[str], expected_grouping_column: str) -> None:
        assert node.type == TransformationType.Aggregate, f'Expected Aggregate node but "{node.type}" found'

        assert node.metadata['aggregate_expressions'] == expected_aggregate_expressions
        assert node.metadata['grouping_expressions'] == expected_grouping_expressions
        assert node.metadata['grouping_column'] == expected_grouping_column
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_join(self, node: TransformationNode, expected_schema: str, expected_condition: str, expected_join_type: str) -> None:
        assert node.type == TransformationType.Join, f'Expected Join node but "{node.type}" found'

        assert node.metadata['condition'].sql_str == expected_condition
        assert node.metadata['join_type'] == expected_join_type
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 2


    def _expect_window(self, node: TransformationNode, expected_schema: str) -> None:
        assert node.type == TransformationType.Window, f'Expected Window node but "{node.type}" found'
        
        # TODO: assert metadata
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


    def _expect_sort(self, node: TransformationNode, expected_schema: str, expected_order: Dict[str, Any]) -> None:
        assert node.type == TransformationType.Sort, f'Expected Sort node but "{node.type}" found'
        
        assert node.metadata['order'] == expected_order
        assert node.metadata['schema_string'] == expected_schema

        assert len(node.children) == 1


if __name__ == '__main__':
    unittest.main()
