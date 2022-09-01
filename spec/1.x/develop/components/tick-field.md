---
id: hs-tick-field
title: Tick Fields
slug: /develop/tick-field
displayed_sidebar: develop
---
Tickboxes allow the user to toggle a specific option on or off. They are commonly used in forms and site settings.

## Usage
### HTML
This component can be used both as a `radio` input.
```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="radio" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
    </div>
</label>
```

Or a `checkbox` input.

```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
    </div>
</label>
```

You can also optionally add a sprite in your tickfield.

```html
<label class="hs-tick-field">
    <input class="hs-tick-field__input" type="checkbox" id="value" name="input" value="value" />
    <img class="hs-tick-field__sprite" src="media.png" width="32" height="32" alt="media alt text" />
    <div class="d-flex flow-col items-start">
        <span class="hs-tick-field__label">HSTickField Label</span>
        <span class="hs-tick-field__helper">Helper Text</span>
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