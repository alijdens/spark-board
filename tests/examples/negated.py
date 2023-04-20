from tests.context import spark
from pyspark.sql import functions as F


df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
df = df.filter(df.age > 18)
df = df.filter(df.city == "CABA")
df = df.filter(~df.name.like("Ezequiel %"))
df = df.select("name", "age", df.dni.alias("user DNI"))

df.select("*").explain(True)
