# @techtrain/terminal-design-tokens

## 0.2.0

### Minor Changes

- [#17](https://github.com/TechBowl-japan/terminal-design-tokens/pull/17) [`fe954c2`](https://github.com/TechBowl-japan/terminal-design-tokens/commit/fe954c2e42a261eb8c9ce388f6f34c8401a82c82) Thanks [@valbeat](https://github.com/valbeat)! - Add exports field to package.json to support modern import patterns. This enables direct imports of CSS and SCSS files via subpaths (e.g. /css, /scss) and makes the package more compatible with modern bundlers and frameworks.

## 0.1.5

### Patch Changes

- [#15](https://github.com/TechBowl-japan/terminal-design-tokens/pull/15) [`fdcae63`](https://github.com/TechBowl-japan/terminal-design-tokens/commit/fdcae636d2867a142c328a219cd1fd007e7650b8) Thanks [@valbeat](https://github.com/valbeat)! - ci: add test workflow for pull requests
  - Add GitHub Actions test workflow to verify builds on PRs
  - Ensure tokens compile successfully before merging to main
  - Complement existing release workflow with PR-specific checks

## 0.1.4

### Patch Changes

- [#13](https://github.com/TechBowl-japan/terminal-design-tokens/pull/13) [`17dafe1`](https://github.com/TechBowl-japan/terminal-design-tokens/commit/17dafe1b21c16e7f79a6e25a79dda6181a63d882) Thanks [@valbeat](https://github.com/valbeat)! - docs: add Figma link to README
  - Add direct link to Figma design system at the top of README

## 0.1.3

### Patch Changes

- [#11](https://github.com/TechBowl-japan/terminal-design-tokens/pull/11) [`73aa457`](https://github.com/TechBowl-japan/terminal-design-tokens/commit/73aa4578d126ca01ab508b36ecf5b52f2d463b43) Thanks [@valbeat](https://github.com/valbeat)! - feat: configure GitHub-specific changelog for better integration
  - Add `@changesets/changelog-github` dependency
  - Configure Changeset to use GitHub-specific changelog format
  - Link to GitHub issues and PRs in changelog entries

## 0.1.2

### Patch Changes

- 2762817: chore: improve build process
  - Replace `prepare` with `prepublishOnly` script to avoid unnecessary builds
  - Add explicit build step in GitHub Actions workflow

## 0.1.1

### Patch Changes

- 648807d: chore: add CODEOWNERS file to automate PR reviews
- c942d60: docs: Move development guide from README to CONTRIBUTING

## 0.1.0

### Minor Changes

- 82ffaf4: Add new design tokens and fix typo:
  - Added techtrain theme colors
  - Added semantic theme tokens
  - Added spacing tokens
  - Fixed typo: "boby" → "body"

## 0.0.5

### Patch Changes

- 12189a9: Add version option to changesets/action in GitHub workflow

## 0.0.4

### Patch Changes

- 480c58e: Add CONTRIBUTING.md with Changeset guidelines

## 0.0.3

### Patch Changes

- ce5acab: use change set
