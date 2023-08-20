"""
Simple script to generate an HTML from the examples included in the tests
directory.
"""

import os
import argparse
from spark_board import html


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("example", help="Name of the example to generate")
    parser.add_argument("--output", help="Name of the output directory", default="out")
    parser.add_argument("--overwrite", "-w", help="Overwrite existing files", default=False, action="store_true")
    parser.add_argument("--no-dag-simplification", "-n", help="Deactivate DAG simplification", default=False, action="store_true")

    args = parser.parse_args()

    # import the example module
    example = __import__(f"tests.examples.{args.example}", fromlist=["df"])

    here = os.path.dirname(__file__)
    html.dump_dataframe(
        df=example.df,
        output_dir=os.path.join(here, args.output),
        overwrite=args.overwrite,
        default_settings=html.DefaultSettings(),
        simplify_dag=not args.no_dag_simplification,
    )
