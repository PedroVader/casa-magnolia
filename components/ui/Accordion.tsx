"use client";

import { useState, type ReactNode } from "react";

interface AccordionItemData {
  question: string;
  answer: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y divide-magnolia-ink/10 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left font-body text-lg transition-colors hover:text-magnolia-green"
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`ml-4 h-5 w-5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M12 20c4 5.5 8.2 9.8 12 10 3.8-.2 8-4.5 12-10" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <div className="font-body text-base leading-relaxed opacity-80">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
