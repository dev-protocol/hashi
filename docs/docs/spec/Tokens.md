---
id: tokens 
title: Tokens 
slug: /spec/tokens
---

This doc contains all the approved tokens.

<div class="hs-status-tag implemented">
    <span class="hs-status-tag__label">Status: <b>IMPLEMENTED</b></span>
</div>

```scss
$h1: tools.to-rem(36px);
$h2: tools.to-rem(29px);
$h3: tools.to-rem(23px);
$h4: tools.to-rem(18px);
$body: tools.to-rem(16px);
$icon: tools.to-rem(24px);
$button: tools.to-rem(16px);
$small: tools.to-rem(14px);

$hs-tokens: (
    // ===== COLOR ===== //
    'surface': (
        '200': #f1f1f1,
        '300': #d7d7d7,
        '400': #c4c4c4,
        '600': #9a9a9a,
        'ink': #000000,
    ),
    'neutral': (
        '200': #383838,
        '300': #272727,
        '400': #171717,
        '600': #000000,
        'ink': #ffffff,
    ),
    // Disabled is a special token set and does not follow the design specs' 600-200 color naming scheme.
    'disabled': (
        'default': rgba(0, 0, 0, .12), // ALT: #bababa
        'ink': rgba(0, 0, 0, .37) // ALT: #646464
    ),
    'scarlet': support.color-split(#ff3815),
    'scarlet-ink': #fff,
    'plox': support.color-split(#d500e6),
    'plox-ink': #fff,
    'native-blue': support.color-split(#5b8bf5),
    'native-blue-ink': #fff,
    'bright-cyan': support.color-split(#00d0fd),
    'bright-cyan-ink': #000,
    'success': support.color-split(#30a83d),
    'success-ink': #fff,
    'warning': support.color-split(#fdad00),
    'warning-ink': #000,
    'danger': support.color-split(#c92020),
    'danger-ink': #fff,
    // ===== SHAPE ===== //
    'radius': (
        'none': 0,
        'xs': 0.3rem,
        'sm': 0.5rem,
        'md': 0.7rem,
        'lg': 1rem,
        'xl': 1.7rem,
        'pill': 700px // for pill shaped components
    ),
    'padding': (
        'none': 0,
        'xs': 0.5rem,
        'sm': 0.7rem,
        'md': 1rem,
        'lg': 1.3rem,
        'xl': 1.7rem,
        'pill': 1.3rem,
    ),
    'margin': (
        'none': 0,
        'xs': 0.5rem,
        'sm': 1rem,
        'md': 0.7rem,
        'lg': 0.9rem,
        'xl': 1.2rem,
        'pill': 0.9rem,
    ),
    'space': (
        'none': 0,
        'xs': 0.5rem,
        'sm': 1rem,
        'md': 0.7rem,
        'lg': 0.9rem,
        'xl': 1.2rem,
        'pill': 0.9rem,
    ),
    // ===== TYPOGRAPHY ===== //
    'family': (
        'global': ('Whyte', sans-serif),
        'header': ('WhyteInktrap', sans-serif),
        'body': ('Whyte', sans-serif),
        'action': ('IBM Plex Mono', monospace),
        'code': ('IBM Plex Mono', monospace)
    ),
    'size': (
        // General type tokens
        'h1': $h1,
        'h2': $h2,
        'h3': $h3,
        'h4': $h4,
        'body': $body,
        // Special type tokens
        'icon': $icon,
        'action': $button,
        'small': $small,
    ),
    'weight': (
        'h1': 700,
        'h2': 700,
        'h3': 700,
        'h4': 700,
        'body': 400,
        // == //
        'icon': 400,
        'action': 700,
        'small': 400,
    ),
    'line-height': (
        'h1': $h1 + tools.to-rem(13px),
        'h2': $h2 + tools.to-rem(10px),
        'h3': $h3 + tools.to-rem(8px),
        'h4': $h4 + tools.to-rem(6px),
        'body': $body + tools.to-rem(5px),
        // == //
        'icon': $icon + tools.to-rem(5px),
        'action': $button + tools.to-rem(5px),
        'small': $small + tools.to-rem(4px),
    )
);
```

## Colors

<div class="hs-status-tag implemented">
    <span class="hs-status-tag__label">Status: <b>IMPLEMENTED</b></span>
</div>
<section class="token-module">
  <div class="color-module">
    <div class="hs-bg-surface-200"><span>Surface 200</span></div>
    <div class="hs-bg-surface-300"><span>Surface 300</span></div>
    <div class="hs-bg-surface-400"><span>Surface 400</span></div>
    <div class="hs-bg-surface-600"><span>Surface 600</span></div>
    <div class="hs-bg-surface-alpha-200"><span>Surface Alpha 200</span></div>
    <div class="hs-bg-surface-alpha-300"><span>Surface Alpha 300</span></div>
    <div class="hs-bg-surface-alpha-400"><span>Surface Alpha 400</span></div>
    <div class="hs-bg-surface-alpha-600"><span>Surface Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-neutral-200"><span>Neutral 200</span></div>
    <div class="hs-bg-neutral-300"><span>Neutral 300</span></div>
    <div class="hs-bg-neutral-400"><span>Neutral 400</span></div>
    <div class="hs-bg-neutral-600"><span>Neutral 600</span></div>
    <div class="hs-bg-neutral-alpha-200"><span>Neutral Alpha 200</span></div>
    <div class="hs-bg-neutral-alpha-300"><span>Neutral Alpha 300</span></div>
    <div class="hs-bg-neutral-alpha-400"><span>Neutral Alpha 400</span></div>
    <div class="hs-bg-neutral-alpha-600"><span>Neutral Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-scarlet-200"><span>Scarlet 200</span></div>
    <div class="hs-bg-scarlet-300"><span>Scarlet 300</span></div>
    <div class="hs-bg-scarlet-400"><span>Scarlet 400</span></div>
    <div class="hs-bg-scarlet-600"><span>Scarlet 600</span></div>
    <div class="hs-bg-scarlet-alpha-200"><span>Scarlet Alpha 200</span></div>
    <div class="hs-bg-scarlet-alpha-300"><span>Scarlet Alpha 300</span></div>
    <div class="hs-bg-scarlet-alpha-400"><span>Scarlet Alpha 400</span></div>
    <div class="hs-bg-scarlet-alpha-600"><span>Scarlet Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-plox-200"><span>Plox 200</span></div>
    <div class="hs-bg-plox-300"><span>Plox 300</span></div>
    <div class="hs-bg-plox-400"><span>Plox 400</span></div>
    <div class="hs-bg-plox-600"><span>Plox 600</span></div>
    <div class="hs-bg-plox-alpha-200"><span>Plox Alpha 200</span></div>
    <div class="hs-bg-plox-alpha-300"><span>Plox Alpha 300</span></div>
    <div class="hs-bg-plox-alpha-400"><span>Plox Alpha 400</span></div>
    <div class="hs-bg-plox-alpha-600"><span>Plox Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-native-blue-200"><span>Native Blue 200</span></div>
    <div class="hs-bg-native-blue-300"><span>Native Blue 300</span></div>
    <div class="hs-bg-native-blue-400"><span>Native Blue 400</span></div>
    <div class="hs-bg-native-blue-600"><span>Native Blue 600</span></div>
    <div class="hs-bg-native-blue-alpha-200"><span>Native Blue Alpha 200</span></div>
    <div class="hs-bg-native-blue-alpha-300"><span>Native Blue Alpha 300</span></div>
    <div class="hs-bg-native-blue-alpha-400"><span>Native Blue Alpha 400</span></div>
    <div class="hs-bg-native-blue-alpha-600"><span>Native Blue Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-bright-cyan-200"><span>Bright Cyan 200</span></div>
    <div class="hs-bg-bright-cyan-300"><span>Bright Cyan 300</span></div>
    <div class="hs-bg-bright-cyan-400"><span>Bright Cyan 400</span></div>
    <div class="hs-bg-bright-cyan-600"><span>Bright Cyan 600</span></div>
    <div class="hs-bg-bright-cyan-alpha-200"><span>Bright Cyan Alpha 200</span></div>
    <div class="hs-bg-bright-cyan-alpha-300"><span>Bright Cyan Alpha 300</span></div>
    <div class="hs-bg-bright-cyan-alpha-400"><span>Bright Cyan Alpha 400</span></div>
    <div class="hs-bg-bright-cyan-alpha-600"><span>Bright Cyan Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-success-200"><span>Success 200</span></div>
    <div class="hs-bg-success-300"><span>Success 300</span></div>
    <div class="hs-bg-success-400"><span>Success 400</span></div>
    <div class="hs-bg-success-600"><span>Success 600</span></div>
    <div class="hs-bg-success-alpha-200"><span>Success Alpha 200</span></div>
    <div class="hs-bg-success-alpha-300"><span>Success Alpha 300</span></div>
    <div class="hs-bg-success-alpha-400"><span>Success Alpha 400</span></div>
    <div class="hs-bg-success-alpha-600"><span>Success Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-warning-200"><span>Warning 200</span></div>
    <div class="hs-bg-warning-300"><span>Warning 300</span></div>
    <div class="hs-bg-warning-400"><span>Warning 400</span></div>
    <div class="hs-bg-warning-600"><span>Warning 600</span></div>
    <div class="hs-bg-warning-alpha-200"><span>Warning Alpha 200</span></div>
    <div class="hs-bg-warning-alpha-300"><span>Warning Alpha 300</span></div>
    <div class="hs-bg-warning-alpha-400"><span>Warning Alpha 400</span></div>
    <div class="hs-bg-warning-alpha-600"><span>Warning Alpha 600</span></div>
  </div>
  <div class="color-module">
    <div class="hs-bg-danger-200"><span>Danger 200</span></div>
    <div class="hs-bg-danger-300"><span>Danger 300</span></div>
    <div class="hs-bg-danger-400"><span>Danger 400</span></div>
    <div class="hs-bg-danger-600"><span>Danger 600</span></div>
    <div class="hs-bg-danger-alpha-200"><span>Danger Alpha 200</span></div>
    <div class="hs-bg-danger-alpha-300"><span>Danger Alpha 300</span></div>
    <div class="hs-bg-danger-alpha-400"><span>Danger Alpha 400</span></div>
    <div class="hs-bg-danger-alpha-600"><span>Danger Alpha 600</span></div>
  </div>
</section>