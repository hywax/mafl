# Иконки

<preview-image name="reference/icons" />

## Ссылка

Ссылка на изображение. Можно указать, как внешнюю, так и внутреннюю ссылку.

```yaml
url: icons/example.svg
```

::: info Пояснение
Для внутренней ссылки необходимо добавить папку в docker контейнер. Подробнее написано в
[начало работы](../guide/getting-started.md).
:::

## Название

Название иконки из [iconify](https://icon-sets.iconify.design/) или [emoji](https://getemoji.com/).

```yaml
name: simple-icons:homeassistant
```

## Пузырь

Оборачивает иконку в пузырь, необходимо если в иконке нет фона или отступов по бокам.

```yaml
wrap: true
```

## Цвет

Цвет иконки. Можно указать любое значение из [css](https://developer.mozilla.org/ru/docs/Web/CSS/color_value).

```yaml
color: '#3dbcf3'
```

::: warning Пояснение
Если вы используете ссылку на изображение, то цвет к иконке не будет применен.
:::

## Фон

Фон иконки. Можно указать любое значение из [css](https://developer.mozilla.org/ru/docs/Web/CSS/background).

```yaml
background: '#eee'
```

## Примеры

### Emoji

```yaml
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    icon:
      name: 👋
```

### Библиотека Iconify

```yaml
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    icon:
      name: simple-icons:homeassistant
```

### Локальные файлы

```yaml
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    icon:
      url: icons/example.svg
```

### Внешние иконки

```yaml
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    icon:
      url: https://mafl.hywax.space/logotype.svg
```
