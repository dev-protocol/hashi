---
id: extend
title: Extend API
slug: /core/api/extend
sidebar_position: 3
---
# Extend
The Extend API is used for creating a variant of a smaller component such as buttons, cards, text-fields, etc.

The Extend API tends to generate more code than usual, but it is a powerful tool for component variant creation.

Most of the values to be passed in the API's submodules (Color, Shape, Typography) are taking in [Hashi's design tokens](../tokens/index.mdx).

Most of the time, you will only need this rarely as [Utility Classes](../../hs-components/Utils.md) are built in the design system. But for other reasons -- like extracting it as a 'component-like' variant -- this is definitely the way to go.

```scss
@use 'node_modules/@devprotocol/hashi/hs-component';

@include hs-component.extend('hs-component--danger') {
    @include hs-component.color((
        fill: 'danger',
        ink: 'danger-ink',
        border: 'danger'
    ), 'outlined');
    
    @include hs-component.shape((
        radius: 'radius-small',
        padding: (0.5rem 0.7rem)
    ));
    
    @include hs-component.typography((
        size: 'size-subtitle',
        weight: 'weight-title',
    ));
}
```

## Color
The color extend API has two main parameters, the theme data, and the theme style. The theme data is like json data, but using SCSS maps instead. You can also use the theme data as a source of truth for multiple color styles.

We allow three major theme styles: `text`, `outlined`, and `filled`.

Valid color properties are located in the [color tokens](../tokens/Color%20Tokens.mdx#properties) page.

```scss
// an example with theme data as source of truth:
$theme-data: (
    fill: 'plox',
    ink: 'plox-ink',
    border: 'plox'
);

@include hs-component.extend('hs-component--something') {
    @include hs-component.color($theme-data, 'text');
}

@include hs-component.extend('hs-component--something2') {
    @include hs-component.color($theme-data, 'filled');
}
```

## Shape, and Typography
The shape extend API, and typography extend API only takes one parameter, that being theme data. Valid properties are listed in the [shape tokens](../tokens/Shape%20Tokens.mdx#properties), and [typography tokens](../tokens/Type%20Tokens.mdx#properties) page.

```scss
@include hs-component.extend('hs-component--danger') {
    @include hs-component.shape((
        radius: 'radius-small',
        padding: (0.5rem 0.7rem)
    ));
    
    @include hs-component.typography((
        size: 'size-subtitle',
        weight: 'weight-title',
    ));
}
```