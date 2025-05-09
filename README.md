# TechTrain Terminal Design Tokens

[![npm version](https://badge.fury.io/js/%40techtrain%2Fterminal-design-tokens.svg)](https://badge.fury.io/js/%40techtrain%2Fterminal-design-tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Design tokens for TechTrain's design system "Terminal". This package uses [Style Dictionary](https://amzn.github.io/style-dictionary) to transform tokens defined in JSON into multiple platform outputs.

🎨 [View in Figma](https://www.figma.com/community/file/1472050808130527580/techtrain-terminal-design-system) - Explore our design system in Figma

## Features

- Consistent design tokens across platforms
- JavaScript/TypeScript support
- CSS/SCSS variables
- Semantic naming conventions
- Supports color, typography, sizing, and spacing tokens

## Installation

```bash
npm i @techtrain/terminal-design-tokens
```

## Usage

### JavaScript/TypeScript

```typescript
import DesignToken from '@techtrain/terminal-design-tokens';
```

### CSS

```css
/* Import CSS variables */
@import '@techtrain/terminal-design-tokens/css';

/* Use in your CSS */
.element {
  color: var(--tt-color-semantic-primary);
  padding: var(--tt-spacing-md);
}
```

### SCSS

```scss
/* Import SCSS variables */
@import '@techtrain/terminal-design-tokens/scss';

/* Use in your SCSS */
.element {
  color: $tt-color-semantic-primary;
  padding: $tt-spacing-md;
}
```

## Contributing

For information on how to contribute to this project, please see our [Contributing Guide](CONTRIBUTING.md).

## License

MIT
