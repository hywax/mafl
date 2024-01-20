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

Values: `en`, `ru`, `zh`, `hi`, `es`, `ar`

Default: `en`

## Theme

You can customize fixed themes by passing the `theme` option as shown below:

```yaml
theme: dark
```

Values: `system`, `light`, `dark`, `deep`, `sepia`

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
      bubble: true
      color: '#3dbcf3'
    status:
      enabled: true
  - title: NAS
    description: Synology DS223
    link: https://nas.home.local/
    icon:
      name: mdi:nas
      bubble: true
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
        bubble: true
        color: '#3dbcf3'
      status:
        enabled: true
  Devices:
    - title: Router
      description: Keenetic Peak
      link: http://192.168.1.1/
      icon:
        name: mdi:router-network
        bubble: true
    - title: NAS
      description: Synology DS223
      link: https://nas.home.local/
      icon:
        name: mdi:nas
        bubble: true
      status:
        enabled: true
```
:::
