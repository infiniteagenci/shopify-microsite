# Schema.org Components Quick Reference Guide

## Importing Schema Components

### Individual Import
```astro
---
import FAQSchema from '../components/schema/FAQSchema.astro';
import ArticleSchema from '../components/schema/ArticleSchema.astro';
---
```

### Bulk Import from Index
```astro
---
import {
  FAQSchema,
  ArticleSchema,
  ServiceSchema,
  SoftwareApplicationSchema,
  PersonSchema,
  LocalBusinessSchema,
  BreadcrumbListSchema
} from '../components/schema';
---
```

## Usage Examples

### FAQSchema - For FAQ Sections
```astro
---
const faqs = [
  {
    question: "How long does the audit take?",
    answer: "We complete most audits within 3-5 business days."
  },
  {
    question: "What's included?",
    answer: "Full technical audit and growth strategy report."
  }
];
---

<FAQSchema faqs={faqs} />
```

**Best for:** FAQ pages, support sections, documentation

---

### ArticleSchema - For Blog Posts
```astro
---
const articleUrl = new URL(Astro.url.pathname, Astro.site);
---

<ArticleSchema
  headline="Your Article Title"
  image="/images/article-cover.jpg"
  datePublished="2024-01-15"
  dateModified="2024-01-20"
  author={{
    name: "Author Name",
    url: "https://infinite.agency"
  }}
  publisher={{
    name: "Infinite.agency",
    logo: "https://infinite.agency/logo.png"
  }}
  description="Article description for SEO"
  url={articleUrl}
/>
```

**Best for:** Blog posts, news articles, press releases

---

### ServiceSchema - For Service Pages
```astro
<ServiceSchema
  name="Shopify Store Audit"
  description="Comprehensive Shopify audit and growth strategy"
  provider={{
    name: "Infinite.agency",
    url: "https://infinite.agency"
  }}
  serviceType="ProfessionalService"
  areaServed={["London", "United Kingdom", "International"]}
  url="https://infinite.agency/audit"
/>
```

**Best for:** Service listings, pricing pages, offerings

---

### SoftwareApplicationSchema - For Apps/Software
```astro
<SoftwareApplicationSchema
  name="Vision-Tag"
  description="AI-powered image alt text generator"
  applicationCategory="BusinessApplication"
  operatingSystem="Shopify"
  offers={{
    price: "Request Pricing",
    priceCurrency: "GBP"
  }}
  url="https://infinite.agency/apps#vision-tag"
  image="/images/apps/vision-tag.jpg"
  author={{
    name: "Infinite.agency",
    url: "https://infinite.agency"
  }}
  featureList={[
    "Automatic AI-powered alt text generation",
    "Bulk processing",
    "SEO-optimized descriptions"
  ]}
/>
```

**Best for:** App stores, software products, SaaS offerings

---

### PersonSchema - For Team Members
```astro
<PersonSchema
  name="John Smith"
  jobTitle="Lead Developer"
  description="Shopify expert with 15 years experience"
  image="/images/team/john.jpg"
  url="https://infinite.agency/team/john"
  sameAs={[
    "https://twitter.com/johnsmith",
    "https://linkedin.com/in/johnsmith"
  ]}
  worksFor={{
    name: "Infinite.agency",
    url: "https://infinite.agency"
  }}
/>
```

**Best for:** Team pages, author profiles, about pages

---

### LocalBusinessSchema - For Business Locations
```astro
<LocalBusinessSchema
  name="Infinite.agency"
  description="London-based Shopify agency"
  url="https://infinite.agency"
  telephone="+44 20 7123 4567"
  email="hello@infinite.agency"
  address={{
    streetAddress: "123 Innovation Way",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "EC1A 1BB",
    addressCountry: "GB"
  }}
  geo={{
    latitude: 51.5074,
    longitude: -0.1278
  }}
  openingHoursSpecification={[{
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00"
  }]}
  priceRange="$$"
  sameAs={[
    "https://twitter.com/infiniteagency",
    "https://linkedin.com/company/infiniteagency"
  ]}
/>
```

**Best for:** Contact pages, about pages, location pages

---

### BreadcrumbListSchema - For Navigation
```astro
---
const breadcrumbs = [
  { name: "Home", url: "https://infinite.agency/" },
  { name: "Services", url: "https://infinite.agency/services" },
  { name: "Shopify Audit", url: "https://infinite.agency/audit" }
];
---

<BreadcrumbListSchema items={breadcrumbs} />
```

**Best for:** All pages (except homepage)

---

## Dynamic Schema Generation

### For Multiple Services (Services Page)
```astro
---
import { services } from '../utils/data.ts';

const serviceSchemas = services.map(service => ({
  name: service.title,
  description: service.description,
  provider: {
    name: "Infinite.agency",
    url: "https://infinite.agency"
  },
  serviceType: "ProfessionalService",
  areaServed: ["London", "United Kingdom", "International"],
  url: `https://infinite.agency/services#${service.slug}`
}));
---

{serviceSchemas.map(schema => (
  <ServiceSchema {...schema} />
))}
```

### For Multiple Apps (Apps Page)
```astro
---
import { shopifyApps } from '../utils/data.ts';

const appSchemas = shopifyApps.map(app => ({
  name: app.name,
  description: app.description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  offers: {
    price: "Request Pricing",
    priceCurrency: "GBP"
  },
  url: `https://infinite.agency/apps#${app.slug}`,
  image: "/images/og-image.jpg",
  author: {
    name: "Infinite.agency",
    url: "https://infinite.agency"
  },
  publisher: {
    name: "Infinite.agency",
    url: "https://infinite.agency"
  },
  featureList: app.features
}));
---

{appSchemas.map(schema => (
  <SoftwareApplicationSchema {...schema} />
))}
```

---

## Schema Placement

### Where to Place Schema Components

```astro
<Layout title="Page Title">
  <!-- Place schema components at the beginning of the body -->
  <FAQSchema faqs={faqs} />
  <BreadcrumbListSchema items={breadcrumbs} />

  <main>
    <!-- Your content here -->
  </main>
</Layout>
```

**Important:** Schema components should be placed:
1. Inside the Layout component
2. Before the main content
3. In the body section (they automatically generate `<script type="application/ld+json">` tags)

---

## Validation

### Before Deploying
1. **Build the project**: `npm run build`
2. **Test with Google Rich Results Tool**: https://search.google.com/test/rich-results
3. **Validate with Schema.org Validator**: https://validator.schema.org/

### Common Issues to Check
- ✅ All required fields are present
- ✅ URLs are absolute (include domain)
- ✅ Dates are in ISO 8601 format (YYYY-MM-DD)
- ✅ Images are accessible and load correctly
- ✅ Data matches visible page content
- ✅ No duplicate schemas on same page

---

## Best Practices

### 1. Consistency
Ensure schema data matches what's visible on the page:
```astro
<!-- Good -->
<h1>Shopify Store Audit</h1>
<ServiceSchema name="Shopify Store Audit" ... />

<!-- Bad -->
<h1>Premium Audit Service</h1>
<ServiceSchema name="Shopify Store Audit" ... />
```

### 2. Complete Data
Always provide all recommended fields:
```astro
<!-- Good -->
<ArticleSchema
  headline="Title"
  image="/image.jpg"
  datePublished="2024-01-15"
  dateModified="2024-01-15"
  author={{ name: "Author", url: "https://..." }}
  publisher={{ name: "Publisher", logo: "https://..." }}
  description="Description"
  url="https://..."
/>

<!-- Minimal -->
<ArticleSchema
  headline="Title"
  image="/image.jpg"
  datePublished="2024-01-15"
  author={{ name: "Author" }}
/>
```

### 3. Absolute URLs
Always use absolute URLs:
```astro
<!-- Good -->
url="https://infinite.agency/audit"
image="https://infinite.agency/images/audit.jpg"

<!-- Bad -->
url="/audit"
image="/images/audit.jpg"
```

### 4. ISO Date Format
Use proper date format:
```astro
<!-- Good -->
datePublished="2024-01-15"
dateModified="2024-01-15T10:30:00Z"

<!-- Bad -->
datePublished="January 15, 2024"
datePublished="01/15/2024"
```

---

## Testing Checklist

- [ ] Build completes without errors
- [ ] Schema appears in page source (view-source:URL)
- [ ] Google Rich Results Test shows no errors
- [ ] Schema.org Validator shows no warnings
- [ ] Data matches visible content
- [ ] All URLs are accessible
- [ ] Images load correctly
- [ ] Dates are properly formatted
- [ ] No duplicate schemas on same page
- [ ] Required fields are present

---

## Resources

- **Schema.org**: https://schema.org/
- **Google Structured Data**: https://developers.google.com/search/docs/appearance/structured-data
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Validator**: https://validator.schema.org/
- **JSON-LD Playground**: https://jsonld-playground.appspot.com/

---

## Troubleshooting

### Schema Not Appearing
- Check component is imported correctly
- Verify component is placed inside Layout
- Check for build errors in console

### Validation Errors
- Ensure all required fields are present
- Check URL formats (must be absolute)
- Verify date formats (ISO 8601)
- Check for proper nesting of objects

### Rich Results Not Showing
- Schema may be valid but not eligible for rich results
- Google needs time to crawl and index
- Check Google Search Console for errors
- Ensure content is publicly accessible

---

**Need Help?**
- Documentation: `/src/components/schema/README.md`
- Implementation Summary: `/SCHEMA_IMPLEMENTATION_SUMMARY.md`
- Example Code: Check existing pages in `/src/pages/`
