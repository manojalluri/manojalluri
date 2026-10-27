import React from "react";
import { Sparkles, Clock, ShieldCheck, FileCode, Headphones } from "lucide-react";

export const Expectations: React.FC = () => {
  const commitments = [
    {
      title: "Predictable Turnaround Times",
      desc: "We establish realistic delivery dates during discovery and honor them. Progress updates keep you informed at every milestone.",
      icon: Clock,
    },
    {
      title: "Rigorous Pre-Launch QA",
      desc: "Every page is tested on real iOS and Android devices, as well as Chrome, Safari, and Firefox, to guarantee responsive fidelity.",
      icon: ShieldCheck,
    },
    {
      title: "Complete Code Ownership",
      desc: "You own 100% of the code, domain records, and assets. Everything is delivered in a clean Git repository with setup documentation.",
      icon: FileCode,
    },
    {
      title: "30-Day Post-Launch Warranty",
      desc: "Once your site is live, I provide 30 days of complimentary support to fix any edge cases and answer technical questions.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
            <span>STANDARDS &amp; PROMISES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-4">
            What You Can Always Expect.
          </h2>
          <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
            Trust is built on clear commitments. Here is the operational standard I bring to every
            client partnership from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEF0F3] flex items-center justify-center text-[#111318] mb-5">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111318] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#656B76] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
