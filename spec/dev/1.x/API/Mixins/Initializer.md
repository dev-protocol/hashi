# Hashi Initializer Mixin
This mixin initializes the entire design system, together with its helper functions. Just like tailwind, we've taken
tailwind's pattern of initializing their framework.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;
```

Hashi's version of this is for the CSS preprocessor, Sass.

```scss
@use 'node_modules/@devprotocol/hashi';

@include hashi.init {
  // Code here...
}
```

Out of the box, calling this mixin allows you to wrap your styles with the Hashi environment. Sort of like a
plug-and-play approach to initializing the design system.

By default, the initializer initializes the design system with the default Dev Protocol brand color palette (Surface,
Neutral, Scarlet, Plox, Native Blue, and Bright Cyan), the default Dev Protocol type faces (Syne, Whyte, and IBM Plex
Mono), the default structure and layout specifications (radius, widths, breakpoints, spacers, etc.), and the default
preset (primary = surface, accent = scarlet, background = surface-600).

If you require a few modifications, like the global typography, global color presets, etc. We have a few mixins ready
for that.

```scss
@use 'node_modules/@devprotocol/hashi';
@use 'node_modules/@devprotocol/hashi/hs-component';

@include hashi.init {
  // Initial config
  @include hashi.color-config(
    $primary: 'surface',
    $accent: 'plox'
  );
  @include hashi.shape-config(
    $radius: (
      'small': 'xs',
      'medium': 'sm',
      'large': 'md'
    ),
    $padding: (
      // ...
    )
  );
  @include hashi.typography-config(
    $header: ('Syne', sans-serif)
  );
  @include hashi.breakpoint-config(
    $small: 340px,
    $medium: 640px,
    $large: 1290px,
    $xlarge: 1440px
  );
  
  // Components
  @include hs-component.render();
}
```