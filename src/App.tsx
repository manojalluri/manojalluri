import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { WhyChooseMe } from "./components/WhyChooseMe";
import { Expectations } from "./components/Expectations";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export function App() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#111318] flex flex-col selection:bg-[#B8F36B] selection:text-[#111318]">
      {/* Sticky Premium Navbar */}
      <Navbar onOpenContact={() => handleOpenContactWithService()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenContact={() => handleOpenContactWithService()} />

        {/* Trust & Capabilities Strip */}
        <TrustStrip />

        {/* Services Section ("WHAT I DO") */}
        <Services onSelectService={handleOpenContactWithService} />

        {/* Selected Work ("SELECTED PROJECTS" - Dark High-Contrast Section) */}
        <Projects onOpenContact={handleOpenContactWithService} />

        {/* Process Section ("HOW I WORK" - 4-stage numbered workflow) */}
        <Process />

        {/* About Me Section ("ABOUT ME" - Narrative, Philosophy & Profile Blueprint) */}
        <About onOpenContact={() => handleOpenContactWithService()} />

        {/* Technologies & Modern Toolchain */}
        <Skills />

        {/* Why Choose Me & Direct Comparison Table */}
        <WhyChooseMe />

        {/* Standards & Commitments ("What You Can Expect") */}
        <Expectations />

        {/* Frequently Asked Questions */}
        <FAQ onOpenContact={() => handleOpenContactWithService("General Inquiry")} />

        {/* Final CTA & Project Inquiry Form (Dark Section + Lime Accents) */}
        <ContactForm preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleOpenContactWithService} />
    </div>
  );
}

export default App;
