import React, { useState } from "react";
import { Sparkles, Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { faqsData } from "../data/faqs";

interface FAQProps {
  onOpenContact: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Quick Ask Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#111318] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#86D42A]" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.15] mb-4">
                Questions Before We Start?
              </h2>
              <p className="text-base sm:text-lg text-[#656B76] leading-relaxed mb-8">
                Clear answers regarding project costs, development timelines, mobile responsiveness,
                hosting, and after-launch maintenance.
              </p>

              {/* Direct Question Callout */}
              <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111318]">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#111318]">Have a different question?</h4>
                </div>
                <p className="text-xs text-[#656B76] leading-relaxed mb-4">
                  If your question isn't answered here, feel free to drop a quick message on WhatsApp or through the project inquiry form.
                </p>
                <button
                  onClick={onOpenContact}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#111318] hover:bg-[#20242D] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#B8F36B]" />
                  <span>Ask Me Directly ↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#F7F8FA] border-[#111318] shadow-xs"
                      : "bg-white border-[#E5E7EB] hover:border-[#CBD5E1]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#111318] tracking-tight">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#111318] text-[#B8F36B]"
                          : "bg-[#EEF0F3] text-[#111318]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#656B76] leading-relaxed border-t border-[#EEF0F3] animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
