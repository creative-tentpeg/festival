import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cabarrusfestivals.com/sitemap.xml',
    host: 'https://cabarrusfestivals.com',
  };
}
