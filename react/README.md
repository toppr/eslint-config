# React ESLint Configuration

This directory contains settings specific to [React](https://facebook.github.io/react/).

It inherits base settings from `@toppr/eslint-config/es6` and [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

## Usage

Install the peer dependencies [babel-eslint](https://github.com/babel/babel-eslint) and [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react):

```sh
$ npm install --save-dev babel-eslint eslint-plugin-react
```

Add the following to your project's `.eslintrc`:

```json
{
  "extends": "@toppr/eslint-config/react"
}
```
