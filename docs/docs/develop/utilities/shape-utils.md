---
title: Shape Utils
slug: /develop/utilities/shape
displayed_sidebar: develop
---
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
.r-[size] { ... } // All sides
.rt-[size] { ... } // Top
.rb-[size] { ... } // Bottom
.rl-[size] { ... } // Left
.rr-[size] { ... } // Right
.rtl-[size] { ... } // Top Left
.rtr-[size] { ... } // Top Right
.rbl-[size] { ... } // Bottom Left
.rbr-[size] { ... } // Bottom Right
```

| Size     | Value    |
|----------|----------|
| `none`   | `0`      |
| `xs`     | `0.1rem` |
| `sm`     | `0.3rem` |
| `md`     | `0.5rem` |
| `lg`     | `0.7rem` |
| `xl`     | `1.2rem` |
| `2xl`    | `2.3rem` |
| `3xl`    | `3.4rem` |
| `4xl`    | `4.5rem` |
| `5xl`    | `6.1rem` |
| `6xl`    | `8.2rem` |
| `pill`   | `5000px` |
| `circle` | `50%`    |

## Margin
**Syntax:** `m[direction]-[size]`
```scss
.m-[size] { ... } // All sides
.mt-[size] { ... } // Top
.mb-[size] { ... } // Bottom
.ml-[size] { ... } // Left
.mr-[size] { ... } // Right
.mx-[size] { ... } // Left & Right
.my-[size] { ... } // Top & Bottom
```

| Size   | Value           |
|--------|-----------------|
| `none` | `0`             |
| `xs`   | `to-rem(4px)`   |
| `sm`   | `to-rem(8px)`   |
| `md`   | `to-rem(16px)`  |
| `lg`   | `to-rem(24px)`  |
| `xl`   | `to-rem(32px)`  |
| `2xl`  | `to-rem(48px)`  |
| `3xl`  | `to-rem(64px)`  |
| `4xl`  | `to-rem(80px)`  |
| `5xl`  | `to-rem(96px)`  |
| `6xl`  | `to-rem(112px)` |
| `auto` | `auto`          |

## Padding
**Syntax:** `p[direction]-[size]`
```scss
.p-[size] { ... } // All sides
.pt-[size] { ... } // Top
.pb-[size] { ... } // Bottom
.pl-[size] { ... } // Left
.pr-[size] { ... } // Right
.px-[size] { ... } // Left & Right
.py-[size] { ... } // Top & Bottom
```

| Size   | Value     |
|--------|-----------|
| `none` | `0`       |
| `xs`   | `0.1rem`  |
| `sm`   | `0.3rem`  |
| `md`   | `0.7rem`  |
| `lg`   | `1.2rem`  |
| `xl`   | `2.3rem`  |
| `2xl`  | `3.4rem`  |
| `3xl`  | `4.5rem`  |
| `4xl`  | `6.1rem`  |
| `5xl`  | `8.2rem`  |
| `6xl`  | `12.3rem` |
| `auto` | `auto`    |

## Elevation
**Syntax:** `raise[-][level]`
```scss
.raise-none { box-shadow: none; }
.raise-low { box-shadow: 0 3px 4px 1px rgba(#000, 15%); }
.raise { box-shadow: 0 6px 10px 2px rgba(#000, 15%); }
.raise-high { box-shadow: 0 10px 15px 3px rgba(#000, 15%); }
.raise-highest { box-shadow: 0 15px 20px 4px rgba(#000, 15%); }
```