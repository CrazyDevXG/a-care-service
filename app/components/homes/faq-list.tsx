"use client";

import { useState } from "react";

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="faq-item" key={item.question}>
            <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
              {item.question}
            </button>
            {expanded && <p>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
