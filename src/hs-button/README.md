# HSButton Component
- This component uses box-icons by default.

#### Browser Support

---
Edge: ^16
Firefox: ^31
Chrome: ^49
Safari: ^10
Opera: ^36
---

# Usage
## HTML
```html
<button class="hs-button" role="button">
    <i class="hs-button__icon" aria-hidden="true"></i>
    <span class="hs-button__label">BUTTON</span>
</button>
```

## SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-button';

@include hs-button.render();
```

# API
## CSS Classes
| Class | Effect |
--- | ---
| `.hs-button--outlined` | Renders the component in its outlined style. |
| `.hs-button--filled` | Renders the component in its filled style. |
| `.scarlet`, `.plox`, `.native-blue`, `.bright-cyan`, `.surface`, `.neutral`, `.success`, `.warning`, `.danger` | Modifies the button color. |

