import type { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    id: "sri-sai-vijaya-durga",
    title: "Sri Sai Vijaya Durga Auto Finance",
    category: "Vehicle Loans & Finance",
    description:
      "A complete vehicle loan website where customers can calculate their monthly EMI, view interest rates, check branch locations, and apply online.",
    tags: ["React", "TypeScript", "Tailwind CSS", "EMI Calculator", "Online Loans"],
    liveUrl: "https://www.srisaivijayadurgaautofinance.com/",
    highlight:
      "Interactive loan calculator that gives customers instant monthly EMI calculations based on loan amount and tenure.",
    featured: true,
    type: "finance",
    metrics: [
      { label: "Category", value: "Auto Loans" },
      { label: "Status", value: "Live Website" },
      { label: "Key Tool", value: "EMI Calculator" },
    ],
  },
  {
    id: "naveen-multispeciality-hospital",
    title: "Naveen Multispeciality Hospital",
    category: "Hospital & Healthcare",
    description:
      "A modern hospital portal where patients can view specialist doctor profiles, book appointments online, explore medical departments, and access 24/7 emergency care.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Doctor Profiles", "Book Appointment"],
    liveUrl: "https://www.naveenmultyspecialityhospital.in/",
    highlight:
      "Direct doctor appointment booking system with one-tap 24/7 emergency hospital helpline calling.",
    featured: true,
    type: "healthcare",
    metrics: [
      { label: "Sector", value: "Hospital" },
      { label: "Emergency", value: "24/7 On-Call" },
      { label: "Feature", value: "Doctor Booking" },
    ],
  },
  {
    id: "deccan-restaurant-crm",
    title: "Deccan Restaurant CRM & POS",
    category: "Restaurant Management & POS",
    description:
      "A complete restaurant management dashboard for table reservations, kitchen order tickets (KOT), real-time billing, and daily sales tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Admin Login", "Sales Dashboard"],
    liveUrl: "https://deccanrestaurantcrm.vercel.app/admin/login",
    highlight:
      "Secure admin dashboard that sends orders directly to the kitchen and provides real-time daily revenue charts.",
    featured: true,
    type: "saas",
    metrics: [
      { label: "Type", value: "Business App" },
      { label: "Access", value: "Staff Login" },
      { label: "Purpose", value: "Orders & Bills" },
    ],
  },
  {
    id: "motorcycle-haven",
    title: "Motorcycle Haven",
    category: "Rider Gear & Helmets Store",
    description:
      "An online store for motorcycle riders to browse riding jackets, certified helmets, and bike accessories with a fast and intuitive mobile shopping experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Product Store", "Shopping Cart"],
    liveUrl: "https://motorcycle-haven.vercel.app/",
    highlight:
      "Instant product filters allowing riders to find gear by size, brand, and safety certification in seconds.",
    featured: true,
    type: "ecommerce",
    metrics: [
      { label: "Type", value: "Online Store" },
      { label: "Shopping", value: "Mobile First" },
      { label: "Catalog", value: "Rider Gear" },
    ],
  },
  {
    id: "aquarise-technologies",
    title: "Aquarise Technologies",
    category: "Fish & Prawn Farming Tech",
    description:
      "A smart farming platform for aquaculture pond monitoring, automatic aerators, feeding schedules, and daily prawn market prices.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Pond Sensors", "AgriTech"],
    liveUrl: "https://aquarisetechnologies.vercel.app/",
    highlight:
      "Provides farmers with real-time pond water quality insights and daily market prices for Bhimavaram.",
    featured: true,
    type: "tech",
    metrics: [
      { label: "Industry", value: "Aquaculture" },
      { label: "Sensors", value: "Water Quality" },
      { label: "Target", value: "Farm Owners" },
    ],
  },
  {
    id: "grand-occasions-digital",
    title: "Grand Occasions Digital",
    category: "Digital Wedding & Event Invites",
    description:
      "A digital wedding and event invitation website featuring online RSVP tracking for guests, interactive event schedules, and photo galleries.",
    tags: ["React", "Tailwind CSS", "RSVP Form", "Event Timeline", "Mobile Friendly"],
    liveUrl: "https://grand-occasions-digital.vercel.app/",
    highlight:
      "Allows families to send royal digital invitations via WhatsApp with instant guest RSVP tracking.",
    featured: true,
    type: "events",
    metrics: [
      { label: "Type", value: "Event Website" },
      { label: "Feature", value: "Guest RSVPs" },
      { label: "Design", value: "Royal & Gold" },
    ],
  },
  {
    id: "rare-drafts",
    title: "Rare Drafts",
    category: "Creative Design Portfolio",
    description:
      "A sleek portfolio website showcasing custom brand logos, typography, visual identities, and clean creative design work.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Clean Design", "Smooth Animations"],
    liveUrl: "https://rare-drafts.vercel.app/",
    highlight:
      "Minimalist design layout that focuses attention on photography, logo design, and brand work.",
    featured: false,
    type: "creative",
    metrics: [
      { label: "Type", value: "Design Studio" },
      { label: "Style", value: "Minimalist" },
      { label: "Focus", value: "Brand Identity" },
    ],
  },
];
