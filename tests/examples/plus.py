from tests.context import spark
from pyspark.sql import functions as F

df = spark.createDataFrame([], schema="struct<a:double, b:double, c:double, d:double>")

df = df.withColumn("sum", (df.a + df.b) / df.c + df.d)

df.select("*").explain(True)
