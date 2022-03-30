---
slug: /develop/foundation/utilities/layout
displayed_sidebar: develop
---
# Layout Utility Classes
Single-purpose, consistent, and predictable classes for styling/modifying an element's layout.

## Displays
**Syntax:** `d-[display]`
```scss
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }
.d-inline { display: inline; }
.d-inline-block { display: inline-block; }
.d-inline-flex { display: inline-flex; }
.d-inline-grid { display: inline-grid; }
```

## Gaps
**Syntax:** `gap-[size]`
```scss
.gap-none { gap: var(--hs-theme-space-none); }
.gap-xs { gap: var(--hs-theme-space-xs); }
.gap-sm { gap: var(--hs-theme-space-sm); }
.gap-md { gap: var(--hs-theme-space-md); }
.gap-lg { gap: var(--hs-theme-space-lg); }
.gap-xl { gap: var(--hs-theme-space-xl); }
```

## Flex
### Flex Direction
**Syntax:** `flow-[flow]`
```scss
.flow-col { flex-direction: column; }
.flow-row { flex-direction: row; }
.flow-col-reverse { flex-direction: column-reverse; }
.flow-row-reverse { flex-direction: row-reverse; }
```

### Flex Wrap
**Syntax:** `wrap-[flow]`
```scss
.wrap { flex-wrap: wrap; }
.wrap-none { flex-wrap: nowrap; }
.wrap-reverse { flex-wrap: wrap-reverse; }
```

### Justify Content
**Syntax:** `justify-[flow]`
```scss
.justify-center { justify-content: center; }
.justify-start { justify-content: start; }
.justify-end { justify-content: end; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }
```

### Align Items
**Syntax:** `items-[flow]`
```scss
.items-center { align-items: center; }
.items-start { align-items: start; }
.items-end { align-items: end; }
.items-base { align-items: baseline; }
.items-stretch { align-items: stretch; }
```

## Grid

### Grid Columns
> ⚠ **CAUTION!** This is different from the `grid column` utils! This defines the number of columns in a grid, not set the item into a specific start and end column.

**Syntax:** `cols-[# of cols]`
```scss
.cols-1 { grid-template-columns: repeat(1, 1fr); }
.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.cols-4 { grid-template-columns: repeat(4, 1fr); }
.cols-5 { grid-template-columns: repeat(5, 1fr); }
.cols-6 { grid-template-columns: repeat(6, 1fr); }
.cols-7 { grid-template-columns: repeat(7, 1fr); }
.cols-8 { grid-template-columns: repeat(8, 1fr); }
.cols-9 { grid-template-columns: repeat(9, 1fr); }
.cols-10 { grid-template-columns: repeat(10, 1fr); }
.cols-11 { grid-template-columns: repeat(11, 1fr); }
.cols-12 { grid-template-columns: repeat(12, 1fr); }
```

### Grid Column
> ⚠ **CAUTION!** This is different from the `grid columns` utils! This sets the item into a specific start and end column, not define the number of columns in a grid.

**Syntax:** `[start/end]-[# of cols]`
```scss
.start-1 { grid-column-start: 1; }
.start-2 { grid-column-start: 2; }
.start-3 { grid-column-start: 3; }
.start-4 { grid-column-start: 4; }
.start-5 { grid-column-start: 5; }
.start-6 { grid-column-start: 6; }
.start-7 { grid-column-start: 7; }
.start-8 { grid-column-start: 8; }
.start-9 { grid-column-start: 9; }
.start-10 { grid-column-start: 10; }
.start-11 { grid-column-start: 11; }
.start-12 { grid-column-start: 12; }

.end-1 { grid-column-end: 1; }
.end-2 { grid-column-end: 2; }
.end-3 { grid-column-end: 3; }
.end-4 { grid-column-end: 4; }
.end-5 { grid-column-end: 5; }
.end-6 { grid-column-end: 6; }
.end-7 { grid-column-end: 7; }
.end-8 { grid-column-end: 8; }
.end-9 { grid-column-end: 9; }
.end-10 { grid-column-end: 10; }
.end-11 { grid-column-end: 11; }
.end-12 { grid-column-end: 12; }
```