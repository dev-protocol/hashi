---
slug: /develop/foundation/utilities/layout
displayed_sidebar: develop
---
# Layout Utility Classes
Single-purpose, consistent, and predictable classes for styling/modifying an element's layout.

## Displays
**Syntax:** `d-[display]`
```scss
.d-block { ... }
.d-flex { ... }
.d-grid { ... }
.d-inline { ... }
.d-inline-block { ... }
.d-inline-flex { ... }
.d-inline-grid { ... }
```

## Gaps
**Syntax:** `gap-[size]`
```scss
.gap-xs { ... }
.gap-sm { ... }
.gap-md { ... }
.gap-lg { ... }
.gap-xl { ... }
```

## Flex
### Flex Direction
**Syntax:** `flow-[flow]`
```scss
.flow-col { ... }
.flow-row { ... }
.flow-col-reverse { ... }
.flow-row-reverse { ... }
```

### Flex Wrap
**Syntax:** `wrap-[flow]`
```scss
.wrap { ... }
.wrap-none { ... }
.wrap-reverse { ... }
```

### Justify Content
**Syntax:** `justify-[flow]`
```scss
.justify-center { ... }
.justify-start { ... }
.justify-end { ... }
.justify-between { ... }
.justify-around { ... }
.justify-evenly { ... }
```

### Align Items
**Syntax:** `items-[flow]`
```scss
.items-center { ... }
.items-start { ... }
.items-end { ... }
.items-between { ... }
.items-around { ... }
.items-evenly { ... }
```

## Grid

### Grid Columns
> ⚠ **CAUTION!** This is different from the `grid column` utils! This defines the number of columns in a grid, not set the item into a specific start and end column.

**Syntax:** `cols-[# of cols]`
```scss
.cols-1 { ... }
.cols-2 { ... }
.cols-3 { ... }
.cols-4 { ... }
.cols-5 { ... }
.cols-6 { ... }
.cols-7 { ... }
.cols-8 { ... }
.cols-9 { ... }
.cols-10 { ... }
.cols-11 { ... }
.cols-12 { ... }
```

### Grid Column
> ⚠ **CAUTION!** This is different from the `grid columns` utils! This sets the item into a specific start and end column, not define the number of columns in a grid.

**Syntax:** `[start/end]-[# of cols]`
```scss
.start-1 { ... }
.start-2 { ... }
.start-3 { ... }
.start-4 { ... }
.start-5 { ... }
.start-6 { ... }
.start-7 { ... }
.start-8 { ... }
.start-9 { ... }
.start-10 { ... }
.start-11 { ... }
.start-12 { ... }

.end-1 { ... }
.end-2 { ... }
.end-3 { ... }
.end-4 { ... }
.end-5 { ... }
.end-6 { ... }
.end-7 { ... }
.end-8 { ... }
.end-9 { ... }
.end-10 { ... }
.end-11 { ... }
.end-12 { ... }
```