---
title: Tokens
slug: /design/foundation/typography/tokens
displayed_sidebar: design
---
# Typography Token System
Typography tokens are values that have to do with fonts, from the size and weights, to the leading and spacing. Like the
other two, this also follows a particular schema.

| Type       | Size (px) | Line Height (1.5) | Default Weight |
|------------|-----------|-------------------|----------------|
| Supertitle | 42        | 63                | 700            |
| Title      | 36        | 54                | 700            |
| Subtitle   | 24        | 30                | 700            |
| Body       | 16        | 24                | 400            |
| Mono       | 16        | 24                | 400            |
| Small      | 12        | 18                | 300            |

### Weight Specs
| Type    | Weight |
|---------|--------|
| Bold    | 700    |
| Regular | 400    |
| Light   | 300    |

### Line Height Specs
| Type      | Leading |
|-----------|---------|
| Broad     | 2       |
| Regular   | 1.5     |
| Condensed | 1.25    |

## Extending Typography Tokens
### Escape Hatch Typography Tokens
Escape hatch typography tokens are tokens that are not within the given in the default typography token set. Keep in mind that **as much as possible, use the provided typography tokens instead of creating your own**, this guideline is only provided as an "escape hatch" if the provided typography tokens don't work.

Escape hatch typography tokens have a limit to how many you can have. Generally we only allow 1 to 2 presets to avoid complete deviation.

These tokens also need to have at least one of the following properties: `family`, `size`, `weight`, and `line-height`.