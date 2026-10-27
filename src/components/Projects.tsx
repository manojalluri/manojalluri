import React, { useState, useRef } from "react";
import {
  Sparkles,
  ArrowUpRight,
  X,
  ExternalLink,
  Play,
  Pause,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import type { ProjectItem } from "../types";

interface ProjectsProps {
  onOpenContact: (projectOrService?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "slider">("grid");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 380;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    if (direction === "left") {
      setActiveSlideIndex((prev) => Math.max(0, prev - 1));
    } else {
      setActiveSlideIndex((prev) => Math.min(projectsData.length - 1, prev + 1));
    }
  };

  const scrollToProject = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth = 380;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSlideIndex(index);
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#111318] text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-xs font-bold uppercase tracking-wider text-[#B8F36B] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED PROJECTS ({projectsData.length} LIVE SITES)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Real Projects. Built for Real Customers.
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Explore 7 live websites and web applications I've designed and launched.
              Every project is organized in order and comfortable to explore with live links.
            </p>
          </div>

          {/* Comfortable Viewing Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* View Mode Toggle: Grid vs Slider */}
            <div className="inline-flex p-1 bg-[#181B22] border border-[#272B35] rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#B8F36B] text-[#111318] shadow-xs"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
                title="Comfortable Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode("slider")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "slider"
                    ? "bg-[#B8F36B] text-[#111318] shadow-xs"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
                title="Horizontal Slider View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Horizontal Slider</span>
              </button>
            </div>

            {/* In Slider Mode: Show Left/Right Navigation and Auto-scroll controls */}
            {viewMode === "slider" && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollSlider("left")}
                  aria-label="Previous Project"
                  className="p-2.5 rounded-xl bg-[#1F232B] hover:bg-[#2B303C] text-white border border-[#2B303C] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollSlider("right")}
                  aria-label="Next Project"
                  className="p-2.5 rounded-xl bg-[#1F232B] hover:bg-[#2B303C] text-white border border-[#2B303C] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1F232B] hover:bg-[#2B303C] text-xs font-bold text-white border border-[#2B303C] transition-all cursor-pointer"
                >
                  {isAutoScrolling ? (
                    <>
                      <Pause className="w-3 h-3 text-[#B8F36B] fill-current" />
                      <span>Pause Auto</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#B8F36B] fill-current" />
                      <span>Auto Slide</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* VIEW 1: COMFORTABLE RESPONSIVE GRID (DEFAULT & HIGHLY READABLE) */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layoutMode="grid"
                index={idx}
                onOpenInquiry={(title) => onOpenContact(`Inquiry regarding ${title}`)}
                onViewDetails={(item) => setActiveModalProject(item)}
              />
            ))}
          </div>
        )}
      </div>

      {/* VIEW 2: HORIZONTAL SLIDER VIEW (WITH COMFORTABLE ARROWS & PAGINATION) */}
      {viewMode === "slider" && (
        <div className="relative w-full overflow-hidden py-4">
          {/* Left & Right Edge Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#111318] via-[#111318]/70 to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#111318] via-[#111318]/70 to-transparent z-10"></div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className={`flex gap-6 sm:gap-8 px-4 sm:px-8 overflow-x-auto no-scrollbar scroll-smooth ${
              isAutoScrolling ? "animate-marquee-ltr" : ""
            }`}
          >
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layoutMode="slider"
                index={idx}
                onOpenInquiry={(title) => onOpenContact(`Inquiry regarding ${title}`)}
                onViewDetails={(item) => setActiveModalProject(item)}
              />
            ))}
          </div>

          {/* Quick Pagination Dots Below Slider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {projectsData.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => scrollToProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlideIndex === idx
                    ? "w-8 bg-[#B8F36B]"
                    : "w-2 bg-[#272B35] hover:bg-[#656B76]"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#181B22] border border-[#272B35] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold text-[#B8F36B] uppercase tracking-wider block mb-1">
              Need A Website Like One of These?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Have an idea for your business or store?
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1.5 max-w-xl">
              Whether you need an online store, a customer portal, an appointment booking system, or a clean company website, let's build it together.
            </p>
          </div>
          <button
            onClick={() => onOpenContact("Custom Project Discussion")}
            className="shrink-0 inline-flex items-center gap-2 bg-[#B8F36B] hover:bg-[#A3E94E] text-[#111318] font-black text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all cursor-pointer shadow-lg hover:scale-105"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#181B22] border border-[#272B35] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#222631] text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs font-bold text-[#B8F36B] uppercase tracking-wider">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Implementation Highlights */}
            <div className="my-6 p-4 rounded-xl bg-[#111318] border border-[#272B35]">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Key Features Built:
              </span>
              <p className="text-xs text-[#E5E7EB] leading-relaxed">
                {activeModalProject.highlight}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider block mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-[#222631] text-white border border-[#2F3543]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#272B35] flex flex-col sm:flex-row items-center justify-between gap-3">
              {activeModalProject.liveUrl ? (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#222631] hover:bg-white hover:text-[#111318] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all border border-[#2F3543]"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              ) : (
                <span className="text-xs text-[#9CA3AF]">
                  Ready to build something like this?
                </span>
              )}

              <button
                onClick={() => {
                  const projName = activeModalProject.title;
                  setActiveModalProject(null);
                  onOpenContact(`Project Inquiry: ${projName}`);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B8F36B] hover:bg-[#A3E94E] text-[#111318] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer"
              >
                <span>Discuss Similar Project ↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
