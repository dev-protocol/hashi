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
| Prefix       | Description                                     |
|--------------|-------------------------------------------------|
| `@hover:`    | Scopes the util to an element's hover state.    |
| `@focus:`    | Scopes the util to an element's focus state.    |
| `@active:`   | Scopes the util to an element's active state.   |
| `@disabled:` | Scopes the util to an element's disabled state. |

### Color
| Prefix                     | Description                                     |
|----------------------------|-------------------------------------------------|
| `hs-bg-[color]-[tone]`     | Defines/Modifies an element's background color. |
| `hs-text-[color]-[tone]`   | Defines/Modifies an element's text color.       |
| `hs-border-[color]-[tone]` | Defines/Modifies an element's border color.     |

#### Available Colors


### Shape
The shape utils also follow the same directional configuration schema as tailwind's.

| Prefix             | Description                                  |
|--------------------|----------------------------------------------|
| `hs-r[direction]-` | Defines/Modifies an element's border radius. |
| `hs-m[direction]-` | Defines/Modifies an element's margin.        |
| `hs-p[direction]-` | Defines/Modifies an element's padding.       |
| `hs-gap-`          | Defines/Modifies an element's gap.           |

*[direction] is optional.

### Typography
| Prefix            | Description                                |
|-------------------|--------------------------------------------|
| `hs-family-`      | Defines/Modifies an element's font family. |
| `hs-size-`        | Defines/Modifies an element's font size.   |
| `hs-weight-`      | Defines/Modifies an element's font weight. |
| `hs-line-height-` | Defines/Modifies an element's line height. |

### Flex Layout
| Prefix        | Description                                                |
|---------------|------------------------------------------------------------|
| `hs-flex`     | Defines that the element is a flex display.                |
| `hs-flow-`    | Defines the flex flow of an element.                       |
| `hs-justify-` | Defines/Modifies the element's `justify-content` property. |
| `hs-align-`   | Defines/Modifies the element's `align-items` property.     |


## Need more util classes?
If you find the built-in utility classes aren't enough, we recommend checking out Hashi's [Tailwind integration documentation](../integrations/tailwind).