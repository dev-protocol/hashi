---
title: Basic Theming
slug: /develop/theming 
displayed_sidebar: develop
---
Hashi provides two simple theme systems that allow you to easily change different properties of your components like color, shape, typography, and layout.

### Theme Variables
Theme variables are the most basic way to change the look and feel of your components. They are defined in the importing file itself for easy access to modify the theme.

```scss
@use 'node_modules/@devprotocol/hashi' with (
  $primary: 'hana',
  $accent: 'ume',
  $supertitle: (
    'family': ('Playfair Display', serif)
  ),
  $extend: (
    // ...
  )
);
```

Not only can you do this with the global theme, but also with component themes.

```scss
@use 'node_modules/@devprotocol/hashi/hs-button' with (
  $fill: 'hs-red.400',
  $fill-hover: 'hs-red.400',
  $fill-active: 'hs-red.200',
  $fill-focus: 'hs-red.400',
  $ink: 'hs-red.ink',
  $padding: ('md', 'lg'),
  $radius: 'pill',
);
```