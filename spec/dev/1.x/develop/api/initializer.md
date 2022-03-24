---
slug: /develop/api/initializer
displayed_sidebar: develop
---
# `hashi.init()` API
The `hashi.init()` mixin lets you initialize the entire design system (minus components) with optional 
configurations.

#### Synax
```scss
@include hashi.init($params...) {}
```

## Basic Usage
```scss
@use 'node_modules/@devprotocol/hashi';

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
| `$primary-dark`      | Sets the color for the emphasized surfaces in a dark interface.                                   | `dp-blue-grey`                      |
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
| `$family-body`       | Sets the font family for the body typography variant.                                             | `('Whyte', sans-serif, 400)`        |
| `$family-mono`       | Sets the font family for the mono typography variant.                                             | `('IBM Plex Mono', monospace, 400)` |
| `$family-small`      | Sets the font family for the small typography variant.                                            | `('Whyte', sans-serif, 300)`        |

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
@use 'node_modules/@devprotocol/hashi';

@include hashi.init(
  $accent: 'native-blue',
  $accent-ink: 'native-blue-ink',
  $family-supertitle: ('Playfair Display', serif, 700)
) {
  // ...
}
```