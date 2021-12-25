---
id: hs-card
title: Card
slug: /components/card
sidebar_position: 3
---
# HSCard Component
![card.png](card.png)

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
### SCSS `render()` mixin
| Property    | Type  | Effect                                                                     |
|-------------|-------|----------------------------------------------------------------------------|
| `$color`    | `map` | Configures what and how to render the color styles for the component.      |
| `$shape`    | `map` | Configures what and how to render the shape styles for the component.      |
| `$type`     | `map` | Configures what and how to render the typography styles for the component. |
| `$settings` | `map` | Additional style and rendering configurations.                             |

#### `$color` parameter
| Property  | Type     | Effect                                 |
|-----------|----------|----------------------------------------|
| `default` | `token`  | Defines what the default color to use. |

#### `$shape` parameter
| Property  | Type     | Effect                                                                                               |
|-----------|----------|------------------------------------------------------------------------------------------------------|
| `radius`  | `string` | Defines the border radius of the component. Available radius sizes are: `xs`, `sm`, `md`, `lg`, `xl` |
| `padding` | `string` | Defines the padding of the component. Available radius sizes are: `xs`, `sm`, `md`, `lg`, `xl`       |

#### `$type` parameter
| Property      | Type    | Effect                              |
|---------------|---------|-------------------------------------|
| `size`        | `token` | Defines the font size to be used.   |
| `weight`      | `token` | Defines the font weight to be used. |
| `line-height` | `token` | Defines the line height to be used. |

#### `$settings` parameter
| Property        | Type      | Effect                                                         |
|-----------------|-----------|----------------------------------------------------------------|
| `has-elevation` | `boolean` | Determines if the component will render with elevation or not. |

#### Example
```scss
@use 'path/to/@devprotocol/hashi/hs-card';

@include hs-card.render(
    $color: (
        default: 'surface'
    ),
    $shape: (
        radius: 'md'
    ),
    $type: (
        family: 'global',
        weight: 'global'
    ),
);
```