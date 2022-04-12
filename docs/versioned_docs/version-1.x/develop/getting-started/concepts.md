---
title: Concepts
slug: /develop/concepts
displayed_sidebar: develop
---
After realizing our [aims](../introduction.md#aims), we've decided on a few concepts we'd like to apply those aims to the design system.

## Token-driven Architecture
Token-driven architecture is a type of design system architecture that uses **design tokens** to run the designs. **Design tokens** are singular, immutable, and powerful values/rules that govern over the design system.

Utilizing this architecture, we are able to provide immediate consistency, and immutability in terms of design across Dev Protocol's large ecosystem without sacrificing to compromise the different needs of each project.

In turn, being a token-driven design system, we're also taking advantage of **utility classes** to make styling medium to large components easier.

## Primitive-only Approach
We borrowed this concept from Spotify, where we take our tokens and only make the most basic, small components like buttons, blank surface areas (i.e. blank cards), select fields, text fields, links, utility classes, profiles, badges, tags, etc.

By doing this, we're allowing each project to have their own control over their design problems and needs, making it a decentralized design system. We believe that each project has their own design needs, say one project requires a different navigation style than the other. This is our solution to address that problem.

## Base-variance Component Pattern
We borrowed this concept from AirBnb, where we make base styles for our components and extend it to create variants, this lets us have lesser code while extending expressiveness in the primitive components. To address this, we've made an "Extension API" to let developers create their own variations from the base component.