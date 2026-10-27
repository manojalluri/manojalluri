import type { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    id: "sri-sai-vijaya-durga",
    title: "Sri Sai Vijaya Durga Auto Finance",
    category: "Auto Finance & Commercial Loans",
    description:
      "A commercial vehicle loan and auto financing platform featuring instant EMI calculations, transparent loan eligibility workflows, branch network details, and customer inquiry processing.",
    tags: ["React", "TypeScript", "Tailwind CSS", "EMI Calculator", "Finance Portal"],
    liveUrl: "https://www.srisaivijayadurgaautofinance.com/",
    highlight:
      "Interactive loan calculator with real-time interest computation, commercial vehicle categories, and direct application inquiries.",
    featured: true,
    type: "finance",
    metrics: [
      { label: "Domain", value: "FinTech & Auto" },
      { label: "Platform", value: "Live Production" },
      { label: "Experience", value: "Calculator Engine" },
    ],
  },
  {
    id: "deccan-restaurant-crm",
    title: "Deccan Restaurant CRM & POS",
    category: "Restaurant CRM & Management",
    description:
      "A restaurant operations and management suite featuring role-based administrative authentication, table reservations, kitchen order ticketing (KOT), and revenue analytics.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Role Auth", "CRM Dashboard"],
    liveUrl: "https://deccanrestaurantcrm.vercel.app/admin/login",
    highlight:
      "Secured administrative portal with live order queues, staff role permissions, and comprehensive daily revenue metrics.",
    featured: true,
    type: "saas",
    metrics: [
      { label: "Architecture", value: "SaaS Admin" },
      { label: "Auth", value: "Role Protected" },
      { label: "Utility", value: "KOT & Billing" },
    ],
  },
  {
    id: "motorcycle-haven",
    title: "Motorcycle Haven",
    category: "Automotive & Riding Gear Store",
    description:
      "A modern digital storefront for motorcycle enthusiasts featuring riding jackets, helmets, performance accessories, interactive gear filtering, and mobile-first checkout.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Product Catalog", "Cart Experience"],
    liveUrl: "https://motorcycle-haven.vercel.app/",
    highlight:
      "High-contrast rider apparel catalog with dynamic category filters, product specifications, and frictionless purchasing flows.",
    featured: true,
    type: "ecommerce",
    metrics: [
      { label: "Niche", value: "Moto Apparel" },
      { label: "Speed", value: "Instant Filter" },
      { label: "Design", value: "Dark & Bold" },
    ],
  },
  {
    id: "grand-occasions-digital",
    title: "Grand Occasions Digital",
    category: "Event Management & Digital Invites",
    description:
      "A luxury event and celebration platform tailored for modern weddings, corporate galas, and milestones with interactive RSVP tracking, venue directions, and digital photo memories.",
    tags: ["React", "Tailwind CSS", "RSVP System", "Digital Itinerary", "Mobile First"],
    liveUrl: "https://grand-occasions-digital.vercel.app/",
    highlight:
      "Bespoke celebratory event portal with digital invite sharing, guest RSVP management, and dynamic event timeline agendas.",
    featured: true,
    type: "events",
    metrics: [
      { label: "Category", value: "Events & Digital" },
      { label: "Feature", value: "RSVP Engine" },
      { label: "Aesthetic", value: "Luxury Gold" },
    ],
  },
  {
    id: "aquarise-technologies",
    title: "Aquarise Technologies",
    category: "Aquaculture & Agri-Tech Platform",
    description:
      "A modern corporate platform for aquaculture enterprises showcasing intelligent pond monitoring solutions, aerators, feed management, and daily market price intelligence.",
    tags: ["React", "TypeScript", "Tailwind CSS", "IoT Telemetry", "AgriTech"],
    liveUrl: "https://aquarisetechnologies.vercel.app/",
    highlight:
      "Smart aquaculture equipment catalog, technical aeration specifications, and direct farmer inquiry integration.",
    featured: true,
    type: "tech",
    metrics: [
      { label: "Industry", value: "Aqua Tech" },
      { label: "Telemetry", value: "Pond Metrics" },
      { label: "Scale", value: "B2B & Farmers" },
    ],
  },
  {
    id: "rare-drafts",
    title: "Rare Drafts",
    category: "Creative Studio & Design Showcase",
    description:
      "A digital design studio portfolio highlighting bespoke branding concepts, art direction, editorial publications, typography experiments, and modern digital aesthetics.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Editorial UI", "Micro-Animations"],
    liveUrl: "https://rare-drafts.vercel.app/",
    highlight:
      "Minimalist typography, editorial magazine layouts, and fluid transitions presenting curated creative works.",
    featured: false,
    type: "creative",
    metrics: [
      { label: "Domain", value: "Design Studio" },
      { label: "Style", value: "Editorial Minimal" },
      { label: "Focus", value: "Brand Identity" },
    ],
  },
  {
    id: "naveen-multispeciality-hospital",
    title: "Naveen Multispeciality Hospital",
    category: "Healthcare & Medical Services",
    description:
      "A comprehensive medical services portal connecting patients with 24/7 emergency response, departmental specialist doctors, OPD appointment bookings, and healthcare information.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Doctor Directory", "Appointment Booking"],
    liveUrl: "https://www.naveenmultyspecialityhospital.in/",
    highlight:
      "Clinical healthcare platform with instant doctor appointment scheduling, specialist department overviews, and emergency helpline access.",
    featured: true,
    type: "healthcare",
    metrics: [
      { label: "Sector", value: "HealthTech" },
      { label: "Emergency", value: "24/7 Rapid" },
      { label: "Portal", value: "Doctor OPD" },
    ],
  },
];
