import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business, primary goals, target audience, required features, competitor landscape, and exact project scope.",
    deliverables: [
      "Requirements & scope document",
      "Sitemap & content architecture",
      "Design reference alignment",
      "Timeline & milestone plan",
    ],
  },
  {
    number: "02",
    title: "Design & UX Architecture",
    description:
      "Crafting the visual direction, typography, responsive wireframes, component layouts, and high-fidelity prototypes tailored to your brand identity.",
    deliverables: [
      "Wireframes & layout hierarchy",
      "Design system & color tokens",
      "Mobile & desktop screen designs",
      "Review & refinement cycle",
    ],
  },
  {
    number: "03",
    title: "Modern Development",
    description:
      "Building the website with clean, modular code, modern React & TypeScript, responsive layouts, fast load speeds, and seamless interactions.",
    deliverables: [
      "Modular, reusable frontend code",
      "Mobile-first responsive styling",
      "Form validations & integrations",
      "Cross-browser compatibility testing",
    ],
  },
  {
    number: "04",
    title: "Launch & Structured Handover",
    description:
      "Conducting pre-launch QA, domain/DNS connection, production deployment on Vercel, and delivering full source code with a walk-through.",
    deliverables: [
      "Core Web Vitals & speed audit",
      "Production deployment & SSL setup",
      "Source code repository handover",
      "Post-launch support & guidance",
    ],
  },
];
