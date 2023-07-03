---
title: Advanced Theming
slug: /develop/theming/advanced
displayed_sidebar: develop
---
Hashi also allows you to create more sophisticated theming solutions. This theming method allows you to make your theme portable to all projects that run hashi as their styling framework.

The way we treat this concept is to think of the theme like JSON data. Every component has the `$theme` parameter in the `with ()` keyword. It takes in a map of the theme properties. The theme properties are **always** the same as the ones defined in the [theme variable theming](index.md#theme-variables).

```scss
// node_modules/@example-organization/haru/_index.scss
$main-theme: (
  'accent': 'hana',
  'accent-dark': 'hana',
  'surface': 'ume',
  'extend': (
    'ume': (
      200: #f8dacb,
      300: #ffd0b4,
      400: #ffc09c,
      600: #c88762,
      'ink': #3c1f11
    ),
    'hana': (
      200: #ffb8d7,
      300: #ff77a9,
      400: #ec407a,
      600: #b4004e,
      'ink': #ffffff
    )
  ),
);

$button-theme: (
  'padding': ('md', 'lg'),
  'radius': 'pill',
);
```

Once defined, you can use it in your project like so:

```scss
// main.scss
@use 'node_modules/@example-organization/haru'; // the map-based theme in a package

// or...

@use './haru.theme' as haru; // the map-based theme in a file

@use 'node_modules/@devprotocol/hashi' with (
  $theme: haru.$global-theme
);
@use 'node_modules/@devprotocol/hashi/hs-button' with (
  $theme: haru.$button-theme
);

@include hashi.init {
  @include hs-button.render();
}
```