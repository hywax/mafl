# Теги <in-version value="0.10.0" />

<preview-image name="reference/tags" />

Теги позволяют разграничивать сервисы. Довольно удобно, когда у вас есть несколько сервисов, которые относятся к одному и тому же проекту.

## Название

Название тега.

```yaml
name: Дом
```

Для корректной работы, название тега должно быть уникальным.

## Цвет

Цвет тега.

```yaml
color: green
```

Поддерживаемые значения: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

Значение по умолчанию: `blue`

## Примеры

Представлено два варианта использования тегов. Данные примеры можно использовать вместе.

### Глобальные теги

Если у вас есть общие теги, то удобно объявить их в начале файла и использовать везде.

```yaml
tags:
  - name: Дом
    color: green

services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    tags:
      - Дом
  - title: Grafana
    description: Визуализация данных
    link: https://grafana.home.local/
    tags:
      - Дом
```

### Локальные теги

Если у вас нет общих тегов, то удобно использовать локальные теги. Они объявляются внутри сервиса и доступны только для него.

```yaml
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    tags:
      - name: Дом
        color: green
```
