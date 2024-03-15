# Open Weather Map  <in-version value="0.9.0" />

<preview-image name="services/openweathermap" />

Получает данные о погоде с сервиса [Open Weather Map](https://openweathermap.org/).

<!--@include: ../_parts/extends-base-service.md-->

## Широта и долгота

Для получения данных о погоде необходимо указать широту и долготу. Эти данные можно получить с помощью сервиса [LatLong](https://www.latlong.net/).

```yaml
options:
  lat: 51.5085
  lon: -0.1257
```

## Единицы измерения

Подробнее о единицах измерения можно прочитать в [документации](https://openweathermap.org/weather-data).

```yaml
options:
  units: metric
```

Поддерживаемые значения: `metric`, `imperial`, `standard`

Значение по умолчанию: `metric`

## API ключ

API ключ можно получить в личном кабинете [Open Weather Map](https://home.openweathermap.org/api_keys).

```yaml
secrets:
  apiKey: 7ss07b6f7vb3b8329b4ff810c34dfb51
```

<!--@include: ../_parts/secrets-safety.md-->

## Примеры

### Базовый сервис

::: code-group
```yaml [config.yml]
services:
  - type: openweathermap
    options:
      lat: 51.5085
      lon: -0.1257
    secrets:
      apiKey: 7ss07b6f7vb3b8329b4ff810c34dfb51
```
:::

### Имперская система

::: code-group
```yaml [config.yml]
services:
  - type: openweathermap
    options:
      lat: 51.5085
      lon: -0.1257
      units: imperial
    secrets:
      apiKey: 7ss07b6f7vb3b8329b4ff810c34dfb51
```
:::
