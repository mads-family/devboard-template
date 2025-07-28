# 🗓️ Semana 04 – Deploy Automatizado (CD) Local/Remoto

## 🎯 Objetivo

- Automatizar o deploy da sua aplicação via GitHub Actions
- Subir nova versão da sua API (e frontend, se quiser) após cada `push` na `main`
- Executar esse deploy **localmente ou em ambiente remoto (ex: VPS)** com Docker

---

## ✅ Tarefas

- [ ] Criar workflow `.github/workflows/deploy.yml`
  - [ ] Rodar **apenas em push para a branch `main`**
- [ ] Definir ambiente de staging (usando `.env.staging`, `docker-compose.staging.yml` ou ambos)
- [ ] Automatizar os passos:
  - [ ] Acessar o ambiente com SSH (ou simular local com `Makefile`)
  - [ ] Executar `docker-compose pull` e `docker-compose up -d`
  - [ ] Validar a aplicação via `curl /healthcheck`

---

## 💡 Extras

- Fazer deploy em uma VPS pessoal (ex: Oracle Free Tier, Fly.io, Railway, etc.)
- Usar `ngrok` ou `localtunnel` para testes de webhook com deploy local
- Automatizar deploy com Webhook simples (ex: usando `webhookd` ou Express)
- Configurar domínio customizado com HTTPS (se usar VPS)
- Documentar no seu `README` como configurar o ambiente de staging (ou VPS)

---

## ℹ️ Observações

- O deploy pode ser **totalmente local** (simulado com `make deploy` + Docker) ou **remoto** via SSH. Ambos servem para aprender os princípios de CD.
- O workflow de CD deve ser separado por pessoa, como na Semana 03.
- Ao rodar `docker-compose pull` e `up`, o GitHub Actions pode se conectar à máquina remota via SSH e executar esses comandos lá.
- Caso prefira **não expor uma VPS agora**, crie um Makefile com o alvo `deploy` que simula esses passos localmente — o importante é automatizar o fluxo.

---

## 📚 Recursos

- [Deploy via GitHub Actions + SSH](https://dev.to/aixart/simplifying-deployment-using-github-actions-and-ssh-for-quick-and-easy-updates-284j)
- [Ngrok para testes locais](https://ngrok.com/)
- [Fly.io (suporte para C#, JS, containers)](https://fly.io/)
- [Railway (deploy fácil via GitHub)](https://railway.app/)
- [Makefile para Devs](https://dev.to/gustavodfaguiar/como-utilizar-o-makefile-2oc)
- [Webhook simples em Node.js](https://github.com/adnanh/webhook)

---

> 💬 **Dica:** O foco aqui é aplicar o conceito de **entrega contínua**: atualizar automaticamente sua aplicação sempre que houver mudanças relevantes na `main`, com o mínimo de fricção.
