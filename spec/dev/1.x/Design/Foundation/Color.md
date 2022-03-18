# Hashi Color Application System
Hashi's guidelines for applying color to components.

## Component Color Anatomy
A component generally has three color parts: the fill, the ink, and the border. It is required to have these three

![Component Color Anatomy](_Media/Color%20Anatomy.png)

① The fill part takes care of the `background-color` property. The fill part can be a solid color, an alpha version of a
solid color, or no color at all.

② The ink part takes care of the `color` property. The ink part can only be a solid color. Keep in mind, when pairing your
inks with your fills, be sure to keep it at a AA contrast rating at minimum.

③ The border part takes care of the `border-color` property. It can be a solid color, an alpha version of a solid color,
or no color at all. Whenever you set the border to an alpha color with an alpha color fill, we recommend you set the
opacity to 10% of the fill's alpha opacity. This creates a seamless distinction from the border and fill.