import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Cabarrus Festivals",
  description: "Frequently asked questions about Cabarrus Celtic Festival",
};

const faqData = [
  {
    category: "General Event Information",
    questions: [
      {
        id: "general-1",
        question: "What time does the festival start and end?",
        answer:
          "The festival runs from 10:00 AM to 11:00 PM on May 30th, 2026. Gates open at 10 AM, with entertainment and activities throughout the day.",
      },
      {
        id: "general-2",
        question: "Where is the festival located?",
        answer:
          "The Cabarrus Celtic Festival is held at Cabarrus Brewing Co. in Concord, NC. The venue provides ample parking and easy access for all attendees.",
      },
      {
        id: "general-3",
        question: "Is this an indoor or outdoor event?",
        answer:
          "The festival is held at an indoor venue, making it comfortable regardless of weather conditions.",
      },
      {
        id: "general-4",
        question: "Is the event rain or shine?",
        answer:
          "Yes, the event will be held rain or shine. As an indoor event, weather is not a concern.",
      },
      {
        id: "general-5",
        question: "How do I sponsor this event?",
        answer:
          "If you are interested in sponsoring the Cabarrus Celtic Festival, please visit our Sponsor page or contact us at info@cabarruscelticfestival.com for sponsorship opportunities.",
      },
      {
        id: "general-6",
        question: "Can I be a vendor on site?",
        answer:
          "Yes! We welcome local vendors and artisans. Please visit our Vendor page or contact us at info@cabarruscelticfestival.com to apply.",
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
          "We love community support! Visit our Volunteer page to sign up or email volunteers@cabarruscelticfestival.com for volunteer opportunities.",
      },
    ],
  },
];

export default function FAQPage() {
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
            FAQ
          </h1>
          <p className="text-xl text-white/90 font-light drop-shadow-md">
            Frequently asked questions about the Cabarrus Celtic Festival
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
