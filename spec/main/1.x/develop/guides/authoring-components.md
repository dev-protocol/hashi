---
title: Authoring Components
slug: /develop/authoring-components
displayed_sidebar: develop
---
Below is a guide to creating components using the [Hashi compoisition API](../api/composition/index.md).

## Why create components this way?
This is mostly reserved for the library's use only. This is particularly helpful if there's a component request in the
repo issues, and someone wishes to implement that fix. If you wish to author components quickly in a project-only scope,
we recommend checking the [built-in utility classes](../utilities/index.md).

## Stages
The following are the stages to follow when authoring components for Hashi. As an example, we will be creating a list component.

### Assessing
Assess the component first. The component's purpose, and experience should be clear from the start. In this
case, our list component is meant to display a set of choices, or a set of ordered/unordered data in a simple way. This
component can be used inside a dialog box, menu prompt, in a form, or just there on a page.

### Prototyping
The prototyping phase requires little to no Hashi use. This is mostly just experimenting with regular SCSS features like nesting, and markup.

#### Markup

We recommend starting with the markup first so you can easily visualize the content you'll be dealing with. This step also allows you to see portions where additional accessibility could be applied. 

Additionally, it is recommended to put class names in the markup early on. The class naming convention can be found [here](../components/index.md#modification-html).

```html
<ul class="hs-list">
    <li class="hs-list__item">
        <span class="hs-list__label">Item 1</span>
    </li>
    <li class="hs-list__item">
        <span class="hs-list__label">Item 2</span>
    </li>
    <li class="hs-list__item">
        <span class="hs-list__label">Item 3</span>
    </li>
    <li class="hs-list__item">
        <span class="hs-list__label">Item 4</span>
    </li>
</ul>
```

You can also draft up multiple variations of the component depending on the assessment from the earlier stage.

For example, the list item could contain an avatar/img/icon of some sorts.

```html
<ul class="hs-list">
    <li class="hs-list__item">
        <img src="#" alt="Item 1 Avatar"/>
        <span class="hs-list__label">Item 1</span>
    </li>
    <li class="hs-list__item">
        <img src="#" alt="Item 2 Avatar"/>
        <span class="hs-list__label">Item 2</span>
    </li>
    <li class="hs-list__item">
        <img src="#" alt="Item 3 Avatar"/>
        <span class="hs-list__label">Item 3</span>
    </li>
    <li class="hs-list__item">
        <img src="#" alt="Item 4 Avatar"/>
        <span class="hs-list__label">Item 4</span>
    </li>
</ul>
```

#### Styling
```scss
.hs-list {
  // styles...
  
  .hs-list__item {
    // styles...
    
    .hs-list__label {
      // styles...
    }
  }
}
```

### Implementing
The implementation phase requires you to assess the current markup, and styling of the component, and create a public API around it.

:::caution
This section is a work in progress!
:::

Generally, when authoring components all the styles will be placed inside a `render()` mixin. This allows the developers to render the component styles only when it's needed.

```scss
@mixin render() {
  // styles...
}
```

When implementing the themeable features (like color, shape, and typography) we like to use the [composition API](../api/composition/index.md) available in the `hs-core` module.

```scss
@use 'node_modules/@devprotocol/hashi/hs-core';

@mixin render() {
  .hs-list {
    @include hs-core.color-apply('list', (
      fill: 'surface-400',
      ink: 'surface-ink',
      border: 'surface-400'
    ));
    
    // ...
  }
}
```

Once implemented, we abstract the themeable parts to a workable API. By using sass' native module system, we can use global file variables to modify the theme values (see [component modification](../components/index.md#modification--scss-)).

```scss
@use 'node_modules/@devprotocol/hashi/hs-core';

$fill: 'surface-400' !default;
$ink: 'surface-ink' !default;
$border: 'surface-400' !default;

$theme: () !default;

@mixin render() {
  .hs-list {
    @include hs-core.color-apply('list', (
      fill: 'surface-400',
      ink: 'surface-ink',
      border: 'surface-400'
    ));
    
    // ...
  }
}
```

Note that there's a required theme value `$theme`. This allows the developer to pass in a theme map to the component and render it according to what the map specifies.

In this state, the component can't render anything from the theme map, therefore we need to use the core module's `prioritize()` function to prioritize the theme map over the global file variables.

Assign the prioritized values to the same variable name preceded by an underscore. Only then you can assign these variables to its respective properties.

```scss
@use 'node_modules/@devprotocol/hashi/hs-core';
@use 'sass:map';

$fill: 'surface-400' !default;
$ink: 'surface-ink' !default;
$border: 'surface-400' !default;

$theme: () !default;

$_fill: hs-core.prioritize(map.get($theme, 'fill'), $fill);
$_ink: hs-core.prioritize(map.get($theme, 'ink'), $ink);
$_border: hs-core.prioritize(map.get($theme, 'border'), $border);

@mixin render() {
  .hs-list {
    @include hs-core.color-apply('list', (
      fill: $_fill,
      ink: $_ink,
      border: $_border
    ));
    
    // ...
  }
}
```

### Cleaning
Perform a code and API cleanup of the component you just implemented.