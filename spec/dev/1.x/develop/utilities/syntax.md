---
slug: /develop/foundation/utilities/syntax
displayed_sidebar: develop
---
# Syntax
Utility classes follow a strict syntax to ensure consistency and predictability.

## Classes
The classes follow this particular syntax.
```scss
[property]-[variant]
```
The property field could be a predictable shorthand for the property like p for padding, m for margin, pb for padding bottom, mx for margin on the x-axis.

The variant field indicates the value its going to output in the property.

## Media Queries
| Prefix            | Description                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| `@[media]:[util]` | Defines a conditional utility class to only be applied to a specific breakpoint. |

#### Available Media Queries

- `sm` -> Small
- `md` -> Medium
- `lg` -> Large

#### Example
[*] = highlighted, this is not required.
```html
<div class="bg-primary-600 [@md:bg-primary-400]">
    <h1 class="size-title [@lg:size-supertitle] weight-bold">Header inside a card</h1>
</div>
```

## Excluding and Including Utilities
Every utility initializer comes with the `$exclude` and `$include` parameters. This allows you to exclude certain
utility classes, or include the ones you only need.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hashi.init {
  @include hs-utils.color-utils(
    $include: ('color', 'border-color')
  );
  @include hs-utils.layout-utils(
    $exclude: ('display', 'gap', 'flex-direction')
  );
}
```

However, you can only use one or the other parameter. Using both will result in an error.

Selecting the utilities to include/exclude is done by passing the class prefix of the utilities. Example: `text`
is mapped to `text-[color]-[tone]` utilities.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-utils';

@include hashi.init {
  @include hs-utils.color-utils(
    $include: ('text', 'bg')
  );
}
```