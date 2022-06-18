# spark-board

## Developing in Docker

### Build Docker image

```shell
docker build -t spark-board .
```

### Run Docker image

```shell
docker run -ti --rm spark-board
```

### Generate parser
```shell
cd tree-sitter-spark-explain
tree-sitter generate
```

### Run tests
```shell
make tests
```

### POC Idea:
This class has the query execution and methods to "explain" it
https://github.com/apache/spark/blob/c274812284a3b7ec725e6b8afc2e7ab0f91b923e/sql/core/src/main/scala/org/apache/spark/sql/execution/QueryExecution.scala

It's invoked from here:
https://github.com/apache/spark/blob/c274812284a3b7ec725e6b8afc2e7ab0f91b923e/python/pyspark/sql/dataframe.py

We could follow that code to understand how does it do to build the explaination String and build a Graph instead.
