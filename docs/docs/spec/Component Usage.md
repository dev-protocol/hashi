---
id: component-usage
title: Component Usage
slug: /spec/component-usage
---

This doc contains proposals for the syntax of using a hashi component in SCSS.

## Instantiation
<div class="hs-status-tag implemented">
    <span class="hs-status-tag__label">Status: <b>IMPLEMENTED</b></span>
</div>

```scss
@use 'path/to/@devprotocol/hashi/hs-component';

@include hs-component.use();
```

## Theming
<div class="hs-status-tag proposal">
    <span class="hs-status-tag__label">Status: <b>PROPOSED</b></span>
</div>

```scss
@use 'path/to/@devprotocol/hashi/hs-component' with (
    $component-fill: 'surface', // It can be a token
    $component-ink: 'surface-ink',
    $component-border: #ffac00, // or a raw color value
);

@include hs-component.use();
```