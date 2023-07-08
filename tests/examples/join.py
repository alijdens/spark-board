from tests.context import spark


people = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
cities = spark.createDataFrame([], schema="struct<city:string, zip_code:string, lat:float, lon:float>")

df = people.join(cities, on=["city"])
