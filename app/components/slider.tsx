"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useEffect, useState } from "react";

export default function Slider({ per = 3, label, arrows = false, children }: {
  per?: number;
  label: string;
  arrows?: boolean;
  children: React.ReactNode;
}) {
  const slides = Children.toArray(children);
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(per);

  useEffect(() => {
    const apply = () => {
      const width = window.innerWidth;
      setVisible(width < 720 ? 1 : width < 1040 ? Math.min(2, per) : per);
    };
    window.addEventListener("resize", apply);
    apply();
    return () => window.removeEventListener("resize", apply);
  }, [per]);

  const max = Math.max(0, slides.length - visible);
  const index = Math.min(page, max);

  const go = (next: number) => setPage(Math.min(max, Math.max(0, next)));

  return (
    <div className="slider" style={{ ["--per" as string]: visible }}>
      <div className="slider-stage">
        <div className="slider-window">
          <div className="slider-track" style={{ transform: `translateX(-${index * (100 / visible)}%)` }}>
            {slides.map((slide, item) => <div className="slider-item" key={item}>{slide}</div>)}
          </div>
        </div>
        {arrows && max > 0 && (
          <>
            <button type="button" className="slider-prev" aria-label={`${label} ก่อนหน้า`} disabled={index === 0} onClick={() => go(index - 1)}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="slider-next" aria-label={`${label} ถัดไป`} disabled={index === max} onClick={() => go(index + 1)}>
              <ChevronRight aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      {max > 0 && (
        <div className="slider-dots" role="tablist" aria-label={label}>
          {Array.from({ length: max + 1 }, (_, item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={item === index}
              aria-label={`${label} ชุดที่ ${item + 1}`}
              className={item === index ? "on" : ""}
              onClick={() => setPage(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
