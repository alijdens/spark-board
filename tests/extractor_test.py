# -*- coding: utf-8 -*-

from .context import plan_extractor, spark
from plan_extractor.extractor import PlanExtractor

from pyspark.context import SparkContext
from pyspark.sql.session import SparkSession
from pyspark.sql.types import StructType, StructField, StringType

import unittest


class PlanExtractorTestSuite(unittest.TestCase):

    def test_extractor_extracts(self):
        schema = StructType([
            StructField("firstname", StringType(),True),
            StructField("middlename", StringType(),True),
            StructField("lastname", StringType(),True),
            StructField("id", StringType(), True),
            StructField("gender", StringType(), True)
        ])
        df = spark.createDataFrame(data=[], schema=schema)
        test_df = df.select("firstname", "lastname").filter(df.gender == "M")
        expected_tree_sexp = "(source_file (transformation (prefix) (project (columns (column (column_name) (number)) (column (column_name) (number))))) (transformation (prefix) (filter (condition (column (column_name) (number)) (operator) (literal)))) (transformation (prefix) (project (columns (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number))))) (transformation (prefix) (rdd (columns (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number)) (column (column_name) (number))) (boolean))))"
        self.extract_and_assert(test_df, expected_tree_sexp)

    def extract_and_assert(self, df, expected_tree_sexp):
        extractor = PlanExtractor(df)
        tree = extractor.extract()
        got_sexp = tree.root_node.sexp()
        assert got_sexp == expected_tree_sexp, f'Got: [{got_sexp}] vs Expected: [{expected_tree_sexp}]'


if __name__ == '__main__':
    unittest.main()
