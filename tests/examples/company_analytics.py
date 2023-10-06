from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, avg, max, min, stddev
from pyspark.sql.types import StructType, StructField, StringType, IntegerType
from tests.context import spark


# Define schemas for three related datasets: Employees, Departments, and Salaries
employee_schema = StructType([StructField("EmployeeID", IntegerType(), False),
                              StructField("Name", StringType(), False),
                              StructField("DepartmentID", IntegerType(), False),
                              StructField("Age", IntegerType(), False)])

department_schema = StructType([StructField("DepartmentID", IntegerType(), False),
                                StructField("DepartmentName", StringType(), False)])

salary_schema = StructType([StructField("EmployeeID", IntegerType(), False),
                            StructField("Salary", IntegerType(), False)])

employees_df = spark.createDataFrame([], employee_schema)
departments_df = spark.createDataFrame([], department_schema)
salaries_df = spark.createDataFrame([], salary_schema)

# Perform various transformations
# 1. Join employees with departments to get department names
employees_with_departments_df = employees_df.join(departments_df, "DepartmentID", "inner") \
                                            .join(salaries_df, "EmployeeID", "inner")

# 2. Calculate the total salary per department
total_salary_per_department_df = employees_with_departments_df \
    .groupBy("DepartmentName") \
    .agg(sum("Salary").alias("TotalSalary"))

# 3. Filter employees earning more than the department's average salary
avg_salary_per_department_df = total_salary_per_department_df \
    .join(employees_with_departments_df, "DepartmentName", "inner") \
    .groupBy("DepartmentName", "EmployeeID", "Name") \
    .agg(sum("Salary").alias("EmployeeSalary"),
         sum("TotalSalary").alias("TotalSalary")) \
    .withColumn("AvgSalary", col("EmployeeSalary") / col("TotalSalary")) \
    .filter(col("EmployeeSalary") > col("AvgSalary") * 1.2)

avg_age_by_department_df = employees_with_departments_df.groupBy("DepartmentName").agg(avg("Age").alias("AverageAge"))

# 4. Compute additional metrics for each department
department_metrics_df = total_salary_per_department_df \
    .join(avg_salary_per_department_df.groupBy("DepartmentName").agg(avg("EmployeeSalary").alias("AvgEmployeeSalary")),
          "DepartmentName", "inner") \
    .join(avg_salary_per_department_df.groupBy("DepartmentName").agg(max("EmployeeSalary").alias("MaxEmployeeSalary")),
          "DepartmentName", "inner") \
    .join(avg_salary_per_department_df.groupBy("DepartmentName").agg(min("EmployeeSalary").alias("MinEmployeeSalary")),
          "DepartmentName", "inner") \
    .join(avg_salary_per_department_df.groupBy("DepartmentName").agg(stddev("EmployeeSalary").alias("StdDevEmployeeSalary")),
          "DepartmentName", "inner") \
    .join(avg_age_by_department_df, "DepartmentName", "inner")

df = department_metrics_df
