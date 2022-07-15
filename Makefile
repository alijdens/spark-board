init:
	pipenv shell

tests:
	pytest -v tests

grammar:
	cd tree-sitter-spark-explain && tree-sitter generate

docker:
	docker run -ti --rm  -v $(shell pwd):/app spark-board

.PHONY: tests init
