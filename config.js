// Path constants for better maintainability
const PRIMITIVE_SIZE_OPACITY_PATH = ['primitive size', 'opacity'];

// Helper function to check if a path starts with a given prefix
function pathStartsWith(path, prefix) {
  if (!Array.isArray(path) || path.length < prefix.length) return false;
  return prefix.every((seg, i) => path[i] === seg);
}

// Helper function to check if a token is an opacity token
const isOpacityToken = (token) => {
  return pathStartsWith(token.path, PRIMITIVE_SIZE_OPACITY_PATH);
};

module.exports = {
  hooks: {
    transforms: {
      'size/px-except-opacity': {
        type: 'value',
        filter: (token) => {
          // Apply to dimension tokens but NOT opacity tokens
          return token.type === 'dimension' && !isOpacityToken(token);
        },
        transform: (token) => {
          return parseFloat(token.value) + 'px';
        }
      },
      'opacity/decimal': {
        type: 'value',
        filter: isOpacityToken,
        transform: (token) => {
          // Convert values like 10, 20, 30 to 0.1, 0.2, 0.3
          const value = parseFloat(token.value);
          return value / 100;
        }
      }
    }
  },
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      buildPath: "dist/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables"
        },
        {
          destination: "variables.scss",
          format: "scss/variables"
        }
      ],
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "opacity/decimal",
        "size/px-except-opacity",
        "color/css"
      ]
    },
    js: {
      buildPath: "dist/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6"
        },
        {
          destination: "variables.d.ts",
          format: "typescript/es6-declarations",
          options: {
            declarationType: "declare"
          }
        }
      ],
      transforms: [
        "attribute/cti",
        "name/pascal",
        "opacity/decimal",
        "size/px-except-opacity",
        "color/hex"
      ]
    }
  }
};