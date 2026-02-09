import { cms } from "@/lib/cms/client";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const festival = await cms.getFestivalBySlug(params.slug);
  if (!festival) return {};

  return {
    title: `${festival.seo.title} | Cabarrus Festivals`,
    description: festival.seo.description,
    openGraph: {
      images: festival.seo.ogImage ? [festival.seo.ogImage] : [],
    },
  };
}

export default async function FestivalDetailPage({ params }: Props) {
  const festival = await cms.getFestivalBySlug(params.slug);

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
        <div className="absolute inset-0 flex items-center justify-center">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About the Festival
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{festival.longDescription}</p>
                </div>

                {festival.highlights.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {festival.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700 bg-festival-green/10 p-3 rounded-lg"
                        >
                          <span className="w-2 h-2 bg-festival-green rounded-full mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Schedule */}
              {festival.schedule.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Schedule of Events
                  </h2>
                  <div className="space-y-4">
                    {festival.schedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-100 rounded-lg hover:border-festival-green/20 transition-colors"
                      >
                        <div className="min-w-25 flex items-center text-festival-green font-bold">
                          <Clock className="w-5 h-5 mr-2" />
                          {item.time}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-gray-600 text-sm mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {festival.faqs.length > 0 && (
                <section>
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
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Actions */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold mb-4">Event Details</h3>
                <div className="space-y-4">
                  {festival.ticketUrl && (
                    <a
                      href={festival.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-3 bg-linear-to-r from-festival-green to-festival-green-dark text-white font-bold rounded-lg hover:from-festival-green-dark hover:to-festival-green-darker transition-colors"
                    >
                      Get Tickets
                    </a>
                  )}
                  {festival.officialUrl && (
                    <a
                      href={festival.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-3 bg-white border-2 border-festival-green text-festival-green font-bold rounded-lg hover:bg-white/50 transition-colors"
                    >
                      Official Website <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <p className="text-sm text-gray-500 mb-1">Venue Address:</p>
                    <p className="font-medium text-gray-900">
                      {festival.venueAddress}
                    </p>
                    <p className="font-medium text-gray-900">
                      {festival.cityState}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              {festival.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {festival.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-lg overflow-hidden"
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
                </div>
              )}

              {/* Sponsors */}
              {festival.sponsors.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Sponsors</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {festival.sponsors.map((sponsor, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center p-4 border border-gray-200 rounded-lg h-24 relative"
                      >
                        {/* In a real app, use Image, but logos might vary in aspect ratio */}
                        <span className="text-xs font-bold text-gray-400 text-center">
                          {sponsor.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
