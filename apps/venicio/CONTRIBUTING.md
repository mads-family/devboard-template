## Conventional Commits

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) guidelines.

In short, we apply the following rules when committing:

1. **feat:** introduces a new feature (correlates with MINOR in Semantic Versioning).
2. **fix:** patches a bug (correlates with PATCH in Semantic Versioning).
3. **BREAKING CHANGE:** a commit with a BREAKING CHANGE footer, or a `!` after the type, introduces a breaking API change (correlates with MAJOR in Semantic Versioning).

### Examples

- `feat: add TaskController`
- `fix: refactor TaskController removing unused methods`
- `feat!: add new page to show task items`

---

## Branches

When creating a new branch, use meaningful names and keep the focus of the branch clear.
For example, a branch for adding a new feature should only contain that feature.

Branches should follow this pattern, using `-` to separate words:

- **feature:** When adding a new feature
  `feature/new-controller`
- **fix:** When fixing bugs
  `fix/correcting-endpoints`
- **hotfix:** For urgent production fixes
  `hotfix/urgent`
- **chore:** For maintenance tasks
  `chore/updating-dependencies`
- **release:** For preparing a new version
  `release/v1.2`

---

## Contribution rules

This project is open for contributions.
Please follow these guidelines:

1. Create your branch from `main`.
2. Name your branch following the patterns above.
3. Before opening a Pull Request:

   - Make sure the code passes linters (`npm run lint`, `dotnet format`).
   - Add or update tests if needed.
   - Update the `README.md` if there are relevant changes.

4. Open a Pull Request to `main` and request a review.
5. After approval, merge using **Squash and merge** to keep a clean commit history.

---
