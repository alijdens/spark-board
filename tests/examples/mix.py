from pyspark.sql import functions as F
from tests.context import spark


people = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
cities = spark.createDataFrame([], schema="struct<city:string, zip_code:string, lat:float, lon:float>")
countries = spark.createDataFrame([], schema="struct<country:string, city:string, continent:string, population:int>")
continent = spark.createDataFrame([], schema="struct<continent:string>")

people = people.filter(people.age > 18)
people = people.filter(people.city == "CABA")

continent_population = countries.groupBy("continent").agg(F.sum("population").alias("population"))
continent = continent.join(continent_population, on=["continent"], how="left")

location = countries.join(cities, on=["city"])
location = location.join(continent.filter(continent.population > 100000), on=["continent"])

df = people.join(location, on=["city"])
df = df.select("name", "age", "city", "zip_code", "country", "continent")
