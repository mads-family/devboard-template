# API do Victor /

![Status](https://img.shields.io/badge/status-dev-blue)
![Lint](https://img.shields.io/badge/lint-passing-brightgreen)
![CI](https://github.com/mads-family/devboard-template/actions/workflows/victor.yml/badge.svg?branch=victor)


API REST básica feita com Node.js e PostgreSQL, containerizada com Docker.


## Stack utilizada

- Node.js (Express)
- PostgreSQL
- Docker + Docker Compose

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone <url-do-seu-fork>
cd apps/victor
```

### 2. Crie o arquivo `.env`

Copie o exemplo e ajuste as variáveis se necessário:

```bash
cp .env.example .env
```

### 3. Suba os containers com Docker Compose

```bash
docker-compose up --build
```

A API estará rodando em: [http://localhost:3000](http://localhost:3000)

---

## 🔍 Endpoints disponíveis

| Método | Rota            | Descrição                            |
|--------|------------------|--------------------------------------|
| GET    | `/healthcheck`   | Verifica se a API está online        |
| GET    | `/tasks`         | Lista as tarefas do banco PostgreSQL |

---

## 🧪 Testando a API

Você pode usar ferramentas como:

- [Postman](https://www.postman.com/)
- `curl` no terminal

Exemplo com `curl`:

```bash
curl http://localhost:3000/healthcheck
curl http://localhost:3000/tasks
```

---

## 📝 Contribuindo

Veja as instruções em [`CONTRIBUTING.md`](./CONTRIBUTING.md)

---

## 🧠 Observações

- O volume nomeado `dbdata` garante que o banco persista os dados mesmo após o container ser removido
- O script `init.sql` é executado automaticamente na primeira inicialização do banco

---
- Node.js + Express
- Axios
- Docker
- Docker Compose
