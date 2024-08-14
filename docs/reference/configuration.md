# Configuration

Services, icons, language and other settings are set in a single `config.yml` file.
It must be transferred to the docker container, as described in [Getting Started](../guide/getting-started.md).

## Title

You can customize the page header if you wish.

```yaml
title: My Home Page
```

Default: `Mafl Home Page`

## Language

Set the desired language with:

```yaml
lang: ru
```

Values: `en`, `ru`, `zh`, `hi`, `es`, `ar`, `pl`, `fr`, `de`, `gr`, `nl`

Default: `en`

## Theme

You can customize fixed themes by passing the `theme` option as shown below:

```yaml
theme: dark
```

Values: `system`, `light`, `dark`, `deep`, `sepia`, `bluer`

Default: `system`

## Check updates

This option is responsible for automatically checking for updates.
If a new version appears, a message with the new version will appear at the bottom of the screen.

```yaml
checkUpdates: true
```

Default: `true`

::: info Info
With the `true` parameter there will be no automatic update.
If you want the system to be able to update itself, we recommend using [watchtower](https://containrrr.dev/watchtower/).
:::

## Behaviour

A group of parameters responsible for the behavior of the application.

### Target <in-version value="0.7.6" />

Browser behavior when the service is clicked.
With this property, you can make the service open in the current or a new window.

```yaml
behaviour:
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
If a field is defined in the service `target` it will be prioritized. More details can be found in the [basic service](../services/base.md#target).
:::

## Tags <in-version value="0.10.0" />

Tags allow you to differentiate between services.

```yaml
tags:
  - name: Home
    color: green
  - name: Work
    color: blue
```

::: info
More details can be found in the [tags](../reference/tags.md) section.
:::

## Layout <in-version value="0.14.0" />

A group of parameters responsible for the application layout.

### Grid

Allows you to set the number of columns at different screen resolutions.

```yaml
layout:
  grid:
    small: 2
    medium: 2
    large: 3
    xlarge: 4
```

Values: range `1 - 12`

You can only specify one value, the others will be set automatically.

## Services

All services that are displayed on the home page are set in this parameter.
It supports both list and grouping. The number of services is not limited.

::: warning Services list
A full list of all services can be viewed in the left sidebar under **Services**.
We recommend to start familiarization with [base service](../services/base.md), on which all other services are based.
:::

### Flat
```yaml
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
```

### Groups

```yaml
services:
  Group 1:
    - title: Home Assistant
      description: Home automation
      link: https://home-assistant.home.local/
  Group 2:
    - title: Home Assistant
      description: Home automation
      link: https://home-assistant.home.local/
```

This is a required parameter, without it the homepage will not open.
You can see more detailed examples below.

## Examples

### Flat list

A configuration in which all services are located at the same level.

::: code-group
```yaml [config.yml]
title: My Home Page
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
  - title: NAS
    description: Synology DS223
    link: https://nas.home.local/
    icon:
      name: mdi:nas
      wrap: true
    status:
      enabled: true
```
:::

### Group list

A simple configuration with the creation of two groups `Services` and `Devices`.

::: code-group
```yaml [config.yml]
title: My Home Page
services:
  Services:
    - title: Home Assistant
      description: Home automation
      link: https://home-assistant.home.local/
      icon:
        name: simple-icons:homeassistant
        wrap: true
        color: '#3dbcf3'
      status:
        enabled: true
  Devices:
    - title: Router
      description: Keenetic Peak
      link: http://192.168.1.1/
      icon:
        name: mdi:router-network
        wrap: true
    - title: NAS
      description: Synology DS223
      link: https://nas.home.local/
      icon:
        name: mdi:nas
        wrap: true
      status:
        enabled: true
```
:::
