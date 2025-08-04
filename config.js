module.exports = {
  hooks: {
    transforms: {
      'size/px-except-opacity': {
        type: 'value',
        filter: (token) => {
          // Apply to dimension tokens but NOT opacity tokens
          // Check specifically for primitive size opacity path
          const isOpacity = token.path && 
                           token.path[0] === 'primitive size' && 
                           token.path[1] === 'opacity';
          return token.type === 'dimension' && !isOpacity;
        },
        transform: (token) => {
          return parseFloat(token.value) + 'px';
        }
      },
      'opacity/decimal': {
        type: 'value',
        filter: (token) => {
          // Match tokens that are specifically in primitive size opacity path
          // This is more specific than just checking if path includes 'opacity'
          return token.path && 
                 token.path[0] === 'primitive size' && 
                 token.path[1] === 'opacity';
        },
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