# Hashi
![hashi-cover.png](media/hashi-cover.png)

Dev Protocolのデザインシステムのウェブ向けの実現。

## 準備
NodeJS　v14.xをインストールのは必要です。以上と以下のヴァージョンはプロジェクトにダメです。

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
> ※ ドキュメントの半分は英語で書いてます。

貢献方法は、[ここに](.github/CONTRIBUTING_JP.md)入ってます。