import os
import pytest
import tempfile
from pyspark.sql.session import SparkSession


@pytest.fixture
def spark() -> SparkSession:
    temp_dir = tempfile.TemporaryDirectory().name
    spark_warehouse_dir = os.path.join(temp_dir, "spark-warehouse")
    metastore_db_dir = os.path.join(temp_dir, "metastore_db")
    connection_url = f"jdbc:derby:;databaseName={metastore_db_dir};create=true"

    yield (
        SparkSession.builder.master("local")
        .config("spark.sql.debug.maxToStringFields", 1000)
        .config("spark.sql.warehouse.dir", spark_warehouse_dir)
        .config("javax.jdo.option.ConnectionURL", connection_url)
        .getOrCreate()
    )
