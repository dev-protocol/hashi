---
id: hs-wallet
title: Wallets
slug: /design/wallet
---
The wallet component allows users to connect their wallets to a Dev Protocol app.

![wallet.png](../_media/wallet.png)

## Wallet Elements

> We've made the decision to use the button component here to avoid reinventing the button time and time again.

### Connect Button
The connect button is a special variant of the [button component](button.mdx) that lets a user connect their wallet to the application.

### Connected Button
The connected button is (yet another) special variant of the [button component](button.mdx) that lets the user know their wallet is connected to the application. It also lets the user see wallet details.

### Wallet Details
Wallet details is a sort-of tooltip subcomponent of the wallet component. Wallet details typically contain the network information.