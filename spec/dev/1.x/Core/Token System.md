# Hashi Token System
Hashi uses tokens to enforce consistency throughout the ecosystem via the smallest of design units. Hashi's token system is divided into three parts: color, shape, and typography.

## Color Token System
Hashi's color tokens follow a specific schema. The schema is specially designed to cover style and accessibility states. Every color token increases/decreases its tint/shade by 16% every 100 increments in tone (i.e. 200 → 300).

| Tone | Percentage | Description                        |
|------|------------|------------------------------------|
| 200  | +32%       | The lightest tone in the token set |
| 300  | +16%       | The lighter tone in the token set  |
| 400  | 0%         | The base tone in the token set     |
| 600  | -32%       | The darkest tone in the token set  |

### Tone Expansion
As of this version, we are still working on the specs on how to expand tones to be used. Until then, we'll keep you updated on when we release a version with the said feature.

### In accordance to the Dev Protocol brand
Dev Protocol has specific branding colors, which is why we only provide developers with select tokens to work with. The current available colors are:

- Surface
- Neutral
- Scarlet
- Plox
- Native Blue
- Bright Cyan

As of this version, we are working on making the design system extend to other colors that we may need in the future.


## Shape Token System
What constitutes as a shape token is whenever the value is related to the component's structure (e.g. radius, spacing, etc.). Hashi's shape tokens also follow a specific schema. Each shape token increments by adding 0.2rem to 0.3rem to its amount, or by doubling it from the previous token value. The values are labeled by size (xs → xl), however the label `pill` is reserved for creating pill-shaped components (i.e. pill-shaped buttons).

| Label | Value            |
|-------|------------------|
| none  | 0                |
| xs    | +0.2rem          |
| sm    | +0.4rem or (xs)2 |
| md    | +0.6rem or (sm)2 |
| lg    | +0.8rem or (md)2 |
| xl    | +1rem or (lg)2   |
| pill  | 600px            |

## Typography Token System
Typography tokens are values that have to do with fonts, from the size and weights, to the leading and spacing. Like the other two, this also follows a particular schema. However, `family` related tokens follow a different schema.

| Label  | Value                       | Description                                                                   |
|--------|-----------------------------|-------------------------------------------------------------------------------|
| h1     | 0                           | Applies to the `h1` tag                                                       |
| h2     | -0.2rem                     | Applies to the `h2` tag                                                       |
| h3     | -0.4rem or xs/2             | Applies to the `h3` tag                                                       |
| h4     | -0.6rem or sm/2             | Applies to the `h4` tag                                                       |
| body   | -0.8rem or md/2             | Applies to the most of the elements                                           |
| small  | body-2px or body-(body*.10) | Applies to the `small` tag                                                    |
| action | body                        | Applies to buttons, selects, or anything that has to do with user interaction |
| icon   | 24px                        | Applies to the icons                                                          |