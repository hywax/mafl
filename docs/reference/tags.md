# Tags <in-version value="0.10.0" />

<preview-image name="reference/tags" />

Tags allow you to differentiate between services. It is quite convenient when you have several services that belong to the same project.

## Name

The name of the tag.

```yaml
name: Home
```

To work correctly, the tag name must be unique.

## Color

Color of the tag.

```yaml
color: green
```

Values: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

Default: `blue`

## Examples

Two variants of using tags are presented. These examples can be used together.

### Global tags

If you have common tags, it's convenient to declare them at the beginning of the file and use them everywhere.

```yaml
tags:
  - name: Home
    color: green

services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    tags:
      - Home
  - title: Grafana
    description: Metrics dashboard
    link: https://grafana.home.local/
    tags:
      - Home
```

### Local tags

If you don't have common tags, it is convenient to use local tags. They are declared inside the service and are available only for it.

```yaml
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    tags:
      - name: Home
        color: green
```
