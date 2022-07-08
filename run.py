from spark_board import html

from plan_extractor.extractor import PlanExtractor

from pyspark.context import SparkContext
from pyspark.sql.session import SparkSession
from pyspark.sql.types import StructType, StructField, StringType


sc = SparkContext('local')
spark = SparkSession(sc)
spark.conf.set("spark.sql.debug.maxToStringFields", 1000)

schema = StructType([
    StructField("firstname", StringType(),True),
    StructField("middlename", StringType(),True),
    StructField("lastname", StringType(),True),
    StructField("id", StringType(), True),
    StructField("gender", StringType(), True)
])
df = spark.createDataFrame(data=[], schema=schema)
test_df = df.select("firstname", "lastname").filter(df.gender == "M")


html.dump_dataframe(test_df)
