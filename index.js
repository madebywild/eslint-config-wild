
module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "quotes": ["warn", "double", {
      allowTemplateLiterals: true
    }],
    "indent": [
      "warn",
      2, {
        SwitchCase: 1
      }
    ],
    "semi": [
      "warn",
      "always"
    ],
    "max-len": 0,
    "no-console": [
      1, {
        allow: [
          "warn",
          "error"
        ]
      }
    ],
    "arrow-parens": 0,
    "arrow-body-style": [
      "error",
      "as-needed", {
        requireReturnForObjectLiteral: true
      }
    ],
    "comma-dangle": 0,
    "space-before-function-paren": [
      "warn",
      "always"
    ],
    "block-spacing": 0,
    "object-curly-spacing": 0,
    "no-param-reassign": [
      "error", {
        props: false
      }
    ],
    "padded-blocks": 0,
    "class-methods-use-this": 0,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-use-before-define": 0,
    "prefer-template": "warn",
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "no-multi-assign": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-closing-tag-location": 0,
    "import/imports-first": 0,
    "import/extensions": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2
  }
};
