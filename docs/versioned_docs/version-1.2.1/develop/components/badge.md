---
id: hs-badge
title: Badges
slug: /develop/badge
displayed_sidebar: develop
---
Badges display micro information, and let users perform micro (and usually third-party-related) actions in the user
interface. Actions range from sharing a link, to navigating to a greater details page.

<div class="hs-component-preview">
  <a href="#" class="hs-badge">
    <span class="hs-badge__label">HSBadge</span>
  </a>
  <a href="#" class="hs-badge">
    <i class="hs-badge__icon">
      <img src="https://raw.githubusercontent.com/dev-protocol/hashi-web/main/tests/vanilla/assets/img/dev-token.png" alt="Dev Token Icon"/>
    </i>
    <span class="hs-badge__label">Stake Me</span>
  </a>
</div>

## Usage
### HTML
```html
<a href="#" class="hs-badge">
    <span class="hs-badge__label">HSBadge</span>
</a>
```

### Using an icon
Badges optionally let you display an icon. Icons can be images, svg, or a special icon font.
```html
<a href="#" class="hs-badge">
    <i class="hs-badge__icon">
        <!-- SVG, image, or font icon -->
    </i>
    <span class="hs-badge__label">HSBadge</span>
</a>
```

### SCSS
```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-badge';

@include hashi.init {
  @include hs-badge.render();
}
```

## API
### CSS Classes
These are used to extend and modify the styles of a component on the markup.

### Anatomical Classes
These classes make up the elements inside a component.

| Class              | Effect                     |
|--------------------|----------------------------|
| `.hs-badge`        | Main badge class.          |
| `.hs-badge__label` | Class for the badge label. |
| `.hs-badge__icon`  | Class for the badge icon.  |

### Custom Properties
These are for creating your own component theme classes that you can append to the parent element markup.

| Property               | Effect                                  |
|------------------------|-----------------------------------------|
| `--hs-badge-fill`      | Changes the badge's background color.   |
| `--hs-badge-ink`       | Changes the badge's text color.         |
| `--hs-badge-border`    | Changes the badge's border color.       |
| `--hs-badge-radius`    | Changes the badge's border radius.      |
| `--hs-badge-gap`       | Changes the badge's label and icon gap. |
| `--hs-badge-padding`   | Changes the badge's padding.            |
| `--hs-badge-ink`       | Changes the badge's label color.        |
| `--hs-badge-size`      | Changes the badge's label size.         |
| `--hs-badge-shadow`    | Changes the badge's shadow.             |
| `--hs-badge-weight`    | Changes the badge's weight.             |
| `--hs-badge-icon-ink`  | Changes the badge's icon color.         |
| `--hs-badge-icon-size` | Changes the badge's icon size.          |

#### Example
```scss
.my-badge-theme {
  --hs-badge-fill: #232323;
  --hs-badge-ink: lime;
  --hs-badge-border: var(--hs-badge-fill);

  &:hover {
    --hs-badge-fill: #353535;
  }

  &:active {
    --hs-badge-fill: #535353;
  }
}
```

### Configuring styles
Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](index.md#modification-scss).

```scss
$fill: 'primary-600' !default;
$ink: 'primary-ink' !default;
$border: $fill !default;

$radius: 'small' !default;
$padding: ('xs' 'sm') !default;
$gap: 'xs' !default;

$label-typography: 'small' !default;
```

### Extending styles
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.