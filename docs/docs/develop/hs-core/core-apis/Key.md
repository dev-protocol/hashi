---
id: key
title: Key API
slug: /develop/core/api/key
---
# Key
This is a part of the component creation API. This API allows you to create a theming API for your components. This is especially handy when it comes to sharing component between projects.

It is recommended to be used with the [token API](/docs/core/api/token), specifically with the `token-get()` and `token-switch()` functions.

```scss
@use '../../../../node_modules/@devprotocol/hashi/hs-core/index';

$ink: 'native-blue-400' !default;

.hs-component {
  @include hs-core.theme-key-bind('component-fill', #232323);
  color: hs-core.theme-key-create('component-ink', hs-core.theme-token-switch($ink));
}
```

## API
| Function/Mixin                   | Description                                            |
|----------------------------------|--------------------------------------------------------|
| `theme-key-get($query)`          | Retrieves a key as a CSS custom property.              |
| `theme-key-create($key, $value)` | Creates a key with an initial value.                   |
| `theme-key-bind($key, $value)`   | Modifies an existing key by binding a new value to it. |
| `theme-key-check($query)`        | Checks if a key is a registered key.                   |