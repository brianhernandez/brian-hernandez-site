// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['blog', 'core', 'site'],
  dir: {
    assets: '~/core/assets',
    layouts: '~/site/layouts',
    pages: '~/site/pages',
    plugins: '~/core/plugins',
  },
  eslint: {
    config: {
      // stylistic: true
      // the following options are the default values
      // indent: 2,
      // quotes: 'single',
      // semi: false,
      // jsx: true,
      stylistic: {
        // commaDangle: 'only-multiline',
      },
    },
  },
  css: ['~/core/assets/styles/main.css'],
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxt/eslint'],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    },
  },
  routeRules: {
    '/': {
      redirect: 'https://brianhernandez.contra.com',
    },
    '/services-and-pricing': {
      redirect: 'https://brianhernandez.framer.website',
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_cSlajbmRxQt8Lzjq46wz7KJkHTqiGlGgcMg5jZ5bl9h',
      posthogHost: 'https://us.i.posthog.com',
    },
  },
  plugins: ['~/core/plugins/posthog.client.js'],
  compatibilityDate: '2025-02-24',
})

// TODO: add prettier-plugin-tailwindcss plugin
