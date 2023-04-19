from tests.context import spark
from pyspark.sql import functions as F
from pyspark.sql.window import Window


df = spark.createDataFrame([], schema="struct<revenue: float, date: string>")

# create a 3 day rolling average of the revenue
window = Window.partitionBy().orderBy(df.date).rowsBetween(-3, 0)
df = df.withColumn("rolling_avg", F.avg(df.revenue).over(window))

df.select("*").explain(True)

"""
== Parsed Logical Plan ==
'Project [*]
+- Project [revenue#416, date#417, rolling_avg#421]
   +- Project [revenue#416, date#417, rolling_avg#421, rolling_avg#421]
      +- Window [avg(revenue#416) windowspecdefinition(date#417 ASC NULLS FIRST, specifiedwindowframe(RowFrame, -3, currentrow$())) AS rolling_avg#421], [date#417 ASC NULLS FIRST]
         +- Project [revenue#416, date#417]
            +- LogicalRDD [revenue#416, date#417], false
"""
