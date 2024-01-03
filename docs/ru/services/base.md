# Базовый сервис

Основная карточка сервиса.
На основе этого сервиса создаются другие.

## Название

Заголовок сервиса

```yaml
title: Home Assistant
```

## Описание

Дополнительное описание, которое отображается сразу под заголовком.
Это поле удобно, когда у вас два одинаковых сервиса, но их нужно как-то различать.

```yaml
description: Автоматизация дома
```

## Ссылка

Ссылка на сервис. Используется при нажатии на иконку и заголовок.
Также с помощью нее происходить проверка [статуса](#статус) доступности.

```yaml
link: https://home-assistant.home.local/
```

## Иконка

Иконка сервиса. Позволяет очень быстро найти необходимы элемент.
Данное поле можно очень гибко настраивать комбинируя разные параметры.

###
```yaml
icon:
  name: simple-icons:homeassistant
  bubble: true
```

или из локальный файлов:

```yaml
icon:
  url: icons/homeassistant.svg
  background: '#eee'
```

::: warning Настройка
Подробнее описано в разделе [иконки](../reference/icons.md).
:::

## Статус

Mafl умеет отслеживать работоспособность сервисов по ссылке, которую вы указали.

```yaml
status:
  enabled: true
  interval: 60 # можно не указывать
```

### `enabled`

Статус включения

Поддерживаемые значения: `true`, `false`

Значение по умолчанию: `false`

### `interval`

Интервал обновления статуса.

Поддерживаемые значения: `число`

Значение по умолчанию: `60` секунд

::: warning Внимание
Не рекомендуем менять интервал. Это может спровоцировать большую нагрузку на систему, если у вас очень много разных сервисов.
:::

## Примеры

### Базовый сервис

::: code-group
```yaml [config.yml]
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    icon:
      name: simple-icons:homeassistant
      bubble: true
      color: '#3dbcf3'
```
:::

### Отслеживание статуса

::: code-group
```yaml [config.yml]
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
    icon:
      name: simple-icons:homeassistant
      bubble: true
      color: '#3dbcf3'
    status:
      enabled: true
```
:::
