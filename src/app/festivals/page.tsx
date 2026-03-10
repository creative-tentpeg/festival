import { cms } from "@/lib/cms/client";
import { FestivalCard } from "@/components/shared/FestivalCard";
import { NewsletterSignupForm } from "@/components/shared/NewsletterSignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Festivals",
  description: "Browse all upcoming festivals in Cabarrus County.",
  alternates: {
    canonical: "/festivals",
  },
  openGraph: {
    title: "All Festivals | Cabarrus Festivals",
    description: "Browse all upcoming festivals in Cabarrus County.",
    url: "https://cabarrusfestivals.com/festivals",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Festivals | Cabarrus Festivals",
    description: "Browse all upcoming festivals in Cabarrus County.",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
};

export default async function FestivalsPage() {
  const festivals = await cms.getFestivals();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 pt-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
          Upcoming Festivals 
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow-md">
            Discover all the amazing celebrations happening in Cabarrus County
          </p>
        </div>
      </section>

      {/* Festivals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {festivals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival) => (
              <FestivalCard key={festival.slug} festival={festival} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-500">No festivals found.</p>
          </div>
        )}
      </div>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-4th-july-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Stay Connected!
          </h2>
          <p className="mt-4 text-base md:text-lg">
            Get updates on all of our upcoming events and festivals!
          </p>

          <NewsletterSignupForm
            formClassName="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
            inputClassName="w-full px-4 py-3 rounded-full border border-white/40 bg-white/15 text-white placeholder:text-white/80 focus:outline-none focus:border-white"
            buttonClassName="px-7 py-3 rounded-full bg-[#022154] text-white font-heading font-bold hover:bg-[#01163a] transition-colors whitespace-nowrap"
            buttonLabel="Join Mailing List"
            inputPlaceholder="Your email address"
            successClassName="mt-3 text-sm text-white"
            errorClassName="mt-3 text-sm text-red-100"
          />
        </div>
      </section>
    </div>
  );
}
