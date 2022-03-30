---
id: hs-select-field
title: Select Field
slug: /design/text-field
---
# Select Fields
The select field is used whenever you want to make the user choose from a finite set of options.

From the spec, it is required that the top-label select field (default) component is used whenever you want to have a select field in a form. Otherwise, if it’s for a page-related purpose (like a search filter), we recommend the side-label select field to be used.

Whenever you choose a select field variant, everything must be taken into context. For example, if the select field needs clarification--generally a helper text is used for this situation--we recommend that you use the one with the helper text (top-label).

## Select Field Variants
### Outlined (Default)
<div class="hs-component-preview">
   <label class="hs-select-field">
     <span class="hs-select-field__label">Select Field Label</span>
     <select class="hs-select-field__input">
         <option>Option 1</option>
         <option>Option 2</option>
         <option>Option 3</option>
         <option>Option 4</option>
         <option>Option 5</option>
     </select>
     <span class="hs-select-field__helper">Helper text</span>
   </label>
</div>

### Filled
<div class="hs-component-preview">
   <label class="hs-select-field is-filled">
     <span class="hs-select-field__label">Select Field Label</span>
     <select class="hs-select-field__input">
         <option>Option 1</option>
         <option>Option 2</option>
         <option>Option 3</option>
         <option>Option 4</option>
         <option>Option 5</option>
     </select>
     <span class="hs-select-field__helper">Helper text</span>
   </label>
</div>

### Side Label
<div class="hs-component-preview">
   <label class="hs-select-field is-side-label">
     <span class="hs-select-field__label">Select Field Label</span>
     <select class="hs-select-field__input">
         <option>Option 1</option>
         <option>Option 2</option>
         <option>Option 3</option>
         <option>Option 4</option>
         <option>Option 5</option>
     </select>
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
Form field icons can be positioned in their leading position, or the trailing position **but never both positions**.

For iconography guidelines, please refer to the [iconography guide](../foundation/typography/iconography.md).

![img.png](../_media/select-field-icon.png)

## Required Select Fields
Required form fields are to be indicated with the label having a red `*` on its right side. (See picture above)