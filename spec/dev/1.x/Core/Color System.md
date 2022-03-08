# Hashi Color System
Hashi's color system only utilizes the limited amount of color tokens we have provided. This ensures consistent
interfaces throughout the ecosystem.

## Properties
Hashi's color system has three main properties: Primary, Accent, and Background.

### Primary Colors
These colors define the majority of surfaces in the interface. These consist of cards, profiles, etc. The primary color
property takes in a map with the 4-shade schema.

### Accent Colors
These colors define user-interactable elements of the interface. These consist of buttons and button groups, form field
and select field accent colors, etc. The accent color property takes in a map with the 4-shade schema.

### Background Color
The background color serves as the main surface area the elements will be placed on. The background color property only
takes one immutable color each for both light and dark mode. The color must also be specified with a tone value.

## Component Color Anatomy
A component generally has three color parts: the fill, the ink, and the border. It is required to have these three
present in every component.

The fill part takes care of the `background-color` property. The fill part can be a solid color, an alpha version of a
solid color, or no color at all.

The ink part takes care of the `color` property. The ink part can only be a solid color. Keep in mind, when pairing your
inks with your fills, be sure to keep it at a AA contrast rating at minimum.

The border part takes care of the `border-color` property. It can be a solid color, an alpha version of a solid color,
or no color at all. Whenever you set the border to an alpha color with an alpha color fill, we recommend you set the
opacity to 10% of the fill's alpha opacity. This creates a seamless distinction from the border and fill.