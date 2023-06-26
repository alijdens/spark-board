# `spark-board`: interactive PySpark dataframes visualization

`spark-board` provides an interactive way to analize PySpark data frame execution plans as a static website displaying the transformations DAG.

Check out the [examples](https://alijdens.github.io/spark-board/) for a quick overview of the features (and the corresponding examples source code [here](./tests/examples/)).

## Usage

`spark-board` takes a PySpark data frame and inspects the operations to build the DAG. This usually is the final step of a PySpark script, right before writing it to disk.

### Install `spark-board`

```shell
pip install spark-board
```

### Run `spark-board`

```python
from spark_board.html import dump_dataframe, DefaultSettings

# get the PySpark data frame that will be displayed
df = ...

dump_dataframe(
    df=df,
    output_dir="./spark_board_output",
    overwrite=True,  # overwrite output_dir if it already exists
    default_settings=DefaultSettings(),  # override default settings if desired
)
```

and that's it! `spark-board` will generate a static website in the defined `output_dir` folder. You can now serve the website using any web server and inspect the operations.

You can check out the avaialble default settings [here](https://github.com/alijdens/spark-board/blob/main/spark_board/default_settings.py).

### Serving

`spark-board` is intended to be a live documentation of PySpark scripts. Because of this, it's advisable to run it every time the source code is updated. For example, `spark-board` can be run as part of a CI pipeline and the generated website uploaded to a static website hosting service, like Github or Gitlab pages (we actually do this to [update and serve the examples](./.github/workflows/deploy-examples.yml) in this repository).
