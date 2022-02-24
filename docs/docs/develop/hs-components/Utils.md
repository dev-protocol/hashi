---
id: hs-utils
title: Utils
slug: /develop/utils
---
# HSUtils
This is a special set of mixins that generate utility classes based on Hashi's Design Tokens. To see how we use these utility classes, please refer to the ["Utility Philosophy" section](../getting-started/philosophy.md#utility-philosophy) of the Philosophy page.

**Do keep in mind it is encouraged that you use the token API, and key API if you wish to create components. This is just meant for minor modifications in the markup.**

```scss
@use '../../../node_modules/@devprotocol/hashi/hs-utils/index';

@include hs-utils.color-utils();
@include hs-utils.shape-utils();
@include hs-utils.typography-utils();
@include hs-utils.layout-utils();
```

```html
<div class="hs-element">
    <p class="text-scarlet-400 hover:text-bright-cyan-200">This is a scarlet colored text that has a hover state.</p>
</div>
```

## Schema
The general schema is a prefix and a token value. Valid token values can be found in the [tokens page](../hs-core/tokens/index.mdx). While the prefix definitions can be read below.

### States
As of version 0.2.0, we have removed support for states as we're trying to keep all the built-in utilities basic.

### Color
| Prefix                  | Description                                     |
|-------------------------|-------------------------------------------------|
| `bg-[color]-[tone]`     | Defines/Modifies an element's background color. |
| `text-[color]-[tone]`   | Defines/Modifies an element's text color.       |
| `border-[color]-[tone]` | Defines/Modifies an element's border color.     |

#### Colors
- `surface`
- `neutral`
- `scarlet`
- `plox`
- `native-blue`
- `bright-cyan`

#### Tones
- Tones are documented in the [color tokens](../hs-core/tokens/Color%20Tokens.mdx) page.

### Shape
The shape utils also follow the same directional configuration schema as tailwind's.

| Prefix          | Description                                  |
|-----------------|----------------------------------------------|
| `r[direction]-` | Defines/Modifies an element's border radius. |
| `m[direction]-` | Defines/Modifies an element's margin.        |
| `p[direction]-` | Defines/Modifies an element's padding.       |
| `gap-`          | Defines/Modifies an element's gap.           |

*[direction] is optional.

#### Directions
- `t`: Applies the style on the top of the box-model.
- `b`: Applies the style on the bottom of the box-model.
- `r`: Applies the style on the right of the box-model.
- `l`: Applies the style on the left of the box-model.
- `x`: Applies the style on the horizontal ends of the box-model.
- `y`: Applies the style on the vertical ends of the box-model.

#### Sizes
- Sizes are documented in the [shape tokens](../hs-core/tokens/Shape%20Tokens.mdx) page.

### Typography
| Prefix           | Description                                |
|------------------|--------------------------------------------|
| `family-[]`      | Defines/Modifies an element's font family. |
| `size-[]`        | Defines/Modifies an element's font size.   |
| `weight-[]`      | Defines/Modifies an element's font weight. |
| `line-height-[]` | Defines/Modifies an element's line height. |

#### Sizes and Families
- Sizes and families are documented in the [typography tokens](../hs-core/tokens/Type%20Tokens.mdx) page.

### Layout
| Prefix         | Description                                         |
|----------------|-----------------------------------------------------|
| `block`        | Defines that the element is a block display.        |
| `flex`         | Defines that the element is a flex display.         |
| `grid`         | Defines that the element is a grid display.         |
| `inline`       | Defines that the element is a inline display.       |
| `inline-block` | Defines that the element is a inline-block display. |
| `inline-grid`  | Defines that the element is a inline-grid display.  |
| `inline-flex`  | Defines that the element is a inline-flex display.  |
| `none`         | Defines that the element doesn't display.           |
| `table`        | Defines that the element is a table display.        |
| `table-cell`   | Defines that the element is a table-cell display.   |

#### Flex
| Prefix       | Description                                                |
|--------------|------------------------------------------------------------|
| `flex`       | Defines that the element is a flex display.                |
| `flow-[]`    | Defines the flex flow of an element.                       |
| `justify-[]` | Defines/Modifies the element's `justify-content` property. |
| `items-[]`   | Defines/Modifies the element's `align-items` property.     |
| `content-[]` | Defines/Modifies the element's `align-content` property.   |

## Need more utility classes?
If you find the built-in utility classes aren't enough, we recommend checking out Hashi's [Tailwind integration documentation](../integrations/tailwind).