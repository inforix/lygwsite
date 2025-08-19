// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      // Optimize MDX processing to avoid unwanted paragraph wrapping
      optimize: true,
      gfm: true,
    }), 
    sitemap(), 
    tailwind()
  ],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});