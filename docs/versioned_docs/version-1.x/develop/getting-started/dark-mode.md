---
title: Dark Mode
slug: /develop/dark-mode
displayed_sidebar: develop
---
Hashi is dark mode-ready out of the box. To enable dark mode, just add the `hashi-theme` attribute to the `<html>` tag in your html file, and specify `dark` as the value.
```html
<html hashi-theme="dark">
...
</html>
```

This will automatically flip everything to dark mode, from component styles, to the utility classes, to the tokens themselves. Hence, no additional configuration will be needed.

## Declaring dark mode styles in SCSS
Hashi provides you an SCSS mixin to declare dark mode styles inside a component style. Admittedly, you won't be needing to reach for this as much, we're only providing this as an escape patch whenever the current offering/s aren't enough.

This will most likely be used when you style a component using our [component composition API](../api/composition/index.md).

```scss
@use 'node_modules/@devprotocol/hashi';

.hs-component {
  // Default styles
  
  @include hashi.dark-mode {
    // Dark mode styles
  }
}
```