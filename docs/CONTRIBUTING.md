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
By submitting a contribution to this project, you agree to the terms below.

## 1. Definitions

"You" means the person or legal entity submitting a contribution.

"Contribution" means any code, documentation, translation, design, asset, issue patch, pull request, or other material submitted by you to this project.

"Project" means Rinthy and its related source code, documentation, releases, and project materials.

"Maintainer" means the project owner or authorized maintainers of Rinthy.

## 2. Copyright

You keep the copyright to your contribution.

You represent that you are legally entitled to submit the contribution and grant the license in this agreement.

If your employer or another party owns rights to your contribution, you represent that you have permission to submit it under this agreement.

## 3. License Grant

You grant the Maintainer a perpetual, worldwide, non-exclusive, royalty-free, irrevocable license to use, reproduce, modify, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute your contribution as part of the Project.

This license allows the Maintainer to license and distribute the Project and your contribution under the Project's current license, GNU General Public License version 3, and under compatible future project licensing chosen by the Maintainer.

## 4. Patent Grant

If your contribution includes patentable material, you grant the Maintainer and downstream recipients a perpetual, worldwide, non-exclusive, royalty-free, irrevocable patent license to make, use, sell, offer for sale, import, and otherwise run, modify, and distribute your contribution as part of the Project.

## 5. Originality

You confirm that your contribution is your original work, or that you have sufficient rights to submit it under this agreement.

You must not submit material that you know violates another person's copyright, patent, trademark, trade secret, license, or other rights.

## 6. No Warranty

Your contribution is provided "as is", without warranty of any kind.

## 7. Pull Request Signature

To sign this agreement for a pull request, comment exactly:

```text
I have read the CLA Document and I hereby sign the CLA
```

Once signed, the CLA Assistant workflow records the signature for future pull requests.

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


