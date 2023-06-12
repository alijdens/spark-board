"""
Simple script to generate an HTML with all the examples included in the tests
directory.
"""

import os
import sys
from pathlib import Path

# add parent directory to PYTHONPATH
here = Path(os.path.dirname(__file__))
sys.path.append(str(here.parent))

import argparse
from spark_board import html


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", help="Name of the output directory", default="out")

    args = parser.parse_args()

    out_dir = Path(args.output)

    example_names = []
    for file in os.listdir(here/".."/"tests"/"examples"):
        if not file.endswith(".py") or file.startswith("_"):
            continue

        # import the example module
        example_name = file.replace(".py", "")    
        example = __import__(f"tests.examples.{example_name}", fromlist=["df"])

        html.dump_dataframe(
            df=example.df,
            output_dir=out_dir/example_name,
            overwrite=True,
            default_settings=html.DefaultSettings(),
        )

        example_names.append(example_name)

    with open(here/"index.html") as fp:
        content = fp.read()

    with open(out_dir/"index.html", "w") as fp:
        li = "\n".join(f'<li><a href="{example}">{example}</a></li>' for example in example_names)
        fp.write(content.replace("<replace-me />", "<ul>\n" + li + "\n</ul>"))
