# Mafl

Mafl is an intuitive service for organizing your homepage. Customize Mafl to your individual needs and work even more efficiently!

## Table of Contents
* [Features](#features)
* [Getting started](#getting-started)
  * [Docker](#docker)
  * [Node](#node)
  * [Proxmox](#proxmox)
  * [Cloud Providers](#cloud-providers)
* [Roadmap](#roadmap)
* [License](#roadmap)

## Features

* 🔐 **Safety**. All requests to third-party services occur in backend.
* ⚡ **Real-time**. Interactive cards with extra information.
* 🌎 **Languages**. Supports multiple languages.
* 🎨 **Themes**. Customize the look to your liking.
* 🗂️ **Grouping**. Create custom service groups.
* 👌 **Easy setup**. A few lines of yaml and your homepage is ready to go.
* 🚀 **Fast**. Everything is fast and free of hang-ups.
* 🐳 **Docker**. Optimized docker images for popular platforms.

## Getting started

### Docker

This Docker image is published to both Docker Hub and the GitHub container registry. Depending on your preferences and needs, you can reference both `hywax/mafl` as well as `ghcr.io/hywax/mafl`.

```yaml
version: "3.8"

services:
  mafl:
    image: hywax/mafl
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - ./config.yml:/app/data/config.yml
      - ./icons:/app/public/icons
```

### Node

1. Clone repository: `git clone https://github.com/hywax/mafl.git`
2. Go to the application folder: `cd mafl`
3. Configure `data/config.yml`
4. Install dependencies: `yarn install`
5. Build application: `yarn build`
6. Run `yarn preview`

### Proxmox

...

### Cloud Providers

...

## Roadmap

* [ ] Creating the basic application skeleton
* [ ] Publishing to docker
* [ ] Dynamic services
* [ ] Keyboard navigation
* [ ] Custom themes
* [ ] Drag & drop
* [ ] Search
* [ ] Localization
* [ ] Multiple pages
* [ ] Docker integration

## License

This app is open-sourced software licensed under the [MIT license](https://github.com/hywax/mafl/blob/main/LICENSE).
