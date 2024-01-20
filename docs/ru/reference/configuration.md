# Конфигурация

Сервисы, иконки, язык и прочие настройки задаются в едином файле `config.yml`.
Его необходимо передать в docker контейнер, как это сделать указано в разделе [начало работы](../guide/getting-started.md).

## Заголовок

При желании вы можете настроить заголовок страницы.

```yaml
title: Моя домашняя страница
```

Значение по умолчанию: `Mafl Home Page`

## Язык

Установите нужный язык с помощью:

```yaml
lang: ru
```

Поддерживаемые значения: `en`, `ru`, `zh`

Значение по умолчанию: `en`

## Тема оформления

Вы можете настроить фиксированные темы, передав опцию `theme`, как показано ниже:

```yaml
theme: dark
```

Поддерживаемые значения: `system`, `light`, `dark`, `deep`, `sepia`

Значение по умолчанию: `system`

## Поверка обновлений

Данный параметр отвечает за автоматическую проверку обновлений.
Если появится новая версия, то внизу экрана появится сообщение с новой версией.

```yaml
checkUpdates: true
```

Значение по умолчанию: `true`

::: info Пояснение
С параметром `true` автоматического обновления не будет.
Если хотите, чтобы система могла обновляться сама, то рекомендуем воспользоваться [watchtower](https://containrrr.dev/watchtower/).
:::

## Сервисы

Все сервисы, которые отображаются на главной странице задаются в данном параметре.
Он поддерживает как список, так и группировку. Кол-во сервисов не ограниченно.

::: warning Список сервисов
Полный список всех сервисов можно посмотреть в левой боковой колонке в разделе **Сервисы**.
Рекомендуем начать ознакомления с [базового сервиса](../services/base.md), на котором основываются все остальные.
:::

### Список
```yaml
services:
  - title: Home Assistant
    description: Автоматизация дома
    link: https://home-assistant.home.local/
```

### Группировка

```yaml
services:
  Группа 1:
    - title: Home Assistant
      description: Автоматизация дома
      link: https://home-assistant.home.local/
  Группа 2:
    - title: Home Assistant
      description: Автоматизация дома
      link: https://home-assistant.home.local/
```

Это обязательный параметр и без него домашняя страница не отроется.
Более развернутые примеры можно посмотреть ниже.

## Примеры

### Список

Конфигурация в которой все сервисы расположены на одном уровне.

::: code-group
```yaml [config.yml]
title: Моя домашняя страница
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
  - title: Сетевое хранилище
    description: Synology DS223
    link: https://nas.home.local/
    icon:
      name: mdi:nas
      bubble: true
    status:
      enabled: true
```
:::

### Группировка

Простая конфигурация с создаем двух групп `Сервисы` и `Устройства`.

::: code-group
```yaml [config.yml]
title: Моя домашняя страница
services:
  Сервисы:
    - title: Home Assistant
      description: Автоматизация дома
      link: https://home-assistant.home.local/
      icon:
        name: simple-icons:homeassistant
        bubble: true
        color: '#3dbcf3'
      status:
        enabled: true
  Устройства:
    - title: Роутер
      description: Keenetic Peak
      link: http://192.168.1.1/
      icon:
        name: mdi:router-network
        bubble: true
    - title: Сетевое хранилище
      description: Synology DS223
      link: https://nas.home.local/
      icon:
        name: mdi:nas
        bubble: true
      status:
        enabled: true
```
:::
