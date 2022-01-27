---
id: hs-utils
title: Utils
slug: /components/utils
---
# HSUtils
This is a special set of mixins that generate utility classes based on Hashi's Design Tokens. To see how we use these utility classes, please refer to the ["Utility Philosophy" section](../getting-started/philosophy.md#utility-philosophy) of the Philosophy page.

**Do keep in mind it is encouraged that you use the token API, and key API if you wish to create components. This is just meant for minor modifications in the markup.**

```scss
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hs-utils.color-utils();
@include hs-utils.shape-utils();
@include hs-utils.typography-utils();
```

```html
<div class="hs-element">
    <p class="text-scarlet-400 hover:text-bright-cyan-200">This is a scarlet colored text that has a hover state.</p>
</div>
```

## Schema
The general schema is a prefix and a token value. Valid token values can be found in the [tokens page](../hs-core/tokens/index.mdx). While the prefix definitions can be read below.

### States
| Prefix      | Description                                     |
|-------------|-------------------------------------------------|
| `hover:`    | Scopes the util to an element's hover state.    |
| `focus:`    | Scopes the util to an element's focus state.    |
| `active:`   | Scopes the util to an element's active state.   |
| `disabled:` | Scopes the util to an element's disabled state. |

### Color
| Prefix    | Description                                     |
|-----------|-------------------------------------------------|
| `bg-`     | Defines/Modifies an element's background color. |
| `text-`   | Defines/Modifies an element's text color.       |
| `border-` | Defines/Modifies an element's border color.     |

### Shape
The shape utils also follow the same directional configuration schema as tailwind's.

| Prefix          | Description                                  |
|-----------------|----------------------------------------------|
| `r[direction]-` | Defines/Modifies an element's border radius. |
| `m[direction]-` | Defines/Modifies an element's margin.        |
| `p[direction]-` | Defines/Modifies an element's padding.       |
| `gap-`          | Defines/Modifies an element's gap.           |

*[direction] is optional.

### Typography
| Prefix         | Description                                |
|----------------|--------------------------------------------|
| `family-`      | Defines/Modifies an element's font family. |
| `size-`        | Defines/Modifies an element's font size.   |
| `weight-`      | Defines/Modifies an element's font weight. |
| `line-height-` | Defines/Modifies an element's line height. |

### Flex Layout
| Prefix     | Description                                                |
|------------|------------------------------------------------------------|
| `flex`     | Defines that the element is a flex display.                |
| `flow-`    | Defines the flex flow of an element.                       |
| `justify-` | Defines/Modifies the element's `justify-content` property. |
| `align-`   | Defines/Modifies the element's `align-items` property.     |