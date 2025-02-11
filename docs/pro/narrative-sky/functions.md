---
sidebar_label: 'Functions'
---

# Functions

Narrative Sky features a bunch of functions that allow you to control Blueprints based on the time.

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/GT4OS-tgK9k?si=38hH5ByXA1ZWAtwb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Wait Time Range

This [latent](https://mikelis.net/easy-c-latent-functions-in-unreal-engine-blueprints/) node allows you to set a time start and end, with event driven call backs so you aren't having to tick or manually check the time.

![wait-time-range.webp](/img/pro/narrative-sky/wait-time-range.webp)

### Inputs

| Name       | Type                                   | Description                  |
|------------|----------------------------------------|------------------------------|
| Time Start | int32                                  | The start time of the range. |
| Time End   | int32                                  | The end time of the range.   |

### Outputs

| Name                  | Type    | Description                                                     |
|-----------------------|---------|-----------------------------------------------------------------|
| On Time Range Start   | Exec    | When the time has entered the provided range.                   |
| On Time Range End     | Exec    | When the time has exited the provided range.                    |
| EventTime             | float   | The current time.                                               |
| TimeAtFire            | float   | The time it was when the event has fired.                       |
| TimePassedDelta       | float   | The delta time currently.                                       |
| FiredFromAdvancedTime | boolean | Whether or not the AdvancedTime command was used to trigger it. |

## Wait Sunset And Rise

This latent node allows you to be informed when NarrativeSky has started Sunrise and Sunset.

Great for making lights or other events that come on at nighttime and shut off automatically.

![wait-sunrise-and-sunset.webp](/img/pro/narrative-sky/wait-sunrise-and-sunset.webp)

### Outputs

| Name                  | Type    | Description                                                     |
|-----------------------|---------|-----------------------------------------------------------------|
| On Sunrise            | Exec    | When the time has passed the Sunrise time.                      |
| On Sunset             | Exec    | When the time has passed the Sunset time.                       |
| EventTime             | float   | The current time.                                               |
| TimeAtFire            | float   | The time it was when the event has fired.                       |
| TimePassedDelta       | float   | The delta time currently.                                       |
| FiredFromAdvancedTime | boolean | Whether or not the AdvancedTime command was used to trigger it. |

## Wait Time Of Day

This latent node allows you to be informed when NarrativeSky has reached a specific time.

### Inputs

| Name | Type  | Description                 |
|------|-------|-----------------------------|
| Time | int32 | The time to be notified by. |

![wait-time-reached.webp](/img/pro/narrative-sky/wait-time-reached.webp)

### Outputs

| Name                  | Type    | Description                                                     |
|-----------------------|---------|-----------------------------------------------------------------|
| On Time Reached       | Exec    | When the specific time has been reached.                        |
| EventTime             | float   | The current time.                                               |
| TimeAtFire            | float   | The time it was when the event has fired.                       |
| TimePassedDelta       | float   | The delta time currently.                                       |
| FiredFromAdvancedTime | boolean | Whether or not the AdvancedTime command was used to trigger it. |
