# 🧑‍💻 Contribuindo para o Projeto DevBoard

Obrigado por contribuir! Para manter a consistência e qualidade do projeto, siga as orientações abaixo.

---

## 📂 Branches

- `main`: código de produção (sempre estável)
- `dev`: código em desenvolvimento
- `feat/nome-da-feature`: novas funcionalidades
- `fix/descricao-do-bug`: correções de bugs
- `docs/descricao`: mudanças em documentação
- `chore/descricao`: ajustes técnicos (ex: configuração, testes)

---

## 📝 Commits (Conventional Commits)

Utilize o padrão [Conventional Commits](https://www.conventionalcommits.org/).

### Formato:

(escopo): mensagem curta

### Exemplos:

feat(api): adicionar rota GET /tasks
fix(docker): corrigir nome do volume
docs(readme): adicionar instruções de uso
chore: instalar eslint e configurar pre-commit


### Tipos comuns:

- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: alterações na documentação
- `style`: formatação, sem alteração de código
- `refactor`: refatoração de código
- `test`: testes
- `chore`: tarefas técnicas (build, configs, etc)

---

## 💡 Fluxo de contribuição

1. Crie sua branch a partir da `dev`:

git checkout dev
git checkout -b feat/nova-feature


2. Faça suas alterações e confirme se:
- O projeto sobe com `docker-compose up`
- As rotas `/tasks` e `/healthcheck` funcionam

3. Faça commit no padrão descrito

4. Abra um Pull Request para a branch `dev`

5. Aguarde revisão ou merge
