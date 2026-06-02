import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { cms } from "@/lib/cms/client";
import { FestivalCard } from "@/components/shared/FestivalCard";
import { NextFestivalTimer } from "@/components/shared/NextFestivalTimer";
import { NewsletterSignupForm } from "@/components/shared/NewsletterSignupForm";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabarrus Festivals",
  description:
    "Discover upcoming festivals in Cabarrus County, including July 4th celebrations, Oktoberfest, and more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cabarrus Festivals",
    description:
      "Discover upcoming festivals in Cabarrus County, including July 4th celebrations, Oktoberfest, and more.",
    url: "https://cabarrusfestivals.com",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabarrus Festivals",
    description:
      "Discover upcoming festivals in Cabarrus County, including July 4th celebrations, Oktoberfest, and more.",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
};

export default async function Home() {
  const upcomingFestivals = await cms.getUpcomingFestivals(3);
  const nextFestivalForTimer =
    (await cms.getFestivalBySlug("july-4th-anniversary-festival")) ??
    upcomingFestivals[0];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Celtic Festival Feature */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center text-center overflow-hidden">
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

        <div className="hero-wrap-enter relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-48 lg:gap-56 pt-36 sm:pt-40 pb-28 md:pb-0 md:pt-0">
          <div className="flex-1 flex flex-col items-center md:items-start md:mr-6">
            <h1 className="hero-title-enter text-center md:text-left text-4xl sm:text-5xl md:text-6xl font-bold text-white font-heading mb-6 sm:mb-8">
              Bringing
              <br />
              <span className="whitespace-nowrap">Cabarrus County</span>
              <br />
              Together!
            </h1>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <a
                href="/festivals"
                target="_self"
                rel="noopener noreferrer"
                className="hero-btn-enter px-8 py-4 bg-linear-to-r from-festival-green to-festival-green-dark text-white font-heading font-bold tracking-wide rounded-full hover:from-festival-green-dark hover:to-festival-green-darker hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Upcoming Festivals
              </a>
            </div>
          </div>
          <div className="hero-logo-enter flex justify-center md:justify-end flex-none">
            <Image
              src="/images/cabarrus-logo.png"
              alt="Celtic Logo"
              width={600}
              height={600}
              sizes="100vw"
              priority
              className="hero-logo-pulse-target w-[56%] sm:w-[50%] md:w-full max-w-xs sm:max-w-sm md:max-w-md h-auto md:-translate-x-10"
            />
          </div>
        </div>

        {nextFestivalForTimer && (
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 px-4 w-full flex justify-center">
            <NextFestivalTimer
              festivalName={nextFestivalForTimer.name}
              startDate={nextFestivalForTimer.startDate}
            />
          </div>
        )}
      </section>

      {/* Featured Festivals Loop */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-4" data-aos="fade-up">
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
              data-aos="fade-left"
              data-aos-delay="120"
            >
              View all events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFestivals.map((festival, idx) => (
              <div key={festival.slug} data-aos="fade-up" data-aos-delay={100 + idx * 90}>
                <FestivalCard festival={festival} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-the-lantern.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#022154]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xl md:text-2xl font-heading font-bold" data-aos="fade-up">
            A portion of all sales go toward protecting the vulnerable in Cabarrus County.
          </p>
          <a
            href="https://thelantern.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 px-8 py-3 rounded-full bg-red-500 text-[#ffffff] font-heading font-bold hover:bg-[#AC0725] transition-colors"
            data-aos="zoom-in"
            data-aos-delay="120"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="py-24 bg-linear-to-b from-gray-100 to-gray-50 border-y border-stone-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-aos="fade-up">
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

          <div className="max-w-4xl mx-auto bg-white/85 border border-stone-200 rounded-2xl shadow-sm px-6 py-8 sm:px-10 sm:py-10" data-aos="fade-up" data-aos-delay="120">
            <div className="space-y-6 text-stone-700 leading-relaxed text-base md:text-lg text-justify">
            <p>
              Nestled in the heart of the Piedmont region of North Carolina,
              Cabarrus County is a place where small-town charm meets big
              community spirit. From the historic streets of downtown Concord
              to the warm, welcoming neighborhoods that make up every corner of
              the county, <b>Cabarrus has a way of making people feel like they
              belong the moment they arrive.</b> It&apos;s a place rich in history,
              rooted in tradition, and alive with a growing energy that
              continues to draw people in from all walks of life.
            </p>

            <p>
              The people here are its greatest treasure, and that community
              pride is exactly what inspired Cabarrus Festivals to exist in the
              first place. <b>We're not just celebrating events; we're
              celebrating the county we love.</b>
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/people-celebrating.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-red-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" data-aos="fade-up">
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
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-aos="fade-up">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-stone-500 mb-3">
              Event Location
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-heading">
            All 2026 Festivals will be at Cabarrus Brewing in Concord, NC
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm min-h-[320px]" data-aos="zoom-in" data-aos-delay="120">
              <iframe
                title="Cabarrus Festivals Event Location Map"
                src="https://www.google.com/maps?q=Cabarrus+Brewing+Co,+Concord,+NC&output=embed"
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
        </div>
      </section>
    </div>
  );
}
