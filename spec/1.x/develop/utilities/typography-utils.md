---
title: Typography Utils
slug: /develop/utilities/typography
displayed_sidebar: develop
---
Single-purpose, consistent, and predictable classes for styling/modifying an element's typography.

## Typography Preset
This set of utility classes serves as a shorthand for all the other utility classes presented here.

These contain the preset's set family, size, weight, and line height

**Syntax:** `[preset]`
```scss
.supertitle { ... }
.title { ... }
.subtitle { ... }
.body { ... }
.mono { ... }
.small { ... }
```
## Family
**Syntax:** `family-[family]`
```scss
.family-supertitle { font-family: var(--hs-theme-family-supertitle); }
.family-title { font-family: var(--hs-theme-family-title); }
.family-subtitle { font-family: var(--hs-theme-family-subtitle); }
.family-body { font-family: var(--hs-theme-family-body); }
.family-mono { font-family: var(--hs-theme-family-mono); }
.family-small { font-family: var(--hs-theme-family-small); }
```
## Size
**Syntax:** `size-[size]`
```scss
.size-supertitle { font-size: var(--hs-theme-size-supertitle); }
.size-title { font-size: var(--hs-theme-size-title); }
.size-subtitle { font-size: var(--hs-theme-size-subtitle); }
.size-body { font-size: var(--hs-theme-size-body); }
.size-mono { font-size: var(--hs-theme-size-mono); }
.size-small { font-size: var(--hs-theme-size-small); }
```
## Weight
**Syntax:** `weight-[weight]`
```scss
.weight-black { font-weight: 800; }
.weight-bold { font-weight: 700; }
.weight-normal { font-weight: 400; }
.weight-light { font-weight: 300; }
```
## Line Height
**Syntax:** `lh-[line-height]`
```scss
.lh-broad { line-height: 1.75; }
.lh-normal { line-height: 1.5; }
.lh-condensed { line-height: 1.25; }
```
## Text Alignment
**Syntax:** `text-align-[text-alignment]`
```scss
.text-align-left { text-align: left; }
.text-align-center { text-align: center; }
.text-align-right { text-align: right; }
.text-align-justify { text-align: justify; }
```