"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ServiceBand({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const band = ref.current;
    if (!band) return;
    const reveal = () => band.classList.add("is-in");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      reveal();
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  return <section className="service-band" ref={ref}>{children}</section>;
}
