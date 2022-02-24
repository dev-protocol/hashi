---
id: hs-link
title: Link
slug: /develop/link
sidebar_position: 1
---

# HSLink Component
<div class="hs-component-preview">
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

### Hashi `render()` API
Here are all the themeable properties for this component. The directions to use these properties are located in the [render API](../hs-core/core-apis/Render.md) page.

```scss
$ink: 'native-blue' !default;
$tone: 400 !default;

$family: 'family-body' !default;
$size: 'size-body' !default;
$weight: 'weight-body' !default;
$line-height: 'line-height-body' !default;
```

### Hashi `extend()` API
Please refer to the [extend API](../hs-core/core-apis/Extend.md) page.