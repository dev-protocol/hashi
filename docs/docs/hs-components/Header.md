---
id: hs-header
title: Header
slug: /components/header
sidebar_position: 1
---
# HSHeader Component
![header.png](header.png)

## A few key principles...
We approach this large component as an entity made of separate internal components. Meaning, this component can be configured based on what order you put the internal components in. This allows us to make a flexible header format.

## Usage
### HTML
```html
<header class="hs-header">
    <div class="hs-header__wrap">
        <div class="hs-header__brand">
            <a href="#">
                <!-- IMG, SVG, or PLAIN TEXT -->
            </a>
        </div>
        <div class="hs-header__section">
            <!-- ANYTHING HERE -->
        </div>
        <div class="hs-header__actions">
            <!-- APPBAR or NAVBAR -->
        </div>
    </div>
</header>
```

### SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-header';

@include hs-header.render();
```

## API
### CSS Classes
These are used to extend and modify the styles of a component on the markup.

| Class                    | Effect                                                                   |
|--------------------------|--------------------------------------------------------------------------|
| `.hs-header`             | Main header class.                                                       |
| `.hs-header__wrap`       | Wrapper for the header.                                                  |
| `.hs-header__brand`      | Division for the application brand.                                      |
| `.hs-header__actions`    | Division for the actions (navbar or appbar).                             |
| `.hs-header__section`    | General division.                                                        |
| `.hs-header--scrollable` | Renders the component in its scrollable style.                           |
| `&.scrolled`             | Attaches to `.hs-header--scrollable` to render it in its scrolled state. |

### Custom Properties
These are for creating your own component themes.

| Property                      | Effect                                 |
|-------------------------------|----------------------------------------|
| `--hs-header-fill`            | Changes the header's background color. |
| `--hs-header-ink`             | Changes the header's text color.       |
| `--hs-header-border`          | Changes the header's border color.     |

#### Example
```scss
.my-header-theme {
    --hs-header-fill: #232323;
    --hs-header-ink: lime;
    --hs-header-border: var(--hs-button-fill);
    
    &:hover {
        --hs-header-fill: #353535;
    }
    
    &:active {
        --hs-header-fill: #535353;
    }
}
```

### SCSS `render()` mixin
| Property    | Type  | Effect                                                                     |
|-------------|-------|----------------------------------------------------------------------------|
| `$color`    | `map` | Configures what and how to render the color styles for the component.      |
| `$settings` | `map` | Additional style and rendering configurations.                             |

#### `$color` parameter
| Property  | Type     | Effect                                 |
|-----------|----------|----------------------------------------|
| `default` | `token`  | Defines what the default color to use. |

#### `$settings` parameter
| Property        | Type      | Effect                                                                    |
|-----------------|-----------|---------------------------------------------------------------------------|
| `is-scrollable` | `boolean` | Determines if the component will render with the scrollable style or not. |
| `has-elevation` | `boolean` | Determines if the component will render with elevation or not.            |