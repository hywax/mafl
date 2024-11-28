# Логотипы

Если хотите персонализировать свою домашнюю страницу уникальным логотипом, то у вас есть такая возможность.
Необходимо передать в docker контейнер папку с вашими логотипами.

## Создание логотипа

Мы предлагаем вам создать svg или png иконку (если это png иконка, то с максимально возможным разрешением) для вашего приложения и использовать ее для создания пакета favicon в [Favicon Generator](https://realfavicongenerator.net/).

После генерации скачайте ZIP и используйте иконки `android-*` для `pwa-*`:
* `android-chrome-192x192.png` → `pwa-192x192.png`
* `android-chrome-512x512.png` → `pwa-512x512.png`
* `apple-touch-icon.png`
* `favicon.ico`

## Использование

Примонтируйте новый volume с папкой иконок в вашем `docker-compose.yml` или передайте аргумент `-v` в docker run.

::: code-group
```yaml [docker-compose.yml]
version: '3.8'

services:
  mafl:
    image: hywax/mafl
    restart: unless-stopped
    ports:
      - '3000:3000'
    volumes:
      - ./config.yml:/app/data/config.yml
      - ./favicons:/app/public/favicons // [!code ++]
```
:::

Структура файлов:

```text
./favicons
├── apple-touch-icon.png
├── favicon.ico
├── pwa-192x192.png
└── pwa-512x512.png
```
