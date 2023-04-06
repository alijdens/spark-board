from context import spark
from pyspark.sql import functions as F


df = spark.createDataFrame([], schema="struct<user:string, cars:array<string>>")

df = df.withColumn("car", F.explode(df.cars))

df.select("*").explain(True)

"""
== Parsed Logical Plan ==
'Project [*]
+- Project [user#404, cars#405, car#409]
   +- Generate explode(cars#405), false, [car#409]
      +- LogicalRDD [user#404, cars#405], false
"""
