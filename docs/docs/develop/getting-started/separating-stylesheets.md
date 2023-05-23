---
title: Separating Stylesheets
slug: /develop/getting-started/separating-stylesheets
displayed_sidebar: develop
---
One of the most common architecture when it comes to the style file system is separating the css files into sizeable
chunks. Vue and css modules does this really well.

Hashi provides a toggle for these kinds of situations. The `$modular-mode` variable disables all token, key, and
breakpoint validations for you to be able to use tokens in separate files.

```scss
@use 'node_modules/@devprotocol/hashi' with (
  $modular-mode: true
);
```

By default, `$modular-mode` is set to `false`. Set it to `true` to use it.

You do need to declare the `$modular-mode: true` in every separated style file, or else it will throw an error for
invalid tokens, keys, and breakpoints.

Now you can enjoy separating styling concerns!

#### Example

```scss
// main.scss
@use 'node_modules/@devprotocol/hashi' with ($modular-mode: true);

@include hashi.init();
```

```vue
<!-- HSComponent.vue -->
<template>
  ...
</template>

<style lang="scss">
@use 'node_modules/@devprotocol/hashi' with ($modular-mode: true);

.hs-component {
  @include hashi.color-fill('component', 'accent-400');
}
</style>
```
