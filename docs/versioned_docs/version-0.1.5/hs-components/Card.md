---
id: hs-card
title: Card
slug: /components/card
sidebar_position: 3
---
# HSCard Component
![HSCard Component](card.png)

## Usage
### HTML
```html
<div class="hs-card">
    <div class="hs-card__header">
        <div class="hs-card__mast">
            <h2 class="hs-card__title">CARD TITLE</h2>
            <p class="hs-card__subtitle">Card Subtitle.</p>
        </div>
        <div class="hs-card__icon">
            <!-- IMG or SVG -->
        </div>
    </div>
    <div class="hs-card__content">
        <!-- CARD CONTENT HERE -->
    </div>
    <div class="hs-card__actions">
        <!-- BUTTON COMPONENTS HERE -->
    </div>
</div>
```

### SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-card';

@include hs-card.render();
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

| Class                | Effect                                              |
|----------------------|-----------------------------------------------------|
| `.hs-card`           | Main card class.                                    |
| `.hs-card__header`   | The header section of the card component.           |
| `.hs-card__mast`     | The identification section of the card.             |
| `.hs-card__title`    | The title of the card.                              |
| `.hs-card__subtitle` | The subtitle of the card.                           |
| `.hs-card__icon`     | The right icon of the card.                         |
| `.hs-card__content`  | The content section of the card.                    |
| `.hs-card__actions`  | Here is where you put all the buttons for the card. |

### Custom Properties
These are for creating your own component themes.

| Property                  | Effect                               |
|---------------------------|--------------------------------------|
| `--hs-card-fill`          | Changes the card's background color. |
| `--hs-card-ink`           | Changes the card's text color.       |
| `--hs-card-border`        | Changes the card's border color.     |
| `--hs-card-radius`        | Changes the card's border radius.    |
| `--hs-card-padding`       | Changes the card's padding.          |
| `--hs-card-weight`        | Changes the card's border color.     |
| `--hs-card-ink`           | Changes the card's label color.      |
| `--hs-card-size`          | Changes the card's label size.       |
| `--hs-card-title-size`    | Changes the card's label size.       |
| `--hs-card-subtitle-size` | Changes the card's label size.       |
| `--hs-card-icon-size`     | Changes the card's label size.       |
| `--hs-card-action-gap`    | Changes the card's action gap.       |

#### Example
```scss
.my-card-theme {
    --hs-card-fill: #232323;
    --hs-card-ink: lime;
    --hs-card-border: var(--hs-button-fill);
    
    &:hover {
        --hs-card-fill: #353535;
    }
    
    &:active {
        --hs-card-fill: #535353;
    }
}
```
### Hashi `render()` API
For more information please refer to the [render API](../hs-core/core-apis/Render.md) page.

```scss
$fill: 'surface' !default;
$ink: 'surface-ink' !default;
$border: $fill !default;
$tone: 300 !default;

$radius: 'radius-sm' !default;
$padding: 'padding-xl' !default;

$family: 'family-body' !default;
$size: 'size-body' !default;
$weight: 'weight-body' !default;
$line-height: 'line-height-body' !default;

$elevation-level: 2 !default;
$has-elevation: true !default;
```

### Hashi `extend()` API
Please refer to the [extend API](../hs-core/core-apis/Extend.md) page.