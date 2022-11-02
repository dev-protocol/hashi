---
title: Getting Started
slug: /develop/getting-started
displayed_sidebar: develop
---
Hashi is [open-sourced on GitHub](https://github.com/dev-protocol/hashi-web) and is [available on npm](https://www.npmjs.com/package/@devprotocol/hashi).

## Installation
It is recommended that you install the library as a package rather than pulling it off of a cdn.
```sh
# npm
$ npm install @devprotocol/hashi sass --save

# or yarn
$ yarn add @devprotocol/hashi sass
```

## Instantiation
Here's a quick instantiation example:
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-button';
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hashi.init() {
  // Components
  @include hs-button.render();
  
  // Utilities
  @include hs-utils.layout();
  @include hs-utils.color();
  @include hs-utils.shape();
  @include hs-utils.typography();
}
```
This setup gets the design system initialized, gets the button component styles rendered, and the utility classes ready.

To see more `hashi.init()` options, visit the [initializer API page](../api/initializer.md).

## Resources
If you don't know how to set up a sass build process in your project, please refer to the project's framework
documentation and search for how to use sass inside your framework. Otherwise, we recommend checking out
using [Gulp](https://gulpjs.com) as your build tool, and follow [this tutorial](https://github.com/dlmanning/gulp-sass#usage).

### Purging unused CSS
We recommend using [Purgecss](https://purgecss.com) as your CSS purger. The hashi library also provides a custom configuration for purgecss. To use it, write the following in your `purgecss.config.js` file.

```js
const purgecss = require('@fullhuman/postcss-purgecss');
const hashi = require('@devprotocol/hashi/config/purgecss');

module.exports = {
  plugins: [
    purgecss(hashi.purgeConfig([
      /**
       * File extensions you want to inspect
       * (e.g. .html, .jsx/tsx, .php)
      */
    ]))
  ]
};
```