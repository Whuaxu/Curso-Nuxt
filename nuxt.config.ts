import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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