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
          <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
            From a professional first impression to a complete digital product, I build web
            experiences centered directly around your business goals, target audience, and conversion metrics.
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
            <h4 className="text-lg font-bold text-[#111318]">
              Need a custom solution outside these packages?
            </h4>
            <p className="text-xs sm:text-sm text-[#656B76] mt-1">
              Have specific API workflows, multi-step portals, or specialized web requirements? Let's discuss a tailored build.
            </p>
          </div>
          <button
            onClick={() => onSelectService("Other")}
            className="shrink-0 inline-flex items-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-xs"
          >
            <span>Request Custom Scope</span>
            <ArrowUpRight className="w-4 h-4 text-[#B8F36B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
