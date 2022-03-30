---
slug: /develop/api/composition/typography
displayed_sidebar: develop
---
# Typography Composition API

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