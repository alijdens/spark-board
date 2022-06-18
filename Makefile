init:
	pipenv shell

tests:
	nosetests tests

.PHONY: tests init
