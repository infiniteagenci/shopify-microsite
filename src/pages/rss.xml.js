import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Infinite.agency Blog',
    description: 'Expert insights on Shopify, AI SEO, and eCommerce growth from London\'s Shopify experts.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
