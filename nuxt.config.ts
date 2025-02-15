// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  nitro: {
    firebase: {
      gen: 2
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // Использовать системную тему по умолчанию
    fallback: 'light', // Если системная тема не поддерживается
    classSuffix: '', // Добавляет суффикс к классам темы (например, `dark-mode`)
  },

})