// src\components\Accordion.tsx
import React, { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
};

export interface AccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}

function AccordionItem({
  item,
  index,
  openIndex,
  setOpenIndex,
}: {
  item: FAQItem;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-white/10">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40   cursor-pointer"
      >
        <span className="text-base md:text-lg font-medium text-white/90">{item.question}</span>
        <span
          className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 transition-transform ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="fill-white/80"
          >
            <path d="M11 4h2v16h-2z" />
            <path d="M4 11h16v2H4z" />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-white/70 leading-relaxed">
            {typeof item.answer === "string" ? (
              <p className="whitespace-pre-line">{item.answer}</p>
            ) : (
              item.answer
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <section className="border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          index={i}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </section>
  );
}