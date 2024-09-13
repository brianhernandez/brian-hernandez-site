// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["blog", "core", "site"],
  dir: {
    assets: "~/core/assets",
    layouts: "~/site/layouts",
    pages: "~/site/pages",
    plugins: "~/core/plugins",
  },
  css: ["~/core/assets/styles/main.css"],
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, "./.primevue_presets/lara/") },
  },
  routeRules: {
    "/": {
      redirect: "https://brianhernandez.contra.com",
    },
    "/services-and-pricing": {
      redirect: "https://brianhernandez.framer.website",
    },
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_cSlajbmRxQt8Lzjq46wz7KJkHTqiGlGgcMg5jZ5bl9h",
      posthogHost: "https://us.i.posthog.com",
    },
  },
  plugins: ["~/core/plugins/posthog.client.js"],
});

// TODO: add prettier-plugin-tailwindcss plugin
