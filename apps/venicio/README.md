# DevBoard Project

![Docker](https://img.shields.io/badge/docker-ready-blue)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://pre-commit.com/)
![CI - Venicio](https://github.com/<USUARIO>/<REPOSITORIO>/actions/workflows/ci-venicio.yml/badge.svg)

## 🚀 Running locally

### Requirements

- [Docker](https://www.docker.com/) and Docker Compose installed

### Clone the repository

```bash
git clone https://github.com/mads-family/devboard-template.git
cd devboard-template/apps/venicio
```

### Set up environment variables

```bash
cp .env.example .env
```

Adjust the values in .env if needed.
By default it uses user, pass and devboard.

### Start everything

```bash
docker compose up --build
```

Then access:

Frontend: http://localhost:8080

API: http://localhost:5000/api/tasks

Healthcheck: http://localhost:5000/healthcheck

⚙️ Useful commands

Stop all containers:

```bash
docker compose down
```

Stop containers and clear all data (fresh DB):

```bash
docker compose down -v
```

🤝 Contributing
Please check our CONTRIBUTING.md for:

Commit and branch conventions

How to open pull requests

Code style guidelines

## 🔍 Lint and Format

### For C# / Backend

Run the following command to check and automatically format C# code according to the `.editorconfig` rules:

```bash
dotnet format
```

---

### For JavaScript / Frontend

Make sure you have Node installed.
In the `frontend` directory, install dependencies:

```bash
cd frontend
npm install
```

Then run ESLint to check JavaScript code style:

```bash
npm run lint
```
