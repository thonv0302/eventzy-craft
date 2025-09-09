module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  plugins: ["simple-import-sort"],
  rules: {
    // Enforce sorted imports
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports (e.g. polyfills, CSS)
          ["^\\u0000"],

          // React-related packages
          ["^react", "^next"],

          // Node.js builtins
          [`^(${require("module").builtinModules.join("|")})(/|$)`],

          // Packages (anything not starting with `@/` or relative paths)
          ["^@?\\w"],

          // Internal imports (@/ alias)
          ["^@(/.*|$)"],

          // Parent imports
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

          // Same-folder imports
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

          // Style imports
          ["^.+\\.s?css$"],
        ],
      },
    ],

    // Enforce sorted exports
    "simple-import-sort/exports": "error",

    // Turn off ESLint’s default conflicting rules
    "import/order": "off",
    "sort-imports": "off",
  },
};
