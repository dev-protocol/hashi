---
title: Tokens
slug: /design/foundation/color/tokens
displayed_sidebar: design
---
# Color Token System
Hashi's color tokens follow a specific schema. The schema is specially designed to cover style and accessibility states.
Every color token increases/decreases its tint/shade by 16% every 100 increments in tone (i.e. 200 → 300).

| Tone | Percentage | Description                        |
|------|------------|------------------------------------|
| 200  | +32%       | The lightest tone in the token set |
| 300  | +16%       | The lighter tone in the token set  |
| 400  | 0%         | The base tone in the token set     |
| 600  | -32%       | The darkest tone in the token set  |

## Tone Expansion
As of this version, we are still working on the specs on how to expand tones to be used. Until then, we'll keep you
updated on when we release a version with the said feature.

## In accordance to the Dev Protocol brand
Dev Protocol has specific branding colors, which is why we only provide developers with select tokens to work with. The
current available colors are:

| Color Name   | Base Hex |
|--------------|----------|
| DP White     | #ffffff  |
| DP Black     | #000000  |
| DP Blue Grey | #111827  |
| Scarlet      | #ff3815  |
| Plox         | #d500e6  |
| Native Blue  | #5b8bf5  |
| Bright Cyan  | #00d0fd  |

As of this version, we are working on making the design system extend to other colors that we may need in the future.