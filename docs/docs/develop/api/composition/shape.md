---
title: Shape Composition
slug: /develop/api/composition/shape
displayed_sidebar: develop
---
## `shape-apply()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to apply shape properties, and creating an API with it.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.shape-apply('component', (
    radius: 'small',
    padding: 'xs sm',
    margin: '0 0 sm 0',
    gap: 'xs'
  ));
}
```

#### Syntax
```scss
@mixin shape-apply($component, $theme) { ... }
```
| Parameter  | Type                  | Description                                                                    |
|------------|-----------------------|--------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                 |
| $theme     | `map<string, string>` | The shape properties you want to apply. (`radius`, `padding`, `margin`, `gap`) |

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
| Parameter  | Type                  | Description                                                                    |
|------------|-----------------------|--------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                 |
| $theme     | `map<string, string>` | The shape properties you want to apply. (`radius`, `padding`, `margin`, `gap`) |