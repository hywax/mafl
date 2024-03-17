# Base service

<preview-image name="services/base" />

The main card of the service.
Other services are created on the basis of this service.

## Title

Title service

```yaml
title: Home Assistant
```

## Description

Additional description, which is displayed right below the title.
This field is convenient when you have two similar services, but they need to be differentiated somehow.

```yaml
description: Home automation
```

## Link

Link to service. It is used when clicking on the icon and title.
It is also used to check [status](#status) availability.

```yaml
link: https://home-assistant.home.local/
```

## Target <in-version value="0.7.6" />

Browser behavior when the service is clicked.
With this property, you can make the service open in the current or a new window.

```yaml
target: _blank
```

Values:

| Value     | Description                                                                                                                     |
|-----------|---------------------------------------------------------------------------------------------------------------------------------|
| `_blank`  | Usually a new tab, but users can configure browsers to open a new window instead                                                |
| `_self`   | The current browsing context                                                                                                    |
| `_parent` | The parent browsing context of the current one. If no parent, behaves as `_self`                                                |
| `_top`    | The topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as `_self` |

Default: `_blank`

::: warning
This property takes precedence over `behaviour.target` from `config.yml`. You can read more in the [configuration](../reference/configuration.md#target)
:::

## Icon

Service icon. Allows you to quickly find the required item.
This field can be very flexibly customized by combining different parameters.

###
```yaml
icon:
  name: simple-icons:homeassistant
  wrap: true
```

or from local files:

```yaml
icon:
  url: icons/homeassistant.svg
  background: '#eee'
```

::: warning Settings
See [icons](../reference/icons.md) for details.
:::

## Tags <in-version value="0.10.0" />

Tags allow you to differentiate between services. It is quite convenient when you have several services that belong to the same project.

```yaml
tags:
  - name: Home
    color: green
```

or just a list of tags:

```yaml
tags:
  - Home
```

::: warning Settings
See [tags](../reference/tags.md) for details.
:::

## Status

Mafl knows how to check the health of the services in the link you provided.

```yaml
status:
  enabled: true
  interval: 60 # need not be specified
```

### `enabled`

Enabling status

Values: `true`, `false`

Default: `false`

### `animation`

Enabling animation

Values: `true`, `false`

Default: `true`

### `interval`

Status Update Interval.

Values: `number`

Default: `60` sec

::: warning
We do not recommend changing the interval. This can cause a heavy load on the system if you have a lot of different services.
:::

## Examples

### Base service

::: code-group
```yaml [config.yml]
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    icon:
      name: simple-icons:homeassistant
      wrap: true
      color: '#3dbcf3'
```
:::

### Status Tracking

::: code-group
```yaml [config.yml]
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    icon:
      name: simple-icons:homeassistant
      wrap: true
      color: '#3dbcf3'
    status:
      enabled: true
```
:::
