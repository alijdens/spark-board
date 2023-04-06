# -*- coding: utf-8 -*-

import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from pyspark.context import SparkContext
from pyspark.sql.session import SparkSession
from pyspark.sql.types import StructType, StructField, StringType

sc = SparkContext('local')
spark = SparkSession(sc)
spark.conf.set("spark.sql.debug.maxToStringFields", 1000)
