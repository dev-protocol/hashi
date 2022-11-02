---
title: Typography Composition
slug: /develop/api/composition/typography
displayed_sidebar: develop
---
## Family Mixin
The family mixin lets you apply font family to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.typography-family('component', 'subtitle');
}
```

| Parameter  | Type              | Description                                                                 |
|------------|-------------------|-----------------------------------------------------------------------------|
| $component | `string`          | The component name. This is used for the keys.                              |
| $family    | `token or string` | The font family you want to apply.                                          |
| $intent    | `string`          | The intention of the shape application. Choose between `create` and `bind`. |

## Size Mixin
The size mixin lets you apply font size to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.typography-size('component', 'supertitle');
}
```

| Parameter  | Type              | Description                                                                 |
|------------|-------------------|-----------------------------------------------------------------------------|
| $component | `string`          | The component name. This is used for the keys.                              |
| $size      | `token or number` | The font size you want to apply.                                            |
| $intent    | `string`          | The intention of the shape application. Choose between `create` and `bind`. |

## Weight Mixin
The weight mixin lets you apply font weight to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.typography-weight('component', 'light');
}
```

| Parameter  | Type              | Description                                                                 |
|------------|-------------------|-----------------------------------------------------------------------------|
| $component | `string`          | The component name. This is used for the keys.                              |
| $weight    | `token or number` | The font weight you want to apply.                                          |
| $intent    | `string`          | The intention of the shape application. Choose between `create` and `bind`. |

## Line Height Mixin
The line height mixin lets you apply line height to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.typography-line-height('component', 'broad');
}
```

| Parameter    | Type              | Description                                                                 |
|--------------|-------------------|-----------------------------------------------------------------------------|
| $component   | `string`          | The component name. This is used for the keys.                              |
| $line-height | `token or number` | The line height you want to apply.                                          |
| $intent      | `string`          | The intention of the shape application. Choose between `create` and `bind`. |

## `typography-apply()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to apply typography properties, and creating an API with it.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.typography-apply('component', (
    family: 'supertitle',
    size: 'supertitle',
    weight: 'bold',
    line-height: 'broad'
  ));
}
```

#### Syntax
```scss
@mixin typography-apply($component, $theme) { ... }
```
| Parameter  | Type                  | Description                                                                              |
|------------|-----------------------|------------------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                           |
| $theme     | `map<string, string>` | The typography properties you want to apply. (`family`, `size`, `weight`, `line-height`) |

## `typography-bind()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to bind typography properties to an existing styled component (with the appropriate keys).

This is especially useful whenever you want to make variants in typography properties on an already styled component.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.typography-bind('component', (
    family: 'supertitle',
    size: 'supertitle',
    weight: 'bold',
    line-height: 'broad'
  ));
}
```

#### Syntax
```scss
@mixin typography-bind($component, $theme) { ... }
```
| Parameter  | Type                  | Description                                                                              |
|------------|-----------------------|------------------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                           |
| $theme     | `map<string, string>` | The typography properties you want to apply. (`family`, `size`, `weight`, `line-height`) |