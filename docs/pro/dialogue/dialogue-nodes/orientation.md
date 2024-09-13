---
sidebar_label: 'Orientation'
---

# Orientation

By-default the Dialogue will render the dialogue vertically, but you also have the option to tell Narrative to render the dialogue Horizontally.

You can do this by going to **Edit** -> **Project Settings** -> **Narrative Dialogues - Editor** then unchecking **Vertical Wiring**.

![dialogue_vertical_toggle.png](/img/dialogue/dialogue_vertical_toggle.png)


## Horizontal

![dialogue_horizontal.png](/img/dialogue/dialogue_horizontal.png)

## Vertical

![speaker-nodes-joining.png](/img/dialogue/speaker-nodes-joining.png)

## Dialogue Order

Depending on your orientation, Tales will try to pick the dialogue from top to bottom or left to right.

### Vertical Order

If your dialogue is [vertically set](./orientation.md#vertical), then Tales will play the nodes from left to right.

As you can see in the below screenshot, the nodes go:

- Option 1
- Option 2
- Option 3

But Tales will play them from left to right. Meaning it would be checked

- Option 1
- Option 3
- Option 2

![speaker-nodes-joining.png](/img/dialogue/vertical_dialogue_order.png)

### Horizontal Order

If your dialogue is [horizontally set](./orientation.md#horizontal), then Tales will check the nodes [conditions](../../conditions) from top to bottom.

![horizontal_dialogue_order.png](/img/dialogue/horizontal_dialogue_order.png)
