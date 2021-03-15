# `@eduotech/config` [![npm](https://img.shields.io/npm/v/@eduotech/config.svg?style=flat-square)](https://www.npmjs.com/package/@eduotech/config)

Sharable configurations files for tools that I use.

## Usage

### [eslint](https://github.com/eslint/eslint)

Install the following dependencies.

```sh
npm install eslint @eduotech/config @rushstack/eslint-patch --save-dev
```

Then, create a `.eslintrc.js` file in your project root with this content:

```javascript
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [require.resolve('@eduotech/config/eslint')],
};
```

### [prettier](https://github.com/prettier/prettier)

Use as is in your `prettier.config.js`.

```javascript
module.exports = require('@eduotech/config/prettier');
```

## License

MIT
