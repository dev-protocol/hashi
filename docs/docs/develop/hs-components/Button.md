---
id: hs-button
title: Button
slug: /develop/button
displayed_sidebar: develop
---

# HSButton Component
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
  <label class="hs-button hs-button--filled">
    <span class="hs-button__label">Button</span>
    <input type="radio" name="choice" value="button">
  </label>
  <label class="hs-button hs-button--filled">
    <span class="hs-button__label">Button</span>
    <input type="checkbox" name="choice" value="button">
  </label>
</div>
```

### SCSS/CSS

```scss
@use 'path/to/@devprotocol/hashi/hs-button';

@include hs-button.render();
```

## API

### CSS Classes

These are used to extend and modify the styles of a component on the markup.

| Class                  | Effect                                       |
|------------------------|----------------------------------------------|
| `.hs-button`           | Main button class.                           |
| `.hs-button__label`    | Class for the button label.                  |
| `.hs-button__icon`     | Class for the button icon.                   |
| `.hs-button--outlined` | Renders the component in its outlined style. |
| `.hs-button--filled`   | Renders the component in its filled style.   |
| `.is-success`          | Renders the component in its success state.  |
| `.is-warning`          | Renders the component in its warning state.  |
| `.is-danger`           | Renders the component in its danger state.   |

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

### Hashi `render()` API

Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](../hs-core/core-apis/Render.md) page.

```scss
$fill: 'scarlet' !default; // Modifies the button's main fill color
$ink: 'scarlet-ink' !default; // Modifies the button's main ink color
$border: $fill !default; // Modifies the button's main border color
$tone: 400 !default; // Modifies the button's main color tone

$radius: 'radius-xs' !default; // Modifies the button's border-radius
$padding: (0.5rem 0.7rem) !default; // Modifies the button's padding

$family: 'family-action' !default; // Modifies the button's font-family
$size: 'size-action' !default; // Modifies the button's font-size
$weight: 'weight-action' !default; // Modifies the button's font-weight
$line-height: 'line-height-action' !default; // Modifies the button's line-height

$gap: 0 !default; // Modifies the gap between the label and the icon

$variants: 'all' !default; // Sets what variants to render
```

### Hashi `extend()` API

Please refer to the [extend API](./hs-core/core/api/extend) page.