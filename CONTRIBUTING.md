# Contributing to GitHub Stats API

First off, thank you for considering contributing to GitHub Stats API! It's people like you that make the open-source community such an amazing place to learn, inspire, and create.

## How Can I Contribute?

### Reporting Bugs

- **Check if the bug has already been reported** by searching the [Issues](https://github.com/sachinksamad1/github-stats-api/issues) page.
- If you can't find an open issue addressing the problem, **open a new one**.
- Use the **Bug Report** template to provide as much detail as possible.

### Suggesting Enhancements

- **Check if the enhancement has already been suggested**.
- **Open a new issue** using the **Feature Request** template.
- Explain why this enhancement would be useful to most users.

### Pull Requests

1. **Fork the repository** and create your branch from `main`.
2. **Install dependencies**: `npm install`
3. **Make your changes**.
4. **Ensure the test suite passes**: `npm test`
5. **Format your code**: `npm run format`
6. **Lint your code**: `npm run lint`
7. **Submit a pull request** with a clear description of your changes.

## Style Guidelines

### Code Style

- We use [Prettier](https://prettier.io/) for formatting and [ESLint](https://eslint.org/) for linting.
- Prefer functional programming patterns where appropriate.
- Keep functions small and focused on a single responsibility.
- Use TypeScript strictly.

### Commit Messages

We follow a simple commit convention:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor:` for code changes that neither fix a bug nor add a feature
- `test:` for adding missing tests or correcting existing tests
- `chore:` for updating build tasks, package manager configs, etc.

## Development Workflow

```bash
git checkout -b feat/your-feature
npm run dev
npm test        # Run tests
npm run format  # Format files with Prettier
npm run lint    # Lint files with ESLint
```

## Community

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
