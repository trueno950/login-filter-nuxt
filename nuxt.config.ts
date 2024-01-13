if (!process.env.NUXT_AUTH_PASSWORD) {
  console.warn('Security warning: NUXT_AUTH_PASSWORD is not set. Using an example value. Please set it otherwise your session is unsecure!');
  process.env.NUXT_AUTH_PASSWORD = 'secretsecretsecretsecretsecretsecretsecret'
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  extends: [
    './auth',
  ],
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
      unstyled: true
  },
})
