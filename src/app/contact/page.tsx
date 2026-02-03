import { cms } from "@/lib/cms/client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Facebook, Instagram } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const page = await cms.getPage("contact");
  if (!page) return {};

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function ContactPage() {
  const page = await cms.getPage("contact");

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
            {page.title}
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            We’d love to hear from you. Send us a message and we’ll get back
            soon.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
              <div
                className="prose prose-lg prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-stone-900 mb-3">
                  Follow us
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61580074512466"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#125427] text-white hover:bg-[#0d3a1c] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/cabarrusceltic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#125427] text-white hover:bg-[#0d3a1c] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
              <h2 className="text-2xl font-bold text-stone-900 font-heading mb-6">
                Send us a message
              </h2>
              <form
                className="space-y-5"
                action="mailto:info@cabarruscelticfestival.com"
                method="post"
                encType="text/plain"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#125427] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#125427] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#125427] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#125427] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg bg-[#125427] hover:bg-[#0d3a1c] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
