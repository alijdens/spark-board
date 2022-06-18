# -*- coding: utf-8 -*-

from .context import plan_extractor, spark
from plan_extractor.explain_generator import ExplainGenerator

from pyspark.context import SparkContext
from pyspark.sql.session import SparkSession
from pyspark.sql.types import StructType, StructField, StringType

import unittest


class ExplainGeneratorTestSuite(unittest.TestCase):
    """ExplainGenerator test cases."""

    def setUp(self):
        schema = StructType([
            StructField("firstname", StringType(),True),
            StructField("middlename", StringType(),True),
            StructField("lastname", StringType(),True),
            StructField("id", StringType(), True),
            StructField("gender", StringType(), True)
        ])

        df = spark.createDataFrame(data=[], schema=schema)
        self.test_df = df.select("firstname", "lastname").filter(df.gender == "M")

        self.expected_plan = """'Project [*]
+- Project [firstname#0, lastname#2]
   +- Filter (gender#4 = M)
      +- Project [firstname#0, lastname#2, gender#4]
         +- LogicalRDD [firstname#0, middlename#1, lastname#2, id#3, gender#4], false
"""


    def test_explain_generator_generates_explain_as_string(self):
        explain_generator = ExplainGenerator(self.test_df)
        explain_string = explain_generator.generate()
        assert explain_string == self.expected_plan, f'ExplainString: [{explain_string}] vs Expected: [{self.expected_plan}]'


if __name__ == '__main__':
    unittest.main()
