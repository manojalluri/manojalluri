import React from "react";
import { ArrowUpRight, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "../config/site";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E5E7EB]"
    >
      {/* Background subtle mesh grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

      {/* Decorative gradient blur with neon accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[260px] sm:h-[350px] bg-gradient-to-tr from-[#B8F36B]/25 via-emerald-200/20 to-transparent blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E7EB] shadow-xs mb-5 sm:mb-6 animate-in fade-in duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F36B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86D42A]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#111318]">
              {siteConfig.heroEyebrow}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#656B76]"></span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#86D42A] bg-[#111318] px-2 py-0.5 rounded-full">
              Available Now
            </span>
          </div>

          {/* Bold Oversized Hero Typography (Punchy on Mobile) */}
          <h1 className="text-[34px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#111318] mb-4 sm:mb-5">
            Websites That Make Your Business{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 px-2.5 sm:px-3 py-0.5 rounded-xl bg-[#B8F36B] text-[#111318] shadow-xs">
                Stand Out.
              </span>
            </span>
          </h1>

          {/* Concise Supporting Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#656B76] leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-normal px-2">
            I help businesses, startups, and shop owners build fast, clean websites that look great on phones and turn visitors into customers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
            >
              <span>Start Your Project</span>
              <span className="w-7 h-7 rounded-full bg-[#B8F36B] text-[#111318] flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>

            <a
              href="#work"
              onClick={scrollToWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#EEF0F3] text-[#111318] font-bold text-sm sm:text-base px-6 py-4 rounded-full border border-[#E5E7EB] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
            >
              <span>View 6 Live Projects</span>
              <ArrowDown className="w-4 h-4 text-[#656B76]" />
            </a>
          </div>

          {/* Micro Trust Pills - Clean badges on mobile */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#86D42A]" />
              100% Mobile Ready
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#86D42A]" />
              Fast 0.4s Loading
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#86D42A]" />
              Direct Talk with Me
            </span>
          </div>
        </div>

        {/* Hero Visual: Layered Live Showcase */}
        <div className="mt-10 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Main Central Preview Container */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Realistic Browser Chrome */}
            <div className="bg-[#111318] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#272B35] flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56]"></span>
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F]"></span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#1C1F26] px-3 py-1 rounded-full text-[10px] sm:text-[11px] text-[#9CA3AF] border border-[#2B303C] max-w-[200px] sm:max-w-xs w-full justify-center font-mono">
                <span className="text-[#B8F36B]">https://</span>
                <span className="text-white font-medium truncate">manojalluri.com</span>
                <span className="text-zinc-500 hidden sm:inline">/projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#B8F36B] text-[#111318] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111318] animate-pulse"></span>
                  LIVE SITES
                </span>
              </div>
            </div>

            {/* Content inside Browser Canvas */}
            <div className="p-4 sm:p-6 lg:p-8 bg-[#FBFBFC]">
              {/* Top Bar inside app */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-[#EEF0F3] gap-3 sm:gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs font-bold text-[#656B76] uppercase tracking-wider">
                      Live Performance &amp; Real Work
                    </span>
                    <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold rounded-full bg-emerald-100 text-emerald-800">
                      6 Production Websites
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#111318] mt-1">
                    Quality Websites That Deliver Results
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
                    Tested on Phones
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-[#111318] text-[#B8F36B] shadow-2xs">
                    100% Score ↗
                  </span>
                </div>
              </div>

              {/* Stats KPI Cards (Grid adapts smoothly on phone) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#656B76] font-medium block">
                    Speed Score
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>99</span>
                    <span className="text-xs text-[#86D42A] font-bold">/ 100</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold mt-0.5 block truncate">
                    Fast mobile loading
                  </span>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#656B76] font-medium block">
                    First Paint
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>0.4s</span>
                    <span className="text-xs text-zinc-500 font-normal">FCP</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold mt-0.5 block truncate">
                    Instant rendering
                  </span>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#656B76] font-medium block">
                    Mobile Layout
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>100%</span>
                    <span className="text-xs text-[#86D42A] font-bold">Fluid</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#656B76] font-medium mt-0.5 block truncate">
                    All phone sizes
                  </span>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#656B76] font-medium block">
                    Support
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>30</span>
                    <span className="text-xs text-[#86D42A] font-bold">Days</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold mt-0.5 block truncate">
                    Free after launch
                  </span>
                </div>
              </div>

              {/* Mobile Real Projects Quick Cards - High-impact on phones */}
              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#181B22] text-white p-3.5 sm:p-4 rounded-xl border border-[#272B35] flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 font-black text-xs flex items-center justify-center shrink-0 border border-amber-500/30">
                      SV
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white truncate">
                          Sri Sai Vijaya Durga
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#86D42A] shrink-0"></span>
                      </div>
                      <span className="text-[10px] text-[#9CA3AF] block truncate">
                        Commercial Auto Finance &amp; Loan Calculator
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://www.srisaivijayadurgaautofinance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#B8F36B] hover:text-white px-2.5 py-1 rounded-md bg-[#222631] border border-[#2F3543] shrink-0 ml-2"
                  >
                    Live ↗
                  </a>
                </div>

                <div className="bg-[#181B22] text-white p-3.5 sm:p-4 rounded-xl border border-[#272B35] flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-300 font-black text-xs flex items-center justify-center shrink-0 border border-rose-500/30">
                      NH
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white truncate">
                          Naveen Hospital
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#86D42A] shrink-0"></span>
                      </div>
                      <span className="text-[10px] text-[#9CA3AF] block truncate">
                        Doctor Booking &amp; 24/7 Emergency Care
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://www.naveenmultyspecialityhospital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#B8F36B] hover:text-white px-2.5 py-1 rounded-md bg-[#222631] border border-[#2F3543] shrink-0 ml-2"
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Floating Accent Card Left */}
          <div className="hidden lg:block absolute -left-10 -bottom-6 w-72 bg-white rounded-xl border border-[#E5E7EB] p-4 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between pb-2 border-b border-[#EEF0F3]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#86D42A]"></span>
                <span className="text-xs font-bold text-[#111318]">Client Satisfaction</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>
            <p className="text-xs text-[#656B76] mt-2">
              "Direct communication with Manoj made our project delivery smooth and on time."
            </p>
          </div>

          {/* Desktop Floating Accent Card Right */}
          <div className="hidden lg:block absolute -right-10 -top-4 w-68 bg-[#111318] text-white rounded-xl border border-[#272B35] p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B8F36B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Tech Stack</span>
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1">
              React · TypeScript · Tailwind · Vercel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
