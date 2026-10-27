import React from "react";
import {
  Sparkles,
  MessageSquare,
  Target,
  Smartphone,
  ShieldCheck,
  Check,
  X,
} from "lucide-react";

export const WhyChooseMe: React.FC = () => {
  const features = [
    {
      title: "Direct Communication",
      desc: "Work directly with the developer building your site. No account managers, lost-in-translation requirements, or bureaucratic delays.",
      icon: MessageSquare,
    },
    {
      title: "Built Around Your Goals",
      desc: "Design and technical decisions are tailored specifically to your audience, business model, and required business actions.",
      icon: Target,
    },
    {
      title: "Responsive by Design",
      desc: "Every viewport from 320px smartphones to 4K displays receives equal craftsmanship, ensuring intuitive tap targets and typography.",
      icon: Smartphone,
    },
    {
      title: "Quality-Focused Development",
      desc: "Maintainable TypeScript code, zero unnecessary dependencies, core SEO foundations, and thorough cross-browser QA before launch.",
      icon: ShieldCheck,
    },
  ];

  const comparisonRows = [
    {
      feature: "Communication",
      typical: "Multiple handoffs through managers & intermediaries",
      myApproach: "Direct communication with the developer handling your build",
    },
    {
      feature: "Design Quality",
      typical: "Recycled generic WordPress or theme templates",
      myApproach: "Custom design adapted specifically to your brand & offer",
    },
    {
      feature: "Project Milestones",
      typical: "Vague deliverables and unclear turnaround dates",
      myApproach: "Defined scope breakdown with transparent timeline milestones",
    },
    {
      feature: "Post-Launch Handover",
      typical: "Limited documentation and abrupt handoff",
      myApproach: "Complete source code, deployment walkthrough, and 30-day support",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#111318] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-xs font-bold uppercase tracking-wider text-[#B8F36B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            More Than Code. A Thoughtful Digital Partner.
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            When you hire an independent web developer, you receive dedicated attention,
            uncompromising craftsmanship, and direct accountability at every step.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#181B22] border border-[#272B35] rounded-2xl p-6 flex flex-col justify-between hover:border-[#B8F36B] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#222631] flex items-center justify-center text-[#B8F36B] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-[#181B22] border border-[#272B35] rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-[#272B35]">
            <h3 className="text-xl font-bold text-white">
              Working With Manoj vs. The Typical Agency Approach
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
              A transparent comparison of workflows, communication, and delivery standards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#272B35] bg-[#14161D]">
                  <th className="py-4 px-6 font-bold text-[#E5E7EB] uppercase tracking-wider text-[11px] w-1/4">
                    Feature
                  </th>
                  <th className="py-4 px-6 font-bold text-[#9CA3AF] uppercase tracking-wider text-[11px] w-3/8">
                    Typical Approach
                  </th>
                  <th className="py-4 px-6 font-bold text-[#B8F36B] uppercase tracking-wider text-[11px] w-3/8 bg-[#181F1A]">
                    My Approach (Manoj Alluri)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#272B35]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#1E222B]/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-[#9CA3AF]">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.typical}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-white font-medium bg-[#151D17]">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#86D42A] shrink-0 mt-0.5" />
                        <span>{row.myApproach}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
