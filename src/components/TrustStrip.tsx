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
    { label: "Business Websites", icon: Globe, highlight: "Corporate & Agency" },
    { label: "High-Converting Landing Pages", icon: Layout, highlight: "SaaS & Launches" },
    { label: "E-commerce Solutions", icon: ShoppingBag, highlight: "D2C & Catalog" },
    { label: "Custom Web Applications", icon: Code2, highlight: "Dashboards & Workflows" },
    { label: "Mobile-First Responsive Design", icon: Smartphone, highlight: "100% Cross-Device" },
    { label: "Core Web Vitals & SEO", icon: Gauge, highlight: "High Speed Performance" },
  ];

  return (
    <div className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-4 overflow-hidden shadow-2xs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111318] pr-4 border-r border-[#E5E7EB] hidden lg:flex">
            <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
            <span>Core Capabilities</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-[#111318] group"
                >
                  <div className="w-6 h-6 rounded-md bg-[#EEF0F3] flex items-center justify-center text-[#111318] group-hover:bg-[#B8F36B] transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.label}</span>
                  {idx < capabilities.length - 1 && (
                    <span className="text-[#D8DCE3] ml-4 hidden sm:inline">•</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
