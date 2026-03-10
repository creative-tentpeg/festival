import { cms } from "@/lib/cms/client";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await cms.getPage("about");
  if (!page) return {};

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: "https://cabarrusfestivals.com/about",
      images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
    },
  };
}

export default async function AboutPage() {
  const page = await cms.getPage("about");

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 pt-16 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/about-us.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
            {page.title}
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            Learn about our mission and values
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-justify [&_p]:text-justify">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </div>
      </section>
    </div>
  );
}
