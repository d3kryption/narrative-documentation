---
sidebar_label: 'Books'
---

# Books

Narrative Books is a tool that allows you to create interactable books, tablets, newspapers etc... 

These are great to expand lore or to hide clues or other aspects of your game.

## Creation

To create a book, Right-click in the **Content Drawer** -> **Blueprint Class** -> **BI_NarrativeBook**.

![creation.png](..%2F..%2F..%2Fstatic%2Fimg%2Fbooks%2Fcreation.png)

You can now select Class Defaults and add all the pages you require your book to have.

![book-pages.png](..%2F..%2F..%2Fstatic%2Fimg%2Fbooks%2Fbook-pages.png)

For each page in your book, you need to provide a texture that will render what you need.

You can do this by finding a page texture in the **Content Drawer** -> **Right-click** -> **Asset Actions** -> **Export**.

![books-export.png](..%2F..%2F..%2Fstatic%2Fimg%2Fbooks%2Fbooks-export.png)

Selecting the item in the world or the players inventory will now allow you to read the book.

![book-read.png](..%2F..%2F..%2Fstatic%2Fimg%2Fbooks%2Fbook-read.png)

## Properties

| Property Name | Type                | Description                             |
|---------------|---------------------|-----------------------------------------|
| Book Contents | Text                | The text that the actual book contains. |
| Pages         | TArray\<Texutre2D\> | Textures of each page.                  |
| CoverTexture  | Texture2D           | The texture of the book                 |