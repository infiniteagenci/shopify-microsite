// Services data for Infinite.agency - London-based Shopify experts
const services = [
  {
    title: "Shopify Site Audit & Fix",
    description:
      "We audit your vibe-coded Shopify sites for security vulnerabilities, performance issues, and help you overcome the final hurdles to get your store live and ready to accept orders and payments securely. Our London-based team provides thorough security assessments.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`,
    slug: "shopify-audit-fix",
  },
  {
    title: "Custom Shopify Themes",
    description:
      "While we build our own premium themes, we also specialize in creating custom Shopify themes tailored to your brand identity and business requirements for optimal conversion rates. Our London developers create pixel-perfect, conversion-optimized designs.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>`,
    slug: "custom-shopify-themes",
  },
  {
    title: "Shopify App Development",
    description:
      "We build custom Shopify Apps to meet your specific business needs. From inventory management to complex integrations, our custom apps extend Shopify's functionality to solve your unique challenges. Built by our expert London development team.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>`,
    slug: "shopify-app-development",
  },
  {
    title: "Social Media Marketing",
    description:
      "Beyond getting your site live, we help elevate your online presence across Facebook, TikTok, and Instagram with strategic content, audience targeting, and performance-driven campaigns. Our London marketing team knows what works for UK and global markets.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>`,
    slug: "social-media-marketing",
  },
  {
    title: "Performance-Based Growth",
    description:
      "We offer unique results-based pricing where our fees are directly linked to your KPIs. We only succeed when you succeed - ensuring aligned incentives and measurable ROI for your growth. Trusted by London businesses and UK brands.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>`,
    slug: "performance-growth",
  },
  {
    title: "AI-Optimized SEO",
    description:
      "Get your products discovered on ChatGPT, Copilot, Gemini, and Perplexity. Our Answer Rank solution optimizes your product data for AI search engines, ensuring you appear in AI-powered product recommendations. Leading AI SEO agency in London.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>`,
    slug: "ai-optimized-seo",
  },
];

// Shopify Apps data
const shopifyApps = [
  {
    name: "Vision-Tag",
    tagline: "AI-Powered Image Alt Text Generator",
    description:
      "Automatically generate descriptive, SEO-optimized alt tags for all your product images using advanced AI. Improve your site's SEO and accessibility while ensuring customers with visual impairments can fully experience your products.",
    features: [
      "Automatic AI-powered alt text generation",
      "Bulk processing for entire product catalogs",
      "SEO-optimized descriptions for better search rankings",
      "WCAG compliance for accessibility",
      "Multi-language support",
      "One-click installation and setup",
    ],
    benefits:
      "Improve your Google Shopping rankings, enhance accessibility for visually impaired customers, and ensure your products are discoverable through image search - all on autopilot.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>`,
    slug: "vision-tag",
    category: "SEO & Accessibility",
  },
  {
    name: "Answer Rank",
    tagline: "Get Discovered on AI Search Engines",
    description:
      "Optimize your products for ChatGPT, Copilot, Gemini, and Perplexity. As more shoppers use AI assistants for product research, Answer Rank ensures your products appear in AI-generated recommendations and answers.",
    features: [
      "AI search engine optimization (AIO)",
      "Structured data markup for AI platforms",
      "Product content optimization for LLMs",
      "Real-time AI search ranking tracking",
      "Competitor analysis in AI search results",
      "Automated content suggestions",
    ],
    benefits:
      "Be where your customers are searching. With 60% of shoppers now using AI tools like ChatGPT for product research, Answer Rank puts your products front and center in AI recommendations.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>`,
    slug: "answer-rank",
    category: "AI Marketing",
  },
  {
    name: "CoOp Kit",
    tagline: "Multi-Vendor Marketplace for Shopify",
    description:
      "Transform your Shopify store into a cooperative marketplace. CoOp Kit is specifically designed for smaller groups of suppliers or vendors who want to sell together, sharing inventory, orders, and customers seamlessly.",
    features: [
      "Multi-vendor product catalog",
      "Vendor-specific commission management",
      "Unified checkout with automated split payments",
      "Vendor dashboard and analytics",
      "Inventory synchronization across vendors",
      "Cooperative marketing tools",
    ],
    benefits:
      "Perfect for producer co-ops, artisan collectives, and boutique vendor groups. Pool resources, share customers, and grow together without the complexity of enterprise marketplace solutions.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>`,
    slug: "coop-kit",
    category: "Marketplace",
  },
];

// About stats
const aboutStats = [
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Shopify Stores Launched" },
  { value: "3", label: "Proprietary Apps" },
  { value: "98%", label: "Client Satisfaction" },
];

export { services, shopifyApps, aboutStats };
