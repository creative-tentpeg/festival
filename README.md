# Cabarrus Festivals Portal

A production-grade festival portal for Cabarrus County, built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Multi-Festival Support**: Designed to host multiple festivals (Celtic, Caribbean, Christmas, etc.).
- **CMS-Ready Architecture**: All content is driven by a CMS abstraction layer. Currently uses a local Mock CMS but can be swapped for a headless CMS (Contentful, Sanity, etc.) without refactoring the UI.
- **Dynamic Routing**: Festival pages are generated dynamically based on slugs.
- **Filtering**: Filter festivals by category and month.
- **Calendar View**: View festivals in a monthly calendar format.
- **SEO Optimized**: Uses Next.js Metadata API and JSON-LD for rich results.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Run the development server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for production**:

    ```bash
    npm run build
    npm start
    ```

## Content Management

### Editing Content (Mock CMS)

The project currently uses a local JSON-based "Mock CMS". To edit content:

1.  Navigate to `src/lib/cms/providers/mock/data.ts`.
2.  Modify the `mockFestivals` array to add, update, or remove festivals.
3.  Modify the `mockPages` array to update the About or Contact pages.

The types are defined in `src/lib/cms/types.ts` and validated using Zod schemas in `src/lib/cms/schema.ts`.

### Adding Images

1.  Place your images in the `public/images` directory.
2.  Reference them in `data.ts` using the path `/images/filename.jpg`.
3.  For hero images, aim for 1920x1080 resolution.
4.  For card images, aim for 800x600 resolution.

### Swapping the CMS

To switch to a real headless CMS (e.g., Contentful):

1.  Create a new provider in `src/lib/cms/providers/contentful` (or similar).
2.  Implement the `CMSClient` interface defined in `src/lib/cms/types.ts`.
3.  Update `src/lib/cms/client.ts` to initialize your new provider instead of `MockCMSProvider`.

Example `client.ts` update:

```typescript
// src/lib/cms/client.ts
import { ContentfulProvider } from './providers/contentful';

export const cms = new ContentfulProvider({
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
```

## Project Structure

-   `src/app`: Next.js App Router pages and layouts.
-   `src/components`: React components.
    -   `ui`: Reusable UI atoms (buttons, inputs, etc.).
    -   `shared`: Components used across multiple pages (Navbar, Footer, Cards).
    -   `festivals`: Components specific to festival features.
-   `src/lib`: Utilities and libraries.
    -   `cms`: The CMS abstraction layer.
-   `public`: Static assets (images, fonts).

## Tech Stack

-   **Framework**: Next.js 14+
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Validation**: Zod
-   **Date Handling**: date-fns
-   **Icons**: Lucide React
