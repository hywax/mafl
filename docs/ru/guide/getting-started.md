# Начало работы

## Docker

Этот образ Docker опубликован как в Docker Hub, так и в реестре контейнеров GitHub.
В зависимости от ваших предпочтений и потребностей, вы можете ссылаться как на `hywax/mafl`, так и на `ghcr.io/hywax/mafl`.

### Docker compose

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
      - ./mafl:/app/data
```
:::

### Docker run
```shell
docker run -p 3000:3000 -v ./config.yml:/app/data/config.yml hywax/mafl
```

### Docker volumes

Все возможные пути в контейнер. Обязательно нужно указывать файл конфига `config.yml`, все остальное можно оставить по умолчанию.

| Путь                   | Тип   | Описание                                                                   |
|------------------------|-------|----------------------------------------------------------------------------|
| `/app/data/config.yml` | Файл  | Основная конфигурация приложения - [подробнее](../reference/configuration) |
| `/app/public/icons`    | Папка | Папка для локальных иконок - [подробнее](../reference/icons)               |
| `/app/public/favicons` | Папка | Папка для значков приложения - [подробнее](../reference/favicons)          |

## Node

Первым делом клонируйте репозиторий:

```shell
git clone https://github.com/hywax/mafl.git
```

Затем установите зависимости и соберите исходники (Я использую `yarn`, вы можете использовать `npm` или `pnpm`, если хотите):

```shell
yarn install
yarn build
```

Наконец, запустите сервер:

```shell
yarn preview
```

Приложение запустится с базовой конфигурацией, которая находится в папке `data`.

## Proxmox

Чтобы создать новый LXC Mafl в Proxmox VE, выполните команду ниже в оболочке Proxmox VE.

```shell
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/mafl.sh)"
```

### File volumes

Все возможные пути в контейнер. Обязательно нужно указывать файл конфига `config.yml`, все остальное можно оставить по умолчанию.

| Путь                             | Тип    | Описание                                               |
|----------------------------------|--------|--------------------------------------------------------|
| `/opt/mafl/data/data/config.yml` | File   | App configuration - [more](../reference/configuration) |
| `/opt/mafl/public/icons`         | Folder | Local icons - [more](../reference/icons)               |
| `/opt/mafl/public/favicons`      | Folder | Favicon icons - [more](../reference/favicons)          |

```shell
nano /opt/mafl/data/config.yml
```

Большое спасибо [@tteck](https://github.com/tteck) за помощь в создании скрипта lxc.

::: warning Ошибки при обновлении
Если вы столкнулись с ошибкой при обновлении `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`,
то необходимо выделить больше RAM памяти в LXC.

В отличие от docker, контейнер в proxmox билдится на вашем сервере. Поэтому могут возникать проблемы с нехваткой памяти.
:::
