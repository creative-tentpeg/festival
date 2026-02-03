"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  category: string;
  questions: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {items.map((section) => (
        <div key={section.category} className="space-y-4">
          <h3 className="text-2xl font-bold text-[#125427] font-heading">
            {section.category}
          </h3>
          <div className="space-y-3">
            {section.questions.map((item) => (
              <div
                key={item.id}
                className="bg-[#125427] rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-[#125427] hover:bg-[#0d3a1c] transition-colors"
                >
                  <span className="font-semibold text-white text-left">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-white shrink-0 transition-transform duration-300",
                      openId === item.id && "rotate-180",
                    )}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-6 py-4 bg-[#0d3a1c] border-t border-white/10 text-white leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
