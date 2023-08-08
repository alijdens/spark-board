from tests.context import spark

ab = spark.createDataFrame([], schema="struct<a: double, b: double>")
bc = spark.createDataFrame([], schema="struct<b: double, c: double>")
cd = spark.createDataFrame([], schema="struct<c: double, d: double>")
df = ab.join(bc, on=["b"]).join(cd, on=["c"])
