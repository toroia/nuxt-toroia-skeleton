.DEFAULT_GOAL := help
help:
	@printf "\033[33mUsage:\033[0m\n  make [target] [arg=\"val\"...]\n\n\033[33mTargets:\033[0m\n"
	@grep -E '^[-a-zA-Z0-9_\.\/]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[32m%-15s\033[0m %s\n", $$1, $$2}'

APP_IMAGE?=toroia/nodejs:12
APP_NAME?=nuxt-toroia-skeleton

dev: ## Starts a development image
	docker run -it --rm \
		-v $(CURDIR):/app \
		--name $(APP_NAME) \
		-p 3000:3000 \
		-e CHOKIDAR_USEPOLLING=true \
		$(APP_IMAGE) sh -c "cd example && yarn dev"

exec: ## Starts a bash environment in an image
	docker run -it --rm \
		-v $(CURDIR):/app \
		$(APP_IMAGE) bash
