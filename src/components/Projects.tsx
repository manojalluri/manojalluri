import React, { useState } from "react";
import { Sparkles, ArrowUpRight, X, ExternalLink, Play, Pause } from "lucide-react";
import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import type { ProjectItem } from "../types";

interface ProjectsProps {
  onOpenContact: (projectOrService?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#111318] text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-xs font-bold uppercase tracking-wider text-[#B8F36B] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Good Ideas Deserve Great Execution.
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              A selection of live web experiences and digital products demonstrating my approach to design,
              development, usability, and conversion performance.
            </p>
          </div>

          {/* Interactive Pause/Play Toggle & Hover Hint */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B22] border border-[#272B35] text-xs text-[#9CA3AF]">
              <span className="w-2 h-2 rounded-full bg-[#86D42A] animate-pulse"></span>
              <span>Hover card to pause</span>
            </div>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F232B] hover:bg-[#2B303C] text-xs font-bold text-white border border-[#2B303C] transition-all cursor-pointer"
              aria-label={isPaused ? "Resume movement" : "Pause movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#B8F36B] fill-current" />
                  <span>Resume Stream</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#B8F36B] fill-current" />
                  <span>Pause Stream</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Moving Stream Container (Left to Right) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Elegant Edge Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#111318] via-[#111318]/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#111318] via-[#111318]/80 to-transparent z-10"></div>

        {/* Continuous Left-to-Right Animated Carousel */}
        <div
          className={`animate-marquee-ltr flex gap-6 sm:gap-8 px-4 ${
            isPaused ? "marquee-paused" : ""
          }`}
          style={{
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >
          {/* Render duplicated list so the loop is seamless and never runs out */}
          {[...projectsData, ...projectsData].map((project, idx) => (
            <ProjectCard
              key={`${project.id}-${idx}`}
              project={project}
              onOpenInquiry={(title) => onOpenContact(`Inquiry regarding ${title}`)}
              onViewDetails={(item) => setActiveModalProject(item)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#181B22] border border-[#272B35] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Have an idea for your business or product?
            </h3>
            <p className="text-sm text-[#9CA3AF] mt-1.5 max-w-xl">
              Whether you need an e-commerce storefront, a high-converting landing page, or a tailored web app, let's explore how to make it happen.
            </p>
          </div>
          <button
            onClick={() => onOpenContact("Custom Project Discussion")}
            className="shrink-0 inline-flex items-center gap-2 bg-[#B8F36B] hover:bg-[#A3E94E] text-[#111318] font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all cursor-pointer shadow-lg hover:scale-105"
          >
            <span>Discuss a Similar Project</span>
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

            {/* Architectural Highlights */}
            <div className="my-6 p-4 rounded-xl bg-[#111318] border border-[#272B35]">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Implementation Focus:
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
