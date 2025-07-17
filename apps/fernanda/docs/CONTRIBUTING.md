# Contributing Guide

## 📋 Commit Standards

This project follows **Conventional Commits** to maintain a clear and consistent history.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types

| Type       | Description                         |
| ---------- | ----------------------------------- |
| `feat`     | New feature                         |
| `fix`      | Bug fix                             |
| `docs`     | Documentation changes               |
| `style`    | Formatting, missing semicolons, etc |
| `refactor` | Code refactoring                    |
| `test`     | Adding or fixing tests              |
| `chore`    | Maintenance tasks                   |

## 🌿 Branch Standards

### Naming Convention

```
<type>/<short-description>
```

### Branch Types

| Type        | Description       |
| ----------- | ----------------- |
| `feat/`     | New feature       |
| `fix/`      | Bug fix           |
| `docs/`     | Documentation     |
| `refactor/` | Refactoring       |
| `chore/`    | Maintenance tasks |

## 🔄 Contribution Flow

### 1. Create Branch

```bash
# Start from main branch
git checkout main
git pull origin main

# Create new branch
git checkout -b feat/my-new-feature
```

### 2. Make Commits

```bash
# Make changes and commit
git add .
git commit -m "feat(backend): add user authentication endpoint"
```

### 3. Push and Pull Request

```bash
# Push the branch
git push origin feat/my-new-feature

# Create Pull Request on GitHub
# Use descriptive title and fill template
```

### 4. Code Review

- Wait for review
- Make adjustments if needed
- Merge after approval

## 📝 General Rules

- **Always** create a branch for new features
- **Never** commit directly to `main`
- **Use** conventional commits
- **Test** locally before pushing
- **Document** significant changes
- **Keep** commits small and focused
