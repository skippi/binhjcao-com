import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://binhjcao.com",
  trailingSlash: "never",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
