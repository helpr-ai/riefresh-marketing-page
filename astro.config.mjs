import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://riefresh.nl",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/partners") && !page.includes("/bedankt"),
    }),
  ],
  build: {
    format: "file",
  },
});
