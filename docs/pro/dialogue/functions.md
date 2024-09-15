---
sidebar_label: 'Functions'
---

# Functions

Dialogue contains a bunch of functions to help you use dialogue in any way you need.

If you import the [Tales Component](../tales-component), you can view the list of functions supported.

## Begin Dialogue

The most used function in the entire dialogue system.

This function tells Narrative to start the specified dialogue. It will return a bool if it can start or if it has failed for any reason (replication issues, no conditions passed)

![dialogue-begin-dialogue.webp](/img/dialogue/dialogue-begin-dialogue.webp)

### Inputs

| Name        | Type                                   | Description                                                                                 |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| In          | exec                                   |                                                                                             |
| Target      | [UTalesComponent](../tales-component)  | The Narrative component to try and start the dialogue on.                                   |
| Dialogue    | TSubclassOf\<[UDialogue](./index.md)\> | The dialogue class that you want to play.                                                   |
| StartFromID | FName                                  | The ID the dialogue should start playing from, if empty will play from root node.           |
| Priority    | int32                                  | The priority we want to play this dialogue at. -1 means use the dialogues default priority. |

### Output

| Name         | Type | Description                            |
|--------------|------|----------------------------------------|
| Out          | exec |                                        |
| Return Value | bool | Whether or not the dialogue has began. |

## Has Dialogue Available

Whilst creating dialogue it is common to have dialogue assets that are not used anymore due to conditions blocking all routes - and this is okay.

Sometimes you want to check if a dialogue can be started before calling BeginDialogue or to fulfil some condition.

The **HasDialogueAvailable** function executes the initialize method of the provided dialogue and does not start the dialogue. 

This will return you a bool to whether calling BeginDialogue would successfully enter the dialogue.

![dialogue-has-dialogue-available.webp](/img/dialogue/dialogue-has-dialogue-available.webp)

### Inputs

| Name        | Type                                   | Description                                                                                 |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| Target      | [UTalesComponent](../tales-component)  | The Narrative component to try and start the dialogue on.                                   |
| Dialogue    | TSubclassOf\<[UDialogue](./index.md)\> | The dialogue class that you want to play.                                                   |
| StartFromID | FName                                  | The ID the dialogue should start playing from, if empty will play from root node.           |
| Priority    | int32                                  | The priority we want to play this dialogue at. -1 means use the dialogues default priority. |

### Output

| Name         | Type | Description                            |
|--------------|------|----------------------------------------|
| Return Value | bool | Whether or not the dialogue can begin. |
