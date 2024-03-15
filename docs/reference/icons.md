# Icons

<preview-image name="reference/icons" />

## Link

Link to the image. You can specify both external and internal links.

```yaml
url: icons/example.svg
```

::: info
For an internal link, you need to add a folder to the docker container. More details are written in
[getting started](../guide/getting-started.md).
:::

## Name

Icon name from [iconify](https://icon-sets.iconify.design/) or [emoji](https://getemoji.com/).

```yaml
name: simple-icons:homeassistant
```

## Wrap

Wraps the icon in a bubble, necessary if the icon has no background or indentation on the sides.

```yaml
wrap: true
```

## Color

Icon color. You can specify any value from [css](https://developer.mozilla.org/ru/docs/Web/CSS/color_value).

```yaml
color: '#3dbcf3'
```

::: warning
If you use an image link, no color will be applied to the icon.
:::

## Background

Icon background. You can specify any value from [css](https://developer.mozilla.org/ru/docs/Web/CSS/background).

```yaml
background: '#eee'
```

## Examples

### Emoji

```yaml
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    icon:
      name: 👋
```

### Iconify

```yaml
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    icon:
      name: simple-icons:homeassistant
```

### Local icons

```yaml
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    icon:
      url: icons/example.svg
```

### External link

```yaml
services:
  - title: Home Assistant
    description: Home automation
    link: https://home-assistant.home.local/
    icon:
      url: https://mafl.hywax.space/logotype.svg
```
