# Manoj Alluri — Premium Web Development Portfolio

> **Websites That Make Your Business Stand Out.**  
> Inspired by the modern digital agency aesthetic of **SocialSprout.in**, tailored for **Manoj Alluri** (Independent Web Developer & Digital Solutions Partner).

---

## 🌟 Highlights & Features

- **Bold Hero & Agency Aesthetic**: High-contrast modern typography with electric lime (`#B8F36B`) accent pills and badges.
- **Layered Browser Preview Mockups**: Realistic simulated browser frames with live KPI metrics, Core Web Vitals gauges, and interactive concept tabs.
- **Trust & Capabilities Strip**: Directly communicates verified technical offerings without inflated metrics.
- **6 Structured Service Offerings**:
  1. Business Website Development
  2. Landing Page Development
  3. E-commerce Development
  4. Portfolio & Personal Branding
  5. Website Redesign
  6. Custom Web Applications
- **Interactive Service-to-Contact Flow**: Clicking "Discuss Project ↗" on any service automatically scrolls to the contact section and preselects that service in the inquiry form.
- **Selected Work Section**: High-contrast dark section showcasing 5 real-world inspired concepts (`Farm2Spoon`, `Cutora`, `Aaroksha`, `PDF Babai`, `ArcheVault`) with an architectural inspection modal.
- **4-Stage Process**: Numbered workflow from Discovery, Design, Modern Development, to Launch & Handover.
- **Transparent Comparison Table**: Direct comparison of working with Manoj Alluri vs. typical agency bureaucracy.
- **Comprehensive 10-Question FAQ**: Keyboard-accessible accordion addressing cost, timelines, mobile support, and hosting.
- **Project Inquiry Form & Conversion Delight**:
  - Full client-side validation for required fields and email formats.
  - Honeypot spam protection.
  - Dynamic budget and service selection.
  - Confetti celebration upon inquiry submission (`canvas-confetti`).
  - Direct 1-click WhatsApp and Email communication fallbacks with prefilled project scope.
- **100% Mobile Responsive**: Tested across 320px, 375px, 768px, 1024px, and large desktop screens.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Tooling**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti & Modern CSS Micro-animations
- **Deployment Target**: Vercel

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Typecheck
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📂 Project Structure

```
├── public/
│   └── favicon.svg           # Custom MA monogram with lime accent dot
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header, brand monogram, active link spy
│   │   ├── Hero.tsx          # Agency headline, status pill, layered browser mockups
│   │   ├── TrustStrip.tsx    # Horizontal ticker of verified capabilities
│   │   ├── Services.tsx      # 6 core services grid
│   │   ├── ServiceCard.tsx   # Reusable service card with deliverables
│   │   ├── Projects.tsx      # Dark section, filters, architecture modal
│   │   ├── ProjectCard.tsx   # Project cards with simulated live UI mockups
│   │   ├── Process.tsx       # 4-stage numbered process & deliverables
│   │   ├── About.tsx         # Philosophy, stats, and TypeScript code card
│   │   ├── Skills.tsx        # Modern tools categorized into 3 domains
│   │   ├── WhyChooseMe.tsx   # Direct developer advantage & comparison table
│   │   ├── Expectations.tsx  # "What You Can Expect" commitments & warranty
│   │   ├── FAQ.tsx           # 10 accordion questions with keyboard accessibility
│   │   ├── ContactForm.tsx   # Project inquiry form, validation & WhatsApp link
│   │   └── Footer.tsx        # Navigation, social links, dynamic year & back-to-top
│   ├── config/
│   │   └── site.ts           # Centralized configuration (contact, phone, socials)
│   ├── data/
│   │   ├── services.ts       # 6 service packages and deliverables
│   │   ├── projects.ts       # Portfolio case studies and tech tags
│   │   ├── process.ts        # 4 project lifecycle phases
│   │   ├── skills.ts         # Technologies and frontend/backend groupings
│   │   └── faqs.ts           # 10 comprehensive answers to common questions
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── App.tsx               # Main page assembly & state management
│   ├── index.css             # Tailwind v4 theme definitions and font config
│   └── main.tsx              # Application entry point
├── .env.example              # Environment variables template
├── package.json
└── vite.config.ts
```

---

## ⚙️ Content Customization

All personal details, copy, and project lists are centralized in `src/config/site.ts` and `src/data/`:

1. **Update Contact Info & Socials**:
   Edit `src/config/site.ts`:
   ```ts
   export const siteConfig = {
     name: "Manoj Alluri",
     contact: {
       email: "your-email@example.com",
       whatsapp: "+919876543210",
       whatsappDisplay: "+91 98765 43210",
       github: "https://github.com/manojalluri",
       linkedin: "https://linkedin.com/in/manojalluri",
     },
     // ...
   };
   ```

2. **Add / Edit Projects**:
   Edit `src/data/projects.ts` to add your real project links, screenshots, or updated descriptions.

3. **Modify Services & Pricing**:
   Edit `src/data/services.ts` and `src/config/site.ts` for updated budget brackets.

---

## 🌐 Deploying to Vercel

1. Push this repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `MY NEW PORT` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.
6. (Optional) In **Project Settings → Domains**, connect your custom domain (e.g. `manojalluri.dev`). Vercel provides automatic SSL and edge CDN caching worldwide.
