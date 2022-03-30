---
id: hs-button-group
title: Button Group
slug: /components/button-group
sidebar_position: 2
---
# HSButtonGroup Component
<div class="hs-component-preview">
    <div class="hs-component-preview__row">
        <div class="hs-button-group">
            <button class="hs-button hs-button--outlined native-blue" role="button">
                <span class="hs-button__label">BUT</span>
            </button>
            <button class="hs-button hs-button--filled native-blue" role="button">
                <span class="hs-button__label">TON</span>
            </button>
            <button class="hs-button hs-button--outlined native-blue" role="button">
                <span class="hs-button__label">GRP</span>
            </button>
        </div>
    </div>
</div>

## Usage
### HTML
```html
<div class="hs-button-group">
    <label class="hs-button hs-button--filled">
        <span class="hs-button__label">BUTTON</span>
        <input type="radio" name="choice" value="button">
    </label>
    <label class="hs-button hs-button--filled">
        <span class="hs-button__label">BUTTON</span>
        <input type="checkbox" name="choice" value="button">
    </label>
</div>
```

### SCSS/CSS
```scss
@use 'path/to/@devprotocol/hashi/hs-button-group';

@include hs-button-group.render();
```

## API
### CSS Classes
These are used to extend and modify the styles of a component on the markup.

| Class              | Effect                                            |
|--------------------|---------------------------------------------------|
| `.hs-button-group` | A wrapper class around buttons for grouping them. |
