from pyspark.sql import functions as F
from tests.context import spark


people = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
cities = spark.createDataFrame([], schema="struct<city:string, zip_code:string, lat:float, lon:float>")
countries = spark.createDataFrame([], schema="struct<country:string, city:string, continent:string>")
continent = spark.createDataFrame([], schema="struct<continent:string, continent_code:int>")

people1 = people.filter(people.age > 18)
people1 = people.filter(people.city == "CABA")
people2 = people.filter(people.age < 65)

people = people1.unionByName(people2)

city_population = people.groupBy("city").agg(F.count("*").alias("city_population"))
country_population = (
    cities.join(city_population, on=["city"], how="left")
    .join(countries, on=["city"], how="left")
    .groupBy("continent", "country")
    .agg(F.sum("city_population").alias("country_population"))
)
continent_population = (
    countries.join(country_population, on=["continent"], how="left")
    .join(continent, on=["continent"], how="left")
    .groupBy("continent_code", "continent")
    .agg(F.sum("country_population").alias("continent_population"))
)

location = (
    continent_population.filter(F.col("continent_population") > 100000)
    .join(countries, on=["continent"], how="left")
    .join(cities, on=["city"], how="left")
)

df1 = people.join(location, on=["city"], how="inner")
df1 = df1.select("name", "age", "city", "zip_code", "country", "continent")

top_continent = continent_population.orderBy(F.desc("continent_population")).limit(1)
top_countries = country_population.orderBy(F.desc("country_population")).limit(10)
top_cities = city_population.orderBy(F.desc("city_population")).limit(10)

df = (
    df1.join(top_cities, on=["city"], how="left")
    .join(top_countries, on=["country"], how="left")
    .join(top_continent, on=["continent"], how="left")
    .withColumn("is_top_city", F.coalesce("city_population", F.lit(0)) > 0)
    .withColumn("is_top_country", F.coalesce("country_population", F.lit(0)) > 0)
    .withColumn("is_top_continent", F.coalesce("continent_population", F.lit(0)) > 0)
)
