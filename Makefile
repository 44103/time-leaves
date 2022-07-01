.PHONY: create run
include .env

create:
	@docker compose run --rm create npx create-react-app $(PROJ) --template typescript

run:
	@docker compose up app -d 
