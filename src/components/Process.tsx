import React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { processSteps } from "../data/process";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
            <span>HOW I WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-4">
            A Clear Process. A Better Website.
          </h2>
          <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
            From our initial discovery call to launch and handover, every stage has a defined purpose,
            clear milestones, and direct communication.
          </p>
        </div>

        {/* 4 Stages Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative bg-[#F7F8FA] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-[#111318] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#B8F36B] transition-colors border border-[#E5E7EB] flex items-center justify-center font-mono font-black text-lg text-[#111318]">
                    {step.number}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#D8DCE3] group-hover:text-[#111318] transition-colors" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#111318] mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#656B76] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <span className="text-[10px] font-bold text-[#111318] uppercase tracking-wider block mb-2">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-1.5 text-xs text-[#111318] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#86D42A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
