# Getting Started

## Docker

This Docker image is published in both Docker Hub and the GitHub container registry.
Depending on your preferences and needs, you can refer to both `hywax/mafl` and `ghcr.io/hywax/mafl`.

### Docker compose

::: code-group
```yaml [docker-compose.yml]
version: '3.8'

services:
  mafl:
    container_name: mafl # change as needed
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
docker run --name mafl -p 3000:3000 -v ./config.yml:/app/data/config.yml hywax/mafl
```

### Docker volumes

All possible paths to the container. It is mandatory to specify the `config.yml` config file, everything else can be left by default.

| Path                   | Type   | Description                                            |
|------------------------|--------|--------------------------------------------------------|
| `/app/data/config.yml` | File   | App configuration - [more](../reference/configuration) |
| `/app/public/icons`    | Folder | Local icons - [more](../reference/icons)               |
| `/app/public/favicons` | Folder | Favicon icons - [more](../reference/favicons)          |

## Node

Clone the repository:

```shell
git clone https://github.com/hywax/mafl.git
```

Then install the dependencies and build the sources (I use `yarn`, you can use `npm` or `pnpm` if you want):

```shell
yarn install
yarn build
```

Finally, start the server:

```shell
yarn preview
```

The application will start with a basic configuration, which is located in the `data` folder.

## Proxmox

To create a new Proxmox VE Mafl LXC, run the command below in the Proxmox VE Shell.

```shell
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/mafl.sh)"
```

Configure the application by editing the `config.yml` file:

```shell
nano /opt/mafl/data/config.yml
```

### File volumes

All possible paths to the container. It is mandatory to specify the `config.yml` config file, everything else can be left by default.

| Path                             | Type   | Description                                            |
|----------------------------------|--------|--------------------------------------------------------|
| `/opt/mafl/data/data/config.yml` | File   | App configuration - [more](../reference/configuration) |
| `/opt/mafl/public/icons`         | Folder | Local icons - [more](../reference/icons)               |
| `/opt/mafl/public/favicons`      | Folder | Favicon icons - [more](../reference/favicons)          |

Many thanks to [@tteck](https://github.com/tteck) for helping me create lxc script.

::: warning Updating errors
If you encountered an error while updating `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`,
then you need to allocate more RAM memory in LXC.

Unlike docker, the container in proxmox is build on your server. Therefore, you may experience problems with memory scarcity.
:::
