---
sidebar_label: 'Formatting'
---

# Formatting

Narrative Dialogues have built-in formatting that lets you highlight text or modify the style of text in a sentence.

You can use the following formatting tags wrapped around your text to modify the style of the text:

```cpp
<Narrative.Empahsis>Your Text Here</>
```

## Styles

Narrative has a few different styles of formatting that you can use.

To view / modify these styles, they are stored in `DT_RichText_NarrativeDialogue`.

The available options currently are:

### Default

This is applied by default, no need to specify anything.

![default_formatting.webp](//img/dialogue/formatting/default_formatting.webp)

Text used:

```html
Hey there! This is my really long text just to test the distance thing. AGAIN Hey there! This is my really long text just to test the distance thing. 
```

### Emphasis

This is used to highlight text with a bold and colour highlight.

![emphasis_formatting.webp](//img/dialogue/formatting/emphasis_formatting.webp)

Text used:

```html
Hey there! Please can you run to <Narrative.Emphasis>Local Shop</> to fetch me an apple?
```

### Disabled

This disables the option and greys it out to show its unavailable.

![disabled_formatting.webp](//img/dialogue/formatting/disabled_formatting.webp)

Text used:

```html
Hey there! Please don't go to the <Narrative.Disabled>Cemetery</> its quite scary!
```
