---
slug: /develop/foundation/utilities/shape
displayed_sidebar: develop
---
# Shape Utility Classes
Single-purpose, consistent, and predictable classes for styling/modifying an element's shape.

## Widths
**Syntax:** `w-[size]`
```scss
.w-none { width: 0; }
.w-quarter { width: 25%; }
.w-third { width: 33.333333%; }
.w-half { width: 50%; }
.w-full { width: 100%; }
.w-screen { width: 100vw; }
```

## Heights
**Syntax:** `h-[size]`
```scss
.h-none { height: 0; }
.h-quarter { height: 25%; }
.h-third { height: 33.333333%; }
.h-half { height: 50%; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
```

## Radius
**Syntax:** `r[direction]-[size]`
```scss
// All sides
.r-none { border-radius: var(--hs-theme-radius-none); }
.r-xs { border-radius: var(--hs-theme-radius-xs); }
.r-sm { border-radius: var(--hs-theme-radius-sm); }
.r-md { border-radius: var(--hs-theme-radius-md); }
.r-lg { border-radius: var(--hs-theme-radius-lg); }
.r-xl { border-radius: var(--hs-theme-radius-xl); }
.r-pill { border-radius: var(--hs-theme-radius-pill); }

// Top
.rt-none { 
  border-top-left-radius: var(--hs-theme-radius-none);
  border-top-right-radius: var(--hs-theme-radius-none);
}
.rt-xs {
  border-top-left-radius: var(--hs-theme-radius-xs);
  border-top-right-radius: var(--hs-theme-radius-xs);
}
.rt-sm {
  border-top-left-radius: var(--hs-theme-radius-sm);
  border-top-right-radius: var(--hs-theme-radius-sm);
}
.rt-md {
  border-top-left-radius: var(--hs-theme-radius-md);
  border-top-right-radius: var(--hs-theme-radius-md);
}
.rt-lg {
  border-top-left-radius: var(--hs-theme-radius-lg);
  border-top-right-radius: var(--hs-theme-radius-lg);
}
.rt-xl {
  border-top-left-radius: var(--hs-theme-radius-xl);
  border-top-right-radius: var(--hs-theme-radius-xl);
}
.rt-pill {
  border-top-left-radius: var(--hs-theme-radius-pill);
  border-top-right-radius: var(--hs-theme-radius-pill);
}

// Bottom
.rb-none {
  border-bottom-left-radius: var(--hs-theme-radius-none);
  border-bottom-right-radius: var(--hs-theme-radius-none);
}
.rb-xs {
  border-bottom-left-radius: var(--hs-theme-radius-xs);
  border-bottom-right-radius: var(--hs-theme-radius-xs);
}
.rb-sm {
  border-bottom-left-radius: var(--hs-theme-radius-sm);
  border-bottom-right-radius: var(--hs-theme-radius-sm);
}
.rb-md {
  border-bottom-left-radius: var(--hs-theme-radius-md);
  border-bottom-right-radius: var(--hs-theme-radius-md);
}
.rb-lg {
  border-bottom-left-radius: var(--hs-theme-radius-lg);
  border-bottom-right-radius: var(--hs-theme-radius-lg);
}
.rb-xl {
  border-bottom-left-radius: var(--hs-theme-radius-xl);
  border-bottom-right-radius: var(--hs-theme-radius-xl);
}
.rb-pill {
  border-bottom-left-radius: var(--hs-theme-radius-pill);
  border-bottom-right-radius: var(--hs-theme-radius-pill);
}

// Left
.rl-none {
  border-top-left-radius: var(--hs-theme-radius-none);
  border-bottom-left-radius: var(--hs-theme-radius-none);
}
.rl-xs {
  border-top-left-radius: var(--hs-theme-radius-xs);
  border-bottom-left-radius: var(--hs-theme-radius-xs);
}
.rl-sm {
  border-top-left-radius: var(--hs-theme-radius-sm);
  border-bottom-left-radius: var(--hs-theme-radius-sm);
}
.rl-md {
  border-top-left-radius: var(--hs-theme-radius-md);
  border-bottom-left-radius: var(--hs-theme-radius-md);
}
.rl-lg {
  border-top-left-radius: var(--hs-theme-radius-lg);
  border-bottom-left-radius: var(--hs-theme-radius-lg);
}
.rl-xl {
  border-top-left-radius: var(--hs-theme-radius-xl);
  border-bottom-left-radius: var(--hs-theme-radius-xl);
}
.rl-pill {
  border-top-left-radius: var(--hs-theme-radius-pill);
  border-bottom-left-radius: var(--hs-theme-radius-pill);
}

// Right
.rr-none {
  border-top-right-radius: var(--hs-theme-radius-none);
  border-bottom-right-radius: var(--hs-theme-radius-none);
}
.rr-xs {
  border-top-right-radius: var(--hs-theme-radius-xs);
  border-bottom-right-radius: var(--hs-theme-radius-xs);
}
.rr-sm {
  border-top-right-radius: var(--hs-theme-radius-sm);
  border-bottom-right-radius: var(--hs-theme-radius-sm);
}
.rr-md {
  border-top-right-radius: var(--hs-theme-radius-md);
  border-bottom-right-radius: var(--hs-theme-radius-md);
}
.rr-lg {
  border-top-right-radius: var(--hs-theme-radius-lg);
  border-bottom-right-radius: var(--hs-theme-radius-lg);
}
.rr-xl {
  border-top-right-radius: var(--hs-theme-radius-xl);
  border-bottom-right-radius: var(--hs-theme-radius-xl);
}
.rr-pill {
  border-top-right-radius: var(--hs-theme-radius-pill);
  border-bottom-right-radius: var(--hs-theme-radius-pill);
}
```
## Margin
**Syntax:** `m[direction]-[size]`
```scss
// All sides
.m-none { margin: var(--hs-theme-margin-none); }
.m-xs { margin: var(--hs-theme-margin-xs); }
.m-sm { margin: var(--hs-theme-margin-sm); }
.m-md { margin: var(--hs-theme-margin-md); }
.m-lg { margin: var(--hs-theme-margin-lg); }
.m-xl { margin: var(--hs-theme-margin-xl); }

// Single axis (x, y)
.mx-none { margin: 0 var(--hs-theme-margin-none); }
.mx-xs { margin: 0 var(--hs-theme-margin-xs); }
.mx-sm { margin: 0 var(--hs-theme-margin-sm); }
.mx-md { margin: 0 var(--hs-theme-margin-md); }
.mx-lg { margin: 0 var(--hs-theme-margin-lg); }
.mx-xl { margin: 0 var(--hs-theme-margin-xl); }

.my-none { margin: var(--hs-theme-margin-none) 0; }
.my-xs { margin: var(--hs-theme-margin-xs) 0; }
.my-sm { margin: var(--hs-theme-margin-sm) 0; }
.my-md { margin: var(--hs-theme-margin-md) 0; }
.my-lg { margin: var(--hs-theme-margin-lg) 0; }
.my-xl { margin: var(--hs-theme-margin-xl) 0; }

// Top
.mt-none { margin-top: var(--hs-theme-margin-none); }
.mt-xs { margin-top: var(--hs-theme-margin-xs); }
.mt-sm { margin-top: var(--hs-theme-margin-sm); }
.mt-md { margin-top: var(--hs-theme-margin-md); }
.mt-lg { margin-top: var(--hs-theme-margin-lg); }
.mt-xl { margin-top: var(--hs-theme-margin-xl); }

// Bottom
.mb-none { margin-bottom: var(--hs-theme-margin-none); }
.mb-xs { margin-bottom: var(--hs-theme-margin-xs); }
.mb-sm { margin-bottom: var(--hs-theme-margin-sm); }
.mb-md { margin-bottom: var(--hs-theme-margin-md); }
.mb-lg { margin-bottom: var(--hs-theme-margin-lg); }
.mb-xl { margin-bottom: var(--hs-theme-margin-xl); }

// Left
.ml-none { margin-left: var(--hs-theme-margin-none); }
.ml-xs { margin-left: var(--hs-theme-margin-xs); }
.ml-sm { margin-left: var(--hs-theme-margin-sm); }
.ml-md { margin-left: var(--hs-theme-margin-md); }
.ml-lg { margin-left: var(--hs-theme-margin-lg); }
.ml-xl { margin-left: var(--hs-theme-margin-xl); }

// Right
.mr-none { margin-right: var(--hs-theme-margin-none); }
.mr-xs { margin-right: var(--hs-theme-margin-xs); }
.mr-sm { margin-right: var(--hs-theme-margin-sm); }
.mr-md { margin-right: var(--hs-theme-margin-md); }
.mr-lg { margin-right: var(--hs-theme-margin-lg); }
.mr-xl { margin-right: var(--hs-theme-margin-xl); }
```
## Padding
**Syntax:** `p[direction]-[size]`
```scss
// All sides
.p-none { padding: var(--hs-theme-padding-none); }
.p-xs { padding: var(--hs-theme-padding-xs); }
.p-sm { padding: var(--hs-theme-padding-sm); }
.p-md { padding: var(--hs-theme-padding-md); }
.p-lg { padding: var(--hs-theme-padding-lg); }
.p-xl { padding: var(--hs-theme-padding-xl); }

// Single axis (x, y)
.px-none { padding: 0 var(--hs-theme-padding-none); }
.px-xs { padding: 0 var(--hs-theme-padding-xs); }
.px-sm { padding: 0 var(--hs-theme-padding-sm); }
.px-md { padding: 0 var(--hs-theme-padding-md); }
.px-lg { padding: 0 var(--hs-theme-padding-lg); }
.px-xl { padding: 0 var(--hs-theme-padding-xl); }

.py-none { padding: var(--hs-theme-padding-none) 0; }
.py-xs { padding: var(--hs-theme-padding-xs) 0; }
.py-sm { padding: var(--hs-theme-padding-sm) 0; }
.py-md { padding: var(--hs-theme-padding-md) 0; }
.py-lg { padding: var(--hs-theme-padding-lg) 0; }
.py-xl { padding: var(--hs-theme-padding-xl) 0; }

// Top
.pt-none { padding-top: var(--hs-theme-padding-none); }
.pt-xs { padding-top: var(--hs-theme-padding-xs); }
.pt-sm { padding-top: var(--hs-theme-padding-sm); }
.pt-md { padding-top: var(--hs-theme-padding-md); }
.pt-lg { padding-top: var(--hs-theme-padding-lg); }
.pt-xl { padding-top: var(--hs-theme-padding-xl); }

// Bottom
.pb-none { padding-bottom: var(--hs-theme-padding-none); }
.pb-xs { padding-bottom: var(--hs-theme-padding-xs); }
.pb-sm { padding-bottom: var(--hs-theme-padding-sm); }
.pb-md { padding-bottom: var(--hs-theme-padding-md); }
.pb-lg { padding-bottom: var(--hs-theme-padding-lg); }
.pb-xl { padding-bottom: var(--hs-theme-padding-xl); }

// Left
.pl-none { padding-left: var(--hs-theme-padding-none); }
.pl-xs { padding-left: var(--hs-theme-padding-xs); }
.pl-sm { padding-left: var(--hs-theme-padding-sm); }
.pl-md { padding-left: var(--hs-theme-padding-md); }
.pl-lg { padding-left: var(--hs-theme-padding-lg); }
.pl-xl { padding-left: var(--hs-theme-padding-xl); }

// Right
.pr-none { padding-right: var(--hs-theme-padding-none); }
.pr-xs { padding-right: var(--hs-theme-padding-xs); }
.pr-sm { padding-right: var(--hs-theme-padding-sm); }
.pr-md { padding-right: var(--hs-theme-padding-md); }
.pr-lg { padding-right: var(--hs-theme-padding-lg); }
.pr-xl { padding-right: var(--hs-theme-padding-xl); }
```

## Elevation
**Syntax:** `raise[-][level]`
```scss
.raise-none { box-shadow: none; }
.raise-low { box-shadow: 0 3px 4px 1px rgba(#000, 15%); }
.raise { box-shadow: 0 6px 10px 2px rgba(#000, 15%); }
.raise-high { box-shadow: 0 10px 15px 3px rgba(#000, 15%); }
.raise-highest { box-shadow: 0 15px 20px 4px rgba(#000, 15%); }
```