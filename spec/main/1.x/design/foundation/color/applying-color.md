---
title: Applying Color
slug: /design/foundation/color/applying
displayed_sidebar: design
---
Hashi's guidelines for applying color to components.

## Component Color Anatomy
A component generally has three color parts: the fill, the ink, and the border. It is required to have these three

![Component Color Anatomy](../_media/color-anatomy.png)

### 1. Fill
This part takes care of the `background-color` property. The fill part can be a solid color, an alpha version of a
solid color, or no color at all.

### 2. Ink
This part takes care of the `color` property. The ink part can only be a solid color. Keep in mind, when pairing your
inks with your fills, be sure to keep it at a AA contrast rating at minimum.

### 3. Border
This part takes care of the `border-color` property. It can be a solid color, an alpha version of a solid color,
or no color at all. Whenever you set the border to an alpha color with an alpha color fill, we recommend you set the
opacity to 10% of the fill's alpha opacity. This creates a seamless distinction from the border and fill.