from tests.context import spark

parquet = spark.read.parquet("tests/examples/data/ds.parquet")
csv = spark.read.csv("tests/examples/data/ds.csv", header=True, inferSchema=True)

spark.sql("CREATE DATABASE IF NOT EXISTS test")
table_df = spark.createDataFrame([], schema="struct<table_a: double, table_b: double>")
table_df.write.saveAsTable("test.table")
table = spark.table("test.table")

memory = spark.createDataFrame([], schema="struct<mem_a: double, mem_b: double>")

df1 = memory.join(table, on=memory.mem_b == table.table_b)
df2 = parquet.join(csv, on=parquet.parquet_a == csv.csv_a)

df = df1.join(df2, on=df1.mem_a == df2.parquet_a)
