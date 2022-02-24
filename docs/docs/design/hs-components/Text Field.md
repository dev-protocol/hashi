---
id: hs-text-field
title: Text Field
slug: /design/text-field
sidebar_position: 4
---
# HSTextField Component
## Colors
Text field colors indicate what state the component is in whenever the user interacts with it.

| Variant     | Description                                                                                                               |
|-------------|---------------------------------------------------------------------------------------------------------------------------|
| **Default** | If the component is not being interacted with.                                                                            |         
| **Active**  | If the component is being interacted with.                                                                                |         
| **Success** | If the information put is valid.                                                                                          |         
| **Warning** | If the information put has a potential error. This indicates the information put is not correct, but can be passed still. |         
| **Danger**  | If the information put certainly has an error.                                                                            |         

## What to put in the text field
For starters, the text field should be able to communicate what information you need from the user. One of the ways we like to put it is **helper texts are a secondary means of delivering what is asked**.

1. The label should be able to communicate the information needed in a few words (mostly nouns).
2. Avoid using full sentences/short phrases in labels, it should avoid containing verbs and such.
    - As much as possible, the label should contain nouns (e.g. First Name, E-mail, Wallet Address, etc.).
3. Placeholders act as example text of what should be put inside the text field. (e.g. "john.doe@email.com", "0x000000000000", etc.).
4. Helper texts should be used for error messages during form validation.