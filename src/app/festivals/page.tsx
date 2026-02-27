import { cms } from "@/lib/cms/client";
import { FestivalCard } from "@/components/shared/FestivalCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Festivals | Cabarrus Festivals",
  description: "Browse all upcoming festivals in Cabarrus County.",
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
            All Festivals
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
    </div>
  );
}
