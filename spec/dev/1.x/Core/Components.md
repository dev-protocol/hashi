# Hashi Components
Hashi's components are designed to be primitive, and small. The components should provide the most basic of needs in a project like buttons, cards, form fields, and... profiles? Really? Jokes aside, these are part of Dev Protocol's identity, hence, it uses the provided design tokens.

These components can also be subcomponents of a larger, more project-specific components that solve its own design problems.

## Modification
The components must be modifiable using class names. In comparison to the modification API in the previous version, v1's implementation is more of a class name focused API.

We tried to put a more "human-feel" to the class names. We're using what we call a "base-description" pattern in terms of naming classes. BEM does provide a good way of doing this, however we generally found this very verbose and takes up a lot of character space. Hence, we tried to deviate from BEM's variance pattern to our own.

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

By making the class API like this, it's more readable and concise. As you can see, the only thing we retained from BEM is the element part of it. We truly believe this API style will make the class names API more consistent, readable, and developer-friendly.

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

## Composition
> 🚧 This portion is still under construction.