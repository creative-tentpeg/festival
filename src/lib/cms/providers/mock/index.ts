import { CMSClient, Festival, Page } from '../../types';
import { mockFestivals, mockPages } from './data';

function isUpcoming(festival: Festival, now: Date): boolean {
  if (festival.status !== "upcoming") return false;
  if (!festival.startDate) return true; // date TBD: always treat as upcoming
  return new Date(festival.startDate) > now;
}

function byStartDate(a: Festival, b: Festival): number {
  if (!a.startDate && !b.startDate) return 0;
  if (!a.startDate) return 1; // TBD dates sort last
  if (!b.startDate) return -1;
  return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
}

export class MockCMSProvider implements CMSClient {
  async getFestivals(): Promise<Festival[]> {
    const now = new Date();

    return mockFestivals
      .filter((festival) => isUpcoming(festival, now))
      .sort(byStartDate);
  }

  async getFestivalBySlug(slug: string): Promise<Festival | null> {
    const festival = mockFestivals.find(f => f.slug === slug);
    return festival || null;
  }

  async getUpcomingFestivals(limit: number = 3): Promise<Festival[]> {
    const now = new Date();
    const upcoming = mockFestivals
      .filter((festival) => isUpcoming(festival, now))
      .sort(byStartDate);

    return upcoming.slice(0, limit);
  }

  async getPage(slug: string): Promise<Page | null> {
    const page = mockPages.find(p => p.slug === slug);
    return page || null;
  }
}
