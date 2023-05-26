# spark-board

## Developing in Docker

### Build Docker image

```shell
make docker-image
```

### Run Docker image

To run the docker image as a development environment (i.e. interactive session with your local code mounted in the image) just run:

```shell
make docker
```

## Developing locally

Make sure you have the required Java RE for the Spark version you want to run properly setup for Spark use.

Install `pipenv` and run:

```shell
pipenv sync --dev
pipenv shell
```

## How to use it

### Dependencies
pipenv

### Run tests
```shell
make tests
```

### Run examples
The examples are a set of scripts located in [examples](./tests/examples/) folder that create different data frames. With the [`run.py`](./run.py) script you can run the examples and generate an output HTML from them.

In order to run the examples you can execute the following command:
```shell
python ./run.py [example_name] --output out.html
```

## Working with the UI

The visual part of the package is developed in React (see [spark-board-ui](./spark-board-ui/)). If want to update the visualization, follow the steps in the [README](./spark-board-ui/README.md) and then create a new commit replacing the [compiled `ui`](./spark_board/ui/) files by the new ones.
