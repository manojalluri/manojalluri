import React from "react";
import {
  Briefcase,
  Rocket,
  ShoppingBag,
  UserCheck,
  RefreshCw,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import type { ServiceItem } from "../types";


interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Rocket,
  ShoppingBag,
  UserCheck,
  RefreshCw,
  Cpu,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
}) => {
  const IconComponent = iconMap[service.icon] || Briefcase;

  return (
    <div className="group relative bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] hover:border-[#111318] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] flex flex-col justify-between">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#EEF0F3] group-hover:bg-[#B8F36B] transition-colors duration-200 flex items-center justify-center text-[#111318]">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          <span className="text-sm font-mono font-bold text-[#656B76] group-hover:text-[#111318] transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#111318] mb-3 tracking-tight group-hover:text-[#111318]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#656B76] leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Deliverables list */}
        <div className="pt-4 border-t border-[#EEF0F3] mb-6">
          <span className="text-[11px] font-bold text-[#111318] uppercase tracking-wider block mb-3">
            What's Included:
          </span>
          <ul className="space-y-2">
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-[#111318] font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#86D42A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-[#EEF0F3]">
        <button
          onClick={() => onSelectService(service.title)}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F7F8FA] hover:bg-[#111318] text-[#111318] hover:text-white transition-all duration-200 text-xs font-bold uppercase tracking-wider cursor-pointer group/btn"
        >
          <span>Discuss Project</span>
          <span className="w-6 h-6 rounded-lg bg-white group-hover/btn:bg-[#B8F36B] text-[#111318] flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
        </button>
      </div>
    </div>
  );
};
