// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ["@pinia/nuxt", "@nuxt/image","nuxt-icon"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ["~/assets/css/main.css", "vue-toast-notification/dist/theme-default.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  components: [
    { path: '~/components/dashboard', pathPrefix: false },
    { path: '~/components/commons', pathPrefix: false },
    { path: '~/components/navbar', prefix: 'navbar' },
  ]
});