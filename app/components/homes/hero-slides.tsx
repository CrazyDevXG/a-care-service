"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    photo: "/images/slider/p1.webp",
    photoAlt: "ชุดแอร์ติดผนังและคอยล์ร้อน",
    kicker: "บริการครบวงจร",
    title: "ดูแลความเย็นได้ตลอดปี",
    text: "ล้าง ซ่อม ติดตั้ง และบำรุงรักษาเครื่องปรับอากาศ สำหรับบ้านและธุรกิจ ด้วยทีมที่ทำงานต่อเนื่องตั้งแต่ปี 2010",
  },
  {
    photo: "/images/slider/p2.webp",
    photoAlt: "เครื่องปรับอากาศแบบฝังฝ้า",
    kicker: "งานอาคารและโรงงาน",
    title: "ระบบปรับอากาศสำหรับองค์กร",
    text: "รับดูแล Wall Type / Cassette Type / Ceiling Type / Chiller ทั้งสำนักงาน โรงงาน สถานศึกษา และร้านค้า",
  },
];

export function HeroSlides() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="slide-hero" aria-roledescription="สไลด์">
      <Image src="/images/slider/3.webp" alt="" fill priority sizes="100vw" className="slide-bg" />
      <div className="container slide-grid">
        <Image src={slide.photo} alt={slide.photoAlt} width={640} height={520} className="slide-photo" priority />
        <div className="slide-copy" key={index}>
          <p className="slide-kicker">{slide.kicker}</p>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <Link className="btn btn-main" href="#section-products">ดูประเภทเครื่อง</Link>
          <ul className="slide-tags">
            {["โรงงาน", "สำนักงาน", "สถานศึกษา", "ที่พักอาศัย"].map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </div>
      <div className="slide-nav">
        <button type="button" aria-label="สไลด์ก่อนหน้า" onClick={() => setIndex((value) => (value === 0 ? slides.length - 1 : value - 1))}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" aria-label="สไลด์ถัดไป" onClick={() => setIndex((value) => (value + 1) % slides.length)}><ChevronRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}
