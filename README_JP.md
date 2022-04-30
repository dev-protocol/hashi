# Hashi
![hashi-cover.png](media/hashi-cover.png)

Dev Protocolのデザインシステムのウェブ向けの実現。

## 準備
NodeJS　v14.x のインストールが必要です。それ以上と以下のヴァージョンでは、ローカルでプロジェクトが動作しないリスクがあります。

## 言語
- [英語](README.md)
- **日本語 (今ここにいます！)**

## Setup
```shell
# NPM
$ npm install @devprotocol/hashi

# Yarn
$ yarn add @devprotocol/hashi
```
```scss
// Design Systemの準備機能をインポートする.
@use 'path/to/@devprotocol/hashi';
// Componentsをインポートする。
@use 'path/to/@devprotocol/hashi/hs-component';

@include hashi.init() {
    @include hs-component.render();
}
```

## 貢献について
> ※ ドキュメントの半分は英語で書かれています。

貢献方法は、[ここに](.github/CONTRIBUTING_JP.md)入ってます。
