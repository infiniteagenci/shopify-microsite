/**
 * Generate BreadcrumbList JSON-LD schema
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.url, 'https://infinite.agency').href,
    })),
  };
}
