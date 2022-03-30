---
id: hs-select-field
title: Select Field
slug: /components/select-field
sidebar_position: 4
---
# HSSelectField Component
<div class="hs-component-preview">
    <label class="hs-select-field">
        <span class="hs-select-field__label">Select</span>
        <select class="hs-select-field__input">
            <option class="hs-select-field__option">Option 1</option>
            <option class="hs-select-field__option">Option 2</option>
            <option class="hs-select-field__option">Option 3</option>
            <option class="hs-select-field__option">Option 4</option>
            <option class="hs-select-field__option">Option 5</option>
        </select>
    </label>
    <label class="hs-select-field danger">
        <span class="hs-select-field__label">Select</span>
        <select class="hs-select-field__input">
            <option class="hs-select-field__option">Option 1</option>
            <option class="hs-select-field__option">Option 2</option>
            <option class="hs-select-field__option">Option 3</option>
            <option class="hs-select-field__option">Option 4</option>
            <option class="hs-select-field__option">Option 5</option>
        </select>
    </label>
</div>

## Usage
### HTML
```html
<label class="hs-select-field">
    <span class="hs-select-field__label">Select</span>
    <select class="hs-select-field__input">
        <option class="hs-select-field__option">Option 1</option>
        <option class="hs-select-field__option">Option 2</option>
        <option class="hs-select-field__option">Option 3</option>
        <option class="hs-select-field__option">Option 4</option>
        <option class="hs-select-field__option">Option 5</option>
    </select>
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

| Class                      | Effect                             |
|----------------------------|------------------------------------|
| `.hs-select-field`         | Main text field class.             |
| `.hs-select-field__label`  | The text field's label class.      |
| `.hs-select-field__input`  | The text field's main input class. |
| `.hs-select-field__option` | The text field's option class.     |

### Custom Properties
These are for creating your own component themes.

| Property                          | Effect                                      |
|-----------------------------------|---------------------------------------------|
| `--hs-select-field-fill`          | Changes the text field's background color.  |
| `--hs-select-field-ink`           | Changes the text field's text color.        |
| `--hs-select-label-field-ink`     | Changes the text field label's text color.  |
| `--hs-select-helper-field-ink`    | Changes the text field helper's text color. |
| `--hs-select-field-border`        | Changes the text field's border color.      |
| `--hs-select-field-radius`        | Changes the text field's border radius.     |
| `--hs-select-field-padding`       | Changes the text field's padding.           |
| `--hs-select-field-size`          | Changes the text field's text size.         |
| `--hs-select-field-label-size`    | Changes the text field's label size.        |
| `--hs-select-field-helper-size`   | Changes the text field's helper size.       |
| `--hs-select-field-weight`        | Changes the text field's text weight.       |
| `--hs-select-field-label-weight`  | Changes the text field's label weight.      |
| `--hs-select-field-helper-weight` | Changes the text field's helper weight.     |

#### Example
```scss
.my-select-field-theme {
    --hs-select-field-fill: #232323;
    --hs-select-field-ink: lime;
    --hs-select-field-border: var(--hs-button-fill);
    
    &:hover {
        --hs-select-field-fill: #353535;
    }
    
    &:active {
        --hs-select-field-fill: #535353;
    }
}
```
### Hashi `render()` API
Here are all the themeable properties for this component. The directions to use these properties are located in the [render API](../hs-core/core-apis/Render.md) page.

```scss
$accent: 'native-blue' !default;
$tone: 400;

$radius: 'radius-sm' !default;
$padding: (0.4rem 0.075rem) !default;

$family: 'family-body' !default;
$size: 'size-body' !default;
$weight: 'weight-body' !default;
$line-height: 'line-height-body' !default;
```

### Hashi `extend()` API
Please refer to the [extend API](../hs-core/core-apis/Extend.md) page.