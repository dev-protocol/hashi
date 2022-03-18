# Theme

## Color Properties
Hashi's theming system has three main color properties: Primary, Accent, and Background.

### Surface Color
These colors define the majority of surfaces in the interface. These consist of cards, profiles, etc. The primary color
property takes one immutable color each for both light and dark mode.

### Accent Color
These colors define user-interactable elements of the interface. These consist of buttons and button groups, form field
and select field accent colors, etc. The accent color property takes one immutable color each for both light and dark
mode.

### Background Color
The background color serves as the main surface area the elements will be placed on. The background color property only
takes one immutable color each for both light and dark mode.

## Shape Properties
### Radius
Hashi's radius theming has three main properties: small, medium, and large. The distinctions are made based on component sizes (i.e. Buttons are small components, therefore its radius value is the `small-radius` value.).

#### What can we consider as x component size?
| Size   | Example components                                                               |
|--------|----------------------------------------------------------------------------------|
| Small  | Buttons, Badges, Text Fields, Select Fields, Links, Form Controls, Tags, Wallets |
| Medium | Cards, Modals, Profiles, Banners, Feature Cards                                  |
| Large  | Headers, Appbars, Navbars, Drawers, Hero Sections, etc.                          |