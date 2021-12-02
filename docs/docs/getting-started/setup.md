---
id: setup
title: Setup
slug: /getting-started/setup
sidebar_position: 2
---
# Setup
## Installation
```shell
# NPM
npm install @devprotocol/hashi

# Yarn
yarn add @devprotocol/hashi
```

## Instantiation
```scss
//===========//
// main.scss //
//===========//

// Include design system initializer.
@use 'path/to/@devprotocol/hashi';
// Include all components here.
@use 'path/to/@devprotocol/hashi/hs-component';

@include hashi.init() {
    @include hs-component.render();
}
```