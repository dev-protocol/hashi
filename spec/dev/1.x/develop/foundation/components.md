---
slug: /develop/foundation/components displayed_sidebar: develop
---
# Hashi Components
Hashi's components are designed to be primitive, and small. The components should provide the most basic of needs in a
project like buttons, cards, form fields, wallets, and... profiles? Really? Jokes aside, these are part of Dev
Protocol's identity, hence, it uses the provided design tokens.

These components can also be subcomponents of a larger, more project-specific components that solve its own design
problems.

## Instantiation
Instantiating a component is as easy as calling the component's `use()` mixin.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-component';

@include hashi.init() {
  @include hs-component.use();
}
```

## Modification (HTML)
The components must be modifiable using class names. In comparison to the modification API in the previous version, v1's
implementation is more of a class name focused API.

We tried to put a more "human-feel" to the class names. We're using what we call a "base-description" pattern in terms
of naming classes. BEM does provide a good way of doing this, however we generally found this very verbose and takes up
a lot of character space. Hence, we tried to deviate from BEM's variance pattern to our own.

```html
<!-- v0.x -->
<button class="hs-button hs-button--outlined is-danger">
    <span class="hs-button__label hs-button__label--bold">Button</span>
</button>

<!-- v1.x -->
<button class="hs-button is-outlined is-danger">
    <span class="hs-button__label is-bold">Button</span>
</button>
```

By making the class API like this, it's more readable and concise. As you can see, the only thing we retained from BEM
is the element part of it. We truly believe this API style will make the class names API more consistent, readable, and
developer-friendly.

### Aren't there specificity issues?
To solve specificity issues, these modification classes are created with the base class as the key.

```scss
.hs-button {
  // base styles...
  
  &.is-outlined {
    // outlined styles...
  }
}
```

This lets us use the same class names for every component while not clashing in with other modifiers.

## Modification (SCSS)

```scss
@use 'node_modules/@devprotocol/hashi/hs-component' with (
  // This styles the defaults for the component.
  //
  // All values to be passed should be 
  // valid token queries.
  $fill: 'accent', 
  $ink: 'accent-ink',
  $radius: 'xs',
  $padding: 'sm'
);

@include hs-component.use();
```

## Extension (SCSS)

```scss
@use 'node_modules/@devprotocol/hashi/hs-component';

@include hs-component.extend('.class-name') {
  @include hs-component.color(($preset), $style);
  @include hs-component.shape(($preset));
  @include hs-component.type(($preset));
}
```

## Composition
Hashi lets you create custom components to solve your project's design problems. From layouts, to coloring, to adding
radii, to changing the font size, Hashi will cover it all for you.

### Simple composition (utilities)
By using [utility classes](utilities/index.md), you can create layouts of components, add color, and modify the shapes
and sizes of a component easily. This is generally recommended for components that are not complex in nature.

### Advanced composition (composition API)
This is for components that are complex in structure, and requires more attention, care, and effort to building. We
expose a handful of [composition APIs](../api/composition/index.md) to help you in building these complex components.
You are required to write SCSS. 