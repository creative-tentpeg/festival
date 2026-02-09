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
          <h3 className="text-2xl font-bold text-[#022154] font-heading">
            {section.category}
          </h3>
          <div className="space-y-3">
            {section.questions.map((item) => (
              <div
                key={item.id}
                className="bg-festival-green rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  style={{
                    background: "linear-gradient(to right, #E90A3C, #C70830)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(to right, #C70830, #A00620)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(to right, #E90A3C, #C70830)")
                  }
                  className="w-full px-6 py-4 flex items-center justify-between transition-colors"
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
                  <div className="px-6 py-4 bg-white border border-gray-300 border-t-2 border-t-festival-green text-gray-800 leading-relaxed rounded-b-lg">
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
