#!/bin/bash
# Script to add sitemap generation to Astro build

# Install the sitemap integration
npm install @astrojs/sitemap

# Update astro.config.mjs to use the sitemap integration
cat > astro.config.mjs << 'EOF'
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://infinite.agency',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
EOF

echo "Sitemap integration added. Run 'npm run build' to generate sitemap.xml"
