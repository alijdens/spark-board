init:
	pipenv sync --dev
	pipenv shell

tests:
	pytest -vv tests

mypy:
	mypy --install-types --non-interactive --strict spark_board tests

docker:
	docker run -ti --rm -v $(shell pwd):/app spark-board

docker-image:
	docker build -t spark-board .

# make example name=<example>
example:
	docker run --rm -v $(shell pwd):/app spark-board python ./run.py $(name) --output /app/out --overwrite

.PHONY: tests init mypy example
