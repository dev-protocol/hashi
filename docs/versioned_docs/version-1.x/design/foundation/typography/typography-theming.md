---
title: Typography Theming
slug: /design/foundation/typography/theming
displayed_sidebar: design
---
Hashi's typography system is a system designed to handle font/type-related concerns like the font sizes, typefaces,
line-heights, etc.

## Properties
The system is divided into a few properties: Supertitle, Title, Subtitle, Body, Mono, and Small. These properties are
affected by four (4) factors: Typeface (font family), Size, Weight, and Line Height.

## Types
We decided to name these types distinctively, and assign a purpose to them.

| Type       | Description                                                                                            |
|------------|--------------------------------------------------------------------------------------------------------|
| Supertitle | For eye-catching headers (usually `<h1>`, and `<h2>`). Typically used in hero sections.                |
| Title      | For defining headers (usually `<h3>`). Typically used as section titles.                               |
| Subtitle   | For descriptive headers (usually `<h4>`, `<h5>`, and `<h6>`). Typically used to define section titles. |
| Body       | For most text (usually `<p>`).                                                                         |
| Mono       | For code snippets in text.                                                                             |
| Small      | For helper texts.                                                                                      |

## Typefaces
Hashi allows you to use a maximum of two (2) different typefaces, This makes sure that fonts aren't just thrown out here
and there, and promotes consistency.

### Typeface Guidelines
#### Global, Body, and Small Typefaces
We recommend using a typeface that's easily-readable, expressive, and in context of the project's purpose--say a more
static, blog-ish type website could use either a serif or a sans-serif typeface. Some of our recommended fonts
include: `Whyte`, `Inter`, `Roboto`, `Roboto Serif`, etc. The default typeface is `Whyte`.

#### Supertitle, Title, and Subtitle Typefaces
We recommend using a typeface that's expressive, yet non-intrusive. This can be the brand's own typeface, or a
heavy-weight version of the global font. Recommended fonts include: `Syne`, `Inter (700)`, `Playfair Display`, etc. The
default typeface is `Syne`.

#### Monospace Typefaces
This typeface is mostly used inside code snippets in projects. Since Dev Protocol is geared towards development in the
blockchain, we've decided to include Monospace in our guidelines for consistency. Some of our recommended fonts
include: `IBM Plex Mono`, `Fira Code`, etc. The default typeface is `IBM Plex Mono`.

## Sizes, Line Heights and Weights
These are non-modifiable constants for Hashi's standardized typography sizes, default line heights, and default weights.

### Sizes with default weights
| Type       | Size (px) | Line Height (1.5) | Default Weight |
|------------|-----------|-------------------|----------------|
| Supertitle | 42        | 63                | 700            |
| Title      | 36        | 54                | 700            |
| Subtitle   | 24        | 30                | 700            |
| Body       | 16        | 24                | 400            |
| Mono       | 16        | 24                | 400            |
| Small      | 12        | 18                | 300            |