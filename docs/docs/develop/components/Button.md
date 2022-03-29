---
id: hs-button
title: Button
slug: /develop/button
displayed_sidebar: develop
---

# Buttons
Buttons call the user to a specific action in the page. May it be in a form, or a hyperlink.

<div class="hs-component-preview col-2">
  <div class="hs-component-preview__row">
    <button class="hs-button native-blue" role="button">
      <span class="hs-button__label">Button</span>
    </button>
    <button class="hs-button hs-button--outlined native-blue" role="button">
      <span class="hs-button__label">Button</span>
    </button>
    <button class="hs-button hs-button--filled native-blue" role="button">
      <span class="hs-button__label">Button</span>
    </button>
  </div>
  <div class="hs-component-preview__row">
    <button class="hs-button native-blue" role="button" disabled>
      <span class="hs-button__label">Button</span>
    </button>
    <button class="hs-button hs-button--outlined native-blue" role="button" disabled>
      <span class="hs-button__label">Button</span>
    </button>
    <button class="hs-button hs-button--filled native-blue" role="button" disabled>
      <span class="hs-button__label">Button</span>
    </button>
  </div>
</div>

## Usage
### HTML

```html
<button class="hs-button" role="button">
  <i class="hs-button__icon" aria-hidden="true"></i>
  <span class="hs-button__label">Button</span>
</button>
```

There's a caveat to the HTML structure. If you wish to use the button component to redirect a user to another page,
please use `<a></a>` tags instead. This improves accessibility, and the way styles work for this component.
Additionally, anchor elements don't have a disabled attribute so you wouldn't really need a disabled state for this.

```html
<a class="hs-button" href="https://devprotocol.xyz" target="_blank">
  <i class="hs-button__icon" aria-hidden="true"></i>
  <span class="hs-button__label">Button</span>
</a>
```

Additionally, you can use radios and checkboxes whenever you put it under the Button Group wrapper.

```html
<div class="hs-button-group">
  <input id="dev" type="radio" name="choice" value="dev" checked/>
  <label for="dev" class="hs-button">
    <span class="hs-button__label">DEV</span>
  </label>
  <input id="pro" type="radio" name="choice" value="pro"/>
  <label for="pro" class="hs-button">
    <span class="hs-button__label">PRO</span>
  </label>
</div>
```

### SCSS/CSS

```scss
@use 'path/to/@devprotocol/hashi/hashi';
@use 'path/to/@devprotocol/hashi/hs-button';

@include hashi.init {
  @include hs-button.render();
}
```

## API

### CSS Classes

These are used to extend and modify the styles of a component on the markup.

### Anatomical Classes
| Class               | Effect                                       |
|---------------------|----------------------------------------------|
| `.hs-button`        | Main button class.                           |
| `.hs-button__label` | Class for the button label.                  |
| `.hs-button__icon`  | Class for the button icon.                   |

### Variant Classes
For information on how to use these classes, [click here](index.md#modification-html).

| Class          | Effect                                                |
|----------------|-------------------------------------------------------|
| `.is-outlined` | Renders the component in its outlined style.          |
| `.is-filled`   | Renders the component in its filled style.            |
| `.is-raised`   | Renders the component in its filled + elevated style. |
| `.is-success`  | Renders the component in its success state.           |
| `.is-warning`  | Renders the component in its warning state.           |
| `.is-danger`   | Renders the component in its danger state.            |

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
| `--hs-button-shadow`     | Changes the button's shadow.             |
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

### Hashi `render()` API

Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](index.md#modification-scss).

```scss
$fill: 'accent' !default;
$ink: 'accent-ink' !default;
$border: $fill !default;
$tone: 400 !default;

$radius: 'small' !default;
$padding: ('xs' 'sm') !default;

$family: 'body' !default;
$size: 'body' !default;
$weight: 'bold' !default;
$line-height: 'normal' !default;

$gap: 0 !default;
```

### Extending styles
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.