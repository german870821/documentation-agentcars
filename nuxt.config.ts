export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
      code: 'en',
      name: 'English',
      },
      {
        code: 'es',
        name: 'Español',
      },
      {
        code: 'pt',
        name: 'Português',
      },
      // {
      //   code: 'fr',
      //   name: 'Français',
      // }
    ],
  },
})
