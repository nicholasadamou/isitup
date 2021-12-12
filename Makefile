CONTAINER_NAME ?= isitup
DOCKER_IMGE_NAME ?= nicholasadamou/isitup:latest

.PHONY: all
all: build

.PHONY: build
build:
	docker build -t $(DOCKER_IMGE_NAME) .
