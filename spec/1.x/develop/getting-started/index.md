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
npm install @devprotocol/hashi --save
# or yarn
yarn add @devprotocol/hashi
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
  @include hs-utils.colors();
  @include hs-utils.shapes();
  @include hs-utils.typography();
}
```
This setup gets the design system initialized, gets the button component styles rendered, and the utility classes ready.

To see more `hashi.init()` options, visit the [initializer API page](../api/initializer.md).

# Complete Setups
## PurgeCSS Setup (recommended)
We recommend having a css purger (like purgecss) integrated into your app's workflow to purge all unused css from the design system (specifically the built-in utility classes).

### Installation
```shell
# NPM
npm install @devprotocol/hashi --save
npm install purgecss --save-dev

# Yarn
yarn add @devprotocol/hashi --save
yarn add --dev purgecss --save
```

### Instantiation
```scss
// FILE: style.scss

// Include design system initializer.
@use 'path/to/@devprotocol/hashi';
// Include all components here.
@use 'path/to/@devprotocol/hashi/hs-component';

@include hashi.init() {
  // Make sure you wrap the components 
  // in the hashi initializer mixin.
  @include hs-component.render();
}
```
Below is the configuration for purgecss as a standalone plugin you can integrate in an application.
```javascript
// FILE: purgecss.config.js

module.exports = {
  // These are the pages you want to reference.
  content: ['index.html'],
  // The compiled CSS file/s from the scss file/s.
  css: ['style.css']
}
```
For configurations for specific project types and integrations for specific build tools, visit the appropriate links below:

**BUILD TOOLS**
- [PostCSS](https://purgecss.com/plugins/postcss.html)
- [Webpack](https://purgecss.com/plugins/webpack.html)
- [Gulp](https://purgecss.com/plugins/gulp.html)
- [Grunt](https://purgecss.com/plugins/grunt.html)

**FRAMEWORKS**
- [React](https://purgecss.com/guides/react.html)
- [Next](https://purgecss.com/guides/next.html)
- [Gatsby](https://purgecss.com/guides/gatsby.html)
- [Vue](https://purgecss.com/guides/vue.html)
- [Nuxt](https://purgecss.com/guides/nuxt.html)
- [Razzle](https://purgecss.com/guides/razzle.html)
- [WordPress](https://purgecss.com/guides/wordpress.html)