# Development

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

## Tests

### Dependencies
pipenv

### Run tests
```shell
make tests
```

### Run examples
The examples are a set of scripts located in [examples](./tests/examples/) folder that create different data frames. With the [`run.py`](../run.py) script you can run the examples and generate an output HTML from them.

In order to run the examples you can execute the following command:
```shell
python ./run.py [example_name] --output out.html
```

## Working with the UI

The visual part of the package is developed in React (see [spark-board-ui](../spark-board-ui/)). If want to update the visualization, follow the steps in the [README](../spark-board-ui/README.md).


# Release

`spark-board` is packaged and uploaded to pypi whenever a new release is created. To create a new release, follow the next steps:

1. Update the version in the [setup.py](../setup.py) file.
2. Create a new branch and a commit with the changes (Release `vX.Y.Z`).
3. Create a PR and merge it.
4. Create a [new release](https://github.com/alijdens/spark-board/releases/new), naming it after the new version (for example `v1.0.0`) from the main branch.
5. Wait for the "Deploy spark-board package" [action](https://github.com/alijdens/spark-board/actions) to finish.
6. Check that the new version is available in [pypi](https://pypi.org/project/spark-board/).
