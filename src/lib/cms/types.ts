import { z } from 'zod';
import { 
  FestivalSchema, 
  FestivalStatusSchema, 
  FestivalCategorySchema, 
  ScheduleItemSchema, 
  FAQSchema, 
  SponsorSchema, 
  SEOSchema,
  PageSchema
} from './schema';

export type Festival = z.infer<typeof FestivalSchema>;
export type FestivalStatus = z.infer<typeof FestivalStatusSchema>;
export type FestivalCategory = z.infer<typeof FestivalCategorySchema>;
export type ScheduleItem = z.infer<typeof ScheduleItemSchema>;
export type FAQ = z.infer<typeof FAQSchema>;
export type Sponsor = z.infer<typeof SponsorSchema>;
export type SEO = z.infer<typeof SEOSchema>;
export type Page = z.infer<typeof PageSchema>;

export interface CMSClient {
  getFestivals(): Promise<Festival[]>;
  getFestivalBySlug(slug: string): Promise<Festival | null>;
  getUpcomingFestivals(limit?: number): Promise<Festival[]>;
  getPage(slug: string): Promise<Page | null>;
}
