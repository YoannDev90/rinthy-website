# Contributing to Rinthy

Thank you for your interest in contributing to Rinthy! This document will help you get started.


## Community

- **Discord:** [https://discord.gg/wzXpC2C6Uu](https://discord.gg/wzXpC2C6Uu)
- **GitHub:** [https://github.com/imsawiq/Rinthy](https://github.com/imsawiq/Rinthy)


## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [GitHub Issues](https://github.com/imsawiq/Rinthy/issues).
2. If not, open a new issue with:
   - A clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Device/OS information

### Suggesting Features

1. Open a [GitHub Discussion](https://github.com/imsawiq/Rinthy/discussions) or an Issue with the `enhancement` label.
2. Describe the feature and why it would be useful.
3. Be open to feedback and discussion.

### Submitting Code

1. **Fork** the repository.
2. Create a **feature branch** (`git checkout -b feature/my-feature`).
3. Make your changes.
4. **Test** your changes locally.
5. Commit with a clear message (`git commit -m "Add feature X"`).
6. **Push** to your fork (`git push origin feature/my-feature`).
7. Open a **Pull Request** with a description of your changes.
8. Agree to the [CLA](https://github.com/EmanuelPlays/rinthy-website/blob/main/.github/workflows/cla.yml)
9. To sign the [CLA](https://github.com/EmanuelPlays/rinthy-website/blob/main/.github/workflows/cla.yml) commment "I agree to sign the CLA"

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

This starts a local Vite dev server at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Publishing to GitHub Packages

Publishing is handled automatically via GitHub Actions when a release is created. See [GITHUB_PACKAGES.md](./GITHUB_PACKAGES.md) for details.


## Code Style

- Use **TypeScript** for all new code.
- Follow the existing component structure.
- Use **Tailwind CSS** for styling.
- Keep components small and reusable.
- Use `framer-motion` for animations consistently.

## Translation Guidelines

If you're adding a new language:

1. Add the language key to `src/i18n/translations.ts`.
2. Translate all strings in the new language section.
3. Update the `Language` type if needed.
4. Test the UI to ensure text fits properly.

## Commit Message Convention

Use clear and descriptive commit messages:

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, no code change
- `refactor:` — code restructuring
- `test:` — adding tests
- `chore:` — maintenance tasks

Example: `feat: add Italian language support`

## License

By contributing, you agree that your contributions will be licensed under the project's license.

## Questions?

Join our [Discord](https://discord.gg/wzXpC2C6Uu) and ask in the `#chat` channel!
