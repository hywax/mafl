# Favicons

If you want to personalize your homepage with a unique logo, you have this option.
You need to transfer a folder with your logos to the docker container.

## Logo creation

We suggest that you create an svg or png icon (if it is a png icon, then at the highest possible resolution) for your application and use it to create a favicon package in [Favicon Generator](https://realfavicongenerator.net/).

Once generated, download the ZIP and use the `android-*` icons for `pwa-*`:
* `android-chrome-192x192.png` → `pwa-192x192.png`
* `android-chrome-512x512.png` → `pwa-512x512.png`
* `apple-touch-icon.png`
* `favicon.ico`

## Using

Mount the new volume with the icons folder in your `docker-compose.yml` or pass the `-v` argument to docker run.

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

File structure:

```text
./favicons
├── apple-touch-icon.png
├── favicon.ico
├── pwa-192x192.png
└── pwa-512x512.png
```
