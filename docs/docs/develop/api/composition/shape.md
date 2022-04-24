---
title: Shape Composition
slug: /develop/api/composition/shape
displayed_sidebar: develop
---
## Width Mixin
The width mixin lets you apply width to an element while creating an API around it that follows the Hashi spec.

```scss
@use '../../../../../node_modules/@devprotocol/hashi/index';

.hs-component {
  @include hashi.shape-width('component', 100vw);
  // or
  @include hashi.shape-width('component', (
    default: 100%,
    min: 10vw,
    max: 100vw
  ));
}
```

| Parameter  | Type            | Description                                                                 |
|------------|-----------------|-----------------------------------------------------------------------------|
| $component | `string`        | The component name. This is used for the keys.                              |
| $width     | `number or map` | The width you want to apply.                                                |
| $intent    | `string`        | The intention of the shape application. Choose between `create` and `bind`. |

## Height Mixin
The height mixin lets you apply height to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-height('component', 100vh);
  // or
  @include hashi.shape-height('component', (
    default: 100%,
    min: 10vh,
    max: 100vh
  ));
}
```

| Parameter  | Type            | Description                                                                 |
|------------|-----------------|-----------------------------------------------------------------------------|
| $component | `string`        | The component name. This is used for the keys.                              |
| $height    | `number or map` | The height you want to apply.                                               |
| $intent    | `string`        | The intention of the shape application. Choose between `create` and `bind`. |

## Radius Mixin
The radius mixin lets you apply border radius to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-radius('component', hashi.token-get('radius-sm'));
  // or
  @include hashi.shape-radius('component', ('sm' 0 0 'sm'));
}
```

| Parameter  | Type                     | Description                                                                 |
|------------|--------------------------|-----------------------------------------------------------------------------|
| $component | `string`                 | The component name. This is used for the keys.                              |
| $radius    | `token, list, or number` | The radius you want to apply.                                               |
| $intent    | `string`                 | The intention of the shape application. Choose between `create` and `bind`. |

## Padding Mixin
The padding mixin lets you apply padding to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-padding('component', hashi.token-get('padding-sm'));
  // or
  @include hashi.shape-padding('component', ('sm' 0 0 'sm'));
}
```

| Parameter  | Type                     | Description                                                                 |
|------------|--------------------------|-----------------------------------------------------------------------------|
| $component | `string`                 | The component name. This is used for the keys.                              |
| $padding   | `token, list, or number` | The padding you want to apply.                                              |
| $intent    | `string`                 | The intention of the shape application. Choose between `create` and `bind`. |

## Margin Mixin
The margin mixin lets you apply margin to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-margin('component', hashi.token-get('margin-sm'));
  // or
  @include hashi.shape-margin('component', ('sm' 0 0 'sm'));
}
```

| Parameter  | Type                     | Description                                                                 |
|------------|--------------------------|-----------------------------------------------------------------------------|
| $component | `string`                 | The component name. This is used for the keys.                              |
| $padding   | `token, list, or number` | The margin you want to apply.                                               |
| $intent    | `string`                 | The intention of the shape application. Choose between `create` and `bind`. |

## Border Width Mixin
The border width mixin lets you apply border width to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-border-width('component', hashi.token-get('margin-sm'));
}
```

| Parameter     | Type              | Description                                                                 |
|---------------|-------------------|-----------------------------------------------------------------------------|
| $component    | `string`          | The component name. This is used for the keys.                              |
| $border-width | `token or number` | The border width you want to apply.                                         |
| $intent       | `string`          | The intention of the shape application. Choose between `create` and `bind`. |

## Border Style Mixin
The border style mixin lets you apply border style to an element while creating an API around it that follows the Hashi spec.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-border-style('component', hashi.token-get('margin-sm'));
}
```

| Parameter     | Type     | Description                                                                 |
|---------------|----------|-----------------------------------------------------------------------------|
| $component    | `string` | The component name. This is used for the keys.                              |
| $border-style | `string` | The border style you want to apply.                                         |
| $intent       | `string` | The intention of the shape application. Choose between `create` and `bind`. |

## `shape-apply()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to apply shape properties, and creating an API with it.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-apply('component', (
    radius: 'small',
    padding: ('xs' 'sm'),
    margin: (0 0 'sm' 0),
    gap: 'xs'
  ));
}
```

#### Syntax
```scss
@mixin shape-apply($component, $theme) { ... }
```
| Parameter  | Type                  | Description                                                                                                                       |
|------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                                                                    |
| $theme     | `map<string, string>` | The shape properties you want to apply. (`radius`, `padding`, `margin`, `gap`, `width`, `height`, `border-style`, `border-width`) |

## `shape-bind()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to bind shape properties to an existing styled component (with the appropriate keys).

This is especially useful whenever you want to make variants in shape properties on an already styled component.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-bind('component', (
    radius: 'small',
    padding: 'xs sm',
    margin: '0 0 sm 0',
    gap: 'xs'
  ));
}
```

#### Syntax
```scss
@mixin shape-bind($component, $theme) { ... }
```
| Parameter  | Type                  | Description                                                                                                                       |
|------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                                                                    |
| $theme     | `map<string, string>` | The shape properties you want to apply. (`radius`, `padding`, `margin`, `gap`, `width`, `height`, `border-style`, `border-width`) |