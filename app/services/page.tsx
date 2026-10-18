import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentBand, Icon, PageHero } from "../components/ui";
import { extraServices, services } from "../lib/content";

export const metadata: Metadata = { title: "บริการของเรา" };

export default function ServicesPage() {
  return (
    <main>
      <PageHero kicker="บริการของเรา" title="งานที่เราดูแล" crumb="บริการ" />
      <section className="section">
        <div className="container service-layout">
          <aside className="service-side">
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`}>{service.title}</a>
            ))}
            <a href="#more">งานทำความเย็นอื่น ๆ</a>
          </aside>
          <div className="service-main">
            <h2>คู่ดูแลระบบปรับอากาศ ตั้งแต่ล้าง ซ่อม ติดตั้ง จนถึงบำรุงรักษา</h2>
            {services.map((service) => (
              <article className="service-block" id={service.slug} key={service.slug}>
                <Image src={service.image} alt={service.imageAlt} width={860} height={420} />
                <div>
                  <span className="reason-icon"><Icon name={service.icon} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
            <div className="extra-grid" id="more">
              {extraServices.map((item) => (
                <article className="extra-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="extra-sub">{item.subtitle}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AppointmentBand />
    </main>
  );
}
