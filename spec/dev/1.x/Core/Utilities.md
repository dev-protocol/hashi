# Utilities
> 🚧 This portion of the proposal is very unstable, and is subject to change at any given time.

Utility classes are a vital part of Hashi. It allows developers to easily compose layouts, create simple stateless
components, and make minor modifications in the UI.

## Expected Behaviors
The utility classes are defined to only compose layouts, create simple stateless components, and make minor UI
modifications. Henceforth, it will only support default states, and media queries.

```html
<h1 class="border-surface-200 px-md py-lg rd-md">
  This is a title dialog
</h1>
<section class="d-grid cols-1 @md:cols-2 @lg:cols-3 gap-sm">
  <HSCard />
  <HSCard />
  <HSCard />
  <HSCard />
  <HSCard />
</section>
```

## Syntax
### Media Queries

| Prefix            | Description                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| `@[media]:[util]` | Defines a conditional utility class to only be applied to a specific breakpoint. |

#### Available Media Queries

- `sm` -> Small
- `md` -> Medium
- `lg` -> Large

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

| Prefix         | Description                                |
|----------------|--------------------------------------------|
| `family-`      | Defines/Modifies an element's font family. |
| `size-`        | Defines/Modifies an element's font size.   |
| `weight-`      | Defines/Modifies an element's font weight. |
| `line-height-` | Defines/Modifies an element's line height. |

#### Sizes and Families

- Sizes and families are documented in the [typography tokens](../hs-core/tokens/Type%20Tokens.mdx) page.

### Layout

| Prefix | Description                   |
|--------|-------------------------------|
| `d-`   | Defines an element's display. |

#### Flex

| Prefix     | Description                                                |
|------------|------------------------------------------------------------|
| `flow-`    | Defines the flex flow of an element.                       |
| `justify-` | Defines/Modifies the element's `justify-content` property. |
| `items-`   | Defines/Modifies the element's `align-items` property.     |
| `content-` | Defines/Modifies the element's `align-content` property.   |

#### Grid

| Prefix  | Description                                |
|---------|--------------------------------------------|
| `gap-`  | Defines the gap of a grid container.       |
| `cols-` | Defines the columns of a grid container.   |
| `rows-` | Defines the rows of a grid container.      |
| `col-`  | Defines the column number of a grid child. |
| `row-`  | Defines the row number of a grid child.    |