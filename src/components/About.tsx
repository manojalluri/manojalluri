import React from "react";
import { Sparkles, Terminal, CheckCircle2, ArrowUpRight } from "lucide-react";


interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-6">
              Your Ideas, Built With Care.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#656B76] leading-relaxed font-normal">
              <p>
                I'm <strong className="font-bold text-[#111318]">Manoj Alluri</strong>, an independent
                web developer passionate about crafting modern, high-performing websites and digital products.
              </p>
              <p>
                I work with contemporary frontend technologies and web development tools to turn ideas
                into polished, functional digital experiences that help businesses build credibility and stand out.
              </p>
              <p>
                My focus is on thoughtful UI design, mobile-first responsive implementation, clean and
                maintainable code, and practical solutions that fit real business needs without unnecessary complexity.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#111318] block">Direct Access</span>
                <span className="text-xs text-[#656B76] mt-0.5 block">Talk directly to your developer</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#111318] block">Pixel Precision</span>
                <span className="text-xs text-[#656B76] mt-0.5 block">Responsive across all viewports</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#111318] block">Production Ready</span>
                <span className="text-xs text-[#656B76] mt-0.5 block">Fast, clean, maintainable code</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B8F36B]" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Profile & Code Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#111318] text-white rounded-3xl border border-[#272B35] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#B8F36B]/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Developer Monogram Banner */}
              <div className="flex items-center justify-between pb-6 border-b border-[#272B35]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#B8F36B] text-[#111318] flex items-center justify-center font-black text-xl tracking-tight shadow-md">
                    MA
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                      Manoj Alluri
                    </h3>
                    <span className="text-xs text-[#9CA3AF]">
                      Independent Web Developer
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-[11px] font-bold text-[#B8F36B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86D42A] animate-pulse"></span>
                  Active
                </div>
              </div>

              {/* Interactive Code Blueprint Block */}
              <div className="mt-6 rounded-xl bg-[#0B0D11] border border-[#272B35] p-4 font-mono text-xs text-[#9CA3AF] overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1F232B] text-[10px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#B8F36B]" />
                    developer.config.ts
                  </span>
                  <span>TypeScript</span>
                </div>
                <pre className="text-[11px] leading-relaxed font-mono">
                  <code>
                    <span className="text-rose-400">const</span>{" "}
                    <span className="text-blue-300">partner</span> = &#123;{"\n"}
                    {"  "}name: <span className="text-[#B8F36B]">"Manoj Alluri"</span>,{"\n"}
                    {"  "}specialty: <span className="text-[#B8F36B]">"Modern Web Development"</span>,{"\n"}
                    {"  "}stack: [<span className="text-amber-300">"React"</span>,{" "}
                    <span className="text-amber-300">"TypeScript"</span>,{" "}
                    <span className="text-amber-300">"Tailwind"</span>],{"\n"}
                    {"  "}approach: <span className="text-cyan-300">"No-Bloat, High-Performance"</span>,{"\n"}
                    {"  "}deliverables: <span className="text-cyan-300">"Production-Ready Code"</span>,{"\n"}
                    &#125;;
                  </code>
                </pre>
              </div>

              {/* Verified Commitment Checklist */}
              <div className="mt-6 pt-4 border-t border-[#272B35] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                  <CheckCircle2 className="w-4 h-4 text-[#86D42A] shrink-0" />
                  <span>Full source code and deployment handover</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                  <CheckCircle2 className="w-4 h-4 text-[#86D42A] shrink-0" />
                  <span>Cross-device responsive verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                  <CheckCircle2 className="w-4 h-4 text-[#86D42A] shrink-0" />
                  <span>Free 30-day post-launch warranty &amp; support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
