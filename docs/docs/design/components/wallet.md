---
id: hs-wallet
title: Wallets
slug: /design/wallet
---
:::caution
This component is in its early development phase, henceforth there are no live implementations yet. It is recommended to follow the current design spec when implementing this in applications.
:::

The wallet component allows users to connect their wallets to a Dev Protocol app.

![wallet.png](../_media/wallet.png)

## Wallet Variants
### Text
:::danger Component Unavailable
This component is in its early development phase, henceforth there are no live implementations yet. It is recommended to follow the current design spec when implementing this in applications.
:::

### Outlined
:::danger Component Unavailable
This component is in its early development phase, henceforth there are no live implementations yet. It is recommended to follow the current design spec when implementing this in applications.
:::

### Filled (Default)
:::danger Component Unavailable
This component is in its early development phase, henceforth there are no live implementations yet. It is recommended to follow the current design spec when implementing this in applications.
:::

## Wallet Elements
### Connect Button
The connect button is a special variant of the [button component](button.mdx) that lets a user connect their wallet to the application.

### Connected Button
The connected button is (yet another) special variant of the [button component](button.mdx) that lets the user know their wallet is connected to the application. It also lets the user see wallet details.

### Wallet Details
Wallet details contain the network information, and possible wallet actions.

We recommend only placing 1-3 wallet actions inside the wallet details to avoid clutter.