import { z } from 'zod';

export const ImageSchema = z.string().url().or(z.string().startsWith('/'));

export const SEOSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: ImageSchema.optional(),
});

export const ScheduleItemSchema = z.object({
  time: z.string(),
  title: z.string(),
  description: z.string().optional(),
});

export const FAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const SponsorSchema = z.object({
  name: z.string(),
  logo: ImageSchema,
  url: z.string().url().optional(),
});

export const FestivalStatusSchema = z.enum(['upcoming', 'ongoing', 'completed', 'cancelled']);

export const FestivalCategorySchema = z.enum(['music', 'food', 'cultural', 'seasonal', 'other']);

export const FestivalSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  category: FestivalCategorySchema,
  startDate: z.string().datetime(), // ISO string
  endDate: z.string().datetime(),   // ISO string
  venueName: z.string(),
  venueAddress: z.string(),
  cityState: z.string(),
  heroImage: ImageSchema,
  cardImage: ImageSchema,
  shortDescription: z.string(),
  longDescription: z.string(),
  ticketUrl: z.string().url().optional(),
  officialUrl: z.string().url().optional(),
  highlights: z.array(z.string()),
  schedule: z.array(ScheduleItemSchema),
  faqs: z.array(FAQSchema),
  gallery: z.array(ImageSchema),
  sponsors: z.array(SponsorSchema),
  status: FestivalStatusSchema,
  seo: SEOSchema,
});

export const FestivalListSchema = z.array(FestivalSchema);

export const PageSchema = z.object({
  slug: z.string(),
  title: z.string(),
  content: z.string(), // Markdown or HTML
  seo: SEOSchema,
});
