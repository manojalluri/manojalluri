import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { servicesData } from "../data/services";
import { ServiceCard } from "./ServiceCard";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-4">
            Everything Your Business Needs to Grow Online.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#656B76] leading-relaxed">
            From your company's first website to an online store or custom web tool,
            I build websites designed to help your business get noticed and gain more clients.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#111318]">
              Have a special requirement or unique project?
            </h4>
            <p className="text-xs sm:text-sm text-[#656B76] mt-1">
              Have specific features or ideas not listed above? Let's discuss a customized solution.
            </p>
          </div>
          <button
            onClick={() => onSelectService("Other")}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-xs"
          >
            <span>Discuss Custom Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#B8F36B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
