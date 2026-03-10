import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Cabarrus Celtic Festival",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Cabarrus Festivals",
    description: "Frequently asked questions about Cabarrus Festival.",
    url: "https://cabarrusfestivals.com/faq",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Cabarrus Festivals",
    description: "Frequently asked questions about Cabarrus Festival.",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
};

const faqData = [
  {
    category: "General Event Information",
    questions: [
      {
        id: "general-1",
        question: "What is Cabarrus Festivals?",
        answer:
          "Cabarrus Festivals is a community-driven hub connecting you to the best local festivals happening throughout Cabarrus County. We bring together a variety of events celebrating food, music, art, culture, and family fun - all in one place so you never miss what's happening in your own backyard.",
      },
      {
        id: "general-2",
        question: "How many festivals are featured on this site?",
        answer:
          "We feature a growing lineup of festivals throughout the year. Each festival has its own dedicated page where you can find everything you need to know about that specific event. Be sure to check back often as new festivals are added regularly!",
      },
      {
        id: "general-3",
        question: "Are the festivals family friendly?",
        answer:
          "Absolutely! Community and family are at the core of everything we do. The majority of our festivals are designed with all ages in mind. Be sure to check each individual festival page for age-specific details, activities, and any restrictions that may apply.",
      },
      {
        id: "general-4",
        question: "Is there an admission fee to attend?",
        answer:
          "Admission varies by festival. Some events are completely free to the public, while others may require a ticket or have a small entry fee. You'll find full pricing details on each festival's individual page.",
      },
      {
        id: "general-5",
        question: "How do I find out about dates, times, and locations?",
        answer:
          "Each festival listed on our site has its own dedicated page with all the details including date, time, location, parking information, and the full event schedule. Simply click on the festival you're interested in to get everything you need.",
      },
      {
        id: "general-6",
        question: "Can I be a vendor at one of the festivals?",
        answer:
          "We love supporting local businesses and makers! Vendor opportunities vary by festival. Head to the individual festival page you're interested in and look for vendor application information, or reach out to us directly through our contact page.",
      },
      {
        id: "general-7",
        question: "Can local musicians or performers apply to be featured?",
        answer:
          "Yes! We are always looking to showcase local talent. Performer and entertainment inquiries vary by event, so visit the specific festival page or contact us and we'll point you in the right direction.",
      },
      {
        id: "general-8",
        question: "How do I stay up to date on new festivals and announcements?",
        answer:
          "The best ways to stay in the loop are to follow us on social media and sign up for our email newsletter. We regularly post updates on new festivals, featured vendors, lineup announcements, and more so you'll always be the first to know.",
      },
      {
        id: "general-9",
        question: "What happens if a festival is cancelled or postponed?",
        answer:
          "In the event of a cancellation or postponement, updates will be posted on the affected festival's page as well as our social media channels as quickly as possible. We recommend following us online so you receive real-time updates.",
      },
    ],
  },
  {
    category: "Tickets & Admission",
    questions: [
      {
        id: "tickets-1",
        question: "How much are tickets?",
        answer:
          "General admission is FREE! VIP tickets are available for $75 and include exclusive perks such as dedicated cash bar access, guaranteed seating, a free Irish dancing lesson, a free professional portrait, and whiskey tasting.",
      },
      {
        id: "tickets-2",
        question: "How do I purchase VIP tickets?",
        answer:
          "VIP tickets can be purchased through our online ticketing system. Visit the link provided on our website or contact info@cabarruscelticfestival.com for more details.",
      },
    ],
  },
  {
    category: "Parking & Transportation",
    questions: [
      {
        id: "parking-1",
        question: "Is parking available?",
        answer:
          "Yes, free parking is available at Cabarrus Brewing Co. and the surrounding area. Please arrive early during peak hours to ensure convenient parking.",
      },
    ],
  },
  {
    category: "Food & Beverages",
    questions: [
      {
        id: "food-1",
        question: "What food options will be available?",
        answer:
          "We will have multiple local food trucks offering a variety of cuisines, including Scottish and Irish national dishes, traditional festival fare, and vegetarian options.",
      },
      {
        id: "food-2",
        question: "Will alcohol be served?",
        answer:
          "Yes, we will have beer and whiskey available for purchase. A custom-brewed festival beer has been created specifically for this event. The venue features a full bar.",
      },
      {
        id: "food-3",
        question: "Are there activities for children?",
        answer:
          "Absolutely! We have a Kids Zone with fun activities, games, Irish dancing lessons, and family-friendly entertainment throughout the day.",
      },
    ],
  },
  {
    category: "Shopping & Vendors",
    questions: [
      {
        id: "vendors-1",
        question: "What vendors will be present?",
        answer:
          "We will have local artisans and Celtic-themed vendors selling crafts, jewelry, clothing, and unique handmade goods. Browse our vibrant vendor marketplace!",
      },
      {
        id: "vendors-2",
        question: "Is this event family-friendly?",
        answer:
          "Yes, the Cabarrus Celtic Festival is a family-friendly celebration. Children are welcome, and we have special activities and entertainment designed for families.",
      },
      {
        id: "vendors-3",
        question: "Is the venue wheelchair accessible?",
        answer:
          "Yes, Cabarrus Brewing Co. is wheelchair accessible. Please let us know if you need any accommodations by contacting info@cabarruscelticfestival.com.",
      },
    ],
  },
  {
    category: "Practical Information",
    questions: [
      {
        id: "practical-1",
        question: "Are pets allowed?",
        answer:
          "Service animals are welcome. For other pets, please contact us at info@cabarruscelticfestival.com to inquire about our pet policy.",
      },
      {
        id: "practical-2",
        question: "Who can I contact with additional questions?",
        answer:
          "Feel free to reach out to us at info@cabarruscelticfestival.com or call 704.997.1964. You can also visit our Contact page for more information.",
      },
      {
        id: "practical-3",
        question: "How can I volunteer or get involved next year?",
        answer:
          "We love community support! Visit our Volunteer page to sign up or email info@cabarrusfestivals.com for volunteer opportunities.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 pt-16 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
            FAQ
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            Frequently asked questions about Cabarrus Festival
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqData} />
        </div>
      </section>
    </div>
  );
}
