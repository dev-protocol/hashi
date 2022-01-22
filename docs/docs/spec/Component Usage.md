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
<div class="hs-status-tag deprecated">
    <span class="hs-status-tag__label">Status: <b>DEPRECATED (v0.1.0-alpha, -beta)</b></span>
</div>

```scss
@use 'path/to/@devprotocol/hashi/hs-component';

@include hs-component.use(
    $color: (
        default: 'surface',
        preset: 'all'
    ),
    $shape: (
        radius: 'xs',
        padding: 'sm'
    ),
    $type: (
        size: 'body',
        line-height: 'body'
    ),
    $settings: (
        variants: 'all'
    )
);
```

<div class="hs-status-tag implemented">
    <span class="hs-status-tag__label">Status: <b>IMPLEMENTED (v0.1.0)</b></span>
</div>

```scss
@use 'path/to/@devprotocol/hashi/hs-component' with (
    // This styles the defaults for the component.
    //
    // All values to be passed should be 
    // valid token queries.
    $fill: 'surface', 
    $ink: 'surface-ink',
    $radius: 'xs',
    $padding: 'sm'
);

@include hs-component.use();

@include hs-component.extend('.class-name') {
    @include hs-component.color(($preset), $style);
    @include hs-component.shape(($preset));
    @include hs-component.type(($preset));
}
```