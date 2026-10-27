import React from "react";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "../config/site";
import { servicesData } from "../data/services";

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0D11] text-white pt-16 pb-12 border-t border-[#1F232B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1F232B]">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-white flex items-center">
                Manoj Alluri
                <span className="w-2.5 h-2.5 rounded-full bg-[#86D42A] inline-block ml-1"></span>
              </span>
            </div>

            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              {siteConfig.supportingDescription}
            </p>
          </div>


          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#B8F36B] text-[10px]">↳</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Selection */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Services Offered
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF]">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onSelectService(s.title);
                      const contactEl = document.getElementById("contact");
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hover:text-[#B8F36B] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-zinc-600 font-mono text-[11px]">{s.number}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Closing Statement, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#656B76]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Manoj Alluri. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#9CA3AF] italic">"Thoughtfully designed. Carefully developed."</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181B22] text-[#9CA3AF] hover:text-white hover:bg-[#222631] border border-[#272B35] transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
