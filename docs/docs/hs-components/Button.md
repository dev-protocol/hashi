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

| Class                                                                                                          | Effect                                       |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| `.hs-button`                                                                                                   | Main button class.                           |
| `.hs-button--outlined`                                                                                         | Renders the component in its outlined style. |
| `.hs-button--filled`                                                                                           | Renders the component in its filled style.   |
| `.scarlet`, `.plox`, `.native-blue`, `.bright-cyan`, `.surface`, `.neutral`, `.success`, `.warning`, `.danger` | Modifies the button color.                   |

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
### SCSS `render()` mixin
| Property | Type | Effect |
|---|---|---|
| `$color` | `map` | Configures what and how to render the color styles for the component. |
| `$shape` | `map` | Configures what and how to render the shape styles for the component. |
| `$type` | `map` | Configures what and how to render the typography styles for the component. |
| `$settings` | `map` | Additional style and rendering configurations. |

#### `$color` parameter
| Property  | Type                      | Effect                                                                                                                                                                   |
|-----------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `default` | `token`                   | Defines what the default color to use                                                                                                                                    |
| `preset`  | `token or list of tokens` | Defines what color-presets to render. Available variants include: `neutral`, `scarlet`, `plox`, `native-blue`, `bright-cyan`, `success`, `warning`, `danger`, and `all`. |

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
| Property   | Type             | Effect                                                                                                |
|------------|------------------|-------------------------------------------------------------------------------------------------------|
| `variants` | `string or list` | Defines what variants to render. Available variants include: `text`, `outlined`, `filled`, and `all`. |

#### Example
```scss
@use 'path/to/@devprotocol/hashi/hs-button';

hs-button.render(
    $color: (
        presets: ('scarlet', 'native-blue', 'success', 'warning', 'danger'),
    ),
    $shape: (
        radius: 'md'
    ),
    $type: (
        family: 'global',
        weight: 'global'
    ),
    $settings: (
        variants: ('filled', 'outlined'),
    ),
);
```