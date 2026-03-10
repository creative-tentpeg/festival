import { Festival, Page } from "../../types";

export const mockPages: Page[] = [
  {
    slug: "about",
    title: "About Us",
    content: `
      <p>At Cabarrus Festivals, we believe life is better together. Born from a deep love for our community, we are dedicated to bringing the heart of Cabarrus County to life through vibrant, locally-driven festivals that celebrate the people, flavors, and sounds that make this place truly special. From the moment you arrive, you'll be surrounded by the energy of live music, the aromas of incredible local vendors, and the warmth of neighbors becoming friends. Whether you're a longtime local or discovering our community for the first time, there's a place for you here.</p>
      <p>Our festivals are more than just events, they're traditions in the making. We partner with local artisans, food vendors, musicians, and small businesses to create experiences that reflect the unique spirit of Cabarrus County. Every gathering is designed with families in mind, offering something for every age and walk of life. We're proud to be a gathering place where kids play, laughter fills the air, and community roots grow a little deeper with every festival. Come as a stranger...leave as a neighbor!</p>
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
        <p><strong>Phone:</strong> 704.997.1964</p>
        <p><strong>Address:</strong> 57 Union St S., Concord, NC 28025</p>
      </div>
      <h3>Volunteer Opportunities</h3>
      <p>Join our team and help make the magic happen. Email info@cabarrusfestivals.com for more info.</p>
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
  {
    slug: "july-4th-anniversary-festival",
    name: "July 4th Anniversary Festival",
    tagline: "Celebrate freedom, community, and summer fun",
    category: "seasonal",
    startDate: "2026-07-04T10:00:00Z",
    endDate: "2026-07-04T22:00:00Z",
    venueName: "Cabarrus Brewing Co.",
    venueAddress: "Cabarrus Brewing Co.",
    cityState: "Concord, NC",
    heroImage: "/images/4-july.jpg",
    cardImage: "/images/4-july.jpg",
    shortDescription:
      "A festive July 4th celebration with music, local vendors, family activities, and community spirit.",
    longDescription:
      "Join us for the July 4th Anniversary Festival in the heart of Concord. Enjoy local food vendors, live entertainment, family-friendly activities, and a vibrant community celebration.",
    officialUrl: "#",
    highlights: [
      "Live Music",
      "Family Activities",
      "Local Vendors",
      "Community Celebration",
    ],
    schedule: [
      { time: "10:00", title: "Festival Opens" },
      { time: "14:00", title: "Live Music and Performances" },
      { time: "22:00", title: "Festival Closes" },
    ],
    faqs: [],
    gallery: [
      "/images/gallery-4th-july-1.jpg",
      "/images/4th-july-gallery-2.jpeg",
      "/images/4th-july-gallery-3.jpg",
    ],
    sponsors: [],
    status: "upcoming",
    seo: {
      title: "July 4th Anniversary Festival 2026 | Concord, NC",
      description:
        "Celebrate July 4th in Concord with live music, food, and family-friendly festival fun.",
    },
  },
  {
    slug: "oktoberfest-2026",
    name: "Oktoberfest!",
    tagline: "Two days of autumn flavors, music, and celebration",
    category: "food",
    startDate: "2026-10-03T11:00:00Z",
    endDate: "2026-10-04T23:00:00Z",
    venueName: "Cabarrus Brewing Co.",
    venueAddress: "Cabarrus Brewing Co.",
    cityState: "Concord, NC",
    heroImage: "/images/ocktober-fest.jpg",
    cardImage: "/images/ocktober-fest.jpg",
    shortDescription:
      "Celebrate Oktoberfest on October 3rd and 4th, 2026 with food, drinks, music, and community fun.",
    longDescription:
      "Oktoberfest! brings two full days of festive energy to Cabarrus County with local vendors, live entertainment, and seasonal favorites in a welcoming community setting.",
    officialUrl: "#",
    highlights: [
      "Live Entertainment",
      "Seasonal Food & Drinks",
      "Local Vendors",
      "Family-Friendly Atmosphere",
    ],
    schedule: [
      { time: "11:00", title: "Day 1 Opens" },
      { time: "12:00", title: "Music and Vendor Market" },
      { time: "23:00", title: "Day 2 Closes" },
    ],
    faqs: [],
    gallery: [
      "/images/Oktoberfest-1.jpg",
      "/images/Oktoberfest-2.jpg",
      "/images/Oktoberfest-3.jpg",
    ],
    sponsors: [],
    status: "upcoming",
    seo: {
      title: "Oktoberfest 2026 | Concord, NC",
      description:
        "Join Oktoberfest on October 3rd and 4th, 2026 for food, music, and seasonal celebration in Concord.",
    },
  },
];
