---
id: breakpoints
slug: /core/helpers/breakpoints
title: Breakpoints
---

# Breakpoints
To create a component breakpoint, we've created a specialized mixin. You can query three of the following breakpoints: `small`, `medium`, and `large`. You can also pass in context on the second parameter of the mixin, this will allow you to switch between a min-width breakpoint and a max-width breakpoint. 

```scss
/// Creates a breakpoint for a component.
/// @param {string} $query
/// @param {'min'|'max'} $context
/// @return {void} styles underneath a breakpoint.
@mixin breakpoint-create($query, $context: 'min') { ... }
```

## Usage
```scss
.my-component {
    // styles here
    
    @include hashi.breakpoint-create('small', 'max') {
        // styles here
    }
    
    @include hashi.breakpoint-create('medium') {
        // styles here
    }
    
    @media (min-width: #{hashi.breakpoint-get('large')}) {
        // styles here
    }
    
}
```