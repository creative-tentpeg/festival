import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, HandHeart } from "lucide-react";

const sponsorFormUrl = "https://form.jotform.com/261375185043153";

const benefits = [
  {
    title: "Reach thousands, face to face.",
    description:
      "Festival crowds number in the thousands and keep growing every season. Your brand is there in person, on shirts, banners, and the festival grounds, not buried in a feed!",
  },
  {
    title: "Be seen doing good locally.",
    description:
      "Festivals are where the community shows up. Sponsoring puts your name behind the events people love. The kind of goodwill no ad buy can match.",
  },
  {
    title: "Get in while we grow.",
    description:
      "Our festival calendar is expanding fast. Sponsor now and your visibility multiplies with every new event we add at today's rates.",
  },
];

const levels = [
  {
    name: "Gold",
    price: "$2,000",
    note: "Top billing",
    buttonLabel: "Sponsor at Gold",
    featured: true,
    perks: [
      "Large logo on t-shirts, banners, and promotional materials",
      "Social media mentions (multiple posts)",
      "Premium booth space",
      "Program advertisement (full page)",
    ],
  },
  {
    name: "Silver",
    price: "$1,000",
    buttonLabel: "Sponsor at Silver",
    featured: false,
    formUrl: "https://form.jotform.com/261375768818170",
    perks: [
      "Medium logo on t-shirts and select materials",
      "Social media shoutouts",
      "Program advertisement (half page)",
      "Standard booth space",
    ],
  },
  {
    name: "Bronze",
    price: "$500",
    buttonLabel: "Sponsor at Bronze",
    featured: false,
    perks: [
      "Small logo on select materials",
      "Social media mention",
      "Program listing",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cabarrus Festivals Sponsorship",
  description:
    "Put your business on the main stage as a Cabarrus Festivals sponsor with visible recognition at local community events.",
  alternates: {
    canonical: "/sponsorship",
  },
  openGraph: {
    title: "Cabarrus Festivals Sponsorship",
    description:
      "Join Cabarrus Festivals as a sponsor and turn a great day out into lasting local visibility for your business.",
    url: "https://cabarrusfestivals.com/sponsorship",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabarrus Festivals Sponsorship",
    description:
      "Join Cabarrus Festivals as a sponsor and turn a great day out into lasting local visibility for your business.",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
};

export default function SponsorshipPage() {
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
              Cabarrus Festivals Sponsorship
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight drop-shadow-lg">
              Put your business on the main stage.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Cabarrus Festivals bring thousands of neighbors together to
              celebrate and our sponsors are front and center every time. Join
              us as a festival sponsor and turn a great day out into lasting
              local visibility for your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="#sponsorship-levels"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-linear-to-r from-festival-green to-festival-green-dark text-white font-heading font-bold hover:from-festival-green-dark hover:to-festival-green-darker hover:shadow-xl transition-all"
              >
                See sponsorship levels
              </Link>
              <a
                href={sponsorFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-[#022154] font-heading font-bold hover:bg-white/90 transition-colors"
              >
                Go to sponsor form
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-stone-500 mb-3">
              Local Visibility
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-heading">
              Why Sponsor a Festival?
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-stone-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-festival-green" />
              <span className="h-px w-12 bg-stone-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm p-7"
                data-aos="fade-up"
                data-aos-delay={100 + idx * 90}
              >
                <div className="w-11 h-11 rounded-full bg-festival-green/10 text-festival-green flex items-center justify-center mb-5">
                  <HandHeart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-heading mb-3">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsorship-levels" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-stone-500 mb-3">
              Sponsorship Levels
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-heading">
              Choose the tier that fits your business.
            </h2>
            <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed">
              Every level comes with real, visible recognition at our festivals.
              Choose the tier that fits your business and we&apos;ll make sure
              the crowd knows your name.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {levels.map((level, idx) => (
              <article
                key={level.name}
                className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
                  level.featured
                    ? "border-festival-green bg-stone-50"
                    : "border-stone-200 bg-white"
                }`}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 80}
              >
                {level.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-festival-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Top billing
                  </span>
                )}
                <div className={level.featured ? "pr-24" : undefined}>
                  <h3 className="text-2xl font-bold text-stone-900 font-heading">
                    {level.name}
                  </h3>
                  <p className="mt-2 text-3xl font-black text-festival-green">
                    {level.price}
                  </p>
                  {level.note && (
                    <p className="mt-1 text-sm font-semibold text-stone-500">
                      {level.note}
                    </p>
                  )}
                </div>

                <ul className="mt-6 space-y-4 text-stone-700 grow">
                  {level.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-festival-green" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={level.formUrl ?? sponsorFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-linear-to-r from-festival-green to-festival-green-dark px-5 py-3 text-center font-heading font-bold text-white transition-colors hover:from-festival-green-dark hover:to-festival-green-darker"
                >
                  {level.buttonLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-cabarrus.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-red-900/90" />
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Ready to join the celebration?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-white/90">
            Fill out our short sponsor form and we&apos;ll follow up to lock in
            your tier, collect your logo, and get your business festival-ready.
          </p>
          <a
            href={sponsorFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#022154] text-white font-heading font-bold hover:bg-[#01163a] transition-colors"
          >
            Start your sponsorship
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <p className="mt-6 text-sm md:text-base text-white/85">
            Questions first? We&apos;re happy to talk through the right fit for
            your business. Email us at:{" "}
            <a
              href="mailto:info@cabarrusfestivals.com"
              className="font-bold text-white underline underline-offset-4 hover:text-white/80"
            >
              info@cabarrusfestivals.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
