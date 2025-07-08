# Semana 01 – Estrutura Base + Docker Compose

## 🎯 Objetivo

- Criar a estrutura base para o projeto `devboard`
- Rodar localmente: frontend + backend + banco
- Preparar ambiente de desenvolvimento containerizado com `docker-compose`

## ✅ Tarefas

- [ ] Clonar o repositório `devboard-template`
- [ ] Criar sua pasta em `/apps/{seu_nome}/`
- [ ] Iniciar o backend com estrutura mínima (hello world)
- [ ] Criar `Dockerfile` funcional para sua API
- [ ] Criar `docker-compose.yml` contendo:
  - [ ] Sua API
  - [ ] PostgreSQL
  - [ ] Frontend simples (estático)
  - [ ] Configurar o volume para rodar `infra/init.sql` no banco
- [ ] Rodar `docker-compose up` e validar conexão com o banco
- [ ] Criar rota `GET /tasks` que busca dados do banco de dados
- [ ] Criar rota `GET /healthcheck` que responde com status da aplicação

## 💡 Extras

- Criar volume nomeado para persistência do banco de dados
- Adicionar `.env` para variáveis como `DB_HOST`, `PORT`, etc.
- Usar `curl` ou Postman/Insomnia para validar os endpoints da sua API
- Fazer logs simples na API (ex: quando `/tasks` for acessada)

## ℹ️ Observações

- A rota /healthcheck serve para verificar se a aplicação está de pé. Em DevOps, ela é usada por ferramentas de monitoramento, orquestração (como Docker/K8s) e load balancers.
- Exemplo de resposta: `{ status: "ok", uptime: 123.4 }`
- A ideia da `/tasks` é já simular o comportamento da API futura: consumir, transformar e devolver algo pro front. Mas por enquanto, os dados podem ser mockados localmente no seu backend.

## 📚 Recursos

- [Docker para Node.js](https://docs.docker.com/guides/nodejs/containerize/)
- [Docker para C#](https://learn.microsoft.com/en-us/dotnet/core/docker/build-container)
- [Docker Compose](https://docs.docker.com/compose/)
