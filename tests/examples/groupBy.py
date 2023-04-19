from tests.context import spark
from pyspark.sql import functions as F


df = spark.createDataFrame([], schema="struct<user:string, city:string, children:int, height:double>")

df = df.groupBy("city").agg(
    F.sum(df.children).alias("total_children"),
    F.avg(df.height).alias("avg_height"),
)

df.select("*").explain(True)

"""
== Parsed Logical Plan ==
'Project [*]
+- Aggregate [city#377], [city#377, sum(children#378) AS total_children#389L, avg(height#379) AS avg_height#391]
   +- LogicalRDD [user#376, city#377, children#378, height#379], false
"""
