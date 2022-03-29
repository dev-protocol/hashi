---
id: hs-form-field
title: Form Field
slug: /develop/form-field
sidebar_position: 4
---
# HSTextField Component
<div class="hs-component-preview">
    <label class="hs-form-field">
        <span class="hs-form-field__label">Form Field Label</span>
        <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
        <span class="hs-form-field__helper">Helper text</span>
    </label>
    <label class="hs-form-field is-danger">
        <span class="hs-form-field__label">Form Field Label</span>
        <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
        <span class="hs-form-field__helper">Helper text</span>
    </label>
</div>

## Usage
### HTML
```html
<label class="hs-form-field">
    <span class="hs-form-field__label">Form Field Label</span>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
    <span class="hs-form-field__helper">Helper text</span>
</label>
```

### SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-form-field';

@include hs-form-field.render();
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

| Class                    | Effect                                      |
|--------------------------|---------------------------------------------|
| `.hs-form-field`         | Main text field class.                      |
| `.hs-form-field__label`  | The text field's label class.               |
| `.hs-form-field__input`  | The text field's main input class.          |
| `.hs-form-field__icon`   | The text field's icon class.                |
| `.hs-form-field__helper` | The text field's helper text class.         |
| `.is-filled`             | Renders the component in its filled style.  |
| `.is-success`            | Renders the component in its success state. |
| `.is-warning`            | Renders the component in its warning state. |
| `.is-danger`             | Renders the component in its danger state.  |

### Custom Properties
These are for creating your own component themes.

| Property                        | Effect                                      |
|---------------------------------|---------------------------------------------|
| `--hs-form-field-ink`           | Changes the form field's text color.        |
| `--hs-form-field-label-ink`     | Changes the form field label's text color.  |
| `--hs-form-field-helper-ink`    | Changes the form field helper's text color. |
| `--hs-form-field-border`        | Changes the form field's border color.      |
| `--hs-form-field-radius`        | Changes the form field's border radius.     |
| `--hs-form-field-padding`       | Changes the form field's padding.           |
| `--hs-form-field-shadow`        | Changes the form field's shadow.            |
| `--hs-form-field-size`          | Changes the form field's text size.         |
| `--hs-form-field-label-size`    | Changes the form field's label size.        |
| `--hs-form-field-helper-size`   | Changes the form field's helper size.       |
| `--hs-form-field-weight`        | Changes the form field's text weight.       |
| `--hs-form-field-label-weight`  | Changes the form field's label weight.      |
| `--hs-form-field-helper-weight` | Changes the form field's helper weight.     |

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
Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](index.md#modification-scss).

```scss
$fill: 'surface' !default;
$ink: 'surface-ink' !default;
$border: 'primary' !default;
$tone: 200 !default;

$radius: 'small' !default;
$padding: ('sm' 'md') !default;

$family: 'body' !default;
$size: 'body' !default;
$weight: 'normal' !default;
$line-height: 'normal' !default;
```

### Hashi `extend()` API
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.