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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E5E7EB]"
    >
      {/* Background subtle mesh grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#B8F36B]/20 to-emerald-200/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E7EB] shadow-xs mb-6 animate-in fade-in duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F36B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86D42A]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#111318]">
              {siteConfig.heroEyebrow}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#656B76]"></span>
            <span className="text-[11px] sm:text-xs font-medium text-[#656B76]">
              {siteConfig.status}
            </span>
          </div>

          {/* Bold Oversized Hero Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111318] leading-[1.08] mb-6">
            Websites That Make Your Business{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 px-2 py-0.5 rounded-xl bg-[#B8F36B] text-[#111318]">
                Stand Out.
              </span>
            </span>
          </h1>

          {/* Concise Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#656B76] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            {siteConfig.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
            >
              <span>Start Your Project</span>
              <span className="w-7 h-7 rounded-full bg-[#B8F36B] text-[#111318] flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>

            <a
              href="#work"
              onClick={scrollToWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#EEF0F3] text-[#111318] font-bold text-sm sm:text-base px-7 py-4 rounded-full border border-[#E5E7EB] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
            >
              <span>View Selected Work</span>
              <ArrowDown className="w-4 h-4 text-[#656B76]" />
            </a>
          </div>

          {/* Micro Trust Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#656B76] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#86D42A]" />
              100% Custom Code (No generic templates)
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#86D42A]" />
              Mobile First &amp; SEO Optimized
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#86D42A]" />
              Direct Communication with Developer
            </span>
          </div>
        </div>

        {/* Hero Visual: Layered Browser Previews Composition */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Main Central Web Application Browser Preview */}
          <div className="relative rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden transition-transform duration-300 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.16)]">
            {/* Realistic Browser Chrome */}
            <div className="bg-[#111318] px-4 py-3 border-b border-[#272B35] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-[#1C1F26] px-4 py-1 rounded-full text-[11px] text-[#9CA3AF] border border-[#2B303C] max-w-xs w-full justify-center font-mono">
                <span className="text-[#B8F36B]">https://</span>
                <span className="text-white font-medium">client-platform.design</span>
                <span className="text-zinc-500">/overview</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#B8F36B] text-[#111318]">
                  LIVE PRODUCTION
                </span>
              </div>
            </div>

            {/* Inner Dashboard / Application Content */}
            <div className="p-4 sm:p-6 lg:p-8 bg-[#FBFBFC]">
              {/* Top Bar inside app */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EEF0F3] gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#656B76] uppercase tracking-wider">
                      Analytics &amp; Performance
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-emerald-100 text-emerald-800">
                      +38.4% vs last month
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111318] mt-1">
                    Digital Experience Overview
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
                    Last 30 Days
                  </span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#111318] text-[#B8F36B] shadow-2xs">
                    Export Report ↗
                  </span>
                </div>
              </div>

              {/* Stats KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
                <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-xs text-[#656B76] font-medium">Lighthouse Performance</span>
                  <div className="text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>99</span>
                    <span className="text-xs text-[#86D42A] font-bold">/ 100</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                    Zero render blocking
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-xs text-[#656B76] font-medium">Core Web Vitals</span>
                  <div className="text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>0.4s</span>
                    <span className="text-xs text-zinc-500 font-normal">FCP</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                    Fastest tier load
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-xs text-[#656B76] font-medium">Conversion Rate</span>
                  <div className="text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>4.8%</span>
                    <span className="text-xs text-[#86D42A] font-bold">↑ +1.6%</span>
                  </div>
                  <span className="text-[11px] text-[#656B76] font-medium mt-1 block">
                    Frictionless checkout
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-2xs">
                  <span className="text-xs text-[#656B76] font-medium">Mobile Score</span>
                  <div className="text-2xl font-black text-[#111318] mt-1 flex items-baseline gap-1">
                    <span>100%</span>
                    <span className="text-xs text-[#86D42A] font-bold">Responsive</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                    Cross-device verified
                  </span>
                </div>
              </div>

              {/* Graphic Chart Simulation */}
              <div className="mt-6 bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#111318]">Visitor Traffic &amp; Inquiry Volume</span>
                    <p className="text-[11px] text-[#656B76]">Measured across web &amp; mobile channels</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-[#111318]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#111318]"></span>
                      Direct Traffic
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-[#111318]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#B8F36B]"></span>
                      Conversions
                    </span>
                  </div>
                </div>

                {/* SVG Visual Graph Bars */}
                <div className="h-32 w-full flex items-end justify-between gap-1.5 sm:gap-3 pt-6 border-b border-[#EEF0F3]">
                  {[
                    { day: "Mon", h1: 45, h2: 70 },
                    { day: "Tue", h1: 60, h2: 85 },
                    { day: "Wed", h1: 52, h2: 78 },
                    { day: "Thu", h1: 75, h2: 95 },
                    { day: "Fri", h1: 90, h2: 100 },
                    { day: "Sat", h1: 65, h2: 88 },
                    { day: "Sun", h1: 82, h2: 94 },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                      <div className="w-full max-w-[28px] flex items-end justify-center gap-1 h-full">
                        <div
                          style={{ height: `${bar.h1}%` }}
                          className="w-1/2 bg-[#EEF0F3] group-hover:bg-[#D8DCE3] rounded-t-sm transition-all duration-300"
                        ></div>
                        <div
                          style={{ height: `${bar.h2}%` }}
                          className="w-1/2 bg-[#111318] group-hover:bg-[#B8F36B] rounded-t-sm transition-all duration-300"
                        ></div>
                      </div>
                      <span className="text-[10px] text-[#656B76] font-medium">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Left Layered Card: Real Client Project Live Preview */}
          <div className="hidden lg:block absolute -left-12 -bottom-8 w-76 bg-white rounded-xl border border-[#E5E7EB] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#EEF0F3]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#86D42A]"></span>
                <span className="text-xs font-bold text-[#111318]">Sri Sai Vijaya Durga</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold">
                Auto Finance
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 font-extrabold text-sm">
                SV
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111318]">Commercial Vehicle Loans</h4>
                <p className="text-[11px] text-[#656B76]">Instant EMI Calculator &amp; Branch QA</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-extrabold text-[#111318]">Live Production</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#B8F36B] text-[#111318] font-bold">
                    Active Client
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Layered Card: High-Trust Tech Stack / Verified Badge */}
          <div className="hidden lg:block absolute -right-12 -top-6 w-68 bg-[#111318] text-white rounded-xl border border-[#272B35] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B8F36B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Engineering</span>
            </div>
            <p className="text-xs text-[#E5E7EB] mt-1 font-medium">
              TypeScript · React · Tailwind · Supabase
            </p>
            <div className="mt-3 pt-2 border-t border-[#272B35] flex items-center justify-between text-[11px] text-[#9CA3AF]">
              <span>Architecture</span>
              <span className="font-bold text-white">Zero Bloat JAMstack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
