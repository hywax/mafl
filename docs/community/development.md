# Development

## Adding services

Let's analyze the creation of a new `Bitcoin` service, which will receive information from an external API.

#### 1. Create interface

The first step is to designate the service interaction interface. It is necessary to define additional properties:

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

#### 2. Create component

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

#### 3. Writing translations

If static text is used in the component, it should be placed in a translation file.
It is required to add `en-US.json` translations, the rest are optional.

::: code-group
```json [locales/ru-RU.json]
{
  "service": {
    "bitcoin": { // [!code focus]
      "title": "Code {code}", // [!code focus]
      "description": "Rate {rate}" // [!code focus]
    } // [!code focus]
  }
}
```
:::

Translations are based on [vue-i18n](https://vue-i18n.intlify.dev/). Absolutely all features are available.

#### 4. Data retrieval

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

#### 5. Updating documentation

Don't forget to add the service to the documentation so that other users are aware and can use it.

To do this, create files:

* `docs/services/bitcoin.md`
* `docs/{lang}/services/bitcoin.md` - can be left empty

## Creating theme

#### 1. Adding CSS variables

::: code-group
```css [assets/style/tailwind.css]
html.new-theme {
    --fg: 67 52 34;
    --fg-dimmed: 80 66 49;
    --background: 241 231 208;
}
```
:::

#### 2. Adding to Config

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

#### 3. Updating documentation

Don't forget to add `new-theme` to the documentation so that other users are aware of your theme.

To do this, find the theme section in all translations and add the new-theme parameter:

* `docs/reference/configuration.md`
* `docs/{lang}/reference/configuration.md`

## Writing translations

#### 1. Creating a new language file

Create a new file in the `locales` folder. We recommend to copy `locales/en-US.json` and make translation based on it.

#### 2. File connection

After creating the language file, you need to plug it into `nuxt.config.ts`

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

#### 3. Updating documentation

Don't forget to add the new language to the documentation so that other users are aware of the translation.

To do this, find the language section in all translations and add a new parameter:

* `docs/reference/configuration.md`
* `docs/{lang}/reference/configuration.md`

## Updating dependencies

This is not necessary. The project has [Dependabot](https://github.com/dependabot), which scans for new dependencies once a week.
But if you still have such a need, run the `yarn upgrade` command. After that, check everything that
has been updated.

Once you are sure that the application works, create a new `pull request`.
