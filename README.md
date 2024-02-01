<h1 align="center">Mafl</h1>
<p align="center">
  <i>Mafl is an intuitive service for organizing your homepage. Customize Mafl to your individual needs and work even more efficiently!</i>
  <br/><br/>
  <img width="130" alt="Mafl" src="https://raw.githubusercontent.com/hywax/mafl/main/docs/public/logotype.svg"/>
  <br/><br/>
  <b><a href="https://mafl.hywax.space/community/showcase.html">User Showcase</a></b> | <b><a href="https://mafl.hywax.space">Documentation</a></b> | <b><a href="https://github.com/hywax/mafl">GitHub</a></b>
  <br/><br/>
  <a href="https://github.com/hywax/mafl/blob/main/CHANGELOG.md"><img src="https://img.shields.io/github/package-json/v/hywax/mafl?logo=hackthebox&color=609966&logoColor=fff" alt="Current Version"/></a>
  <a target="_blank" href="https://github.com/hywax/mafl"><img src="https://img.shields.io/github/last-commit/hywax/mafl?logo=github&color=609966&logoColor=fff" alt="Last commit"/></a>
  <a target="_blank" href="https://hub.docker.com/r/hywax/mafl"><img src="https://img.shields.io/docker/pulls/hywax/mafl?logo=docker&color=609966&logoColor=fff" alt="Docker pulls"/></a>
  <a href="https://github.com/hywax/mafl/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-609966?logo=opensourceinitiative&logoColor=fff" alt="License MIT"/></a>
  <br/><br/>
  <img src="https://raw.githubusercontent.com/hywax/mafl/main/docs/public/cover.png" alt="Mafl" width="100%"/>
</p>

<details>
  <summary><b>Table of Contents</b></summary>

* [Features](#-features)
* [Getting started](#-getting-started)
  * [Docker](#docker)
  * [Node](#node)
* [Services](#-services)
* [Themes](#-themes)
* [Icons](#-icons)
* [Languages](#-multi-language)
* [License](#-license)
</details>

## 🎯 Features

* 🔐 **Privacy**. All requests to third-party services occur in backend.
* ⚡ **Real-time**. Interactive cards with extra information.
* 🌎 **Multi-language**. Supports multiple languages.
* 🎨 **Themes**. Customize the look to your liking.
* 🗂️ **Grouping**. Create custom service groups.
* 👌 **Easy setup**. A few lines of yaml and your homepage is ready to go.
* 🚀 **Fast**. Everything is fast and free of hang-ups.
* 🐳 **Docker**. Optimized docker images for popular platforms.
* ✨ **Free**. Mafl is completely free and open source.
* 📲 **PWA**. Installable application.

## 🚀 Getting started

### Docker

This Docker image is published to both Docker Hub and the GitHub container registry. Depending on your preferences and needs, you can reference both `hywax/mafl` as well as `ghcr.io/hywax/mafl`.

```yaml
version: '3.8'

services:
  mafl:
    image: hywax/mafl
    restart: unless-stopped
    ports:
      - '3000:3000'
    volumes:
      - ./config.yml:/app/data/config.yml
```

### Node

First, clone the repository:

```shell
git clone https://github.com/hywax/mafl.git
```

Then install dependencies and build the production bundle (I'm using `yarn` here, you can use `npm` or `pnpm` if you like):

```shell
yarn install
yarn build
```

Finally, run the server:

```shell
yarn preview
```

The application will start with a basic configuration, which is located in the `data` folder.

## 📊 Services

The basic concept of `Mafl` is to create not just a homepage, but to create an interactive homepage page. You can combine different services with each other. You can combine different services to create the perfect customized homepage for you.

List of services:
* **[Base](https://mafl.hywax.space/services/base.html)** - The main card of the service. Other services are created on the basis of this service.
* **[IP API](https://mafl.hywax.space/services/ip-api.html)** - Shows information about your IP address.

## 🎨 Themes

There are several ready-made themes in `Mafl`. But nothing prevents you from creating your own design themes and sharing them with other users

<img src="https://raw.githubusercontent.com/hywax/mafl/main/docs/public/themes.png" alt="Mafl themes" width="100%"/>

## 🖼 Icons

Services can have icons. With support for several different icon packs, you can find the perfect thumbnail for any application or service.

Supported types:
* **[Iconify](https://icon-sets.iconify.design/)** - Over 200,000 open source vector icons
* **Emoji** - Any valid emoji can be used as an icon
* **URL** - Pass the URL of any matching image so that it can be found and displayed.
* **Local** - Store custom images locally and reference them by file name

## 🌎 Multi-language

`Mafl` supports multiple languages and locales. The app should automatically detect your language and set it in the settings. If not, set it in `config.yml` with the `lang` property.

Supported Languages:
* 🇬🇧 **English** - `en`
* 🇷🇺 **Russian** - `ru`
* 🇨🇳 **Chinese** - `zh`
* 🇨🇮 **Hindi** - `hi`
* 🇪🇸 **Spanish** - `es`
* 🇸🇦 **Arabic** - `ar` (by [@mohmadhabib](https://github.com/mohmadhabib))

If you haven't found your language, it can easily be added! Use the instructions in the section [contributing](https://mafl.hywax.space/community/contributing.html) on docs.

## 📄 License

This app is open-sourced software licensed under the [MIT license](https://github.com/hywax/mafl/blob/main/LICENSE).
