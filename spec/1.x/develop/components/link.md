---
id: hs-link
title: Links
slug: /develop/link
---
Links are elements that take a user from one webpage to another. These are often found inline with regular text.

<div class="hs-component-preview">
    <p>Lorem ipsum dolor sit amet, <a href="#" class="hs-link">consectetur adipisicing</a> elit. Facere, quae.</p>
</div>

## Usage
### HTML
```html
<a href="#" class="hs-link">Link.</a>
```

### SCSS/CSS
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-link';

@include hashi.init {
  @include hs-link.render();
}
```

## API
### CSS Classes
These are used to structure, extend, and modify the styles of a component on the markup.

### Anatomical Classes
These classes make up the elements inside a component.

| Class      | Effect                     |
|------------|----------------------------|
| `.hs-link` | Main link component class. |

### Custom Properties
These are for creating your own component theme classes that you can append to the parent element markup.

| Property           | Effect                               |
|--------------------|--------------------------------------|
| `--hs-link-fill`   | Changes the link's background color. |
| `--hs-link-ink`    | Changes the link's text color.       |
| `--hs-link-border` | Changes the link's border color.     |


#### Example

```scss
.my-link-theme {
  --hs-text-field-ink: lime;
}
```

### Configuring styles
Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](index.md#modification-scss).

```scss
$ink: 'accent-400' !default;
```

### Extending styles
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.