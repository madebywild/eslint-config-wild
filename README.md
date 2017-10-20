# eslint-config-wild

To use it in your project, you only need to install this package (it has eslint and all other things you need listed as a dependecy in it):

```bash
npm i -D eslint-config-wild
```

Then, edit your projects `package.json`:

```json
"eslintConfig": {
  "extends": "wild"
}
```

Then you have a config that your editor-plugin of choice can read and if you want to fire it via CLI, here are a few suggestions:

```json
"scripts": {
  "lint": "npm run lint:js",
  "lint:js": "npm run lint:eslint -- . ",
  "lint:eslint": "eslint --ignore-path .gitignore",
  "lint:staged": "lint-staged"
},
"lint-staged": {
  "*.js": "lint:eslint"
},
```
