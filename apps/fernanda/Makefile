.PHONY: help up down build dev lint format test clean install

# Default target
help: ## Show this help message
	@echo "DevBoard - Available commands:"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf "Usage: make <target>\n\n"} /^[a-zA-Z_-]+:.*##/ { printf "  %-15s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

# Docker commands
up: ## Start all services in background with Docker Compose
	docker compose up -d --build

down: ## Stop all services
	docker compose down

down-v: ## Stop all services and remove volumes
	docker compose down -v

build: ## Build all Docker images
	docker compose build

# Development commands
dev-backend: ## Start backend in development mode
	cd backend && npm run dev

dev-frontend: ## Start frontend in development mode
	cd frontend && npm run dev

dev: ## Start both backend and frontend in development mode
	make -j2 dev-backend dev-frontend

# Code quality commands
lint: ## Run linting on both backend and frontend
	cd backend && npm run lint
	cd frontend && npm run lint

lint-fix: ## Fix linting issues automatically
	cd backend && npm run lint:fix
	cd frontend && npm run lint:fix

format: ## Format code with Prettier
	cd backend && npm run format
	cd frontend && npm run format

format-check: ## Check code formatting
	cd backend && npm run format:check
	cd frontend && npm run format:check

# Installation commands
install: ## Install dependencies for both backend and frontend
	cd backend && npm install
	cd frontend && npm install

install-backend: ## Install backend dependencies
	cd backend && npm install

install-frontend: ## Install frontend dependencies
	cd frontend && npm install

# Testing commands
test: ## Run tests (placeholder for future implementation)
	@echo "Tests not implemented yet"

healthcheck: ## Test the backend healthcheck endpoint
	@echo "Testing backend healthcheck..."
	@curl -f http://localhost:3000/healthcheck || echo "Backend not running or healthcheck failed"

api-test: ## Test all API endpoints
	@echo "Testing API endpoints..."
	@echo "1. Testing root endpoint..."
	@curl -s http://localhost:3000/ | head -c 100
	@echo ""
	@echo "2. Testing healthcheck..."
	@curl -s http://localhost:3000/healthcheck | head -c 100
	@echo ""
	@echo "3. Testing tasks endpoint..."
	@curl -s http://localhost:3000/tasks | head -c 100
	@echo ""

# Cleanup commands
clean: ## Clean node_modules and build artifacts
	rm -rf backend/node_modules
	rm -rf frontend/node_modules
	rm -rf frontend/dist
	docker compose down -v
	docker system prune -f

# Log commands
logs: ## Show logs from all services
	docker compose logs -f

logs-backend: ## Show backend logs only
	docker compose logs -f backend

logs-frontend: ## Show frontend logs only
	docker compose logs -f frontend

logs-db: ## Show database logs only
	docker compose logs -f postgres

# Status commands
status: ## Show status of all services
	docker compose ps

# Environment commands
env: ## Copy .env.example to .env
	cp .env.example .env
	@echo ".env file created from .env.example"
