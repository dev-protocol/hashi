---
id: dark-mode
slug: /core/helpers/dark-mode
title: Dark Mode Helper
---

# Dark Mode Helper
To create a component's style for the dark theme, we've created a special mixin. Just call this mixin and put in the styles inside the content brackets.

## Usage
```scss
.my-component {
    // styles here
    
    @include hashi.dark-mode {
        // styles here
    }
}
```