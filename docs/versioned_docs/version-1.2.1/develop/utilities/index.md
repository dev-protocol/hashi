---
title: Introduction
slug: /develop/utilities
displayed_sidebar: develop
---
Utility classes are a vital part of Hashi. It allows developers to easily compose layouts, create simple stateless
components, and make minor modifications in the UI.

## Instantiating
Use the `hs-utils` module in your style file and call in the specific utility mixin you want to use.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hashi.init {
  @include hs-utils.color();
  ...
}
```

### Selective Class Rendering
Every utility initializer comes with the `$exclude` and `$include` parameters. This allows you to exclude certain
utility classes, or include the ones you only need.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hashi.init {
  @include hs-utils.color-utils(
    $include: ('text', 'border')
  );
  @include hs-utils.layout-utils(
    $exclude: ('d', 'gap', 'flow')
  );
}
```

However, you can only use one or the other parameter. Using both will result in an error.

Selecting the utilities to include/exclude is done by passing the class prefix of the utilities. Example: `text`
is mapped to `text-[color]-[tone]` utilities.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hashi.init {
  @include hs-utils.color-utils(
    $include: ('text', 'bg')
  );
}
```

## Expected Behaviors
The utility classes are defined to only compose layouts, create simple stateless components, and make minor UI
modifications. Henceforth, it will only support default states, and media queries.

```html
<h1 class="border-primary-200 px-md py-lg rd-md">
  This is a title dialog
</h1>
<section class="d-grid cols-1 @md:cols-2 @lg:cols-3 gap-sm">
  <HSCard />
  <HSCard />
  <HSCard />
  <HSCard />
  <HSCard />
</section>
```

### Applying utility classes to modify hashi components
By design, you CANNOT use utility classes to modify pre-made components. The stylesheets for those were architected to
minimize style bleeding and accepting unwanted effects from style cascading. This decision was also made to enforce more
consistency in terms of component styling exclusive to the project. To include more variants, you'd have to use the
component's [`extend()` API](../components/index.md#extension-scss).

## Utility Classes Documentation
- [Syntax](syntax.md)
- [Layout Utils](layout-utils.md)
- [Color Utils](color-utils.md)
- [Shape Utils](shape-utils.md)
- [Typography Utils](typography-utils.md)