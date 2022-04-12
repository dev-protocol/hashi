---
title: Gradual Adoption
slug: /develop/gradual-adoption
displayed_sidebar: develop
---
Hashi lets you adopt the design system incrementally. This means that you can start with the most basic of units in the full design system, and gradually adopt the full design system somewhere down the line.

We know that most of the Dev Protocol project styling is tailwind-based, so we've curated a finite (yet extendable) set of tokens based on the Hashi design guidelines.

In your project's `tailwind.config.js` file, write the code snippet below:

```js
module.exports = {
  presets: [require('@devprotocol/hashi/gradual')],
  theme: {
    extend: { ... }
  }
}
```

And to load the fonts, include the font pack in your css file...

```css
/* main.css */
@import 'node_modules/@devprotocol/hashi/gradual/font-pack.css';
```
Or into the project's index.js file directly.
```js
// index.js
import '@devprotocol/hashi/gradual/font-pack.css';
```