# 🗓️ Semana 02 – Organização e Padronização

## 🎯 Objetivo

- Estabelecer boas práticas de estrutura, automação e colaboração
- Criar base para consistência e produtividade no time

---

## ✅ Tarefas

- [ ] Definir e adotar um padrão de **branches** e **commits** (ex: Conventional Commits)
- [ ] Criar um arquivo `CONTRIBUTING.md` com:
  - [ ] Regras de commit
  - [ ] Formato de branch
  - [ ] Fluxo mínimo de contribuição
- [ ] Criar `README.md` com instruções de uso locais
- [ ] Adicionar `.editorconfig` na raiz do projeto (compatível com C# e JS/TS)
- [ ] Criar e documentar um script de lint ou format:
  - [ ] JS: `npm run lint` ou `eslint .`
  - [ ] C#: `dotnet format`
- [ ] Criar arquivo `.env.example` com as variáveis necessárias para rodar a API e/ou frontend localmente
- [ ] Configurar pre-commit para rodar validações locais:
  - [ ] Lint ou format
  - [ ] Arquivos obrigatórios (README, Dockerfile, etc)

---

## 💡 Extras

- Criar `Makefile` com comandos padronizados (`up`, `lint`, `format`, `dev`, `build`, etc)
- Criar script de teste de rota `/healthcheck` usando `curl` ou bibliotecas de teste
- Adicionar badge de status nos READMEs (build, lint, etc)
- Definir convenção mínima de nomes para containers/serviços

---

## 📚 Recursos

- [Conventional Commits](https://www.conventionalcommits.org/)
- [EditorConfig](https://editorconfig.org/)
- [Pre-commit hooks](https://pre-commit.com/)
- [ESLint para JS/TS](https://eslint.org/)
- [`dotnet format`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-format)
- [Makefile básico para Devs](https://dev.to/gustavodfaguiar/como-utilizar-o-makefile-2oc)

---

> 💬 **Dica**: Cada pessoa pode escolher ferramentas específicas para sua linguagem, mas os comandos (ex: `make lint`, `npm run lint`, `dotnet format`) devem ser documentados e fáceis de rodar para todos.
