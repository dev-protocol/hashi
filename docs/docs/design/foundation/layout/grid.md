---
title: Grid
slug: /design/foundation/layout/grid
displayed_sidebar: design
---
# Grid
Hashi uses grid as our basis for creating layouts. Hashi follows a responsive 12-column grid layout system.

## Grid Specs
### The 12-column grid layout system
This type of grid layout system as been an industry standard, tried and battle tested, and has proven to be an effective method for creating layouts. We've adopted this as our basis for creating layouts.

To read more about this grid layout system, [click here](https://material.io/design/layout/responsive-layout-grid.html).

### Responsive Grid
| Breakpoint | # of columns |
|------------|--------------|
| Small      | 4            |
| Medium     | 8            |
| Large      | 12           |
| XLarge     | 12           |

### Grid Spacers (Gutters)
Gutters are the spacers in the grid. They are the gaps between the columns. Gaps must be big enough to make a distinction, but not too big that causes a lot of whitespace.

We have carefully crafted these gutter/spacer token values to be used in deciding a gutter/spacer size.

| Label | Value (in px) |
|-------|---------------|
| none  | 0             |
| xs    | 4px           |
| sm    | 8px           |
| md    | 12px          |
| lg    | 24px          |
| xl    | 32px          |

### Responsive Grid Widths
Grid widths introduce width constraints depending on the screen size. We generally recommend having the grid be at a **maximum width** of `1077px`.

### Grid Margins
Grid margins provide a bit of allowance for the grid layout to breathe. These margins also prevent the grid from touching the edges of the screen on smaller sizes.

Here are the standard values:

| Side       | Value (in px) |
|------------|---------------|
| Horizontal | 15px          |
| Vertical   | 20px          |

## HSLayout
HSLayout is a layout component that acts as a wrapper for content. This is the component that always implements the responsive 12-column grid layout system. By default, it uses the global gutter value, however, gutters for specific grids can be customized using the previously provided spacing tokens.