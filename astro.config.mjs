// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://lygw.site",
  integrations: [
    mdx({
      // Optimize MDX processing to avoid unwanted paragraph wrapping
      optimize: true,
      gfm: true,
    }), 
    sitemap({
      // Customize sitemap generation
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }), 
    tailwind()
  ],

  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Compression and minification
  compressHTML: true,

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  // Vite optimizations for better performance
  vite: {
    build: {
      cssCodeSplit: true,
    }
  },
});