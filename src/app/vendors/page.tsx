import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const vendorFormUrl = "https://form.jotform.com/tentpegcreative/oktoberfest";

const details = [
  {
    title: "Event & Booth Hours",
    items: [
      "Oktoberfest runs September 25–27, 2026 at Cabarrus Brewing Co. in Concord, NC.",
      "Friday is setup only. Vendors are open Saturday morning through Sunday evening, with peak hours between 11am–7pm.",
    ],
  },
  {
    title: "Vendor Space & Requirements",
    items: [
      "Each vendor receives a 10x10 booth space with a randomly assigned location.",
      "Vendors must supply their own tables, chairs, and tent. Limited power is available.",
      "Setup and teardown are the vendor's responsibility.",
      "Aggressive sales tactics or approaching patrons outside your booth are not allowed.",
    ],
  },
  {
    title: "Restrictions",
    items: [
      "No food trucks and no drink vendors are permitted on site.",
      "Desserts and pre-packaged foods are permitted.",
      "All food items must have allergen signage prominently displayed.",
    ],
  },
  {
    title: "Fees",
    items: [
      "One-day participation: $100",
      "Two-day participation: $150",
      "All vendor fees are non-refundable if cancelled.",
    ],
  },
  {
    title: "Family-Friendly Policy",
    items: [
      "Products, services, signage, music, and interactions must remain age-appropriate for a family event.",
    ],
  },
  {
    title: "Additional Info",
    items: [
      "Vendors are encouraged to share attendance on social media using provided images.",
      "Two-day vendors receive on-site overnight storage and parking, at their own risk.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cabarrus Festivals Vendors",
  description:
    "Apply to be a vendor at Cabarrus Festivals events and bring your business to the crowd.",
  alternates: {
    canonical: "/vendors",
  },
  openGraph: {
    title: "Cabarrus Festivals Vendors",
    description:
      "Apply to be a vendor at Cabarrus Festivals events and bring your business to the crowd.",
    url: "https://cabarrusfestivals.com/vendors",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabarrus Festivals Vendors",
    description:
      "Apply to be a vendor at Cabarrus Festivals events and bring your business to the crowd.",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
};

export default function VendorsPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative min-h-[76vh] pt-32 pb-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/people-celebrating.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="max-w-3xl text-white text-center" data-aos="fade-up">
            <p className="text-sm sm:text-base uppercase tracking-[0.22em] text-white/80 mb-4">
              Cabarrus Festivals Vendors
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight drop-shadow-lg">
              Bring your business to the festival.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Apply to be a vendor at our upcoming festivals and get in front
              of thousands of neighbors from across Cabarrus County.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={vendorFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-linear-to-r from-festival-green to-festival-green-dark text-white font-heading font-bold hover:from-festival-green-dark hover:to-festival-green-darker hover:shadow-xl transition-all"
              >
                Apply to be a vendor
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-stone-500 mb-3">
              Oktoberfest 2026
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-heading">
              Vendor Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.map((section, idx) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm p-7"
                data-aos="fade-up"
                data-aos-delay={100 + idx * 60}
              >
                <h3 className="text-xl font-bold text-stone-900 font-heading mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-stone-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-festival-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <a
              href={vendorFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-linear-to-r from-festival-green to-festival-green-dark text-white font-heading font-bold hover:from-festival-green-dark hover:to-festival-green-darker hover:shadow-xl transition-all"
            >
              Apply to be a vendor
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
