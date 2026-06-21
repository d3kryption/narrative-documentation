---
sidebar_label: 'Get String Variables'
---

# Get String Variables

Get String Variables or String Replacement is a feature built into Narrative Tales that allows you to replace parts of your dialogue.

## Setup

To use this feature, modify your dialogue text to have a variable using brackets:

```html
{variable}
```

For example:

```html
Hey there! My name is {name}. Can you find me 5 {item}?
```

Now you can override the function `GetStringVariables` in your dialogue asset to return the value of the variable.

Switch on the dialogue variable and return the value of the variable.

:::info

Make sure to return a value for default otherwise a missing variable will return nothing.

:::

![get-string-variables-function.webp](//img/dialogue/get-string-variables/get-string-variables-function.webp)

