# 🗓️ Semana 03 – Integração Contínua (CI)

## 🎯 Objetivo

- Automatizar a validação do seu código em cada push ou pull request
- Garantir que o projeto esteja sempre funcional com lint, build e testes

---

## ✅ Tarefas

- [ ] Criar workflow `ci.yml` em `.github/workflows/`
- [ ] Incluir etapas no CI:
  - [ ] Rodar lint (`eslint` ou `dotnet format`)
  - [ ] Build da sua aplicação
  - [ ] Gerar imagem Docker da sua API
  - [ ] Subir container da API e verificar `/healthcheck` com `curl`
- [ ] Garantir que o workflow rode em `push` e `pull_request`
- [ ] Adicionar badge de status do CI no seu `README.md`

---

## 💡 Extras

- Usar `docker-compose` no CI (caso seu app dependa do banco para subir)
- Adicionar `caching` para dependências:
  - `~/.nuget/packages` (C#)
  - `~/.npm` ou `node_modules` (Node.js)
- Fazer scan de segurança da imagem:
  - `trivy` → [https://aquasecurity.github.io/trivy/](https://aquasecurity.github.io/trivy/)
  - `snyk` → [https://snyk.io/](https://snyk.io/)
- Publicar imagem no Docker Hub usando GitHub Actions
- Rodar testes automatizados (caso tenha configurado)

---

## ℹ️ Observações

- O objetivo principal dessa semana é configurar um pipeline **mínimo e funcional**, focado em qualidade e estabilidade.
- A checagem de `/healthcheck` ajuda a validar se o container realmente sobe e responde corretamente no CI.
- Ao rodar o `docker-compose up`, certifique-se de expor a porta correta e aguardar o serviço subir antes do `curl`.

---

## 📚 Recursos

- [GitHub Actions para Node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)
- [GitHub Actions para .NET](https://learn.microsoft.com/en-us/dotnet/devops/github-actions-overview)
- [Introdução ao Trivy](https://trivy.dev/v0.64/getting-started/)
- [Como usar caching no GitHub Actions](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)

---

> 💬 **Dica:** Comece pequeno e vá incrementando. O importante é ter algo funcional no CI agora — o resto pode vir como extra ou em outras semanas.
