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

deploy:
	docker-compose pull
	docker-compose up -d
	curl -f http://localhost:8080/healthcheck

deploy-staging:
	docker-compose -f docker-compose.staging.yml --env-file .env.staging pull
	docker-compose -f docker-compose.staging.yml --env-file .env.staging up -d
	curl -f http://localhost:8081/healthcheck
