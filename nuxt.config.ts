// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['blog', 'core', 'site'],
  dir: {
    assets: '~/core/assets',
    layouts: '~/site/layouts',
    pages: '~/site/pages',
  },
  css: ['~/core/assets/styles/main.css'],
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './.primevue_presets/lara/') },
  },
});
