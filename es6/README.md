# ES6 ESLint Configuration

This directory contains settings specific to ES6/ECMAScript 2015.

It inherits base settings from `@toppr/eslint-config`.

## Usage

Install the peer dependency [babel-eslint](https://github.com/babel/babel-eslint):

```sh
$ npm install --save-dev babel-eslint
```

Add the following to your project's `.eslintrc`:

```json
{
  "extends": "@toppr/eslint-config/es6"
}
```
