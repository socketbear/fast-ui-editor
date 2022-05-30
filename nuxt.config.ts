import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  head: {
    title: "Fast UI Editor",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/nuxt.png" }],
  },
  css: [],
  build: {
    transpile: ["@heroicons/vue"],
  },

  modules: ["nuxt-windicss", "@vueuse/nuxt", "@pinia/nuxt"],
});
