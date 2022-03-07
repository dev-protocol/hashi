# Utilities
> 🚧 This portion of the proposal is very unstable, and is subject to change at any given time.

Utility classes are a vital part of Hashi. It allows developers to easily compose layouts, create simple stateless components, and make minor modifications in the UI.

## Expected Behaviors
The utility classes are defined to only compose layouts, create simple stateless components, and make minor UI modifications. Henceforth, it will only support default states, and media queries.

```html
<h1 class="border-surface-200 px-md py-lg rd-md">
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

## Syntax
