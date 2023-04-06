from context import spark
from plan_extractor.explain_generator import ExplainGenerator
from plan_extractor.explain_parser import ExplainParser
from spark_board import html


people = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
cities = spark.createDataFrame([], schema="struct<city:string, zip_code:string, lat:float, lon:float>")

people = people.filter(people.age > 18)
people = people.filter(people.city == "CABA")

df = people.join(cities, on=["city"])
df = df.select("name", "age", "city", "zip_code")
