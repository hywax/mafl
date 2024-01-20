# Base service

<preview-service name="base" />

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

## Icon

Service icon. Allows you to quickly find the required item.
This field can be very flexibly customized by combining different parameters.

###
```yaml
icon:
  name: simple-icons:homeassistant
  bubble: true
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
      bubble: true
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
      bubble: true
      color: '#3dbcf3'
    status:
      enabled: true
```
:::
