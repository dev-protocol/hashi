---
title: Initializer
slug: /develop/api/initializer
displayed_sidebar: develop
---
The `hashi.init()` mixin lets you initialize the entire design system (minus components) with optional 
configurations.

#### Synax
```scss
@include hashi.init($params...) {}
```

## Basic Usage

```scss
@use '../../../../node_modules/@devprotocol/hashi/index';

@include hashi.init() {
  // ...
}
```
This setup includes the following configuration:
- Initializes the standard Hashi reset.
- `dp-black` as the primary color.
- `dp-blue-grey` as the dark primary color.
- `dp-black` as the accent color.
- `dp-white` as the dark accent color.
- `dp-white` as the surface color.
- `dp-blue-grey` as the dark surface color.

If you want to use a component, import the specific component module from the library and render it **inside** the initializer. This ensures that the component is scoped within the design system.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-button';

@include hashi.init() {
  @include hs-button.render();
}
```

## Configurations
The initializer has parameters that let you configure the color, shape, and typography themes.

| Parameter            | Description                                                                                       | Default Value                       |
|----------------------|---------------------------------------------------------------------------------------------------|-------------------------------------|
| `$primary`           | Sets the color for the emphasized surfaces in an interface.                                       | `dp-black`                          |
| `$primary-dark`      | Sets the color for the emphasized surfaces in a dark interface.                                   | `dp-white`                          |
| `$accent`            | Sets the color for very emphasized, interact-able, and eye-catching portions in an interface.     | `native-blue`                       |
| `$accent-dark`       | Sets the color for very emphasized, interact-able, and eye-catching portions in a dark interface. | `native-blue`                       |
| `$surface`           | Sets the color for the non-emphasized surfaces in an interface. The neutral of the bunch.         | `dp-white`                          |
| `$surface-dark`      | Sets the color for the non-emphasized surfaces in a dark interface. The neutral of the bunch.     | `dp-blue-grey`                      |
| `$surface-dark`      | Sets the color for the non-emphasized surfaces in a dark interface. The neutral of the bunch.     | `dp-blue-grey`                      |
| `$radius-small`      | Sets the radius for small components like buttons, text fields, etc.                              | `radius-xs`                         |
| `$radius-medium`     | Sets the radius for medium components like cards, profiles, etc.                                  | `radius-sm`                         |
| `$radius-large`      | Sets the radius for large components like headers, drawers, etc.                                  | `radius-md`                         |
| `$family-supertitle` | Sets the font family for the supertitle typography variant.                                       | `('Syne', sans-serif, 700)`         |
| `$family-title`      | Sets the font family for the title typography variant.                                            | `('Syne', sans-serif, 700)`         |
| `$family-subtitle`   | Sets the font family for the subtitle typography variant.                                         | `('Syne', sans-serif, 700)`         |
| `$family-body`       | Sets the font family for the body typography variant.                                             | `('DM Sans', sans-serif, 400)`      |
| `$family-mono`       | Sets the font family for the mono typography variant.                                             | `('IBM Plex Mono', monospace, 400)` |
| `$family-small`      | Sets the font family for the small typography variant.                                            | `('DM Sans', sans-serif, 300)`      |

### Typography-related parameter values
The typography-related parameter values have a specific syntax: family name, font type, and font weight. This value will be parsed by Hashi internally and assign it to the appropriate token slots.

```scss
// (family name, font type, font weight)
('Inter', sans-serif, 400)
```

Font types include, but not limited to: serif, sans-serif, monospace, and cursive.

#### Finding the font weight
Finding the font weight is usually done in two ways. Either it's documented on the website you got the font from, or it's in the CSS `@font-face` code.

```css
@font-face {
  ...
  font-weight: 700; /* <-- THIS ONE */
  ...
}
```

#### Example
```scss
@use 'node_modules/@devprotocol/hashi' with (
  $accent: 'native-blue',
  $accent-ink: 'native-blue-ink',
  $family-supertitle: ('Playfair Display', serif, 700)
);

@include hashi.init {
  // ...
}
```

## Extending Tokens
Hashi allows you to extend tokens by using `$extend` in the `with ()` module keyword. Keep in mind that this should strictly follow the escape hatch guidelines in color, shape, and typography tokens.


#### Example
> _It is generally recommended putting comments to segregate tokens._

```scss
@use 'node_modules/@devprotocol/hashi' with (
  $extend: (
    // Colors
    'ume': (
      200: #ffeee4,
      300: #ffd0b4,
      400: #ffc09c,
      600: #c88762,
      'ink': #3c1f11
    ),
    'ichigo': (
      'default': hashi.color-split(#ce2283),
      'ink': #fff
    ),
    
    // Typography
    'headliner': (
      'family': ('Syne', sans-serif),
      'size': hashi.to-rem(72px),
      'weight': 700,
      'line-height': 1.5
    ),
  ),
);

@include hashi.init {
  //
}
```

## Theming
Hashi provides a simple theme system that allows you to easily change different properties of the entire stylesheet like
color, shape, typography, and layout.

The way we treat this concept is to think of the theme like JSON data.

The main module has the `$theme` parameter in the `with ()` keyword. It takes in a map of the theme properties. The
theme properties are **always** the same as the ones defined in the [configurations section](#configurations).

This feature easily allows the internal team and the community to create themes.

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
```

```scss
// main.scss
@use 'node_modules/@example-organization/haru';
// the map-based theme in a package

@use 'node_modules/@devprotocol/hashi' with (
  $theme: haru.$global-theme
);

@include hashi.init {
  //
}
```