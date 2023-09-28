# Hashi・橋
![Hashi Cover Light Mode](https://raw.githubusercontent.com/dev-protocol/hashi/main/media/hashi-cover.png?sanitize=true#gh-light-mode-only)
![Hashi Cover Dark Mode](https://raw.githubusercontent.com/dev-protocol/hashi/main/media/hashi-cover--dark.png?sanitize=true#gh-dark-mode-only)

Dev Protocol's design system implementation for the web.

## Languages
- **English (You're here!)**
- [日本語](README_JP.md)

## Prerequisites
Be sure to have NodeJS v16.x installed. Any version higher will risk the project not working locally.

## Setup
```shell
# NPM
$ npm install @devprotocol/hashi

# Yarn
$ yarn add @devprotocol/hashi
```
```scss
// Include design system initializer.
@use '@devprotocol/hashi';
// Include all components here.
@use '@devprotocol/hashi/hs-component';

@include hashi.init() {
    @include hs-component.render();
}
```

## Contributing
You can see the guide to contributing [here](.github/CONTRIBUTING.md).