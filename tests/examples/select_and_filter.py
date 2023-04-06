# from context import spark
from plan_extractor.explain_generator import ExplainGenerator
from plan_extractor.explain_parser import ExplainParser


df = spark.createDataFrame([], schema="struct<dni:int, name:string, age:int, weight:float, city:string>")
df = df.filter(df.age > 18)
df = df.filter(df.city == "CABA")
df = df.select("name", "age", df.dni.alias("user DNI"))

# plan = ExplainGenerator(df=df).generate()
plan = """
'Project [*]
+- Project [name#1, age#2, dni#0 AS user DNI#10]
   +- Filter (CABA = city#4)
"""
print(plan)

ExplainParser().parse_graph(plan=plan)
