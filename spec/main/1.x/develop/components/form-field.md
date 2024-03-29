---
id: hs-form-field 
title: Form Fields
slug: /develop/form-field
---
Form fields take and validate inputs the user in a context of a form, or simple querying.

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
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..." />
</label>
```

### SCSS/CSS
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-form-field';

@include hashi.init {
  @include hs-form-field.render();
}
```

### Outlined Form Field
By default, the form field is styled using the outlined style. This doesn't provide emphasis differentiation, just stylistic choices.
```html
<label class="hs-form-field">
    <span class="hs-form-field__label">Form Field Label</span>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..." />
    <span class="hs-form-field__helper">Helper text</span>
</label>
```

### Filled Form Field
You can modify the form field style to be in the filled style by adding the `.is-filled` class to the parent's class list.
```html
<label class="hs-form-field is-filled">
    <span class="hs-form-field__label">Form Field Label</span>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..." />
    <span class="hs-form-field__helper">Helper text</span>
</label>
```

:::info **Choosing form field styles**
Form field styles must be consistent in every form. Contextually, a webpage has many forms; It can be in the form of a search field, or a contact form. Generally, you can only select one style per form. For example, in the contact form you can only limit the field's style to the outlined style, and in the search field you only limit it to the filled style.
:::

### Required Fields
To make a field required, attach a `.is-required` class to the parent element class list.
```html
<label class="hs-form-field is-required">
    <span class="hs-form-field__label">Form Field Label</span>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..." />
    <span class="hs-form-field__helper">Helper text</span>
</label>
```

### Helper Texts
Helper texts provide additional context to what is being asked of the user.

Helper texts can also be used for error messages during form validation.
```html
<label class="hs-form-field">
    <span class="hs-form-field__label">Form Field Label</span>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..." />
    <span class="hs-form-field__helper">Helper text</span>
</label>
```

### Form Field Icons
The position of the form field icon is dependent on putting a class name after the `.hs-form-field__icon` class.

By default, icons are on the trailing icon position. You can modify it to become a leading icon by attaching `.is-leading` in the icon element class list.

To use icons, place an SVG inside the `.hs-form-field__icon` element.

> The class names inside brackets are only for emphasis, not to be used in the actual implementation.

```html
<label class="hs-form-field is-required is-filled">
    <span class="hs-form-field__label">Form Field Label</span>
    <i class="hs-form-field__icon">
        <!-- Icon SVG -->
    </i>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
    <span class="hs-form-field__helper">Helper text</span>
</label>

<!-- Leading Icon -->
<label class="hs-form-field is-required is-filled">
    <span class="hs-form-field__label">Form Field Label</span>
    <i class="hs-form-field__icon [is-leading]">
        <!-- Icon SVG -->
    </i>
    <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
    <span class="hs-form-field__helper">Helper text</span>
</label>
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

### Anatomical Classes
These classes make up the elements inside a component.

| Class                    | Effect                              |
|--------------------------|-------------------------------------|
| `.hs-form-field`         | Main form field class.              |
| `.hs-form-field__label`  | The form field's label class.       |
| `.hs-form-field__input`  | The form field's main input class.  |
| `.hs-form-field__icon`   | The form field's icon class.        |
| `.hs-form-field__helper` | The form field's helper text class. |

### Variant Classes
For information on how to use these classes, [click here](index.md#modification-html).

| Class         | Effect                                             |
|---------------|----------------------------------------------------|
| `.is-filled`  | Renders the component in its filled style.         |
| `.is-danger`  | Renders the component in its danger state.         |
| `.is-leading` | Renders the component's icon in its leading style. |

### Custom Properties
These are for creating your own component theme classes that you can append to the parent element markup.

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
.my-form-field-theme {
  --hs-form-field-fill: #232323;
  --hs-form-field-ink: lime;
  --hs-form-field-border: var(--hs-form-field-fill);
  
  &:hover {
    --hs-form-field-fill: #353535;
  }
  
  &:active {
    --hs-form-field-fill: #535353;
  }
}
```

### Configuring styles
Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](index.md#modification-scss).

```scss
$fill: 'surface-200' !default;
$fill-disabled: 'disabled' !default;
$ink: 'surface-ink' !default;
$ink-disabled: 'disabled-ink' !default;
$border: 'primary-200' !default;
$border-focus: 'accent-400' !default;
$border-disabled: 'disabled' !default;

$radius: 'small' !default;
$padding: ('sm' 'md') !default;
$border-width: 1px !default;
$border-style: solid !default;

$family: 'body' !default;
$size: 'body' !default;
$weight: 'normal' !default;
$line-height: 'normal' !default;

$label-ink: 'surface-ink' !default;
$helper-ink: 'surface-ink' !default;
```

### Extending styles
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.