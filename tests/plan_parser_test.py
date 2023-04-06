# -*- coding: utf-8 -*-

from .context import spark, StructType, StructField, StringType
from plan_extractor.plan_parser import build_tree

import unittest


class PlanParserTestSuite(unittest.TestCase):
    """Plan barser test cases."""

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


    def test_explain_parser_parse(self):
        pass




if __name__ == '__main__':
    unittest.main()
