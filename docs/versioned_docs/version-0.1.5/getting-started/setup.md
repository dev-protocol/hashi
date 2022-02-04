---
id: setup
title: Setup
slug: /getting-started/setup
sidebar_position: 2
---
# Setup
This portion of the documentation will show you how to integrate Dev Protocol's design system into your application.

For almost every application you'll be developing with the Hashi Design System, we recommend you head over to our [recommended setup](#recommended-setup).

## Quick Setup
## Install from a CDN
### Installation
Add this link tag in your project's `<head></head>` tags
```html
<!-- FILE: index.html -->

<link rel="stylesheet" href="https://unpkg.com/@devprotocol/hashi@latest/main.css">
```
### Instantiation
You can configure components using a separate CSS file, and using Hashi's built-in CSS custom properties API. The custom properties API can be found in the component's documentation.
```css
/* FILE: style.css */

.my-button-theme {
    --hs-button-fill: red;
    --hs-button-ink: blue;
    --hs-button-border: green;
}
```

## Install as a package
### Installation
Run the commands below in your terminal.

```shell
# NPM
npm install @devprotocol/hashi

# Yarn
yarn add @devprotocol/hashi
```

### Instantiation
Instantiate the design system in your SCSS stylesheet.

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