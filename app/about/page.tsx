import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CompanySlides } from "../components/company-slides";
import { AppointmentBand, Icon, PageHero } from "../components/ui";
import { photos } from "../lib/content";

export const metadata: Metadata = { title: "เกี่ยวกับบริษัท" };

export default function About() {
  return (
    <main>
      <PageHero kicker="เกี่ยวกับเรา" title="เอ-แคร์ เซอร์วิส" crumb="เกี่ยวกับเรา" />
      <section className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <Image src={photos.panyaShirt} alt="ช่าง A-Care Service ขณะล้างแอร์" fill sizes="(max-width: 800px) 100vw, 46vw" />
            <div className="since"><span>ก่อตั้งเมื่อ</span><strong>2010</strong><span>มกราคม</span></div>
          </div>
          <div>
            <div className="subtitle">เรื่องราวของเรา</div>
            <h2>บริษัท เอ-แคร์ เซอร์วิส จำกัด</h2>
            <p>ก่อตั้งขึ้นในเดือนมกราคม พ.ศ. 2553 (2010) ให้บริการบำรุงรักษาระบบปรับอากาศและระบบทำความเย็น ด้วยประสบการณ์ในงานบริการมากกว่า 10 ปี</p>
            <p>เราดูแลตั้งแต่เครื่องปรับอากาศ ตู้เย็น ตู้แช่ เครื่องทำน้ำแข็ง ไปจนถึงเครื่องจ่ายเครื่องดื่ม พร้อมให้บริการตรวจเช็ก ซ่อม ล้าง ติดตั้ง และเคลื่อนย้าย</p>
            <div className="facts">
              <div><strong>2010</strong><span>ปีที่เริ่มต้นให้บริการ</span></div>
              <div><strong>ครบวงจร</strong><span>ล้าง · ซ่อม · ติดตั้ง · ดูแล</span></div>
            </div>
            <Link className="btn btn-main" href="/projects">ดูผลงาน</Link>
          </div>
        </div>
      </section>
      <section className="section company-slide">
        <div className="container">
          <div className="subtitle">โปรไฟล์บริษัท</div>
          <h2>เอกสารแนะนำบริษัท</h2>
          <CompanySlides />
        </div>
      </section>
      <section className="section section-mist">
        <div className="container">
          <div className="subtitle">ความเชี่ยวชาญ</div>
          <h2>ดูแลอุปกรณ์ตั้งแต่ติดตั้งจนถึงบำรุงรักษา</h2>
          <div className="extra-grid">
            {[
              ["air", "เครื่องปรับอากาศ", "Wall Type / Cassette Type / Ceiling Type / Chiller"],
              ["snow", "ตู้เย็นและตู้แช่", "ตรวจอุณหภูมิ ซ่อมระบบ และทำความสะอาด"],
              ["droplets", "ตู้กดน้ำ เครื่องทำน้ำแข็ง", "ตรวจระบบ ซ่อม ติดตั้ง และย้าย"],
              ["heater", "คอยล์ร้อน", "ซ่อมบำรุง ล้างทำความสะอาด คอยล์ร้อนภายนอกอาคาร"],
            ].map(([icon, title, text]) => (
              <article className="extra-card" key={title}>
                <span className="reason-icon"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <AppointmentBand />
    </main>
  );
}
