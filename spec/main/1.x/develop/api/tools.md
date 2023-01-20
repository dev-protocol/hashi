---
title: Tools
slug: /develop/api/tools
displayed_sidebar: develop
---
Tools are here to help you implement little styling rules over components.

## Breakpoint Mixins
This set of mixins allow you to implement styling rules conditionally based on the device's screen size. This is particularly useful when creating a responsive style.

### Breakpoint Config
```scss
@use 'node_modules/@devprotocol/hashi';

@include hashi.breakpoint-config(
  $small: 320px,
  $medium: 540px,
  $large: 877px
);
```

| Parameter       | Type  | Description                                                 |
|-----------------|-------|-------------------------------------------------------------|
| $map            | `map` | Breakpoint map.                                             |
| $breakpoints... | `*`   | Multiple arguments that contain breakpoint label and value. |

### Breakpoint Create
```scss
@use 'node_modules/@devprotocol/hashi';

@include hashi.breakpoint-create('medium') {
  // styles...
}
```

| Parameter | Type     | Description                         |
|-----------|----------|-------------------------------------|
| $query    | `string` | Valid breakpoint query.             |
| $context  | `string` | Breakpoint context. `min` or `max`. |

## Color Functions
These color functions allow you to modify colors on the fly.

### Tint
Lightens the given color.

```scss
@use 'node_modules/@devprotocol/hashi';

.class {
  color: hashi.tint(#f70, 80%);
}
```

| Parameter   | Type     | Description                     |
|-------------|----------|---------------------------------|
| $color      | `color`  | Valid color.                    |
| $percentage | `number` | Color modification intensity %. |

### Shade
Darkens the given color.

```scss
@use 'node_modules/@devprotocol/hashi';

.class {
  color: hashi.shade(#f70, 80%);
}
```

| Parameter   | Type     | Description                     |
|-------------|----------|---------------------------------|
| $color      | `color`  | Valid color.                    |
| $percentage | `number` | Color modification intensity %. |

## Color Mode Mixins
These mixins allow you to render styles conditionally based on user color mode preferences.

### Dark Mode
Only applies the styles when the user prefers a dark color scheme.

```scss
@use 'node_modules/@devprotocol/hashi';

@include hashi.dark-mode {
  // styles...
}
```

### Light Mode
Only applies the styles when the user prefers a light color scheme.

```scss
@use 'node_modules/@devprotocol/hashi';

@include hashi.light-mode {
  // styles...
}
```

## Converter Functions
These functions allow you to modify number values on the fly.

### To Rem
Converts px values to rem.

```scss
@use 'node_modules/@devprotocol/hashi';

.class {
  font-size: hashi.to-rem(14px);
}
```

| Parameter   | Type         | Description                     |
|-------------|--------------|---------------------------------|
| $px         | `number(px)` | A px number value.              |

## Style Rule Mixins
These mixins apply a certain set of style rules to a component/element.

### Line Break
Applies line break to a component/element.

```scss
@use 'node_modules/@devprotocol/hashi';

.class {
  @include hashi.line-break(2);
}
```

| Parameter | Type       | Description                                      |
|-----------|------------|--------------------------------------------------|
| $lines    | `number`   | A unitless number that determines the max lines. |

### Prefix
Applies prefixes to a property.

```scss
@use 'node_modules/@devprotocol/hashi';

.class {
  @include hashi.prefix(transition, all 0.2s ease);
}
```

| Parameter | Type     | Description             |
|-----------|----------|-------------------------|
| $property | `string` | CSS property to prefix. |
| $value    | `*`      | Value to apply.         |

## Validator Functions
These functions allow you to validate values, and queries in your styles.

### Is Empty
Checks if the given query is empty or not. Empty could mean the following values:
```txt
$query == ''
$query == ()
$query == none 
$query == null 
length($query) == 0
```

```scss
@use 'node_modules/@devprotocol/hashi';

@mixin color($color) {
  @if hashi.is-empty($color) {
    @error "Required property $color is empty. Please provide a color";
  }
  
  color: $color;
}
```

| Parameter | Type | Description            |
|-----------|------|------------------------|
| $query    | `*`  | The value to validate. |