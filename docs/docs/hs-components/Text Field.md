---
id: hs-text-field
title: Text Field
slug: /components/text-field
sidebar_position: 4
---
# HSTextField Component
<div class="hs-component-preview">
    <label class="hs-text-field">
        <span class="hs-text-field__label">HSTextField</span>
        <input class="hs-text-field__input" type="text" placeholder="Placeholder..." />
        <span class="hs-text-field__input__icon"></span>
        <span class="hs-text-field__helper">Helper text</span>
    </label>
    <label class="hs-text-field danger">
        <span class="hs-text-field__label">HSTextField</span>
        <input class="hs-text-field__input" type="text" placeholder="Placeholder..." />
        <span class="hs-text-field__input__icon"></span>
        <span class="hs-text-field__helper">Helper text</span>
    </label>
</div>

## Usage
### HTML
```html
<label class="hs-text-field">
    <span class="hs-text-field__label">Hello</span>
    <input class="hs-text-field__input" type="text" placeholder="Placeholder...">
    <span class="hs-text-field__helper">Helper text</span>
</label>
```

### SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-text-field';

@include hs-text-field.render();
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

| Class                    | Effect                                      |
|--------------------------|---------------------------------------------|
| `.hs-text-field`         | Main text field class.                      |
| `.hs-text-field__label`  | The text field's label class.               |
| `.hs-text-field__input`  | The text field's main input class.          |
| `.hs-text-field__helper` | The text field's helper text class.         |
| `.is-success`            | Renders the component in its success state. |
| `.is-warning`            | Renders the component in its warning state. |
| `.is-danger`             | Renders the component in its danger state.  |

### Custom Properties
These are for creating your own component themes.

| Property                        | Effect                                      |
|---------------------------------|---------------------------------------------|
| `--hs-text-field-ink`           | Changes the text field's text color.        |
| `--hs-text-label-field-ink`     | Changes the text field label's text color.  |
| `--hs-text-helper-field-ink`    | Changes the text field helper's text color. |
| `--hs-text-field-border`        | Changes the text field's border color.      |
| `--hs-text-field-radius`        | Changes the text field's border radius.     |
| `--hs-text-field-padding`       | Changes the text field's padding.           |
| `--hs-text-field-size`          | Changes the text field's text size.         |
| `--hs-text-field-label-size`    | Changes the text field's label size.        |
| `--hs-text-field-helper-size`   | Changes the text field's helper size.       |
| `--hs-text-field-weight`        | Changes the text field's text weight.       |
| `--hs-text-field-label-weight`  | Changes the text field's label weight.      |
| `--hs-text-field-helper-weight` | Changes the text field's helper weight.     |

#### Example
```scss
.my-text-field-theme {
    --hs-text-field-fill: #232323;
    --hs-text-field-ink: lime;
    --hs-text-field-border: var(--hs-button-fill);
    
    &:hover {
        --hs-text-field-fill: #353535;
    }
    
    &:active {
        --hs-text-field-fill: #535353;
    }
}
```
### Hashi `render()` API
Here are all the themeable properties for this component. The directions to use these properties are located in the [render API](../hs-core/core-apis/Render.md) page.

```scss
$accent: 'native-blue' !default;
$tone: 400;

$radius: 'radius-xs' !default;
$padding: (0.4rem 0.075rem) !default;

$family: 'family-body' !default;
$size: 'size-body' !default;
$weight: 'weight-body' !default;
$line-height: 'line-height-body' !default;
```

### Hashi `extend()` API
Please refer to the [extend API](../hs-core/core-apis/Extend.md) page.