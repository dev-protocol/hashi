---
id: hs-tick-field
title: Tick Fields
slug: /develop/tick-field
displayed_sidebar: develop
---
Tickboxes allow the user to toggle a specific option on or off. They are commonly used in forms and site settings.

<div class="hs-component-preview col-2">
  <div class="hs-component-preview__row">
    <label class="hs-tick-field">
      <input class="hs-tick-field__input" type="radio" id="value" name="input" value="value" />
      <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
      </div>
    </label>
    <label class="hs-tick-field">
      <input class="hs-tick-field__input" type="radio" id="value" name="input" value="value" />
      <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
      </div>
    </label>
  </div>
  <div class="hs-component-preview__row">
    <label class="hs-tick-field">
      <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
      <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
      </div>
    </label>
    <label class="hs-tick-field">
      <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
      <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
      </div>
    </label>
  </div>
</div>

## Usage
### HTML
This component can be used both as a `radio` input.
```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="radio" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
    </div>
</label>
```

Or a `checkbox` input.

```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
    </div>
</label>
```

You can also optionally add a sprite in your tickfield.

```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
    </div>
</label>
```

### SCSS/CSS
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-tick-field';

@include hashi.init {
  @include hs-tick-field.render();
}
```

### Outlined Tick Field
By default, the form field is styled using the outlined style. This doesn't provide emphasis differentiation, just stylistic choices.
```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
    </div>
</label>
```

### Filled Tick Field
You can modify the tick field style to be in the filled style by adding the `.is-filled` class to the parent's class list.
```html
<label class="hs-tick-field is-filled">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <img class="hs-tick-field__sprite" src="media.png" width="32" height="32" alt="media alt text" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
    </div>
</label>
```

### Helper Texts
Helper texts provide additional context to what is being asked of the user.

Helper texts can also be used for error messages during form validation.
```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
    </div>
</label>
```

### Tick Field Sprites
Tick Field sprites add more visual distinction to each option. You can associate a sprite to a tick field by adding the `.hs-tick-field__sprite` class to an `img` element.
```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <img class="hs-tick-field__sprite" src="media.png" width="32" height="32" alt="media alt text" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
    </div>
</label>
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

### Anatomical Classes
These classes make up the elements inside a component.

| Class                    | Effect                              |
|--------------------------|-------------------------------------|
| `.hs-tick-field`         | Main tick field class.              |
| `.hs-tick-field__label`  | The tick field's label class.       |
| `.hs-tick-field__input`  | The tick field's main input class.  |
| `.hs-tick-field__sprite` | The tick field's sprite class.      |
| `.hs-tick-field__helper` | The tick field's helper text class. |

### Variant Classes
For information on how to use these classes, [click here](index.md#modification-html).

| Class         | Effect                                             |
|---------------|----------------------------------------------------|
| `.is-filled`  | Renders the component in its filled style.         |

### Custom Properties
These are for creating your own component theme classes that you can append to the parent element markup.

| Property                        | Effect                                      |
|---------------------------------|---------------------------------------------|
| `--hs-tick-field-ink`           | Changes the tick field's text color.        |
| `--hs-tick-field-label-ink`     | Changes the tick field label's text color.  |
| `--hs-tick-field-helper-ink`    | Changes the tick field helper's text color. |
| `--hs-tick-field-border`        | Changes the tick field's border color.      |
| `--hs-tick-field-radius`        | Changes the tick field's border radius.     |
| `--hs-tick-field-padding`       | Changes the tick field's padding.           |
| `--hs-tick-field-shadow`        | Changes the tick field's shadow.            |
| `--hs-tick-field-size`          | Changes the tick field's text size.         |
| `--hs-tick-field-label-size`    | Changes the tick field's label size.        |
| `--hs-tick-field-helper-size`   | Changes the tick field's helper size.       |
| `--hs-tick-field-weight`        | Changes the tick field's text weight.       |
| `--hs-tick-field-label-weight`  | Changes the tick field's label weight.      |
| `--hs-tick-field-helper-weight` | Changes the tick field's helper weight.     |

#### Example

```scss
.my-tick-field-theme {
  --hs-tick-field-fill: #232323;
  --hs-tick-field-ink: lime;
  --hs-tick-field-border: var(--hs-tick-field-fill);
  
  &:hover {
    --hs-tick-field-fill: #353535;
  }
  
  &:active {
    --hs-tick-field-fill: #535353;
  }
}
```