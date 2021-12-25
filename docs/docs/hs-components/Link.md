---
id: hs-link
title: Link
slug: /components/link
sidebar_position: 1
---

# HSLink Component
<div class="hs-component-preview col-2">
    <div class="hs-component-preview__row">
        <span>This is a <a href="#" class="hs-link">Default Link</a> inserted between a line of text.</span>
    </div>
</div>

## Usage
### HTML
```html
<a href="#" class="hs-link">Native Blue Link</a>
```

### SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-link';

@include hs-link.render();
```

## API
### CSS Classes
These are used to extend and modify the styles of a component on the markup.

| Class      | Effect           |
|------------|------------------|
| `.hs-link` | Main link class. |

### Custom Properties
These are for creating your own component themes.

| Property        | Effect                         |
|-----------------|--------------------------------|
| `--hs-link-ink` | Changes the link's text color. |

#### Example
```scss
.my-link-theme {
    --hs-link-ink: lime;
}
```

### SCSS `render()` mixin
| Property    | Type  | Effect                                                                     |
|-------------|-------|----------------------------------------------------------------------------|
| `$color`    | `map` | Configures what and how to render the color styles for the component.      |

#### `$color` parameter
| Property  | Type    | Effect                                 |
|-----------|---------|----------------------------------------|
| `default` | `token` | Defines what the default color to use. |

#### Example
```scss
@use 'path/to/@devprotocol/hashi/hs-link';

@include hs-link.render(
    $color: (
        default: 'scarlet',
    ),
);
```