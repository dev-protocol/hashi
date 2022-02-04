---
id: init
title: Init API
slug: /core/api/init
sidebar_position: 1
---
# Init
The most basic core API. This initializes the entire design system in your stylesheet.

## Usage
The most basic usage of this is to instantiate it and put all the code inside the 'scoping brackets'.
```scss
@use 'node_modules/@devprotocol/hashi';

@include hashi.init() {
    // Components/Code to be placed here.
}
```