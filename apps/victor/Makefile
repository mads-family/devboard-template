# Makefile

up:
	docker-compose up --build

down:
	docker-compose down

lint:
	npm run lint

format:
	npx eslint . --fix

dev:
	nodemon app.js

healthcheck:
	curl http://localhost:3000/healthcheck
