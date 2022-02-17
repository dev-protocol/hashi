---
id: tailwind
title: Tailwind Integration
slug: /integrations/tailwind
---

Hashi already provides components, a styling API, and utilities out of the box. However, we've found that the built-ins aren't enough. Admittedly, Hashi's built-in utility classes aren't as powerful as Tailwind's. 

So we've created a `tailwind.config.js` file inside the library. This way, you can use Tailwind without sacrificing [Hashi's philosophies](../getting-started/philosophy). You can now enjoy the best of both worlds: An elegant component style library, a robust styling API, and a powerful utility class library.

## Integration
:::caution
Do note that this doesn't mean you'll use tailwind exclusively. Hashi is required for this integration to work, hence the term "integration" is used.

If you wish to see how to initialize Hashi, please refer to [this page](../getting-started/setup.md).
:::

In your project's `tailwind.config.js` file, write the code snippet below:
```js
module.exports = {
    presets: [require('@devprotocol/hashi/tailwind')],
    ...
}
```

And that's it! You're pretty much done.