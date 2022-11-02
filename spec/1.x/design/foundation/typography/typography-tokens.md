---
title: Typography Tokens
slug: /design/foundation/typography/tokens
displayed_sidebar: design
---
Hashi uses tokens to enforce consistency throughout the ecosystem via the smallest of design units.

Typography tokens are values that have to do with fonts, from the size and weights, to the leading and spacing. Like the
other two, this also follows a particular schema.

| Type       | Size (px)               | Line Height (1.5) | Default Weight |
|------------|-------------------------|-------------------|----------------|
| Supertitle | clamp(36px, 10vw, 42px) | 63                | 800            |
| Title      | clamp(26px, 8vw, 36px)  | 54                | 700            |
| Subtitle   | clamp(18px, 6vw, 24px)  | 30                | 700            |
| Body       | clamp(14px, 4vw, 16px)  | 24                | 400            |
| Mono       | clamp(14px, 4vw, 16px)  | 24                | 400            |
| Small      | clamp(10px, 2vw, 12px)  | 18                | 300            |

### Weight Specs
| Type    | Weight |
|---------|--------|
| Black   | 800    |
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