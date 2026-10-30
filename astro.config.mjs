import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://binhjcao.com",
  trailingSlash: "never",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
