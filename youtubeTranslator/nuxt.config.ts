// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: false
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    usePrimeVue: true
  }, 
  publicRuntimeConfig: {
    openaiApiKey: process.env.API_KEY
  }
})