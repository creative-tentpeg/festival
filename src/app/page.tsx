import Link from "next/link";
import Image from "next/image";
import { cms } from "@/lib/cms/client";
import { FestivalCard } from "@/components/shared/FestivalCard";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const upcomingFestivals = await cms.getUpcomingFestivals(3);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Celtic Festival Feature */}
      <section className="relative h-screen min-h-150 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#000000]/60"></div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-14 md:gap-48 lg:gap-56 pt-28 sm:pt-32 md:pt-0">
          <div className="flex-1 flex flex-col items-center md:items-start md:mr-6">
            <Image
              src="/images/title-2-1024x415.png"
              alt="Cabarrus Celtic Festival Title"
              width={400}
              height={200}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
              priority
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mb-6 sm:mb-8"
            />
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <a
                href="https://cabarruscelticfestival.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-linear-to-r from-[#125427] to-green-700 text-white font-heading font-bold tracking-wide rounded-full hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Visit Official Site
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end md:ml-6">
            <Image
              src="/images/Celtic-Logo-All-white-2-1024x1024.png"
              alt="Celtic Logo"
              width={550}
              height={550}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 40vw"
              priority
              className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Festivals Loop */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 font-heading">
                Upcoming Events
              </h2>
              <p className="mt-2 text-stone-600">
                Don't miss out on these upcoming festivals
              </p>
            </div>
            <Link
              href="/festivals"
              className="hidden sm:flex items-center px-6 py-2 text-white font-medium transition-all rounded-full bg-linear-to-r from-[#125427] to-green-700 hover:shadow-lg hover:-translate-y-1 mt-4 md:mt-0"
            >
              View all events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFestivals.map((festival) => (
              <FestivalCard key={festival.slug} festival={festival} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
