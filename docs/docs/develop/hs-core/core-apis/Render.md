---
id: render
title: Render API
slug: /develop/core/api/render
sidebar_position: 2
---
# Render
The render API simply renders the styles of a component based on a given configuration using Sass' `with ()` feature.

The modifiable properties are on a per-component basis and doesn't really follow a specific schema.

```scss
@use 'node_modules/@devprotocol/hashi/hs-component' with (
    $fill: 'scarlet',
    $radius: 'radius-lg'
);

@include hs-component.render();
```