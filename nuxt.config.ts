// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  nitro: {
    experimental: {
      database: true,
      asyncContext: true,
    },
  },
  modules: ["@pinia/nuxt", "nuxt-toast"],
});
