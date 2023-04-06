from context import spark
from pyspark.sql import functions as F


df = spark.createDataFrame([], schema="struct<user:string, income:double, expenses:double>")

df = df.withColumn("surplus", df.income - df.expenses)
df = df.withColumn("savings", df.surplus / 2)
df = df.withColumn("chocolate_money", df.surplus - df.savings)

df.select("*").explain(True)

"""
== Parsed Logical Plan ==
'Project [*]
+- Project [user#443, income#444, expenses#445, surplus#449, savings#454, (surplus#449 - savings#454) AS chocolate_money#460]
   +- Project [user#443, income#444, expenses#445, surplus#449, (surplus#449 / cast(2 as double)) AS savings#454]
      +- Project [user#443, income#444, expenses#445, (income#444 - expenses#445) AS surplus#449]
         +- LogicalRDD [user#443, income#444, expenses#445], false
"""
