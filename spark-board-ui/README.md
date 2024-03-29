# Web UI

This directory contains the source files used to create the static website that displays the spark board graphs.

## Docker

You can use Docker to develop this project. To start a docker shell with the environment run:

```shell
make docker-image
make docker
```

and inside the docker container execute:

```shell
npm install
```

## Run the server

Execute

```shell
npm run dev
```

to start the React web server (you can do this inside the docker container after executing `make docker`).

## Test with `spark-board`

If you want to test the new UI with `spark-board`, you can do so by inserting the UI files in the package.

Compile the React app and copy the generated files in `dist` [to the `spark-board` package](../spark_board/ui/). This process can also be executed automatically with make, which will "compile" react-flow and replace the output in `spark_board`:

```sh
make deploy
```

Note that these files are git-ignored because during a real deployment, a github action will do this same process before building the package and uploading it to pypi.

You can now use `spark_board` to draw data frames.

## Development

In order to see the DAG interactively, the [`index.html`](./index.html) file will include a `model.js` file which is expected to contain the node and link data (according to react-flow's definitions). The actual model data will not be obtained until a data frame is being processed (which will happen after this project is compiled). So, in order to be able to test this during development, [`model.js`](./model.js) file was created and added to this repository. It is **important** to notice however that this file **won't be included** in the final packaging, and the [`spark_board/html.py`](../spark_board/html.py) module is the one that will build this file dynamically based on the data frame and add it to the resulting output.
