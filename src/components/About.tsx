import React from "react";
import { Sparkles, Terminal, CheckCircle2, ArrowUpRight } from "lucide-react";

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-5">
              Your Ideas, Built With Care.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#656B76] leading-relaxed font-normal">
              <p>
                I'm <strong className="font-bold text-[#111318]">Manoj Alluri</strong>, an independent
                web developer based in India. I help businesses, startups, and shop owners build fast,
                clean websites that look great on phones and get real results.
              </p>
              <p>
                I believe a good website doesn't need to be complicated. My focus is on clean design,
                fast loading speeds, easy navigation, and practical solutions that help you win more customers.
              </p>
              <p>
                When you work with me, you work directly with the person writing the code. No middlemen,
                no confusing tech jargon, and no hidden surprises.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#111318] block">Direct Contact</span>
                <span className="text-xs text-[#656B76] mt-0.5 block">Talk directly to your developer</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#111318] block">Mobile First</span>
                <span className="text-xs text-[#656B76] mt-0.5 block">Looks great on every phone</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <span className="text-xs font-bold text-[#111318] block">Fast &amp; Reliable</span>
                <span className="text-xs text-[#656B76] mt-0.5 block">Loads fast with clean code</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
              >
                <span>Let's Talk About Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B8F36B]" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#111318] text-white rounded-3xl border border-[#272B35] p-5 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#B8F36B]/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Developer Banner */}
              <div className="flex items-center justify-between pb-5 border-b border-[#272B35]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#B8F36B] text-[#111318] flex items-center justify-center font-black text-lg tracking-tight shadow-md">
                    MA
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                      Manoj Alluri
                    </h3>
                    <span className="text-xs text-[#9CA3AF]">
                      Independent Web Developer
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-[11px] font-bold text-[#B8F36B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86D42A] animate-pulse"></span>
                  Available
                </div>
              </div>

              {/* Simple Profile Code Block (Responsive for Mobile) */}
              <div className="mt-5 rounded-xl bg-[#0B0D11] border border-[#272B35] p-3.5 font-mono text-xs text-[#9CA3AF] overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1F232B] text-[10px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#B8F36B]" />
                    about-me.ts
                  </span>
                  <span>TypeScript</span>
                </div>
                <pre className="text-[10px] sm:text-[11px] leading-relaxed font-mono">
                  <code>
                    <span className="text-rose-400">const</span>{" "}
                    <span className="text-blue-300">developer</span> = &#123;{"\n"}
                    {"  "}name: <span className="text-[#B8F36B]">"Manoj Alluri"</span>,{"\n"}
                    {"  "}location: <span className="text-[#B8F36B]">"India (Working Worldwide)"</span>,{"\n"}
                    {"  "}stack: [<span className="text-amber-300">"React"</span>,{" "}
                    <span className="text-amber-300">"TypeScript"</span>,{" "}
                    <span className="text-amber-300">"Tailwind"</span>],{"\n"}
                    {"  "}goal: <span className="text-cyan-300">"Fast, clean websites that convert"</span>,{"\n"}
                    &#125;;
                  </code>
                </pre>
              </div>

              {/* Commitments Checklist */}
              <div className="mt-5 pt-4 border-t border-[#272B35] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                  <CheckCircle2 className="w-4 h-4 text-[#86D42A] shrink-0" />
                  <span>Full website ownership and code handover</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                  <CheckCircle2 className="w-4 h-4 text-[#86D42A] shrink-0" />
                  <span>Tested on iPhones, Android phones &amp; laptops</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                  <CheckCircle2 className="w-4 h-4 text-[#86D42A] shrink-0" />
                  <span>30 days of free support after your site goes live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
