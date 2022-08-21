# Hashiに貢献
進める前に、[Code of Conduct](https://github.com/dev-protocol/.github/blob/main/CODE_OF_CONDUCT.md)を読んでください。

## 貢献流れのまとめ
1. このRepositoryをフォークして、ローカルでクローンします。
2. 全部の準備パッケージをインストールするために、`npm install`か`yarn install`をします。
   - Documentationの作業をする場合, `/docs`のフォルダーに`cd`をしてください。
   - あるいは, Testsの作業をする場合, `/tests`のフォルダーに`cd`をしてください。
   - そして、dependenciesのインストールについて知っておく必要のある詳細があるので、[これ](#installing-dependencies)を読んでください。
 
3. このフォーマットでブランチを作ります:

```text
[username]-[issue-number]_[issue-title]
```

4. コードを書く.コードを書く.コードを書く.
5. Pull Requestを開いてください.
6. Pull Requestの確認を待ってください.
   - Pull Requestが承認されたら、 `main`ブランチにマージされます.
7. 🎉 おめでとう! Hashiに貢献しました！！

## 貢献の詳細
### 貢献の制約
Hashiに貢献するときに、「いけること」と「いけないこと」が知ってる必要です。

- 新しいコンポーネントの作りは、Hashi Internal Teamだけに許します。
- 仕様から倣わないコードがいけません。`/specs`のフォルダに仕様を倣ってください。

### 準備パッケージのインストール
今の準備パッケージのリストはHashiの今の版にいつも動きます。でも、ルートフォルダとテストフォルダが「Hashiの開発中版」が必要です。だから、そのフォルダが「Hashiの開発中版」を使いに設定しました。

### コードのスタイル
Hashiの`.editorconfig`ファイルを使ってください。

