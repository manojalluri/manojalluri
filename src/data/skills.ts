import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    skills: [
      { name: "React 19 & Next.js", level: "SSR, SSG & Server Components", highlight: true },
      { name: "TypeScript", level: "Strict Type-Safe Contracts", highlight: true },
      { name: "Tailwind CSS", level: "Enterprise Design Systems & Tokens", highlight: true },
      { name: "TanStack Query & Zustand", level: "Client State & Async Cache", highlight: true },
      { name: "Framer Motion", level: "Hardware-Accelerated UI Motion" },
      { name: "Core Web Vitals", level: "Sub-Second LCP & Zero Layout Shift" },
    ],
  },
  {
    title: "Backend, Cloud & Data",
    skills: [
      { name: "Node.js & NestJS", level: "Scalable Microservices & APIs", highlight: true },
      { name: "PostgreSQL & Prisma ORM", level: "ACID Schemas & Migrations", highlight: true },
      { name: "Supabase", level: "Auth, Realtime & Row-Level Security", highlight: true },
      { name: "MongoDB & Redis", level: "Document Store & In-Memory Cache", highlight: true },
      { name: "RESTful & GraphQL APIs", level: "OpenAPI Schemas & Integrations" },
      { name: "Auth & Security (RBAC)", level: "OAuth 2.0, JWT & Data Encryption" },
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    skills: [
      { name: "Vercel & Edge Network", level: "Global CDN & Serverless Compute", highlight: true },
      { name: "Docker & Containers", level: "Isolated Runtime Environments", highlight: true },
      { name: "CI/CD & GitHub Actions", level: "Automated Build & Test Pipelines", highlight: true },
      { name: "Git & Version Control", level: "Trunk-Based PRs & Code Quality", highlight: true },
      { name: "Vite 8 Build Tooling", level: "Zero-Latency HMR & Tree-Shaking" },
      { name: "Sentry & Telemetry", level: "Real-time Monitoring & Observability" },
    ],
  },
];

export const trustHighlights = [
  { label: "Business Websites", desc: "High-trust digital storefronts" },
  { label: "Landing Pages", desc: "Conversion & lead focused" },
  { label: "E-commerce Solutions", desc: "Seamless shopping flows" },
  { label: "Custom Web Apps", desc: "Bespoke business workflows" },
  { label: "Responsive Design", desc: "Pixel-perfect on all screens" },
  { label: "Core Web Vitals", desc: "Fast load times & SEO ready" },
];
