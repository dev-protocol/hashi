---
id: philosophy
title: Philosophy
slug: /getting-started/philosophy
sidebar_position: 3
---
# Philosophy
The Hashi Design System follows a modified version of the token-driven philosophy. Wherin we will only use tokens for property values and will only compromise if needed.

This token-driven approach allows us to be consistent throughout the Dev Protocol ecosystem.

### Component Philosophy
In conjunction to the design system being token driven, we also reduced the components to being small/primitive only. This allows space for the project to solve their own specific design problems that would've otherwise caused clutter, chaos, and duplicated code in both the design system and the said project.

The design system also follows the base-variance pattern, this has proven to be (according to AirBnb) a very effective method in solving design consistency while having the flexibility to solve a project's own design problems.

### Utility Philosophy
We strongly believe that a token-driven approach to the design system is the best way to enforce consistency in a user interface. Hence, we created pre-built utility classes that match the [token specifications](/docs/spec/tokens), and the needs of the developers to solve design problems consistently, beautifully, and quickly.

However, there's a certain limitation to our usage of utility classes. We strongly recommend that if you were to create a reusable small-to-medium-sized component, that you directly use Hashi's built in component creation API ([Token](../hs-core/core-apis/Token.md) and [Key](../hs-core/core-apis/Key.md) API). This way, sharing component styles is easier than say just using utility classes. This is also the reason why there's only a limited amount of utility classes, and does not cover all CSS properties.

So you might ask, then what are the utility classes for? We use them to style elements that are only going to be used once or twice, generally anything that is only used a few times throughout the project. We like to call these one-shot/two-shot elements. These one-shot/two-shot elements are things like headers, footers, hero sections, layouts, etc. Usually the bigger components that only get written once or twice.