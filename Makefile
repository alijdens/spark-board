init:
	pipenv shell

tests:
	pytest -v tests

docker:
	docker run -ti --rm  -v.:/app spark-board

.PHONY: tests init
