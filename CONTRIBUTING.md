# Contributing to Terminal Design Tokens

Thank you for your interest in contributing to Terminal Design Tokens! This document provides guidelines and instructions for contributing to this project.

## Design Token Source

The design tokens are managed in the [TechTrain Terminal Figma Community File](https://www.figma.com/community/file/1472050808130527580).

Since our current plan doesn't have access to Figma Variables API, we export tokens manually using the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/design-tokens) plugin.

## Development Workflow

### Prerequisites

- Node.js (version specified in `package.json` engines field)
- npm

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/terminal-design-tokens.git`
3. Install dependencies: `npm ci`

### Updating Tokens from Figma

1. Open the Design Tokens plugin in Figma
2. Select the `Export` tab
3. Check `Exclude extension property` and `Figma Variables`
4. Click the "Export" button to download the JSON file
5. Place the downloaded JSON file in the `tokens/` directory
6. Run `npm run build` to generate platform-specific tokens

![Design Tokens Settings](/image.png)

### Making Changes Directly

1. Create a new branch for your changes: `git checkout -b your-branch-name`
2. Make your changes to the token files in the `tokens/` directory
3. Build the project to test your changes: `npm run build`
4. Commit your changes using conventional commit messages

### Versioning and Changesets

We use [Changesets](https://github.com/changesets/changesets) to manage versions and changelogs. To document your changes:

1. Run `npx changeset` after making your changes
2. Follow the prompts to:
   - Select which packages to include in the changeset
   - Choose the type of version change (patch, minor, major)
   - Provide a description of your changes

This will create a new file in the `.changeset` directory that describes your changes.

### Pull Requests

1. Push your changes to your fork: `git push origin your-branch-name`
2. Open a pull request to the `main` branch of the original repository
3. Ensure your PR includes:
   - A clear description of the changes
   - Any relevant changeset files
   - Any necessary tests or documentation updates

## Release Process

Our release process is automated using GitHub Actions:

1. When PRs with changesets are merged into the `main` branch, a "Release PR" is automatically created or updated
2. This PR includes all pending changes with version bumps based on the changesets
3. When the Release PR is merged, packages are automatically published to npm with the new versions

## Design Token Guidelines

### Naming Conventions

- Use kebab-case for token names
- Use descriptive, meaningful names
- Group related tokens together with common prefixes

### Token Structure

- Follow the Style Dictionary format for token definitions
- Organize tokens by category (color, typography, spacing, etc.)
- Use proper semantic naming to indicate the purpose of each token

## Questions?

If you have any questions or need help, please:

1. Check existing issues to see if your question has been answered
2. Open a new issue for questions or discussions
3. Reach out to the maintainers if needed

Thank you for contributing to Terminal Design Tokens!
