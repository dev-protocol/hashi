---
slug: /develop/api/composition/color
displayed_sidebar: develop
---
# Color Composition API

## `color-apply()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to apply colors based on Hashi's component color anatomy spec, and creating an API with it.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.color-apply('component', (
    fill: '',
    ink: '',
    border: ''
  ), 'outlined');
}
```

#### Syntax
```scss
@mixin color-apply($component, $theme, $style, $stateful: false) { ... }
```
| Parameter  | Type                  | Description                                                                              |
|------------|-----------------------|------------------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                           |
| $theme     | `map<string, string>` | The colors you want to apply. (`fill`, `ink`, `border`)                                  |
| $style     | `string`              | The color application style. Options are: `text`, `outlined`, and `filled`               |
| $stateful  | `boolean`             | A boolean switch to render color styles with states (hover, focus, active, and disabled) |
| $tone      | `number`              | The default tone you want to assign.                                                     |

## `color-bind()` mixin.
This mixin is located inside the main `hashi` module. This mixin allows you to bind colors based on Hashi's component color anatomy spec to an existing styled component (with the appropriate keys).

This is especially useful whenever you want to make variants in color on an already styled component.

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  @include hashi.color-bind('component', (
    fill: '',
    ink: '',
    border: ''
  ), 'outlined');
}
```

#### Syntax
```scss
@mixin color-bind($component, $theme, $style, $stateful: false) { ... }
```
| Parameter  | Type                  | Description                                                                              |
|------------|-----------------------|------------------------------------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                                           |
| $theme     | `map<string, string>` | The colors you want to apply. (`fill`, `ink`, `border`)                                  |
| $style     | `string`              | The color application style. Options are: `text`, `outlined`, and `filled`               |
| $stateful  | `boolean`             | A boolean switch to render color styles with states (hover, focus, active, and disabled) |
| $tone      | `number`              | The default tone you want to assign.                                                     |