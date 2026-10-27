import type { ServiceItem } from "../types";

export const servicesData: ServiceItem[] = [
  {
    id: "business-website",
    number: "01",
    title: "Business Website Development",
    description:
      "Professional websites that communicate your value, build credibility, and help customers understand your business.",
    deliverables: [
      "Company and service websites",
      "Responsive layouts (Mobile/Tablet/Desktop)",
      "High-converting contact & inquiry forms",
      "Direct WhatsApp click-to-chat integration",
      "Essential SEO foundations & fast page load speeds",
    ],
    icon: "Briefcase",
  },
  {
    id: "landing-page",
    number: "02",
    title: "Landing Page Development",
    description:
      "Focused landing pages designed to communicate an offer clearly and guide visitors toward the next step.",
    deliverables: [
      "Startup product validation & launches",
      "Targeted campaign & PPC landing pages",
      "Lead-generation workflows & forms",
      "Conversion-oriented visual hierarchy",
      "Subtle micro-animations & strong CTA placement",
    ],
    icon: "Rocket",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce Development",
    description:
      "Online storefronts that make it easy for customers to discover products and complete purchases.",
    deliverables: [
      "Fast, searchable product catalogs & filters",
      "Frictionless cart and checkout experience",
      "Payment gateway integration (Razorpay/Stripe)",
      "Order notifications & WhatsApp confirmations",
      "Mobile-first shopping experiences",
    ],
    icon: "ShoppingBag",
  },
  {
    id: "portfolio-branding",
    number: "04",
    title: "Portfolio & Personal Branding",
    description:
      "Distinctive websites that present your work, skills, experience, and professional identity.",
    deliverables: [
      "Developer & designer portfolios",
      "Freelancer & agency showcase websites",
      "Executive & founder personal profiles",
      "Interactive project case studies",
      "Resume & achievements presentation",
    ],
    icon: "UserCheck",
  },
  {
    id: "website-redesign",
    number: "05",
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, responsive, and easier-to-use digital experiences.",
    deliverables: [
      "Modern UI/UX overhaul & design refresh",
      "Layout modernization & brand alignment",
      "Responsive fixes for all device viewports",
      "Core Web Vitals & performance optimization",
      "Streamlined content restructuring & clarity",
    ],
    icon: "RefreshCw",
  },
  {
    id: "custom-web-applications",
    number: "06",
    title: "Custom Web Applications",
    description:
      "Interactive web applications built around business workflows and real product requirements.",
    deliverables: [
      "Intuitive admin dashboards & data management",
      "Secure user authentication & roles",
      "RESTful API & third-party integrations",
      "Database-backed features (Supabase/PostgreSQL/MongoDB)",
      "Tailored internal business workflows",
    ],
    icon: "Cpu",
  },
];
