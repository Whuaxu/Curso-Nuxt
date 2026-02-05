import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 3 Todo App',
      meta: [
        { charset: 'utf-8' },
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1' 
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url))
  },

  modules: [`@pinia/nuxt`],

  vite: {
    plugins: [tsconfigPaths()],
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api', 'import'],
        }
      }
    }
  }
})