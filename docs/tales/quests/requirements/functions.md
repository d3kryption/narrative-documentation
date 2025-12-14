---
sidebar_label: 'Functions'
---

# Functions

## On Added

Called when this requirement is added to a quest.

This event is triggered immediately after the requirement is attached, allowing you to:
- Bind to quest-related events
- Start timers or checks
- Initialize state needed to evaluate the requirement

This is the primary setup point for custom quest requirements.

#### Inputs

| Name  | Type   | Description                             |
|-------|--------|-----------------------------------------|
| Quest | UQuest | The quest this requirement was added to |

---

## On Removed

Called when this requirement is removed from a quest.

This event is triggered when:
- The requirement is manually removed
- The quest ends
- The quest fails or succeeds

Use this event to:
- Unbind from events
- Stop timers
- Clean up any runtime state created in `On Added`

#### Inputs

| Name  | Type   | Description                                 |
|-------|--------|---------------------------------------------|
| Quest | UQuest | The quest this requirement was removed from |

:::note

Always clean up any delegates, timers, or references in `On Removed` to avoid leaks or invalid callbacks.

:::
