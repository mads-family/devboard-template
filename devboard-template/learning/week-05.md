# Semana 05 – Deploy Contínuo (CD) Local

## 🎯 Objetivo
- Automatizar o deploy da aplicação localmente usando CI/CD
- Ter um ambiente de staging que atualiza automaticamente após mudanças

## ✅ Tarefas

- [ ] Criar um novo workflow GitHub Actions (`deploy.yml`)
- [ ] Adicionar etapa de deploy local (ex: SSH para VPS ou restart do container)
- [ ] Usar `docker-compose` com `.env.staging` para configuração
- [ ] (Extra) Usar tags ou branches para separar ambientes (dev/staging)

## 🔧 Recursos sugeridos
- https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
- https://docs.github.com/en/actions/deployment
- https://www.digitalocean.com/community/tutorials/how-to-set-up-passwordless-ssh-login