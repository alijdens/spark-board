"""
Simple script to generate an HTML from the examples included in the tests
directory.
"""

import os
import sys
import argparse
from pathlib import Path
from spark_board import html


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("example", help="Name of the example to generate")
    parser.add_argument("--output", help="Name of the output file", default="out.html")

    args = parser.parse_args()

    # import the example module
    example = __import__(f"tests.examples.{args.example}", fromlist=["df"])

    html.dump_dataframe(example.df, args.output)
