import React from "react";
import {
  Globe,
  Layout,
  ShoppingBag,
  Code2,
  Smartphone,
  Gauge,
  Sparkles,
} from "lucide-react";

export const TrustStrip: React.FC = () => {
  const capabilities = [
    { label: "Business Websites", icon: Globe },
    { label: "Landing Pages", icon: Layout },
    { label: "Online Stores", icon: ShoppingBag },
    { label: "Custom Web Apps", icon: Code2 },
    { label: "Mobile-Friendly Design", icon: Smartphone },
    { label: "Fast Page Speeds", icon: Gauge },
  ];

  return (
    <div className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-3.5 sm:py-4 overflow-hidden shadow-2xs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#111318] lg:pr-4 lg:border-r lg:border-[#E5E7EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
            <span>Core Web Services</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-2.5 sm:gap-4 lg:gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-[#111318] p-2 sm:p-0 rounded-lg bg-[#F7F8FA] lg:bg-transparent border border-[#E5E7EB] lg:border-none group"
                >
                  <div className="w-6 h-6 rounded-md bg-white lg:bg-[#EEF0F3] flex items-center justify-center text-[#111318] group-hover:bg-[#B8F36B] transition-colors shrink-0 shadow-2xs lg:shadow-none">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
