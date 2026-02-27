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
            src="/images/bg-cabarrus.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#000000]/60"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-14 md:gap-48 lg:gap-56 pt-28 sm:pt-32 md:pt-0">
          <div className="flex-1 flex flex-col items-center md:items-start md:mr-6">
            <h1 className="text-center md:text-left text-4xl sm:text-5xl md:text-6xl font-bold text-white font-heading mb-6 sm:mb-8">
              Bringing
              <br />
              <span className="whitespace-nowrap">Cabarrus County</span>
              <br />
              Together!
            </h1>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              {/* eslint-disable-next-line */}
              <a
                href="https://cabarruscelticfestival.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-linear-to-r from-festival-green to-festival-green-dark text-white font-heading font-bold tracking-wide rounded-full hover:from-festival-green-dark hover:to-festival-green-darker hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Visit Official Site
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end md:ml-6 grow">
            <Image
              src="/images/cabarrus-white-logo.png"
              alt="Celtic Logo"
              width={600}
              height={600}
              sizes="100vw"
              priority
              className="w-full max-w-md h-auto md:-translate-x-10"
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
                Don&apos;t miss out on these upcoming festivals
              </p>
            </div>
            <Link
              href="/festivals"
              className="hidden sm:flex items-center px-6 py-2 text-white font-medium transition-all rounded-full bg-linear-to-r from-festival-green to-festival-green-dark hover:from-festival-green-dark hover:to-festival-green-darker hover:shadow-lg hover:-translate-y-1 mt-4 md:mt-0"
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

      <section className="py-24 bg-linear-to-b from-gray-100 to-gray-50 border-y border-stone-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-stone-500 mb-3">
              Our Community
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-heading text-center">
              What Makes Cabarrus County so Special?
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-stone-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-festival-green" />
              <span className="h-px w-12 bg-stone-300" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/85 border border-stone-200 rounded-2xl shadow-sm px-6 py-8 sm:px-10 sm:py-10">
            <div className="space-y-6 text-stone-700 leading-relaxed text-base md:text-lg text-justify">
            <p>
              Nestled in the heart of the Piedmont region of North Carolina,
              Cabarrus County is a place where small-town charm meets big
              community spirit. From the historic streets of downtown Concord
              to the warm, welcoming neighborhoods that make up every corner of
              the county, Cabarrus has a way of making people feel like they
              belong the moment they arrive. It&apos;s a place rich in history,
              rooted in tradition, and alive with a growing energy that
              continues to draw people in from all walks of life.
            </p>

            <p>
              The people here are its greatest treasure, and that community
              pride is exactly what inspired Cabarrus Festivals to exist in the
              first place. We&apos;re not just celebrating events; we&apos;re
              celebrating the county we love.
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
