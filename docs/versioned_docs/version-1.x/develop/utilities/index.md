---
title: Introduction
slug: /develop/utilities
displayed_sidebar: develop
---
Utility classes are a vital part of Hashi. It allows developers to easily compose layouts, create simple stateless
components, and make minor modifications in the UI.

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

## Utility Classes Documentation
- [Syntax](syntax.md)
- [Layout Utils](layout-utils.md)
- [Color Utils](color-utils.md)
- [Shape Utils](shape-utils.md)
- [Typography Utils](typography-utils.md)