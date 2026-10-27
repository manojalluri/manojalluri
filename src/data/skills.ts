import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Design",
    skills: [
      { name: "React & Next.js", level: "Fast, modern web apps", highlight: true },
      { name: "TypeScript", level: "Bug-free & reliable code", highlight: true },
      { name: "Tailwind CSS", level: "Clean mobile-friendly styling", highlight: true },
      { name: "JavaScript (ES6+)", level: "Interactive buttons & forms", highlight: true },
      { name: "Framer Motion", level: "Smooth scroll & click animations" },
      { name: "Speed Optimization", level: "Under 1-second page loads" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js & Express", level: "Fast & secure server APIs", highlight: true },
      { name: "PostgreSQL", level: "Reliable customer databases", highlight: true },
      { name: "Supabase", level: "User login & secure storage", highlight: true },
      { name: "MongoDB & Redis", level: "High-speed data caching", highlight: true },
      { name: "REST APIs", level: "Payment & WhatsApp connections" },
      { name: "User Auth & Security", level: "Password protection & encryption" },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Vercel & Cloud Edge", level: "Instant global website hosting", highlight: true },
      { name: "GitHub & Version Control", level: "Safe backups & updates", highlight: true },
      { name: "Docker & Containers", level: "Reliable production setups", highlight: true },
      { name: "Automated Testing", level: "Catch issues before launch", highlight: true },
      { name: "Vite Build Tooling", level: "Ultra-fast website building" },
      { name: "Domain & SSL Setup", level: "Free padlock security (https)" },
    ],
  },
];

export const trustHighlights = [
  { label: "Business Websites", desc: "Builds trust with customers" },
  { label: "Landing Pages", desc: "Designed to get more leads" },
  { label: "Online Stores", desc: "Easy shopping & payments" },
  { label: "Custom Web Apps", desc: "Custom business dashboards" },
  { label: "Mobile-First", desc: "Looks perfect on all phones" },
  { label: "Fast Page Speeds", desc: "Loads in under 1 second" },
];
