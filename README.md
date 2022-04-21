# Hashi・橋
![hashi-cover.png](media/hashi-cover.png)

Dev Protocol's design system implementation for the web.

## Languages
- **English (You're here!)**
- [日本語](README_JP.md)

## Prerequisites
Be sure to have NodeJS v14.x installed. Any version higher will risk the project not working locally.

## Setup
```shell
# NPM
$ npm install @devprotocol/hashi

# Yarn
$ yarn add @devprotocol/hashi
```
```scss
// Include design system initializer.
@use 'path/to/@devprotocol/hashi';
// Include all components here.
@use 'path/to/@devprotocol/hashi/hs-component';

@include hashi.init() {
    @include hs-component.render();
}
```

## Contributing
You can see the guide to contributing [here](.github/CONTRIBUTING.md).
