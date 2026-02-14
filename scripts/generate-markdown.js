/**
 * Script to generate markdown versions of all pages for LLM indexing
 * and update sitemap to include markdown URLs
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const BUILD_DIR = './dist';
const MARKDOWN_DIR = './dist/md';
const SITEMAP_FILE = './dist/sitemap-0.xml';

const pages = [
  {
    path: '/',
    title: "Infinite.agency - London's Premier Shopify Experts for the AI Era",
    description: "Infinite.agency - London's premier Shopify experts with 25+ years experience. Custom themes, apps, AI SEO for ChatGPT/Perplexity, and performance-based growth for UK brands.",
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

Get a free consultation from our London team. Visit https://infinite.agency to get started.`
  },
  {
    path: '/services',
    title: "Shopify Services That Drive Results",
    description: "Comprehensive Shopify services by Infinite.agency, London's premier Shopify agency.",
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

Get a free consultation from our London team. Visit https://infinite.agency to get started.`
  },
  {
    path: '/apps',
    title: "Powerful Shopify Apps Built by Merchants, For Merchants",
    description: "Shopify Apps by Infinite.agency - Vision-Tag, Answer Rank, and CoOp Kit.",
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

Need a custom Shopify app? Our London development team can build custom solutions. Visit https://infinite.agency.`
  },
  {
    path: '/audit',
    title: "Shopify Store Audit & Growth Strategy",
    description: "Get a comprehensive Shopify store audit covering growth opportunities, technical performance.",
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
- Detailed PDF report (15+ pages)
- 90-day implementation roadmap
- 30-minute video review call
- Delivered within 5 business days

30-day money-back guarantee. Regular price $199.

## FAQ

**How long does the audit take?**
We complete most audits within 3-5 business days.

**What Shopify plans do you work with?**
We work with stores on all plans—from Basic Shopify to Shopify Plus.

**Do I need to implement the recommendations myself?**
The report includes clear, actionable steps you can follow.

## Contact Us

Ready to unlock your store's potential? Join 100+ merchants who have transformed their stores. Book your audit at https://infinite.agency.`
  }
];

async function generateMarkdownFiles() {
  console.log('Generating markdown files for LLM indexing...');
  
  // Create markdown directory
  if (!fs.existsSync(MARKDOWN_DIR)) {
    fs.mkdirSync(MARKDOWN_DIR, { recursive: true });
  }
  
  // Generate markdown for each page
  for (const page of pages) {
    const mdPath = path.join(MARKDOWN_DIR, page.path === '/' ? 'index.md' : `${page.path.slice(1)}.md`);
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
  const blogFiles = glob.sync('src/content/blog/*.mdx');
  for (const file of blogFiles) {
    const filename = path.basename(file).replace('.mdx', '.md');
    const destPath = path.join(MARKDOWN_DIR, 'blog', filename);
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    let content = fs.readFileSync(file, 'utf-8');
    
    // Convert frontmatter from YAML to proper format
    content = content.replace(/^---\n([\s\S]*?)\n---/, (match, frontmatter) => {
      const lines = frontmatter.split('\n').filter(l => l.trim());
      let newFrontmatter = '---\n';
      for (const line of lines) {
        if (line.includes(':')) {
          const [key, ...valueParts] = line.split(':');
          const value = valueParts.join(':').trim();
          if (value) {
            newFrontmatter += `${key.trim()}: "${value}"\n`;
          } else {
            newFrontmatter += `${key.trim()}:\n`;
          }
        } else {
          newFrontmatter += `${line}\n`;
        }
      }
      newFrontmatter += '---\n';
      return newFrontmatter;
    });
    
    // Remove any HTML tags
    content = content.replace(/<[^>]*>/g, '');
    
    fs.writeFileSync(destPath, content);
    console.log(`Generated: ${destPath}`);
  }
  
  // Create blog index
  let blogIndex = `---\ntitle: "Blog - Infinite.agency Insights"\ndescription: "Expert tips on Shopify, AI SEO, and eCommerce growth"\n---\n\n# Blog - Infinite.agency Insights\n\nExpert tips on Shopify, AI SEO, and eCommerce growth from our London team.\n\n## Latest Posts\n\n`;
  
  const sortedBlogFiles = blogFiles.sort((a, b) => {
    const aContent = fs.readFileSync(a, 'utf-8');
    const bContent = fs.readFileSync(b, 'utf-8');
    const aDate = aContent.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/)?.[1] || '';
    const bDate = bContent.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/)?.[1] || '';
    return bDate.localeCompare(aDate);
  });
  
  for (const file of sortedBlogFiles) {
    const filename = path.basename(file).replace('.mdx', '.md');
    const content = fs.readFileSync(file, 'utf-8');
    const titleMatch = content.match(/title:\s*["']?([^"\n]+)/);
    const title = titleMatch ? titleMatch[1] : filename;
    const descMatch = content.match(/description:\s*["']?([^"\n]+)/);
    const description = descMatch ? descMatch[1] : '';
    const dateMatch = content.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/);
    const date = dateMatch ? dateMatch[1] : '';
    const catMatch = content.match(/category:\s*["']?([^"\n]+)/);
    const category = catMatch ? catMatch[1] : '';
    
    blogIndex += `### [${title}](blog/${filename})\n`;
    if (category) blogIndex += `- **Category:** ${category}\n`;
    if (date) blogIndex += `- **Date:** ${date}\n`;
    if (description) blogIndex += `- ${description}\n\n`;
  }
  
  blogIndex += `\n---\n*Source: https://infinite.agency/blog*\n`;
  
  fs.writeFileSync(path.join(MARKDOWN_DIR, 'blog', 'index.md'), blogIndex);
  console.log('Generated: blog/index.md');
  
  console.log('\nMarkdown files generated successfully!');
}

async function updateSitemap() {
  console.log('\nUpdating sitemap with markdown URLs...');
  
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.log('Sitemap not found, skipping update');
    return;
  }
  
  let sitemap = fs.readFileSync(SITEMAP_FILE, 'utf-8');
  
  // Add markdown URLs to sitemap
  const baseUrl = 'https://infinite.agency';
  const mdUrls = [
    '/md/',
    '/md/index.md',
    '/md/services.md',
    '/md/apps.md',
    '/md/audit.md',
    '/md/blog/',
    '/md/blog/index.md'
  ];
  
  // Get blog files
  const blogFiles = glob.sync('src/content/blog/*.mdx');
  for (const file of blogFiles) {
    const filename = path.basename(file).replace('.mdx', '.md');
    mdUrls.push(`/md/blog/${filename}`);
  }
  
  // Add URL entries for markdown files
  for (const url of mdUrls) {
    const fullUrl = `${baseUrl}${url}`;
    if (!sitemap.includes(fullUrl)) {
      const urlEntry = `  <url>\n    <loc>${fullUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
      
      // Insert before closing urlset tag
      sitemap = sitemap.replace('</urlset>', `${urlEntry}\n  </urlset>`);
    }
  }
  
  fs.writeFileSync(SITEMAP_FILE, sitemap);
  console.log('Sitemap updated with markdown URLs');
}

async function main() {
  await generateMarkdownFiles();
  await updateSitemap();
}

main().catch(console.error);
