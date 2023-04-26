DOCKER_IMAGE=web-ui

.PHONY: docker-image
docker-image:
	docker build -t $(DOCKER_IMAGE) .

.PHONY: docker
docker:
	docker run -it --rm -v $(shell pwd):/app -p 5173:5173 $(DOCKER_IMAGE)
