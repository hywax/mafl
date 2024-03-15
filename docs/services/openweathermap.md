# Open Weather Map  <in-version value="0.9.0" />

<preview-image name="services/openweathermap" />

Weather data is received from [Open Weather Map](https://openweathermap.org/).

<!--@include: ../_parts/extends-base-service.md-->

## Latitude and longitude

For weather data, you need to specify the latitude and longitude. This data can be obtained using the [LatLong](https://www.latlong.net/) service.

```yaml
options:
  lat: 51.5085
  lon: -0.1257
```

## Units

Read more about units of measurement in the [documentation](https://openweathermap.org/weather-data).

```yaml
options:
  units: metric
```

Values: `metric`, `imperial`, `standard`

Default: `metric`

## API key

API key can be obtained in the personal account of [Open Weather Map](https://home.openweathermap.org/api_keys).

```yaml
secrets:
  apiKey: 7ss07b6f7vb3b8329b4ff810c34dfb51
```

<!--@include: ../_parts/secrets-safety.md-->

## Examples

### Base service

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

### Imperial units

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
