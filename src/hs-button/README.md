# HSButton Component
- This component uses [box-icons](https://boxicons.com/) icon-set.
# Usage
#### Browser Support
| Edge | Firefox | Chrome | Safari | Opera |
|---|---|---|---|---|
| ^16 | ^31 | ^49 | ^10 | ^36 |
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
These are used to extend and modify the styles of a component on the markup.

| Class | Effect |
--- | ---
| `.hs-button--outlined` | Renders the component in its outlined style. |
| `.hs-button--filled` | Renders the component in its filled style. |
| `.scarlet`, `.plox`, `.native-blue`, `.bright-cyan`, `.surface`, `.neutral`, `.success`, `.warning`, `.danger` | Modifies the button color. |

#### Example
```html
<button class="hs-button hs-button--outlined scarlet" role="button">
    <i class="hs-button__icon" aria-hidden="true"></i>
    <span class="hs-button__label">BUTTON</span>
</button>
```

## Custom Properties
These are for creating your own component themes.

| Property | Effect |
|---|---|
| `--hs-button-fill` | Changes the button's background color. |
| `--hs-button-ink` | Changes the button's text color. |
| `--hs-button-border` | Changes the button's border color. |
| `--hs-button-radius` | Changes the button's border radius. |
| `--hs-button-gap` | Changes the button's label and icon gap. |
| `--hs-button-weight` | Changes the button's border color. |
| `--hs-button-icon-ink` | Changes the button's icon color. |
| `--hs-button-icon-size` | Changes the button's icon size. |
| `--hs-button-label-ink` | Changes the button's label color. |
| `--hs-button-label-size` | Changes the button's label size. |

#### Example
```scss
.my-button-theme {
    --hs-button-fill: #232323;
    --hs-button-ink: lime;
    --hs-button-border: var(--hs-button-fill);
    
    &:hover {
        --hs-button-fill: #353535;
    }
    
    &:active {
        --hs-button-fill: #535353;
    }
}
```

