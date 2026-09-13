/**
 * Custom sitemap generator - creates single sitemap.xml
 * Optimized for AI SEO with proper changefreq and priority values
 */

import fs from "fs";
import path from "path";
import { glob } from "glob";

const BUILD_DIR = "./dist";
const PUBLIC_DIR = "./public";
const SITE_URL = "https://shopify.infiniteagenci.com";
const SITEMAP_FILE = path.join(PUBLIC_DIR, "sitemap.xml");

// Priority and changefreq based on content type (AI SEO optimization)
const contentConfig = {
  // Homepage - highest priority
  "/": { priority: "1.0", changefreq: "daily" },

  // Core service pages - high priority
  "/services": { priority: "0.9", changefreq: "weekly" },
  "/ai-seo": { priority: "0.9", changefreq: "weekly" },
  "/audit": { priority: "0.9", changefreq: "weekly" },
  "/apps": { priority: "0.9", changefreq: "weekly" },
  "/themes": { priority: "0.9", changefreq: "weekly" },
  "/themes/glow": { priority: "0.9", changefreq: "weekly" },
  "/themes/glow/documentation": { priority: "0.7", changefreq: "monthly" },

  // About page - medium-high priority
  "/about": { priority: "0.8", changefreq: "monthly" },

  // Blog index - medium priority
  "/blog": { priority: "0.8", changefreq: "daily" },

  // Blog posts - medium priority (fresh content is key for AI SEO)
  blog: { priority: "0.7", changefreq: "monthly" },

  // Markdown files for LLM indexing - lower priority
  markdown: { priority: "0.5", changefreq: "weekly" },
};

async function getAllPages() {
  const pages = [];

  // Get all HTML pages
  const htmlFiles = glob.sync("**/*.html", { cwd: BUILD_DIR });

  for (const file of htmlFiles) {
    // Convert file path to URL path
    let urlPath = file.replace(/index\.html$/, "").replace(/\.html$/, "");
    if (urlPath === "index") urlPath = "/";

    // Skip markdown files in /md/ directory (handled separately)
    if (urlPath.startsWith("md/")) continue;

    const url = `/${urlPath === "/" ? "" : urlPath}`;

    // Determine priority and changefreq
    let config = { priority: "0.6", changefreq: "monthly" };

    if (contentConfig[url]) {
      config = contentConfig[url];
    } else if (url.startsWith("/blog/")) {
      config = contentConfig.blog;
    }

    pages.push({
      url: url,
      ...config,
      lastmod: getLastModDate(path.join(BUILD_DIR, file)),
    });
  }

  // Add markdown files with .md extension for direct access
  const mdFiles = glob.sync("**/*.md", { cwd: path.join(BUILD_DIR, "md") });
  for (const file of mdFiles) {
    const url = `/md/${file}`;

    pages.push({
      url: url,
      ...contentConfig.markdown,
      lastmod: new Date().toISOString().split("T")[0],
    });
  }

  return pages;
}

function getLastModDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

function generateXML(pages) {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;
}

async function main() {
  console.log("Generating sitemap.xml...");

  const pages = await getAllPages();
  const xml = generateXML(pages);

  fs.writeFileSync(SITEMAP_FILE, xml);

  console.log(`✓ Generated sitemap.xml with ${pages.length} URLs`);
  console.log(`  Location: ${SITEMAP_FILE}`);
}

main().catch(console.error);
