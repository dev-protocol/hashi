---
id: hs-form-field
title: Form Fields
slug: /design/form-field
---
## Colors
Form field colors indicate what state the component is in whenever the user interacts with it.

| Variant     | Description                                    |
|-------------|------------------------------------------------|
| **Default** | If the component is not being interacted with. |
| **Active**  | If the component is being interacted with.     |
| **Danger**  | If the information put certainly has an error. |         
## Form Field Variants
### Outlined (Default)
<div class="hs-component-preview">
    <label class="hs-form-field">
        <span class="hs-form-field__label">Form Field Label</span>
        <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
        <span class="hs-form-field__helper">Helper text</span>
    </label>
</div>

### Filled
<div class="hs-component-preview">
    <label class="hs-form-field is-filled">
        <span class="hs-form-field__label">Form Field Label</span>
        <input class="hs-form-field__input" type="text" placeholder="Placeholder..."/>
        <span class="hs-form-field__helper">Helper text</span>
    </label>
</div>

## Form Field Elements
For starters, the text field should be able to communicate what information you need from the user. One of the ways we like to put it is **helper texts are a secondary means of delivering what is asked**.

### Labels
The label should be able to communicate the information needed in a few words (mostly nouns). Avoid using full sentences/short phrases in labels, it should avoid containing verbs and such.

:::info Notice
As much as possible, the label should contain nouns (e.g. First Name, E-mail, Wallet Address, etc.).
:::

### Placeholders
Placeholders act as example text of what should be put inside the text field. (e.g. `john.doe@email.com`, `0x000000000000`, etc.).

### Helper Texts
Helper texts generally give additional context to what is being asked of the user whenever the label isn't enough. Helper texts could also be used for error messages during form validation.

## Icons
Form field icons can be positioned in their leading position, or the trailing position. Both can be used at the same time, but only in certain contexts (like a search field). For the most part it is advisable to only use **one icon in one position at a time**.

For iconography guidelines, please refer to the [iconography guide](../foundation/typography/iconography.md).

![img.png](../_media/form-field-icon.png)

## Required Form Fields
Required form fields are to be indicated with the label having a red `*` on its right side. (See picture above)