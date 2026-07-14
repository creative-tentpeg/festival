import { MetadataRoute } from 'next';
import { cms } from '@/lib/cms/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cabarrusfestivals.com'; // Replace with actual domain
  
  // Static routes
  const routes = [
    '',
    '/festivals',
    '/sponsorship',
    '/vendors',
    '/faq',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic festival routes
  const festivals = await cms.getFestivals();
  const festivalRoutes = festivals.map((festival) => ({
    url: `${baseUrl}/festivals/${festival.slug}`,
    lastModified: new Date(), // In a real app, use festival.updatedAt
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...festivalRoutes];
}
