// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/tailwindcss'
  ],
  srcDir: 'src',
  pwa: {
    workbox: {
      enabled: true
    }
  }
})
