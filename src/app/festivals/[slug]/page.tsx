import { cms } from "@/lib/cms/client";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string } | Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const festival = await cms.getFestivalBySlug(slug);
  if (!festival) return {};

  return {
    title: festival.seo.title,
    description: festival.seo.description,
    alternates: {
      canonical: `/festivals/${festival.slug}`,
    },
    openGraph: {
      title: festival.seo.title,
      description: festival.seo.description,
      url: `https://cabarrusfestivals.com/festivals/${festival.slug}`,
      images: festival.seo.ogImage
        ? [festival.seo.ogImage]
        : ["https://i.imgur.com/Tg5iY0r.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: festival.seo.title,
      description: festival.seo.description,
      images: festival.seo.ogImage ? [festival.seo.ogImage] : ["https://i.imgur.com/Tg5iY0r.jpeg"],
    },
  };
}

export default async function FestivalDetailPage({ params }: Props) {
  const { slug } = await Promise.resolve(params);
  const festival = await cms.getFestivalBySlug(slug);

  if (!festival) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: festival.name,
    startDate: festival.startDate,
    endDate: festival.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: festival.venueName,
      address: {
        "@type": "PostalAddress",
        streetAddress: festival.venueAddress,
        addressLocality: festival.cityState.split(",")[0].trim(),
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
    image: [festival.heroImage],
    description: festival.shortDescription,
  };

  const toGoogleDate = (iso: string) =>
    new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    festival.name,
  )}&dates=${toGoogleDate(festival.startDate)}/${toGoogleDate(
    festival.endDate,
  )}&details=${encodeURIComponent(
    festival.shortDescription,
  )}&location=${encodeURIComponent(`${festival.venueName}, ${festival.cityState}`)}`;
  const appleCalendarUrl = `/api/calendar/${festival.slug}`;

  return (
    <div className="bg-white pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={festival.heroImage}
          alt={festival.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center text-white px-4 max-w-4xl">
            <span className="inline-block px-3 py-1 bg-festival-green rounded-full text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              {festival.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {festival.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 mb-8">
              {festival.tagline}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-festival-green" />
                <span>{formatDate(festival.startDate)}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-festival-green" />
                <span>
                  {festival.venueName}, {festival.cityState}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="space-y-12">
              {/* About */}
              <section className="">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About the Festival
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{festival.longDescription}</p>
                </div>

                {festival.highlights.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                    <ul className="flex flex-wrap gap-2">
                      {festival.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="inline-flex items-center text-gray-700 bg-festival-green/10 px-2 py-1 rounded-md"
                        >
                          <span className="w-1 h-1 bg-festival-green rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Gallery */}
              {festival.gallery.length > 0 && (
                <section className="">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Gallery
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {festival.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`Gallery image ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Event Details */}
              <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Event Details
                </h3>
                <div className="space-y-4">
                  {festival.ticketUrl && (
                    <a
                      href={festival.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-3 bg-linear-to-r from-festival-green to-festival-green-dark text-white font-bold rounded-lg hover:from-festival-green-dark hover:to-festival-green-darker transition-colors"
                    >
                      Get Tickets
                    </a>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-3 bg-linear-to-r from-festival-green to-festival-green-dark text-white font-bold rounded-lg hover:from-festival-green-dark hover:to-festival-green-darker transition-colors"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2 fill-current"
                      >
                        <path d="M21 12.23c0-.71-.06-1.39-.18-2.04H12v3.86h5.04a4.32 4.32 0 0 1-1.87 2.84v2.36h3.03c1.77-1.63 2.8-4.04 2.8-7.02Z" />
                        <path d="M12 21.5c2.53 0 4.65-.84 6.2-2.27l-3.03-2.36c-.84.57-1.92.91-3.17.91-2.44 0-4.5-1.65-5.24-3.87H3.63v2.44A9.36 9.36 0 0 0 12 21.5Z" />
                        <path d="M6.76 13.91a5.62 5.62 0 0 1 0-3.58V7.89H3.63a9.5 9.5 0 0 0 0 8.46l3.13-2.44Z" />
                        <path d="M12 6.45c1.38 0 2.61.47 3.58 1.4l2.68-2.68C16.64 3.69 14.52 2.86 12 2.86A9.36 9.36 0 0 0 3.63 7.89l3.13 2.44c.74-2.22 2.8-3.88 5.24-3.88Z" />
                      </svg>
                      Save to Google Calendar
                    </a>
                    <a
                      href={appleCalendarUrl}
                      className="inline-flex items-center justify-center px-4 py-3 bg-linear-to-r from-festival-green to-festival-green-dark text-white font-bold rounded-lg hover:from-festival-green-dark hover:to-festival-green-darker transition-colors"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2 fill-current"
                      >
                        <path d="M16.37 1.43c0 1.14-.42 2.24-1.16 3.04-.78.84-2.07 1.48-3.2 1.43-.14-1.11.42-2.27 1.14-3.05.79-.88 2.15-1.51 3.22-1.42Zm3.8 16.61c-.56 1.25-.82 1.8-1.53 2.9-.99 1.53-2.38 3.43-4.1 3.45-1.53.02-1.93-1-4-1-2.07 0-2.51 1.02-4.03.98-1.72-.03-3.04-1.74-4.03-3.27C-.25 16.82-1.6 8.96 2.23 5.62 3.58 4.43 5.3 3.73 6.92 3.73c1.65 0 2.69 1.03 4.05 1.03 1.32 0 2.13-1.03 4.03-1.03 1.45 0 2.97.79 4.31 2.15-3.57 1.97-2.99 7.08.86 8.7Z" />
                      </svg>
                      Save to Apple Calendar
                    </a>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              {festival.faqs.length > 0 && (
                <section className="">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {festival.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* Sponsors */}
            {festival.sponsors.length > 0 && (
              <section className="">
                <h3 className="text-xl font-bold mb-4">Sponsors</h3>
                <div className="grid grid-cols-2 gap-4">
                  {festival.sponsors.map((sponsor, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center p-4 border border-gray-200 rounded-lg h-24 relative"
                    >
                      <span className="text-xs font-bold text-gray-400 text-center">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
