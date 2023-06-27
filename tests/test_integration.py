from pyspark.sql.session import SparkSession
from spark_board.html import dump_dataframe, DefaultSettings
from pathlib import Path


def test_spark_board(spark: SparkSession, tmp_path: Path) -> None:
    """This test intends to be a very simple smoke test for the normal spark-board
    usage."""

    # create a data frame
    df = spark.createDataFrame([], schema="struct<a:double, b:double, c:double>")
    df = df.withColumn("sum", (df.a + df.b) / df.c)

    OUT_DIR = tmp_path/"spark_board_output"

    # dump it expecting no errors
    dump_dataframe(
        df=df,
        output_dir=str(OUT_DIR),
        overwrite=True,  # overwrite output_dir if it already exists
        default_settings=DefaultSettings(),  # override default settings if desired
    )

    assert (OUT_DIR/"model.js").exists()
