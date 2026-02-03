import { Festival, Page } from "../../types";

export const mockPages: Page[] = [
  {
    slug: "about",
    title: "About Us",
    content: `
      <h2>Celebrating Community</h2>
      <p>Cabarrus Festivals is a non-profit initiative dedicated to bringing our community together through celebration. We believe that festivals are more than just events; they are the threads that weave the fabric of our society.</p>
      <p>Founded in 2024, our mission is to showcase the diverse cultures, talents, and flavors that make Cabarrus County unique.</p>
      <h3>Our Values</h3>
      <ul>
        <li>Inclusivity: Events for everyone.</li>
        <li>Sustainability: Minimizing our environmental impact.</li>
        <li>Community: Supporting local businesses and artists.</li>
      </ul>
    `,
    seo: {
      title: "About Us | Cabarrus Festivals",
      description:
        "Learn about our mission to celebrate community in Cabarrus County.",
    },
  },
  {
    slug: "contact",
    title: "Contact Us",
    content: `
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! Whether you're interested in becoming a vendor, sponsor, or volunteer, or just have a question, please reach out.</p>
      <div class="contact-info">
        <p><strong>Email:</strong> info@cabarrusfestivals.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Festival Way, Concord, NC 28025</p>
      </div>
      <h3>Volunteer Opportunities</h3>
      <p>Join our team and help make the magic happen. Email volunteers@cabarrusfestivals.com for more info.</p>
    `,
    seo: {
      title: "Contact Us | Cabarrus Festivals",
      description: "Get in touch with the Cabarrus Festivals team.",
    },
  },
];

export const mockFestivals: Festival[] = [
  {
    slug: "cabarrus-celtic-festival",
    name: "Cabarrus Celtic Festival",
    tagline: "Raise a toast to tradition",
    category: "cultural",
    startDate: "2026-05-30T10:00:00Z",
    endDate: "2026-05-30T23:00:00Z",
    venueName: "Cabarrus Brewing Co.",
    venueAddress: "Cabarrus Brewing Co.",
    cityState: "Concord, NC",
    heroImage: "/images/bg.jpg",
    cardImage: "/images/bg.jpg",
    shortDescription:
      "Where pipes, laughter, food and drink, and community fill the air at Cabarrus Brewing Co.",
    longDescription:
      "Raise a toast to tradition at the Cabarrus Celtic Festival! Browse vibrant vendor tables packed with artisan goods, then savor a custom-made festival beer and specialty dishes crafted just for this event. From hearty bites to sweet treats, every flavor tells a story. VIP tickets are available for early entry, premium seating, and exclusive perks to make your day unforgettable.",
    officialUrl: "https://cabarruscelticfestival.com/",
    highlights: [
      "Custom Brewed Beer",
      "Scottish & Irish National Dishes",
      "Food Trucks",
      "Bagpipers",
      "Tons of Vendors",
      "Irish Dancing (& Lessons)",
      "Live Celtic Music",
      "Raffles & Give Aways",
      "Door Prizes",
      "VIP Access Available",
    ],
    schedule: [
      { time: "10:00", title: "Festival Opens" },
      { time: "12:00", title: "Live Celtic Music Begins" },
      { time: "23:00", title: "Festival Ends" },
    ],
    faqs: [],
    gallery: ["/images/celtic-1.svg", "/images/celtic-2.svg"],
    sponsors: [],
    status: "upcoming",
    seo: {
      title: "Cabarrus Celtic Festival 2026 | Concord, NC",
      description:
        "Join us May 30, 2026 at Cabarrus Brewing Co. for live Celtic music, food, vendors, and more.",
    },
  },
];
