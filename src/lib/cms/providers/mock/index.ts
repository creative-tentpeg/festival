import { CMSClient, Festival, Page } from '../../types';
import { mockFestivals, mockPages } from './data';

export class MockCMSProvider implements CMSClient {
  async getFestivals(): Promise<Festival[]> {
    // Simulate network delay
    // await new Promise(resolve => setTimeout(resolve, 100));
    return mockFestivals;
  }

  async getFestivalBySlug(slug: string): Promise<Festival | null> {
    const festival = mockFestivals.find(f => f.slug === slug);
    return festival || null;
  }

  async getUpcomingFestivals(limit: number = 3): Promise<Festival[]> {
    const now = new Date();
    const upcoming = mockFestivals
      .filter(f => new Date(f.startDate) > now)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    
    return upcoming.slice(0, limit);
  }

  async getPage(slug: string): Promise<Page | null> {
    const page = mockPages.find(p => p.slug === slug);
    return page || null;
  }
}
