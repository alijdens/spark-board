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
