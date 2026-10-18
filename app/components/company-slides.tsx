"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/company/01_AcareService_CompanyProfile_EnglishVersion.png",
    alt: "ปกโปรไฟล์บริษัท เอ-แคร์ เซอร์วิส จำกัด",
  },
  {
    src: "/images/company/02_AcareService_CompanyProfile_EnglishVersion.png",
    alt: "ภาพรวมบริษัท ก่อตั้งปี 2010 ดูแลระบบปรับอากาศและระบบทำความเย็น",
  },
  {
    src: "/images/company/03_AcareService_CompanyProfile_EnglishVersion.png",
    alt: "บริการเครื่องปรับอากาศ และเครื่องจ่ายน้ำอัดลมกับเครื่องทำน้ำแข็ง",
  },
  {
    src: "/images/company/04_AcareService_CompanyProfile_EnglishVersion.png",
    alt: "บริการตู้เย็น ตู้แช่ และเครื่องซักผ้า",
  },
  {
    src: "/images/company/05_AcareService_CompanyProfile_EnglishVersion.png",
    alt: "ช่องทางติดต่อ เอ-แคร์ เซอร์วิส จำกัด",
  },
];

export function CompanySlides() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div
      className="company-stage"
      aria-roledescription="สไลด์"
      aria-label="โปรไฟล์บริษัท"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="company-window">
        <div className="company-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, item) => (
            <div className="company-frame" key={slide.src} aria-hidden={item !== index}>
              <Image
                src={slide.src}
                alt={item === index ? slide.alt : ""}
                width={2560}
                height={1440}
                sizes="(max-width: 1200px) calc(100vw - 48px), 1200px"
                priority={item === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="company-prev" aria-label="สไลด์ก่อนหน้า" onClick={() => go(index - 1)}>
        <ChevronLeft aria-hidden="true" />
      </button>
      <button type="button" className="company-next" aria-label="สไลด์ถัดไป" onClick={() => go(index + 1)}>
        <ChevronRight aria-hidden="true" />
      </button>
      <div className="company-dots" role="tablist" aria-label="เลือกหน้าโปรไฟล์">
        {slides.map((slide, item) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={item === index}
            aria-label={`หน้า ${item + 1}`}
            className={item === index ? "on" : ""}
            onClick={() => setIndex(item)}
          />
        ))}
      </div>
      <p className="company-count" aria-live="polite">หน้า {index + 1} จาก {slides.length}</p>
    </div>
  );
}
