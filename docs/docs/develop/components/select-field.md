---
id: hs-select-field
title: Select Fields
slug: /develop/select-field
---
# Select Field
Select fields lets the user pick an option from a finite set of choices, and validate the option in a context of a form, or simple filtering.

<div class="hs-component-preview">
    <label class="hs-select-field">
        <span class="hs-select-field__label">Select Field Label</span>
        <select class="hs-select-field__input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
        </select>
        <span class="hs-select-field__helper">Helper text</span>
    </label>
    <label class="hs-select-field is-danger">
        <span class="hs-select-field__label">Select Field Label</span>
        <select class="hs-select-field__input">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
        </select>
        <span class="hs-select-field__helper">Helper text</span>
    </label>
</div>

## Usage
### HTML
```html
<label class="hs-select-field">
    <span class="hs-select-field__label">Select</span>
    <select class="hs-select-field__input">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
    </select>
    <span class="hs-select-field__helper">Helper text</span>
</label>
```

### SCSS/CSS
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-select-field';

@include hashi.init {
  @include hs-select-field.render();
}
```

### Outlined Select Field
By default, the select field is styled using the outlined style. This doesn't provide emphasis differentiation, just stylistic choices.
```html
<label class="hs-select-field">
    <span class="hs-select-field__label">Select</span>
    <select class="hs-select-field__input">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
    </select>
</label>
```

### Filled Select Field
You can modify the form field style to be in the filled style by adding the `.is-filled` class to the parent's class list.
```html
<label class="hs-select-field is-filled">
    <span class="hs-select-field__label">Select</span>
    <select class="hs-select-field__input">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
    </select>
</label>
```
:::info **Choosing select field styles**
Select field styles must be consistent in every form. Contextually, a webpage has many forms; It can be in the form of a search field, or a contact form. Generally, you can only select one style per form. For example, in the contact form you can only limit the field's style to the outlined style, and in the search field you only limit it to the filled style.
:::

### Side Label Text Field
This text field style is generally recommended for select fields outside the form context. To apply this style, attach `.is-side-label` class to the parent element's class list.
```html
<label class="hs-select-field is-side-label">
    <span class="hs-select-field__label">Select</span>
    <select class="hs-select-field__input">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
    </select>
</label>
```

### Required Fields
To make a field required, attach a `.is-required` class to the parent element class list.
```html
<label class="hs-select-field is-required">
    <span class="hs-select-field__label">Select</span>
    <select class="hs-select-field__input">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
    </select>
</label>
```

### Select Field Icons
The position of the form field icon is dependent on putting a class name after the `.hs-select-field__icon` class.

By default, icons are on the trailing icon position. You can modify it to become a leading icon by attaching `.is-leading` in the icon element class list.

To use icons, place an SVG inside the `.hs-select-field__icon` element.

```html
<!-- Trailing Icon -->
<label class="hs-select-field">
    <span class="hs-select-field__label">Select Field Label (Required)</span>
    <i class="hs-select-field__icon">
        <!-- Icon SVG -->
    </i>
    <select class="hs-select-field__input">
        <!--- Options... -->
    </select>
</label>

<!-- Leading Icon -->
<label class="hs-select-field">
    <span class="hs-select-field__label">Select Field Label (Required)</span>
    <i class="hs-select-field__icon is-leading">
        <!-- Icon SVG -->
    </i>
    <select class="hs-select-field__input">
        <!--- Options... -->
    </select>
</label>
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

### Anatomical Classes
These classes make up the elements inside a component.

| Class                     | Effect                                             |
|---------------------------|----------------------------------------------------|
| `.hs-select-field`        | Main select field class.                           |
| `.hs-select-field__label` | The select field's label class.                    |
| `.hs-select-field__input` | The select field's main input class.               |
| `.hs-select-field__icon`  | The select field's icon class.                     |

### Variant Classes
For information on how to use these classes, [click here](index.md#modification-html).

| Class         | Effect                                             |
|---------------|----------------------------------------------------|
| `.is-filled`  | Renders the component in its filled style.         |
| `.is-danger`  | Renders the component in its danger state.         |
| `.is-leading` | Renders the component's icon in its leading style. |

### Custom Properties
These are for creating your own component theme classes that you can append to the parent element markup.

| Property                          | Effect                                       |
|-----------------------------------|----------------------------------------------|
| `--hs-select-field-fill`          | Changes the select field's background color. |
| `--hs-select-field-ink`           | Changes the select field's text color.       |
| `--hs-select-field-label-ink`     | Changes the text field label's text color.   |
| `--hs-select-field-helper-ink`    | Changes the text field helper's text color.  |
| `--hs-select-field-border`        | Changes the select field's border color.     |
| `--hs-select-field-radius`        | Changes the select field's border radius.    |
| `--hs-select-field-padding`       | Changes the select field's padding.          |
| `--hs-select-field-shadow`        | Changes the select field's shadow.           |
| `--hs-select-field-size`          | Changes the select field's text size.        |
| `--hs-select-field-label-size`    | Changes the select field's label size.       |
| `--hs-select-field-helper-size`   | Changes the select field's helper size.      |
| `--hs-select-field-weight`        | Changes the select field's text weight.      |
| `--hs-select-field-label-weight`  | Changes the select field's label weight.     |
| `--hs-select-field-helper-weight` | Changes the select field's helper weight.    |

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
### Configuring styles
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

### Extending styles
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.