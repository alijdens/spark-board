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

    args = parser.parse_args()

    # import the example module
    example = __import__(f"tests.examples.{args.example}", fromlist=["df"])

    here = os.path.dirname(__file__)
    html.dump_dataframe(example.df, os.path.join(here, args.output), args.overwrite)
