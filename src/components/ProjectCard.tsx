import React, { useState } from "react";
import { ArrowUpRight, Eye, ExternalLink } from "lucide-react";
import type { ProjectItem } from "../types";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenInquiry: (projectName: string) => void;
  onViewDetails: (project: ProjectItem) => void;
  layoutMode?: "grid" | "slider";
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenInquiry,
  onViewDetails,
  layoutMode = "slider",
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Custom UI representation tailored for each of Manoj Alluri's 7 live projects
  const renderMockup = () => {
    switch (project.id) {
      case "sri-sai-vijaya-durga":
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="font-extrabold text-xs text-white">Sri Sai Vijaya Durga Auto Finance</span>
              </div>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">
                Auto Finance
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <span className="text-[10px] text-[#9CA3AF] block">Commercial Vehicle Loan</span>
                <span className="text-xs font-black text-[#B8F36B] mt-0.5 block">Starting @ 9.5%</span>
                <span className="text-[9px] text-zinc-400">Trucks, Autos &amp; Cabs</span>
              </div>
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <span className="text-[10px] text-[#9CA3AF] block">EMI Calculator</span>
                <span className="text-xs font-black text-white mt-0.5 block">₹14,250 / mo</span>
                <span className="text-[9px] text-emerald-400">Quick Eligibility Check</span>
              </div>
            </div>
            <div className="bg-amber-950/60 border border-amber-800/40 rounded p-2 flex items-center justify-between text-[10px] text-amber-200">
              <span>Trusted Commercial Vehicle Lending</span>
              <span className="font-bold text-[#B8F36B]">Instant Quote →</span>
            </div>
          </div>
        );

      case "deccan-restaurant-crm":
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="font-extrabold text-xs text-white">Deccan Restaurant POS</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                Admin POS &amp; CRM
              </span>
            </div>
            <div className="space-y-1.5 my-2">
              <div className="bg-[#1F232B] p-2 rounded-lg border border-[#2B303C] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Table #08 — Active Order</span>
                  <span className="text-[10px] text-[#9CA3AF]">3x Hyderabadi Biryani, 2x Irani Chai</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                  KOT Sent
                </span>
              </div>
              <div className="bg-[#1F232B] p-2 rounded-lg border border-[#2B303C] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Today's Revenue</span>
                  <span className="text-[10px] text-[#9CA3AF]">142 Orders Completed</span>
                </div>
                <span className="text-xs font-extrabold text-[#B8F36B]">₹68,400</span>
              </div>
            </div>
            <div className="bg-emerald-950/60 border border-emerald-800/40 rounded p-2 flex items-center justify-between text-[10px] text-emerald-200">
              <span>Admin Authentication Active</span>
              <span className="font-bold text-[#B8F36B]">Live Dashboard</span>
            </div>
          </div>
        );

      case "motorcycle-haven":
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <span className="font-extrabold text-xs text-white">Motorcycle Haven</span>
              </div>
              <span className="text-[10px] bg-orange-500/20 text-orange-300 font-bold px-2 py-0.5 rounded">
                Rider Store
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <div className="h-10 rounded bg-gradient-to-br from-orange-950 to-neutral-900 flex items-center justify-center text-[11px] font-bold text-orange-300">
                  Carbon Helmet ECE
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">₹14,999</span>
                  <span className="text-[9px] bg-[#B8F36B] text-[#111318] px-1 py-0.5 rounded font-bold">
                    Buy
                  </span>
                </div>
              </div>
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <div className="h-10 rounded bg-gradient-to-br from-neutral-900 to-zinc-800 flex items-center justify-center text-[11px] font-bold text-zinc-300">
                  Armored Jacket
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">₹7,499</span>
                  <span className="text-[9px] bg-[#B8F36B] text-[#111318] px-1 py-0.5 rounded font-bold">
                    Buy
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-orange-950/60 border border-orange-800/40 rounded p-2 flex items-center justify-between text-[10px] text-orange-200">
              <span>ECE &amp; DOT Certified Gear</span>
              <span className="font-bold text-[#B8F36B]">Fast Pan-India Shipping</span>
            </div>
          </div>
        );

      case "grand-occasions-digital":
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="font-extrabold text-xs text-white">Grand Occasions Digital</span>
              </div>
              <span className="text-[10px] bg-yellow-500/20 text-yellow-300 font-bold px-2 py-0.5 rounded">
                Luxury Invites
              </span>
            </div>
            <div className="bg-[#1F232B] p-3 rounded-lg border border-[#2B303C] my-2 text-center">
              <span className="text-[10px] font-serif uppercase tracking-widest text-amber-200 block">
                The Royal Wedding of
              </span>
              <h4 className="text-xs font-serif font-bold text-white mt-0.5">
                Aakash &amp; Priya
              </h4>
              <div className="mt-2 flex items-center justify-center gap-3 text-[10px] text-[#9CA3AF]">
                <span>RSVPs: 384 Confirmed</span>
                <span>•</span>
                <span className="text-amber-300 font-bold">Interactive Itinerary</span>
              </div>
            </div>
            <div className="bg-yellow-950/60 border border-yellow-800/40 rounded p-2 flex items-center justify-between text-[10px] text-yellow-200">
              <span>Digital Invites &amp; Event Concierge</span>
              <span className="font-bold text-[#B8F36B]">Instant Guest RSVP</span>
            </div>
          </div>
        );

      case "aquarise-technologies":
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span className="font-extrabold text-xs text-white">Aquarise Technologies</span>
              </div>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 font-bold px-2 py-0.5 rounded">
                AquaTech IoT
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <span className="text-[10px] text-[#9CA3AF] block">Pond DO Sensor #04</span>
                <span className="text-xs font-black text-cyan-300 mt-0.5 block">6.8 mg/L</span>
                <span className="text-[9px] text-emerald-400">Optimal Aeration</span>
              </div>
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <span className="text-[10px] text-[#9CA3AF] block">Daily Prawn Count</span>
                <span className="text-xs font-black text-[#B8F36B] mt-0.5 block">100 Count Rates</span>
                <span className="text-[9px] text-cyan-200">Bhimavaram Market</span>
              </div>
            </div>
            <div className="bg-cyan-950/60 border border-cyan-800/40 rounded p-2 flex items-center justify-between text-[10px] text-cyan-200">
              <span>Smart Aquaculture Automation</span>
              <span className="font-bold text-[#B8F36B]">Farmer Connect</span>
            </div>
          </div>
        );

      case "rare-drafts":
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
                <span className="font-extrabold text-xs text-white">Rare Drafts</span>
              </div>
              <span className="text-[10px] bg-violet-500/20 text-violet-300 font-bold px-2 py-0.5 rounded">
                Design Studio
              </span>
            </div>
            <div className="p-3 bg-[#1F232B] rounded-lg border border-[#2B303C] my-2 text-center">
              <span className="text-[10px] font-mono tracking-widest text-[#B8F36B] uppercase block">
                EDITORIAL ISSUE 04
              </span>
              <h4 className="text-xs font-black text-white mt-1 tracking-tight">
                Contemporary Form &amp; Typography
              </h4>
              <p className="text-[10px] text-[#9CA3AF] mt-1">
                Visual identity systems for avant-garde brands
              </p>
            </div>
            <div className="bg-violet-950/60 border border-violet-800/40 rounded p-2 flex items-center justify-between text-[10px] text-violet-200">
              <span>Curated Design Concepts</span>
              <span className="font-bold text-[#B8F36B]">Explore Studio</span>
            </div>
          </div>
        );

      case "naveen-multispeciality-hospital":
      default:
        return (
          <div className="w-full h-full bg-[#181B22] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2B303C] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span className="font-extrabold text-xs text-white">Naveen Multispeciality Hospital</span>
              </div>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded">
                Hospital Portal
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <span className="text-[10px] text-[#9CA3AF] block">24/7 Emergency Care</span>
                <span className="text-xs font-bold text-rose-300 mt-0.5 block">Rapid Triage &amp; ICU</span>
                <span className="text-[9px] text-emerald-400">Ambulance on Call</span>
              </div>
              <div className="bg-[#1F232B] p-2.5 rounded-lg border border-[#2B303C]">
                <span className="text-[10px] text-[#9CA3AF] block">Doctor Appointments</span>
                <span className="text-xs font-bold text-[#B8F36B] mt-0.5 block">OPD Scheduling</span>
                <span className="text-[9px] text-zinc-400">Cardiology &amp; Ortho</span>
              </div>
            </div>
            <div className="bg-rose-950/60 border border-rose-800/40 rounded p-2 flex items-center justify-between text-[10px] text-rose-200">
              <span>NABH Standards &amp; Care</span>
              <span className="font-bold text-[#B8F36B]">Book Appointment →</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        layoutMode === "grid"
          ? "w-full h-full"
          : "w-[285px] sm:w-[350px] md:w-[390px] shrink-0"
      } bg-[#181B22] border border-[#272B35] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#B8F36B] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group`}
    >
      <div>
        {/* Realistic Browser Frame Header */}
        <div className="bg-[#111318] px-4 py-2.5 border-b border-[#272B35] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
            </div>
            {index !== undefined && (
              <span className="text-[10px] font-mono font-bold text-[#111318] bg-[#B8F36B] px-1.5 py-0.5 rounded">
                #{String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-[#9CA3AF] truncate max-w-[170px] sm:max-w-[200px]">
            {project.liveUrl ? new URL(project.liveUrl).hostname : `${project.id}.com`}
          </span>
          <span className="text-[10px] font-bold text-[#B8F36B] uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#86D42A] animate-pulse"></span>
            Live
          </span>
        </div>

        {/* Mockup Canvas */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-[#272B35]">
          {renderMockup()}

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-[#111318]/75 backdrop-blur-xs flex items-center justify-center gap-3 transition-opacity duration-200 px-4 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B8F36B] text-[#111318] text-xs font-black shadow-md hover:bg-[#A3E94E] transition-all cursor-pointer"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
            <button
              onClick={() => onViewDetails(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#111318] text-xs font-bold shadow-md hover:bg-[#EEF0F3] transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
          </div>
        </div>

        {/* Project Meta Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-[#B8F36B] tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-[11px] text-[#9CA3AF] font-mono">
              {project.metrics?.[0]?.value || "Production"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#B8F36B] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5 font-normal">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#222631] text-[#E5E7EB] border border-[#2F3543]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action footer */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-[#272B35] flex items-center justify-between gap-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold text-[#B8F36B] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        ) : (
          <button
            onClick={() => onViewDetails(project)}
            className="text-xs font-bold text-[#E5E7EB] hover:text-[#B8F36B] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}

        <button
          onClick={() => onOpenInquiry(project.title)}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#222631] hover:bg-[#B8F36B] hover:text-[#111318] text-[#E5E7EB] text-[11px] font-bold tracking-wide uppercase transition-all cursor-pointer border border-[#2F3543]"
        >
          <span>Ask About This</span>
        </button>
      </div>
    </div>
  );
};
