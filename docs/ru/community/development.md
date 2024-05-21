# Разработка

## Добавление сервисов

Давайте разберем создание на примере нового сервиса `Bitcoin`, который будет получать информацию из внешнего API.

#### 1. Создание интерфейса

Первым делом обозначим интерфейс взаимодействия сервиса. Необходимо для определения дополнительных свойств:

::: code-group
```typescript [types/services.d.ts]
export interface BitcoinService extends BaseService {
  options?: {
    code: string
    interval?: number
  }
}
```
:::

#### 2. Создание компонента

::: code-group
```vue [components/service/bitcoin.vue]
<template>
  <ServiceBase v-bind="props">
    <template #title>
      {{ $('service.bitcoin.title', { code: options.code }) }}
    </template>
    <template #description>
      {{ $('service.bitcoin.description', { rate: data?.rate || '0' }) }}
    </template>
  </ServiceBase>
</template>

<script setup lang="ts">
import type { BitcoinService } from '~/types'

const props = defineProps<BitcoinService>()
const { data, pauseUpdate } = useServiceData<BitcoinService, { rate: string }>(props, {
  updateInterval: props?.options?.interval
})

onBeforeUnmount(pauseUpdate)
</script>
```
:::

#### 3. Написание переводов

Если в компоненте используется статическй текст, то его необходимо вынести в файл переводов.
Обязательным является добавление `en-US.json` переводов, остальные по желанию.

::: code-group
```json [locales/ru-RU.json]
{
  "service": {
    "bitcoin": { // [!code focus]
      "title": "Курс {code}", // [!code focus]
      "description": "Равен {rate}" // [!code focus]
    } // [!code focus]
  }
}
```
:::

Переводы основываются на [vue-i18n](https://vue-i18n.intlify.dev/). Доступны абсолютно все возможности.

#### 4. Получение данных

::: code-group
```typescript [server/api/services/bitcoin.ts]
import type { BitcoinService } from '~/types'

export default defineEventHandler(async (event): Promise<{ rate: string }> => {
  const service = await getService<BitcoinService>(event)

  try {
    const data = await $fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
      parseResponse: (text) => JSON.parse(text)
    })

    return {
      rate: data.bpi[service.option.code].rate
    }
  } catch (e) {
    logger.error(e)
  }

  return {
    rate: '-'
  }
})
```
:::

#### 5. Обновление документации

Не забывайте добавить сервис в документацию, чтобы другие пользователи были в курсе и могли его использовать.

Для этого создайте файлы:

* `docs/services/bitcoin.md`
* `docs/{lang}/services/bitcoin.md` - можно оставить пустыми

## Создание темы оформления

#### 1. Добавление CSS переменных

::: code-group
```css [assets/style/tailwind.css]
html.new-theme {
    --fg: 67 52 34;
    --fg-dimmed: 80 66 49;
    --background: 241 231 208;
}
```
:::

#### 2. Добавление в Config

::: code-group
```typescript [types/config.d.ts]
export interface Config {
  title?: string
  lang: 'en' | 'ru'
  theme?: 'system' | 'light' | 'dark' | 'deep' | 'new-theme' // [!code focus]
  services: ServicesGroup[]
  checkUpdates: boolean
}
```
:::

#### 3. Обновление документации

Не забывайте добавить `new-theme` в документацию, чтобы другие пользователи были в курсе вашей темы.

Для этого найтие секцию с темой оформления во всех переводах и добавьте новый параметр:

* `docs/reference/configuration.md`
* `docs/{lang}/reference/configuration.md`

## Написание переводов

#### 1. Создание новый языковой файл

Создайте новый файл в папке `locales`. Рекомендуем скопировать `locales/en-US.json` и на его основе сделать перевод.

#### 2. Подключение файла

После создания языкового файла необходимо подключить его в `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  i18n: {
    locales: [
      { // [!code focus]
        code: 'en', // [!code focus]
        iso: 'en-US', // [!code focus]
        name: 'English', // [!code focus]
        file: 'en-US.json', // [!code focus]
      }, // [!code focus]
    ],
  },
})
```

#### 3. Обновление документации

Не забывайте добавить новый язык в документацию, чтобы другие пользователи были в курсе перевода.

Для этого найтие секцию с языком во всех переводах и добавьте новый параметр:

* `docs/reference/configuration.md`
* `docs/{lang}/reference/configuration.md`

## Обновление зависимостей

В этом нет необходимости. На проекте подключен [Dependabot](https://github.com/dependabot), который раз в неделю сканирует новые зависимости.
Но если все же у вас есть такая необходимость, то выполните команду `yarn upgrade`. После чего проверьте все, что
было обновлено.

После того как вы убедитесь в работоспособности приложения, создайте новый `pull request`.
