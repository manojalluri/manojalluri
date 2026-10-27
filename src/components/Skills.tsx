import React from "react";
import { Sparkles, Layers, Database, Cloud } from "lucide-react";
import { skillCategories } from "../data/skills";

export const Skills: React.FC = () => {
  const categoryIcons = [Layers, Database, Cloud];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
            <span>ENTERPRISE TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-4">
            Enterprise-Grade Architecture. Built for Scale.
          </h2>
          <p className="text-base sm:text-lg text-[#656B76] leading-relaxed">
            I engineer web applications and digital products using battle-tested enterprise technologies,
            strict type safety, ACID-compliant databases, and automated cloud pipelines designed to handle real business volume.
          </p>
        </div>

        {/* 3 Enterprise Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Layers;
            return (
              <div
                key={cat.title}
                className="bg-[#F7F8FA] rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-[#111318] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111318] shadow-2xs">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#111318] tracking-tight">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] text-[#86D42A] font-bold uppercase tracking-wider">
                          Enterprise Ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-white p-3 rounded-xl border border-[#E5E7EB] flex items-center justify-between group hover:border-[#B8F36B] hover:shadow-xs transition-all"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          {skill.highlight ? (
                            <span className="w-2 h-2 rounded-full bg-[#86D42A] shrink-0"></span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-[#D8DCE3] shrink-0"></span>
                          )}
                          <span className="text-xs sm:text-sm font-extrabold text-[#111318] truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-[#656B76] text-right shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] text-[#656B76]">
                  <span className="font-semibold">Performance Standard</span>
                  <span className="font-mono text-[#111318] font-bold">100% Type-Safe</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
