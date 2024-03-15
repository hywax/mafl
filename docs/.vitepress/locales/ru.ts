import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  description: 'Интуитивно понятный сервис для организации вашей домашней страницы',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/ru/' },
      { text: 'Конфигурация', link: '/ru/reference/configuration' },
      { text: 'Примеры', link: '/ru/community/showcase' },
      {
        text: getVersion(),
        items: [
          { text: 'Журнал изменений', link: '/ru/other/changelog' },
          { text: 'Внести свой вклад', link: '/ru/community/contributing' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Руководство',
        base: '/ru/guide',
        items: [
          { text: 'Что такое Mafl?', link: '/what-is' },
          { text: 'Начало работы', link: '/getting-started' },
          // { text: 'Deployment', link: '/deployment' },
        ],
      },
      {
        text: 'Ссылки',
        base: '/ru/reference',
        items: [
          { text: 'Конфигурация', link: '/configuration' },
          { text: 'Иконки', link: '/icons' },
          { text: 'Теги', link: '/tags' },
          { text: 'Логотип', link: '/favicons' },
        ],
      },
      {
        text: 'Сервисы',
        base: '/ru/services',
        items: [
          { text: 'Базовый', link: '/base' },
          { text: 'IP API', link: '/ip-api' },
          { text: 'Погода', link: '/openweathermap' },
        ],
      },
      {
        text: 'Сообщество',
        base: '/ru/community',
        collapsed: true,
        items: [
          { text: 'Примеры пользователей', link: '/showcase' },
          { text: 'Разработка', link: '/development' },
          { text: 'Внести свой вклад', link: '/contributing' },
        ],
      },
      {
        text: 'Прочее',
        base: '/ru/other',
        collapsed: true,
        items: [
          { text: 'Журнал изменений', link: '/changelog' },
          { text: 'Лицензия', link: '/license' },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/hywax/mafl/edit/main/docs/:path',
      text: 'Редактировать страницу на GitHub',
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },

    outline: {
      label: 'На странице',
    },

    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Показать подробный список',
                resetButtonTitle: 'Результаты поиска',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено для',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'навигация',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },
        },
      },
    },

    langMenuLabel: 'Язык',
    returnToTopLabel: 'Вернуться к началу',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на темную тему',
  },
})
