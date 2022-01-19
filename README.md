# Hashi・橋
___
![img.png](https://github.com/dev-protocol/hashi-web/raw/main/media/img.png)
- **[EN]**: Dev Protocol's design system implementation for the web.
- **[JP]**: Dev Protocolのデザインシステムのウェブ向けの実現。

## Prerequisites
- Node v14.x

## Setup
```shell
# NPM
npm install @devprotocol/hashi

# Yarn
yarn add @devprotocol/hashi
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
> Coming Soon!
