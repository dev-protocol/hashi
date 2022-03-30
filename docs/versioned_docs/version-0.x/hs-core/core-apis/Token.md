---
id: token
title: Token API
slug: /core/api/token
---
# Token
This is a part of the component creation API. This API allows you to use tokens to create your own components with their own API. This API is by far the most used in the library.

```scss
@use 'node_modules/@devprotocol/hashi/hs-core';

.hs-component {
    background-color: hs-core.theme-token-get('scarlet-400');
    color: hs-core.theme-token-get('native-blue-400');
}
```

## API
| Function/Mixin                | Description                                                                                                                                                  |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `theme-token-get($query)`     | Retrieves a token as a CSS custom property.                                                                                                                  |
| `theme-token-get-raw($query)` | Retrieves a token as a raw value.                                                                                                                            |
| `theme-token-check($query)`   | Checks if a token is a registered token.                                                                                                                     |
| `theme-token-switch($query)`  | Checks if a token is a registered token. If it's a registered token, it returns a token in its custom property form. Otherwise, it returns the query itself. |