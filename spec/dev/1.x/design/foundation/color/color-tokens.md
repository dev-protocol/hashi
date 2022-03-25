---
title: Color Tokens
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

## Extending The Color Palette
### Escape Hatch Colors
Escape hatch colors are colors that are not within the given dev protocol brand color presets. Keep in mind that **as much as possible, use the provided color presets instead of creating your own colors**, this guideline is only provided as an "escape hatch" if the provided color presets don't work.

Escape hatch colors have a limit to how many you can have. Generally we only allow 1 to 2 presets to avoid complete deviation.

These colors also need to follow the 200-600 tone schema documented above, and must have an AAA contrast level ink color.