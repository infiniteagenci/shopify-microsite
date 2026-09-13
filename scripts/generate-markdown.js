/**
 * Script to generate markdown versions of all pages for LLM indexing
 * and update sitemap to include markdown URLs
 */

import fs from "fs";
import path from "path";
import { glob } from "glob";

const BUILD_DIR = "./dist";
const MARKDOWN_DIR = "./dist/md";
const SITEMAP_FILE = "./dist/sitemap.xml";

const pages = [
  {
    path: "/",
    title: "Infinite.agency - London's Premier Shopify Experts for the AI Era",
    description:
      "Infinite.agency - London's premier Shopify experts with 25+ years experience. Custom themes, apps, AI SEO for ChatGPT/Perplexity, and performance-based growth for UK brands.",
    content: `# London's Shopify Experts for the AI Era

With over 25 years of retail eCommerce experience, Infinite.agency helps global brands build custom Shopify stores, develop powerful apps, and optimize for AI search engines like ChatGPT, Perplexity, and Copilot.

## Our Stats

- **25+** Years Experience
- **100+** Shopify Stores Launched
- **3** Proprietary Apps
- **98%** Client Satisfaction

## Expert Shopify Services

From vibe-coded site audits to custom themes and AI-optimized SEO, our London team delivers end-to-end solutions for modern eCommerce.

### Shopify Site Audit & Fix
We audit your vibe-coded Shopify sites for security vulnerabilities, performance issues, and help you overcome the final hurdles to get your store live and ready to accept orders and payments securely.

### Custom Shopify Themes
We specialize in creating custom Shopify themes tailored to your brand identity and business requirements for optimal conversion rates.

### Shopify App Development
We build custom Shopify Apps to meet your specific business needs, from inventory management to complex integrations.

### Social Media Marketing
We help elevate your online presence across Facebook, TikTok, and Instagram with strategic content and performance-driven campaigns.

### Performance-Based Growth
We offer unique results-based pricing where our fees are directly linked to your KPIs.

### AI-Optimized SEO
Get your products discovered on ChatGPT, Copilot, Gemini, and Perplexity with our Answer Rank solution.

## Powerful Shopify Apps

### Vision-Tag
AI-Powered Image Alt Text Generator. Automatically generate descriptive, SEO-optimized alt tags for all your product images.

### Answer Rank
Get Discovered on AI Search Engines. Optimize your products for ChatGPT, Copilot, Gemini, and Perplexity.

### CoOp Kit
Multi-Vendor Marketplace for Shopify. Transform your Shopify store into a cooperative marketplace.

## Why Choose Infinite.agency?

- **Proven Results**: 100+ stores launched
- **UK-Based Team**: London experts who understand UK & global markets
- **AI-First Approach**: Optimize for ChatGPT, Perplexity, and AI search engines

## Contact Us

Get a consultation from our London team. Visit https://infinite.agency to get started.`,
  },
  {
    path: "/services",
    title: "Shopify Services That Drive Results",
    description:
      "Comprehensive Shopify services by Infinite.agency, London's premier Shopify agency.",
    content: `# Shopify Services That Drive Results

Based in London, Infinite.agency brings over 25 years of retail eCommerce experience to help UK and global brands thrive.

## Shopify Site Audit & Fix

We audit your vibe-coded Shopify sites for security vulnerabilities, performance issues, and help you overcome the final hurdles to get your store live.

**Our Audit Covers:**
- Security vulnerability assessment
- Performance optimization analysis
- Code quality review
- Payment flow verification
- Shopify app compatibility check
- Mobile responsiveness testing

## Custom Shopify Themes

We create custom Shopify themes tailored to your brand identity and business requirements.

**Our Theme Expertise:**
- Headless Shopify with Hydrogen
- Custom Liquid theme development
- Conversion rate optimization
- Performance optimization (Core Web Vitals)
- Accessibility compliance (WCAG 2.1)
- SEO-friendly architecture

## Shopify App Development

We build custom Shopify Apps to meet your specific business needs.

**Custom App Solutions:**
- ERP & inventory integrations
- Custom checkout extensions
- Customer portal development
- Admin dashboard customizations
- Third-party API integrations
- Workflow automation tools

## Social Media Marketing

We help elevate your online presence across Facebook, TikTok, and Instagram with strategic content and performance-driven campaigns.

## Performance-Based Growth

We offer unique results-based pricing where our fees are directly linked to your KPIs. We only succeed when you succeed.

## AI-Optimized SEO

Get your products discovered on ChatGPT, Copilot, Gemini, and Perplexity.

**AI Search Engine Coverage:**
- ChatGPT optimization
- Microsoft Copilot optimization
- Google Gemini optimization
- Perplexity AI optimization
- Structured data markup (Schema.org)
- AI ranking monitoring & reports

## Contact Us

Get a consultation from our London team. Visit https://infinite.agency to get started.`,
  },
  {
    path: "/apps",
    title: "Powerful Shopify Apps Built by Merchants, For Merchants",
    description:
      "Shopify Apps by Infinite.agency - Vision-Tag, Answer Rank, and CoOp Kit.",
    content: `# Powerful Shopify Apps Built by Merchants, For Merchants

Our London-based team builds and supports Shopify apps designed to solve real eCommerce challenges.

## Vision-Tag

**Category:** SEO & Accessibility

**Tagline:** AI-Powered Image Alt Text Generator

Automatically generate descriptive, SEO-optimized alt tags for all your product images using advanced AI.

**Key Benefits:**
Improve your Google Shopping rankings, enhance accessibility for visually impaired customers, and ensure your products are discoverable through image search.

**Features:**
- Automatic AI-powered alt text generation
- Bulk processing for entire product catalogs
- SEO-optimized descriptions
- WCAG compliance for accessibility
- Multi-language support
- One-click installation and setup

## Answer Rank

**Category:** AI Marketing

**Tagline:** Get Discovered on AI Search Engines

Optimize your products for ChatGPT, Copilot, Gemini, and Perplexity.

**Key Benefits:**
Be where your customers are searching. With 60% of shoppers now using AI tools like ChatGPT for product research, Answer Rank puts your products front and center.

**Features:**
- AI search engine optimization (AIO)
- Structured data markup for AI platforms
- Product content optimization for LLMs
- Real-time AI search ranking tracking
- Competitor analysis in AI search results
- Automated content suggestions

## CoOp Kit

**Category:** Marketplace

**Tagline:** Multi-Vendor Marketplace for Shopify

Transform your Shopify store into a cooperative marketplace.

**Key Benefits:**
Perfect for producer co-ops, artisan collectives, and boutique vendor groups.

**Features:**
- Multi-vendor product catalog
- Vendor-specific commission management
- Unified checkout with automated split payments
- Vendor dashboard and analytics
- Inventory synchronization across vendors
- Cooperative marketing tools

## Why Choose Our Apps?

- **Merchant-Tested**: Built and tested on real stores
- **Expert Support**: Direct support from our London team
- **Regular Updates**: Continuous improvements based on feedback

## Contact Us

Need a custom Shopify app? Our London development team can build custom solutions. Visit https://infinite.agency.`,
  },
  {
    path: "/themes",
    title: "Shopify Themes by Infinite Agency",
    description:
      "Niche Shopify themes built by Infinite Agency. Glow — a beauty & skincare Shopify theme with bespoke sections and a built-in conversion toolkit.",
    content: `# Shopify Themes by Infinite Agency

We've launched 100+ Shopify stores, and we noticed general-purpose themes force niche brands into generic layouts. So we build our own line of niche Shopify themes — designed around how each niche actually sells.

## Glow — Beauty & Skincare Shopify Theme

Glow is a Shopify Online Store 2.0 theme built specifically for beauty and skincare brands. Full details: https://shopify.infiniteagenci.com/themes/glow

**Key Features:**
- Four bespoke sections: Glow Ingredients, Glow Results, Glow Routine, Glow Featured Products
- Before/after slider, trust badges, testimonials, lookbook, countdown timer
- Wishlist with dedicated page, sticky add-to-cart, cart drawer, predictive search
- Stock urgency messaging, free shipping progress bar, size guide modal
- 170+ theme editor settings including colour schemes with gradient support
- Country & language selectors for international selling
- Clean vanilla Liquid, CSS & JavaScript — no heavy frameworks

## FAQ

### What Shopify themes does Infinite Agency build?
We design and maintain our own line of niche Shopify themes. The first is Glow — a Shopify Online Store 2.0 theme built specifically for beauty and skincare brands.

### Can you customise a theme for my brand?
Yes. Because we build the themes ourselves, we can tailor any of them end-to-end — new sections, brand design, integrations and AI-search optimisation — or build a fully bespoke theme on the same foundation.

## Contact Us

Want Glow on your store, or a bespoke theme built from scratch? Visit https://infinite.agency to get started.`,
  },
  {
    path: "/themes/glow/documentation",
    title: "Glow Theme Documentation — Customisation Guide",
    description:
      "How to customise the Glow Shopify theme: logo, colours, typography, homepage sections, featured products, countdown timer, before/after slider and product page features.",
    content: `# Glow Theme Documentation — Customisation Guide

A practical guide to customising the Glow Shopify theme: update the logo and images, match your brand colours and fonts, set featured products, and configure every homepage section — all from the Shopify theme editor, no code required.

## Getting started

Open the editor from your Shopify admin: Online Store > Themes > Customise. Theme settings (paintbrush icon) hold global options — colours, fonts, spacing. The section list edits per-page sections and blocks.

## Update your logo & favicon

Theme settings > Logo: upload your logo (transparent PNG or SVG at 2x display size), set logo width (50-300px, default 100px) and add a square 32x32px or 64x64px favicon.

## Set your colours & gradients

Theme settings > Colours: Accent 1 and Accent 2 (with optional gradients), Background 1 and 2 (page backgrounds sections alternate between), text and button label colours. Every section also has its own colour scheme dropdown.

## Typography

Theme settings > Typography: pick heading and body fonts from Shopify's font library or upload your own, then scale globally with the heading and body scale sliders.

## Layout & global controls

- Layout: page width, section spacing, grid gaps
- Buttons, inputs, cards, popups: border, radius, shadow controls
- Product, collection and blog cards: style, image padding, alignment, colour scheme
- Badges: position, radius, sale and sold-out colour schemes

## Building the homepage

The demo homepage stacks 13 sections. Use Add section, drag to reorder, and tune padding per section.

- **Glow Featured Products**: choose a Collection, set products to show (demo uses 6), columns, image ratio, quick add, vendor, rating and "View all" style
- **Glow Ingredients**: ingredient blocks with icon, title and description (e.g. Signal peptides, Hyaluronic acid, Niacinamide)
- **Glow Results**: result blocks with a stat (e.g. "94%"), a label ("saw improved hydration") and description
- **Glow Routine**: numbered step blocks (Cleanse, Treat, Hydrate)
- **Testimonials**: blocks with image, quote, author, subheading and star rating
- **Trust badges & Lookbook**: configured with images and captions in section settings

## Setting your featured products

1. In Shopify admin, create a collection under Products > Collections (automated by tag, or manual)
2. In the theme editor, select the Glow Featured Products section
3. Pick your collection under Collection; set Products to show and Columns on desktop
4. Toggle quick add and pick an image ratio (portrait suits skincare)

The same collection-picker pattern powers Featured collection, the cart drawer's recommendation collection and the mega menu.

## Countdown timer

Add the Countdown timer section, set heading, subheading, End date and Timezone. Customise day/hour/minute labels, the expired message, and an optional button with link.

## Before/after slider

Add the Before/after section, upload Before image and After image with labels, and set the initial divider position (default 50%). Use matching crops and lighting in both images.

## Product page features

Theme settings > Premium theme:

- Free shipping threshold: activates the cart drawer progress bar
- Stock counter and threshold: "only X left" urgency messaging
- Sticky add-to-cart on mobile
- Custom sale and sold-out badge text
- Size guide page: pick a page to open in the size guide modal
- Back to top button

## Navigation, mega menu & search

Menus are structured in Online Store > Navigation; any menu item with a submenu becomes a mega menu panel (drawer on mobile). Theme settings > Search input controls predictive search (vendor and price toggles). Theme settings > Cart chooses drawer vs page cart, vendor display and cart notes.

## Social links & brand information

Theme settings > Social media takes profile URLs for Facebook, Instagram, YouTube, TikTok, X/Twitter, Snapchat, Pinterest, Tumblr and Vimeo. Brand information holds the headline, description and image used across the storefront and meta tags.

## FAQ

### Do I need to edit code to customise the Glow theme?
No. Every customisation in this guide is done through the Shopify theme editor.

### How do I change the featured products?
Create a collection in your admin, then select it in the Glow Featured Products section under Collection.

### Where do I set the free shipping threshold?
Theme settings > Premium theme > Free shipping threshold.

## Contact Us

Want Glow set up and tuned for you? Visit https://infinite.agency to get started.`,
  },
  {
    path: "/themes/glow",
    title: "Glow — Shopify Theme for Beauty & Skincare Brands",
    description:
      "Glow is a Shopify Online Store 2.0 theme built for beauty & skincare brands: ingredient, results and routine sections, before/after slider, wishlist, sticky add-to-cart and 170+ settings.",
    content: `# Glow — Shopify Theme for Beauty & Skincare Brands

Glow is a Shopify Online Store 2.0 theme designed around how beauty and skincare customers actually buy: ingredients, results, routines and trust. Bespoke sections, a full conversion toolkit and 170+ editor settings — no code required. Built and maintained by Infinite Agency. Version 1.1.0.

## Why Glow Was Built

General-purpose Shopify themes force beauty brands into generic layouts. Glow starts from the merchandising patterns skincare customers expect — and makes every one of them a drag-and-drop section.

## The Signature Glow Sections

- **Glow Ingredients** — showcase hero ingredients like peptides, hyaluronic acid or niacinamide with icons, imagery and short proof copy.
- **Glow Results** — present clinical claims and measurable outcomes in a credible, scannable format.
- **Glow Routine** — present products as an AM/PM ritual or multi-step regimen, guiding shoppers from single-product browsing to full-routine baskets.
- **Glow Featured Products** — a beauty-tuned featured products section with image-led cards and variant display.

Plus every classic section a storefront needs: image banner, slideshow, image with text, multicolumn, collage, collection list, featured collection, featured product, featured blog, video, collapsible content (FAQ), newsletter, contact form, lookbook, before/after slider and testimonials.

## Built-in Conversion Toolkit

- Before/after slider for visual proof
- Countdown timer for launches and offers
- Trust badges, testimonials and social proof sections
- Wishlist with a dedicated wishlist page template
- Sticky add-to-cart on product pages
- Stock urgency messaging pulled from real Shopify inventory
- Free shipping progress bar in the cart drawer
- Slide-out cart drawer and predictive search
- Size guide modal

Most stores pay monthly for apps to add these features. Glow ships them natively — faster pages, no app conflicts, no subscription creep.

## Design System & Customisation

- 170+ editor settings: colours, gradients, typography pickers, spacing, per-section padding
- Multiple colour schemes with gradient support
- Online Store 2.0 JSON templates for products, collections, pages, blogs, cart and search
- Country and language selectors with multiple locales for international selling

## SEO & AI Search Built In

- Dedicated meta-tags snippet handling canonical URLs, Open Graph and Twitter cards
- Semantic HTML with a single H1 per page and logical heading hierarchy
- Vanilla CSS and JavaScript — no heavy frameworks — for healthy Core Web Vitals
- Accessibility statement template included
- Clean product, article and breadcrumb structured data output for Google and AI answer engines like ChatGPT and Perplexity

## Technical Specification

- **Theme:** Glow (Peptides Glow), version 1.1.0
- **Platform:** Shopify Online Store 2.0 (JSON templates)
- **Niche:** Beauty, skincare, cosmetics, wellness
- **Homepage:** 13 sections in the default demo layout
- **Built with:** Vanilla Liquid, CSS & JavaScript
- **Localisation:** Country & language selectors, multiple locales
- **Accessibility:** Accessibility statement template, semantic markup

## Who Glow Is For

Perfect for skincare and peptide-led beauty brands, cosmetics, haircare, bodycare and wellness brands. Also works well for fragrance, beauty tools, men's grooming and any results-driven product brand.

## FAQ

### What is the Glow Shopify theme?
Glow is a Shopify Online Store 2.0 theme built specifically for beauty and skincare brands, with four bespoke beauty sections plus a full conversion toolkit, all editable in the Shopify theme editor without code.

### Is Glow only for skincare brands?
Glow was designed around skincare merchandising patterns, but works equally well for cosmetics, haircare, wellness supplements, fragrance and any product brand that sells on visible results and trust.

### Is the Glow theme good for SEO and AI search?
Yes. Glow ships with canonical URLs, Open Graph and Twitter meta tags, semantic HTML, fast vanilla code, localisation support and clean structured data — markup that Google and AI answer engines can parse easily.

### Can Infinite Agency customise Glow for my brand?
Yes. Glow was built by our team, so we can tailor it end-to-end or build a fully bespoke theme on the same foundation.

## Contact Us

Want Glow on your store? Visit https://infinite.agency to get started.`,
  },
  {
    path: "/audit",
    title: "Shopify Store Audit & Growth Strategy",
    description:
      "Get a comprehensive Shopify store audit covering growth opportunities, technical performance.",
    content: `# Shopify Store Audit & Growth Strategy

Unlock your Shopify store's full potential with a detailed growth and technical audit.

**Limited Time Offer - 90% Off**
No obligation. Detailed report delivered within 5 business days.

## What's Included in Your Audit

### Growth Analysis
- Conversion rate analysis & benchmarks
- Revenue per visitor optimization
- Cart abandonment identification
- Upsell & cross-sell opportunities

### Technical Health
- Page speed performance analysis
- Core Web Vitals assessment
- Mobile experience review
- Theme code optimization check

### SEO & Discoverability
- Organic search visibility score
- AI search engine readiness (ChatGPT, Perplexity)
- Product page SEO checklist
- Structured data audit

### User Experience
- Navigation & site structure review
- Product page conversion elements
- Checkout flow analysis
- Trust signals & social proof audit

### Apps & Technology
- App stack efficiency review
- Redundant app identification
- Subscription cost analysis
- Integration health check

### Security & Compliance
- Security vulnerability scan
- GDPR & cookie compliance review
- Payment security assessment
- Backup & recovery verification

## Why Get an Audit From Us?

- **25+ Years Experience**: Deep expertise in eCommerce and Shopify
- **Actionable Insights**: Real recommendations, not generic advice
- **No-Obligation**: Detailed report even if you don't hire us

## Pricing

**Complete Store Audit: $20** (one-time, limited time offer)

**Includes:**
- Full technical & growth audit
- Detailed PDF report (10+ pages)
- 90-day implementation roadmap
- 30-minute video review call
- Delivered within 5 business days

3-day money-back guarantee.

## FAQ

**How long does the audit take?**
We complete most audits within 3-5 business days.

**What Shopify plans do you work with?**
We work with stores on all plans—from Basic Shopify to Shopify Plus.

**Do I need to implement the recommendations myself?**
The report includes clear, actionable steps you can follow.

## Contact Us

Ready to unlock your store's potential? Join 100+ merchants who have transformed their stores. Book your audit at https://infinite.agency.`,
  },
];

async function generateMarkdownFiles() {
  console.log("Generating markdown files for LLM indexing...");

  // Create markdown directory
  if (!fs.existsSync(MARKDOWN_DIR)) {
    fs.mkdirSync(MARKDOWN_DIR, { recursive: true });
  }

  // Generate markdown for each page
  for (const page of pages) {
    const mdPath = path.join(
      MARKDOWN_DIR,
      page.path === "/" ? "index.md" : `${page.path.slice(1)}.md`,
    );
    const dir = path.dirname(mdPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const mdContent = `---
title: "${page.title}"
description: "${page.description}"
---

${page.content}

---
*Source: https://infinite.agency${page.path}*
`;

    fs.writeFileSync(mdPath, mdContent);
    console.log(`Generated: ${mdPath}`);
  }

  // Copy blog posts from content collections
  const blogFiles = glob.sync("src/content/blog/*.mdx");
  for (const file of blogFiles) {
    const filename = path.basename(file).replace(".mdx", ".md");
    const destPath = path.join(MARKDOWN_DIR, "blog", filename);
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    let content = fs.readFileSync(file, "utf-8");

    // Convert frontmatter from YAML to proper format
    content = content.replace(/^---\n([\s\S]*?)\n---/, (match, frontmatter) => {
      const lines = frontmatter.split("\n").filter((l) => l.trim());
      let newFrontmatter = "---\n";
      for (const line of lines) {
        if (line.includes(":")) {
          const [key, ...valueParts] = line.split(":");
          const value = valueParts.join(":").trim();
          if (value) {
            newFrontmatter += `${key.trim()}: "${value}"\n`;
          } else {
            newFrontmatter += `${key.trim()}:\n`;
          }
        } else {
          newFrontmatter += `${line}\n`;
        }
      }
      newFrontmatter += "---\n";
      return newFrontmatter;
    });

    // Remove any HTML tags
    content = content.replace(/<[^>]*>/g, "");

    fs.writeFileSync(destPath, content);
    console.log(`Generated: ${destPath}`);
  }

  // Create blog index
  let blogIndex = `---\ntitle: "Blog - Infinite.agency Insights"\ndescription: "Expert tips on Shopify, AI SEO, and eCommerce growth"\n---\n\n# Blog - Infinite.agency Insights\n\nExpert tips on Shopify, AI SEO, and eCommerce growth from our London team.\n\n## Latest Posts\n\n`;

  const sortedBlogFiles = blogFiles.sort((a, b) => {
    const aContent = fs.readFileSync(a, "utf-8");
    const bContent = fs.readFileSync(b, "utf-8");
    const aDate = aContent.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/)?.[1] || "";
    const bDate = bContent.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/)?.[1] || "";
    return bDate.localeCompare(aDate);
  });

  for (const file of sortedBlogFiles) {
    const filename = path.basename(file).replace(".mdx", ".md");
    const content = fs.readFileSync(file, "utf-8");
    const titleMatch = content.match(/title:\s*["']?([^"\n]+)/);
    const title = titleMatch ? titleMatch[1] : filename;
    const descMatch = content.match(/description:\s*["']?([^"\n]+)/);
    const description = descMatch ? descMatch[1] : "";
    const dateMatch = content.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/);
    const date = dateMatch ? dateMatch[1] : "";
    const catMatch = content.match(/category:\s*["']?([^"\n]+)/);
    const category = catMatch ? catMatch[1] : "";

    blogIndex += `### [${title}](blog/${filename})\n`;
    if (category) blogIndex += `- **Category:** ${category}\n`;
    if (date) blogIndex += `- **Date:** ${date}\n`;
    if (description) blogIndex += `- ${description}\n\n`;
  }

  blogIndex += `\n---\n*Source: https://infinite.agency/blog*\n`;

  fs.writeFileSync(path.join(MARKDOWN_DIR, "blog", "index.md"), blogIndex);
  console.log("Generated: blog/index.md");

  console.log("\nMarkdown files generated successfully!");
}

async function updateSitemap() {
  console.log("\nUpdating sitemap with markdown URLs...");

  if (!fs.existsSync(SITEMAP_FILE)) {
    console.log("Sitemap not found, skipping update");
    return;
  }

  let sitemap = fs.readFileSync(SITEMAP_FILE, "utf-8");

  // Add markdown URLs to sitemap
  const baseUrl = "https://shopify.infiniteagenci.com";
  const mdUrls = [
    "/md/",
    "/md/index.md",
    "/md/services.md",
    "/md/apps.md",
    "/md/audit.md",
    "/md/blog/",
    "/md/blog/index.md",
  ];

  // Get blog files
  const blogFiles = glob.sync("src/content/blog/*.mdx");
  for (const file of blogFiles) {
    const filename = path.basename(file).replace(".mdx", ".md");
    mdUrls.push(`/md/blog/${filename}`);
  }

  // Add URL entries for markdown files
  for (const url of mdUrls) {
    const fullUrl = `${baseUrl}${url}`;
    if (!sitemap.includes(fullUrl)) {
      const urlEntry = `  <url>\n    <loc>${fullUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;

      // Insert before closing urlset tag
      sitemap = sitemap.replace("</urlset>", `${urlEntry}\n  </urlset>`);
    }
  }

  fs.writeFileSync(SITEMAP_FILE, sitemap);
  console.log("Sitemap updated with markdown URLs");
}

async function main() {
  await generateMarkdownFiles();
  await updateSitemap();
}

main().catch(console.error);
