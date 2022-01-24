---
id: hs-button 
title: Button 
slug: /components/button 
sidebar_position: 1
---

# HSButton Component

<div class="hs-component-preview col-2">
    <div class="hs-component-preview__row">
        <button class="hs-button native-blue" role="button">
            <span class="hs-button__label">BUTTON</span>
        </button>
        <button class="hs-button hs-button--outlined native-blue" role="button">
            <span class="hs-button__label">BUTTON</span>
        </button>
        <button class="hs-button hs-button--filled native-blue" role="button">
            <span class="hs-button__label">BUTTON</span>
        </button>
    </div>
    <div class="hs-component-preview__row">
        <button class="hs-button native-blue" role="button" disabled>
            <span class="hs-button__label">BUTTON</span>
        </button>
        <button class="hs-button hs-button--outlined native-blue" role="button" disabled>
            <span class="hs-button__label">BUTTON</span>
        </button>
        <button class="hs-button hs-button--filled native-blue" role="button" disabled>
            <span class="hs-button__label">BUTTON</span>
        </button>
    </div>
</div>

## Usage

### HTML

```html

<button class="hs-button" role="button">
    <i class="hs-button__icon" aria-hidden="true"></i>
    <span class="hs-button__label">BUTTON</span>
</button>
```

### SCSS/CSS

```scss
@use 'path/to/@devprotocol/hashi/hs-button';

@include hs-button.render();
```

## API

### CSS Classes
These are used to extend and modify the styles of a component on the markup.

| Class                  | Effect                                       |
|------------------------|----------------------------------------------|
| `.hs-button`           | Main button class.                           |
| `.hs-button__label`    | Class for the button label.                  |
| `.hs-button__icon`     | Class for the button icon.                   |
| `.hs-button--outlined` | Renders the component in its outlined style. |
| `.hs-button--filled`   | Renders the component in its filled style.   |

### Custom Properties
These are for creating your own component themes.

| Property                 | Effect                                   |
|--------------------------|------------------------------------------|
| `--hs-button-fill`       | Changes the button's background color.   |
| `--hs-button-ink`        | Changes the button's text color.         |
| `--hs-button-border`     | Changes the button's border color.       |
| `--hs-button-radius`     | Changes the button's border radius.      |
| `--hs-button-gap`        | Changes the button's label and icon gap. |
| `--hs-button-padding`    | Changes the button's padding.            |
| `--hs-button-weight`     | Changes the button's border color.       |
| `--hs-button-icon-ink`   | Changes the button's icon color.         |
| `--hs-button-icon-size`  | Changes the button's icon size.          |
| `--hs-button-label-ink`  | Changes the button's label color.        |
| `--hs-button-label-size` | Changes the button's label size.         |

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

### Hashi `render()` API
Here are all the themeable properties for this component. The directions to use these properties are located in the [render API](../hs-core/core-apis/Render.md) page.

```scss
$fill: 'scarlet' !default;
$ink: 'scarlet-ink' !default;
$border: $fill !default;
$tone: 400 !default;

$radius: 'radius-xs' !default;
$padding: (0.5rem 0.7rem) !default;

$family: 'family-action' !default;
$size: 'size-action' !default;
$weight: 'weight-action' !default;
$line-height: 'line-height-action' !default;

$gap: 0 !default;

$variants: 'all' !default;
```

### Hashi `extend()` API
Please refer to the [extend API](../hs-core/core-apis/Extend.md) page.
