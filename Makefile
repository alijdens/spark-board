init:
	pipenv shell

tests:
	pytest -vv tests

grammar:
	cd tree-sitter-spark-explain && tree-sitter generate

docker:
	docker run -ti --rm  -v $(shell pwd):/app spark-board

docker-image:
	docker build -t spark-board .

.PHONY: tests init
