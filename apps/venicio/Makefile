up:
	docker compose up --build

down:
	docker compose down

reset:
	docker compose down -v

lint:
	cd apps/venicio/frontend && npm run lint
	dotnet format apps/venicio/DevBoardVS.sln

healthcheck:
	curl http://localhost:5000/healthcheck
