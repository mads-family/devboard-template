# DevBoard - Fernanda's Implementation

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-purple.svg)](https://postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Full-stack application built with **Node.js**, **Express**, **React**, **PostgreSQL**, and **Docker**.

## 🚀 Quick Start

```bash
# 1. Clone and navigate
git clone <repository-url>
cd devboard-template/apps/fernanda

# 2. Setup environment
cp .env.example .env

# 3. Run with Docker
docker compose up --build -d

# 4. Access
# Frontend: http://localhost:8080
# Backend API: http://localhost:3000
```

## 🛠️ Tech Stack

### Backend

- **Node.js 22** - Runtime environment
- **Express** - Web framework
- **PostgreSQL** - Database with pg client
- **dotenv** - Environment variables
- **Docker** - Containerization

📖 **[Backend Documentation](./backend/README.md)**

### Frontend

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Docker** - Containerization with Nginx

📖 **[Frontend Documentation](./frontend/README.md)**

### Infrastructure

- **Docker Compose** - Multi-container orchestration
- **PostgreSQL 15** - Database service
- **Nginx** - Frontend web server

## 📊 Project Standards

- **Container Naming**: Following `devboard-fernanda-{service}` pattern
- **Code Quality**: ESLint + Prettier enforced via pre-commit
- **Documentation**: Comprehensive README and CONTRIBUTING guides
- **Testing**: Automated API endpoint testing
- **Environment**: `.env.example` template provided

For detailed standards, see:

- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## 🔧 Local Development

### Prerequisites

- **Docker** and **Docker Compose**
- **Node.js 22+** (for local development)
- **Git**

## 📋 Development Commands

### Using Makefile (Recommended)

```bash
make help          # Show all available commands
make up             # Start all services
make dev            # Start development mode
make lint           # Run linting
make format         # Format code
make test           # Run API tests
make healthcheck    # Test backend health
make clean          # Clean up everything
```

### Manual Commands

```bash
# Docker
docker compose up --build
docker compose down

# Development
cd backend && npm run dev
cd frontend && npm run dev

# Code Quality
cd backend && npm run lint
cd frontend && npm run format
```

### API Testing

```bash
# Run comprehensive API tests
./scripts/test-api.sh

# Quick healthcheck
make healthcheck
curl http://localhost:3000/healthcheck
```

## 📚 Features

### Current

- ✅ **Backend API** with Express and PostgreSQL
- ✅ **Frontend** with React and modern UI
- ✅ **Docker** containerization
- ✅ **Database** initialization with sample data
- ✅ **Environment** configuration
- ✅ **CORS** support for frontend-backend communication

## 🤝 Contributing

Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the team.
