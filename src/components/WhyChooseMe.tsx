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
      title: "Direct Talk with Me",
      desc: "You talk directly with the person writing your code. No middlemen, miscommunications, or waiting days for replies.",
      icon: MessageSquare,
    },
    {
      title: "Custom Made For You",
      desc: "Every design is crafted specifically for your business and customers. No cheap, cookie-cutter templates.",
      icon: Target,
    },
    {
      title: "Smooth on Every Phone",
      desc: "Your website will load fast and look great on iPhones, Android phones, iPads, and desktop computers.",
      icon: Smartphone,
    },
    {
      title: "Fast, Clean & Reliable",
      desc: "Clean modern code that loads instantly, with essential Google search setup included from day one.",
      icon: ShieldCheck,
    },
  ];

  const comparisonRows = [
    {
      feature: "Communication",
      typical: "Passed between multiple managers who don't write code",
      myApproach: "Direct chat and calls with me anytime on WhatsApp",
    },
    {
      feature: "Design Quality",
      typical: "Recycled generic templates with swapped logos",
      myApproach: "Custom design made from scratch for your brand",
    },
    {
      feature: "Deadlines",
      typical: "Vague timelines and frequent unexpected delays",
      myApproach: "Clear steps, fixed launch dates, and regular updates",
    },
    {
      feature: "After-Launch Help",
      typical: "Left on your own once the final invoice is paid",
      myApproach: "Full file handover, training, and 30 days free support",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#111318] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-xs font-bold uppercase tracking-wider text-[#B8F36B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY WORK WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Direct Talk. Fast Work. Real Results.
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            When you hire me, you work directly with the developer building your site.
            No confusing tech jargon, no long corporate delays, just honest work done right.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#181B22] border border-[#272B35] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#B8F36B] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#222631] flex items-center justify-center text-[#B8F36B] mb-4 sm:mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
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

        {/* Comparison Block */}
        <div className="bg-[#181B22] border border-[#272B35] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-8 border-b border-[#272B35]">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Working With Manoj vs. Traditional Agencies
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
              A clear comparison of how I work compared to typical agency setups.
            </p>
          </div>

          {/* Mobile Card View (shown below md screen) */}
          <div className="block md:hidden divide-y divide-[#272B35]">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="p-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8F36B] block">
                  {row.feature}
                </span>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-[#14161D] border border-[#272B35] flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#656B76] block">
                        Typical Agency
                      </span>
                      <span className="text-xs text-[#9CA3AF]">{row.typical}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#151D17] border border-[#233522] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#86D42A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#86D42A] block">
                        With Manoj Alluri
                      </span>
                      <span className="text-xs text-white font-medium">{row.myApproach}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (md screens and up) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#272B35] bg-[#14161D]">
                  <th className="py-4 px-6 font-bold text-[#E5E7EB] uppercase tracking-wider text-[11px] w-1/4">
                    Feature
                  </th>
                  <th className="py-4 px-6 font-bold text-[#9CA3AF] uppercase tracking-wider text-[11px] w-3/8">
                    Typical Agency
                  </th>
                  <th className="py-4 px-6 font-bold text-[#B8F36B] uppercase tracking-wider text-[11px] w-3/8 bg-[#181F1A]">
                    With Manoj Alluri
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
