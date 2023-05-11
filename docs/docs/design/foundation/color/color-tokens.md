---
title: Color Tokens
slug: /design/foundation/color/tokens
displayed_sidebar: design
---
Hashi uses tokens to enforce consistency throughout the ecosystem via the smallest of design units.

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

## Primitive Color Tokens
These tokens are not accessible directly using the theme tokens. These are accessed via primitive token accessors like `primitive-token-get()`. These tokens return their specific values as is.

```scss
$primitive-color-tokens: (
  // These alpha tokens are special token sets 
  // and do not follow the design specs' 600-200 
  // color naming scheme.
  'dp-black-alpha': (
    'default': rgba(0, 0, 0, .12),
    'ink': rgba(0, 0, 0, .37),
  ),
  'dp-white-alpha': (
    'default': rgba(255, 255, 255, .12),
    'ink': rgba(255, 255, 255, .37),
  ),
  'dp-white': (
    200: #ffffff,
    300: #f1f1f1,
    400: #d7d7d7,
    600: #c4c4c4,
    'ink': #040b10,
  ),
  'dp-black': (
    200: #383838,
    300: #272727,
    400: #171717,
    600: #000000,
    'ink': #ffffff,
  ),
  'dp-red': (
    200: #e45d5d,
    300: #df3737,
    400: #c92020,
    600: #920d0d,
    'ink': #ffffff
  ),
  'scarlet': (
    200: #ff7860,
    300: #ff583a,
    400: #ff3815,
    600: #b71f04,
    'ink': #ffffff,
  ),
  'dp-orange': (
    200: #ffa040,
    300: #fd8835,
    400: #ff6a00,
    600: #c4570c,
    'ink': #ffffff
  ),
  'dp-yellow': (
    200: #ffc751,
    300: #ffbb27,
    400: #fdad00,
    600: #ac7600,
    'ink': #000000
  ),
  'dp-green': (
    200: #67cf72,
    300: #43c451,
    400: #30a83d,
    600: #197a23,
    'ink': #ffffff
  ),
  'bright-cyan': (
    200: #51e0ff,
    300: #27d9ff,
    400: #00d0fd,
    600: #008dac,
    'ink': #000000,
  ),
  'native-blue': (
    200: #88aeff,
    300: #6d9bff,
    400: #5b8bf5,
    600: #315ab4,
    'ink': #ffffff,
  ),
  'dp-blue-grey': (
    200: #3a4158,
    300: #222b3d,
    400: #111827,
    600: #040b10,
    'ink': #ffffff,
  ),
  'hs-purple': (
    200: #c0a2ee,
    300: #a173e0,
    400: #6c30bd,
    600: #3b1570,
    'ink': #ffffff,
  ),
  'plox': (
    200: #eb48f8,
    300: #e71cf7,
    400: #d500e6,
    600: #91009c,
    'ink': #ffffff,
  ),
  'hana': (
    200: #ffb8d7,
    300: #ff77a9,
    400: #ec407a,
    600: #b4004e,
    'ink': #ffffff
  )
);
```
## Extending The Color Palette
### Escape Hatch Colors
Escape hatch colors are colors that are not within the given dev protocol brand color presets. Keep in mind that **as much as possible, use the provided color presets instead of creating your own colors**, this guideline is only provided as an "escape hatch" if the provided color presets don't work.

Escape hatch colors have a limit to how many you can have. Generally we only allow 1 to 2 presets to avoid complete deviation.

These colors also need to follow the 200-600 tone schema documented above, and must have an AAA contrast level ink color.