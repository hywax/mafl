# IP API <in-version value="0.8.0" />

<preview-image name="services/ip-api" />

Показывает информацию о вашем IP адресе.

<!--@include: ../_parts/extends-base-service.md-->

## Иконка флага

Иконка флага страны, в которой находится ваш IP адрес. В случае, если передать `false` то будет использоваться [базовая иконка](base.md#иконка).

```yaml
options:
  flagIcon: true
```

Поддерживаемые значения: `true`, `false`

Значение по умолчанию: `true`

## Примеры

### Базовый сервис

::: code-group
```yaml [config.yml]
services:
  - type: ip-api
```
:::

### Своя иконка

::: code-group
```yaml [config.yml]
services:
  - type: ip-api
    options:
      flagIcon: false
    icon:
      name: oui:token-ip
```
:::
