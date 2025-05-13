// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['@/assets/main.css'],

  runtimeConfig: {
    public: {
      api: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:1337'
    }
  }
});
