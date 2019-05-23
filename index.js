
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
    "no-plusplus": 0,
    "prefer-destructuring": 0,
    "no-unused-vars": 1,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "no-continue": 0,
    "comma-dangle": [
      "warn",
      "always-multiline"
    ],
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "block-spacing": 0,
    "object-curly-spacing": 0,
    "object-curly-newline": 0,
    "no-param-reassign": [
      "error", {
        props: false
      }
    ],
    "padded-blocks": 0,
    "class-methods-use-this": 0,
    "newline-per-chained-call": 0,
    "lines-between-class-members": ["warn", "always"],
    "no-confusing-arrow": 0,
    "no-use-before-define": 0,
    "prefer-template": "warn",
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "no-multi-assign": 0,
    "react/no-danger": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-closing-tag-location": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-child-element-spacing": 2,
    "react/jsx-max-props-per-line": [1, { "when": "multiline" }],
    "react/jsx-space-before-closing": 1,
    "import/imports-first": 0,
    "import/extensions": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "import/no-anonymous-default-export": ["error", {
      "allowArray": true,
      "allowArrowFunction": true,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": true,
      "allowCallExpression": true,
      "allowLiteral": true,
      "allowObject": true
    }],
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/aria-activedescendant-has-tabindex": 0,
    "jsx-a11y/aria-props": 0,
    "jsx-a11y/aria-proptypes": 0,
    "jsx-a11y/aria-role": 0,
    "jsx-a11y/aria-unsupported-elements": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/html-has-lang": 0,
    "jsx-a11y/iframe-has-title": 0,
    "jsx-a11y/img-redundant-alt": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "jsx-a11y/no-access-key": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/no-distracting-elements": 0,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
    "jsx-a11y/no-noninteractive-tabindex": 0,
    "jsx-a11y/no-onchange": 0,
    "jsx-a11y/no-redundant-roles": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/role-has-required-aria-props": 0,
    "jsx-a11y/role-supports-aria-props": 0,
    "jsx-a11y/scope": 0,
    "jsx-a11y/tabindex-no-positive": 0,
    "react/sort-comp": 0,
    "no-mixed-operators": 0,
    "function-paren-newline": 0,
  }
};
