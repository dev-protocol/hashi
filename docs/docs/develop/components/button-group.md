---
id: hs-button-group
title: Button Groups
slug: /develop/button-group
---
# Button Groups
Button groups are a group of related actions that may be used to paginate results, tab sections of pages, or simply select an option.

<div class="hs-component-preview">
    <div class="hs-component-preview__row">
        <div class="hs-button-group">
            <input id="dev" type="radio" name="choice" value="dev" checked/>
            <label for="dev" class="hs-button">
                <span class="hs-button__label">DEV</span>
            </label>
            <input id="pro" type="radio" name="choice" value="pro"/>
            <label for="pro" class="hs-button">
                <span class="hs-button__label">PRO</span>
            </label>
            <input id="toc" type="radio" name="choice" value="toc"/>
            <label for="toc" class="hs-button">
                <span class="hs-button__label">TOC</span>
            </label>
            <input id="ols" type="radio" name="choice" value="ols"/>
            <label for="ols" class="hs-button">
                <span class="hs-button__label">OLS</span>
            </label>
        </div>
    </div>
</div>

## Usage
### HTML
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
    <input id="toc" type="radio" name="choice" value="toc"/>
    <label for="toc" class="hs-button">
        <span class="hs-button__label">TOC</span>
    </label>
    <input id="ols" type="radio" name="choice" value="ols"/>
    <label for="ols" class="hs-button">
        <span class="hs-button__label">OLS</span>
    </label>
</div>
```

### SCSS/CSS
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-button-group';

@include hashi.init {
  @include hs-button-group.render();
}
```

## API
### CSS Classes
These are used to extend and modify the styles of a component on the markup.

### Anatomical Classes
These classes make up the elements inside a component.

| Class              | Effect                                            |
|--------------------|---------------------------------------------------|
| `.hs-button-group` | A wrapper class around buttons for grouping them. |