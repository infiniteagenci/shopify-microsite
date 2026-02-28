# Schema.org Components

This directory contains reusable Astro components for generating Schema.org structured data in JSON-LD format.

## Available Components

### FAQSchema.astro
Generates FAQPage schema for FAQ sections.

**Props:**
- `faqs`: Array of FAQ objects with `question` and `answer` properties

**Example:**
```astro
<FAQSchema faqs={[
  { question: "How long does it take?", answer: "3-5 business days" },
  { question: "What's included?", answer: "Full audit and report" }
]} />
```

### PersonSchema.astro
Generates Person schema for team members, authors, and founders.

**Props:**
- `name`: Person's name (required)
- `jobTitle`: Job title
- `description`: Biography
- `image`: Profile image URL
- `url`: Profile URL
- `sameAs`: Array of social media URLs
- `worksFor`: Organization object with `name` and `url`

**Example:**
```astro
<PersonSchema
  name="John Smith"
  jobTitle="Lead Developer"
  description="Shopify expert with 15 years experience"
  image="/images/john.jpg"
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

### ArticleSchema.astro
Generates Article schema for blog posts with full metadata.

**Props:**
- `headline`: Article title (required)
- `image`: Featured image URL (required)
- `datePublished`: ISO date string (required)
- `dateModified`: ISO date string
- `author`: Author object or array of author objects
- `publisher`: Publisher object with `name` and `logo`
- `description`: Article description
- `url`: Article URL

**Example:**
```astro
<ArticleSchema
  headline="Understanding Shopify SEO"
  image="/images/blog/shopify-seo.jpg"
  datePublished="2024-01-15"
  dateModified="2024-01-20"
  author={{
    name: "Infinite.agency Team",
    url: "https://infinite.agency"
  }}
  publisher={{
    name: "Infinite.agency",
    logo: "https://infinite.agency/logo.png"
  }}
  description="Complete guide to Shopify SEO"
  url="https://infinite.agency/blog/shopify-seo"
/>
```

### LocalBusinessSchema.astro
Generates LocalBusiness schema for business locations.

**Props:**
- `name`: Business name (required)
- `description`: Business description
- `url`: Website URL
- `telephone`: Phone number
- `email`: Email address
- `address`: Address object with `addressLocality` and `addressCountry`
- `geo`: Geo object with `latitude` and `longitude`
- `openingHoursSpecification`: Array of opening hours objects
- `priceRange`: Price range (e.g., "$$", "££")
- `image`: Business image URL
- `sameAs`: Array of social media URLs

**Example:**
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

### ServiceSchema.astro
Generates Service schema for services offered.

**Props:**
- `name`: Service name (required)
- `description`: Service description (required)
- `provider`: Provider object with `name` and `url`
- `serviceType`: Type of service
- `areaServed`: Array of locations served
- `hasOfferCatalog`: Offer catalog object
- `url`: Service URL
- `image`: Service image URL

**Example:**
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

### SoftwareApplicationSchema.astro
Generates SoftwareApplication schema for apps and software.

**Props:**
- `name`: Application name (required)
- `description`: Application description (required)
- `applicationCategory`: Category (required)
- `operatingSystem`: Operating system (default: "Shopify")
- `offers`: Offer object with `price` and `priceCurrency`
- `aggregateRating`: Rating object with `ratingValue` and `ratingCount`
- `url`: Application URL
- `image`: Application image URL
- `softwareVersion`: Version string
- `author`: Author object
- `publisher`: Publisher object
- `featureList`: Array of features

**Example:**
```astro
<SoftwareApplicationSchema
  name="Vision-Tag"
  description="AI-powered image alt text generator for Shopify"
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

### BreadcrumbListSchema.astro
Generates BreadcrumbList schema for navigation hierarchy.

**Props:**
- `items`: Array of breadcrumb items with `name` and `url` properties

**Example:**
```astro
<BreadcrumbListSchema items={[
  { name: "Home", url: "https://infinite.agency/" },
  { name: "Services", url: "https://infinite.agency/services" },
  { name: "Shopify Audit", url: "https://infinite.agency/audit" }
]} />
```

## Usage

Import and use the components in your Astro pages:

```astro
---
import FAQSchema from '../components/schema/FAQSchema.astro';
---

<FAQSchema faqs={faqData} />
```

Or import from the index:

```astro
---
import { FAQSchema, ArticleSchema } from '../components/schema';
---

<FAQSchema faqs={faqData} />
<ArticleSchema {...articleData} />
```

## Validation

Always validate your structured data using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Best Practices

1. **Required Fields**: Always include all required fields for each schema type
2. **Consistent Data**: Ensure data matches what's visible on the page
3. **URLs**: Use absolute URLs for all URL properties
4. **Dates**: Use ISO 8601 date format (e.g., "2024-01-15")
5. **Images**: Use high-quality images that represent the content
6. **Reviews**: Only include genuine reviews and ratings

## Integration Status

- ✅ FAQSchema - Integrated in `/src/pages/audit.astro`
- ✅ ArticleSchema - Integrated in `/src/pages/blog/[slug].astro`
- ✅ LocalBusinessSchema - Integrated in `/src/layouts/Layout.astro`
- ✅ ServiceSchema - Integrated in `/src/pages/services.astro`
- ✅ SoftwareApplicationSchema - Integrated in `/src/pages/apps.astro`
- ✅ BreadcrumbListSchema - Integrated in `/src/pages/audit.astro`
- 📋 PersonSchema - Available for team pages and author profiles
