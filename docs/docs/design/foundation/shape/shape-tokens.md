---
title: Shape Tokens
slug: /design/foundation/shape/tokens
displayed_sidebar: design
---
# Shape Token System
What constitutes as a shape token is whenever the value is related to the component's structure (e.g. radius, spacing,
etc.). Hashi's shape tokens also follow a specific schema. Each shape token increments by adding 0.2rem to 0.3rem to its
amount, or by doubling it from the previous token value. The values are labeled by size (xs → xl), however the
label `pill` is reserved for creating pill-shaped components (i.e. pill-shaped buttons).

| Label | Value            |
|-------|------------------|
| none  | 0                |
| xs    | +0.2rem          |
| sm    | +0.4rem or (xs)2 |
| md    | +0.6rem or (sm)2 |
| lg    | +0.8rem or (md)2 |
| xl    | +1rem or (lg)2   |
| pill  | 600px            |