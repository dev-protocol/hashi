---
title: Theming
slug: /design/foundation/color/theming
displayed_sidebar: design
---

# Color Theming
Hashi's guidelines for applying colors on a global scope.

## Color Properties
Hashi's theming system has three main color properties: Primary, Accent, and Background.

![color theming](../_media/color-theming.png)

### 1. Surface Color
These colors define the majority of surfaces in the interface. These consist of cards, profiles, etc. The primary color
property takes one immutable color,
or [one Dev Protocol brand color preset](color-tokens.md#in-accordance-to-the-dev-protocol-brand)  each for both light
and dark mode.

### 2. Accent Color
These colors define user-interactable elements, and indicators of the interface. Its purpose is to highlight a portion
of the interface that needs attention. These usually are form actions, page indicators, quantity indicators,
notification count, alerts, etc.

These consist of buttons and button groups, form field and select field accent colors, badges, tags, etc. The accent
color property takes one immutable color,
or [one Dev Protocol brand color preset](color-tokens.md#in-accordance-to-the-dev-protocol-brand)  each for both light
and dark mode.

### 3. Background Color
The background color serves as the main surface area the elements will be placed on. The background color property only
takes one immutable color,
or [one Dev Protocol brand color preset](color-tokens.md#in-accordance-to-the-dev-protocol-brand) each for both light
and dark mode.