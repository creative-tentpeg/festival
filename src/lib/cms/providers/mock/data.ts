import { Festival, Page } from "../../types";

export const mockPages: Page[] = [
  {
    slug: "about",
    title: "About Us",
    content: `
      <p>At Cabarrus Festivals, we believe life is better together. <b>Born from a deep love for our community</b>, we are dedicated to bringing the heart of Cabarrus County to life through vibrant, locally-driven festivals that celebrate the people, flavors, and sounds that make this place truly special. From the moment you arrive, you'll be surrounded by the energy of live music, the aromas of incredible local vendors, and the warmth of neighbors becoming friends. <b>Whether you're a longtime local or discovering our community for the first time, there's a place for you here.</b></p>
      <p>Our festivals are more than just events, they're <b>traditions in the making</b>. We partner with local artisans, food vendors, musicians, and small businesses to create experiences that reflect the unique spirit of Cabarrus County. Every gathering is designed with families in mind, offering something for every age and walk of life. We're proud to be a gathering place where kids play, laughter fills the air, and community roots grow a little deeper with every festival. <b>Come as a stranger...leave as a neighbor!</b></p>
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
    overlayLogo: "/images/white-logo.png",
    overlayLogoClassName: "h-auto w-24 sm:w-28 md:w-32",
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
    status: "completed",
    seo: {
      title: "Cabarrus Celtic Festival 2026 | Concord, NC",
      description:
        "Join us May 30, 2026 at Cabarrus Brewing Co. for live Celtic music, food, vendors, and more.",
    },
  },
  {
    slug: "oktoberfest-2026",
    name: "Oktoberfest!",
    tagline: "Prost, Cabarrus. Oktoberfest is back!",
    category: "food",
    startDate: "2026-09-25T11:00:00-04:00",
    endDate: "2026-09-27T23:00:00-04:00",
    venueName: "Cabarrus Brewing Co.",
    venueAddress: "Cabarrus Brewing Co.",
    cityState: "Concord, NC",
    overlayLogo: "/images/Oktoberfest-logo.png",
    overlayLogoClassName: "h-auto w-28 sm:w-32 md:w-36",
    heroImage: "/images/ocktober-fest.jpg",
    cardImage: "/images/ocktober-fest.jpg",
    shortDescription:
      "Celebrate Oktoberfest on Sept 25-27, 2026 with food, drinks, music, and community fun.",
    longDescription:
      "Raise your stein and join us September 25–27 for a weekend steeped in tradition! Our Oktoberfest celebration kicks off Friday evening at 4 PM, and when the clock strikes five, the ceremonial keg tapping officially opens the festivities in true Bavarian style. It's the moment the whole weekend builds from the first pour, the first cheers, and the beginning of three unforgettable days celebrating the rich German heritage of Cabarrus County.",
    highlightsTitle: "Good beer tastes better with neighbors.",
    officialUrl: "#",
    highlights: [
      "Live Entertainment",
      "Specialty Foods and Drinks",
      "Local Vendors",
      "Family-Friendly Atmosphere",
      "Competitions and Prizes",
    ],
    schedule: [
      { time: "11:00", title: "Day 1 Opens" },
      { time: "12:00", title: "Music and Vendor Market" },
      { time: "23:00", title: "Day 2 Closes" },
    ],
    faqs: [],
    gallery: [
      "/images/oct1.jpg",
      "/images/oct2.jpg",
      "/images/oct3.jpg",
      "/images/oct4.jpg",
      "/images/oct5.jpg",
      "/images/oct6.jpg",
    ],
    sponsors: [],
    status: "upcoming",
    seo: {
      title: "Oktoberfest 2026 | Concord, NC",
      description:
        "Join Oktoberfest on Sept 25-27, 2026 for food, music, and seasonal celebration in Concord.",
    },
  },
  {
    slug: "christmas-tree-lighting-2026",
    name: "Christmas Tree Lighting",
    tagline: "More information coming soon",
    category: "seasonal",
    cityState: "Cabarrus County, NC",
    heroImage: "/images/christmas-hero.svg",
    cardImage: "/images/christmas-card.svg",
    shortDescription: "More information coming soon!",
    longDescription:
      "More information coming soon! Stay tuned as we share details on this holiday celebration in Cabarrus County.",
    highlights: [],
    schedule: [],
    faqs: [],
    gallery: [],
    sponsors: [],
    status: "upcoming",
    seo: {
      title: "Christmas Tree Lighting 2026 | Concord, NC",
      description:
        "More information coming soon for the Christmas Tree Lighting in Concord, NC.",
    },
  },
];
