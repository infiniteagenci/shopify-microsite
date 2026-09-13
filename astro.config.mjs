// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://shopify.infiniteagenci.com',
  // Disable default sitemap integration - we generate custom sitemap.xml
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Generate single sitemap.xml after build
    postBuild: {
      scripts: {
        'custom-sitemap': 'node scripts/generate-sitemap.js'
      }
    }
  }
});
