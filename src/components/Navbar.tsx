import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "services", "work", "process", "about", "faq", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F8FA]/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#E5E7EB]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Only Manoj Alluri with green color dot */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center group py-1"
          >
            <span className="font-black text-xl sm:text-2xl tracking-tight text-[#111318] flex items-center group-hover:opacity-90 transition-opacity">
              Manoj Alluri
              <span className="w-2.5 h-2.5 rounded-full bg-[#86D42A] inline-block ml-1"></span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#E5E7EB] shadow-xs">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#111318] text-white"
                      : "text-[#656B76] hover:text-[#111318] hover:bg-[#EEF0F3]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Status Pill */}
            <div className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#E5E7EB] text-xs font-medium text-[#111318] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F36B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86D42A]"></span>
              </span>
              <span>Available for Projects</span>
            </div>

            {/* Let's Talk CTA Button */}
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-1.5 bg-[#B8F36B] hover:bg-[#A3E94E] text-[#111318] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-1 bg-[#B8F36B] text-[#111318] font-bold text-xs px-3.5 py-2 rounded-full shadow-xs cursor-pointer"
            >
              <span>Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#E5E7EB] text-[#111318] hover:bg-[#EEF0F3] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E7EB] bg-[#FFFFFF] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#E5E7EB]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F36B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#86D42A]"></span>
            </span>
            <span className="text-xs font-semibold text-[#111318]">Available for select client projects</span>
          </div>

          <div className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-semibold rounded-xl text-[#111318] hover:bg-[#EEF0F3] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#656B76]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-5 mt-4 border-t border-[#E5E7EB]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-sm py-3 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#B8F36B]" />
              <span>Start Your Project ↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
