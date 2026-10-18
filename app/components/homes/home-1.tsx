import Image from "next/image";
import Link from "next/link";
import Slider from "../slider";
import { Icon } from "../ui";
import { homeServices, offers, photos, projects, reasons, systems } from "../../lib/content";
import { BrandStrip } from "./brand-strip";
import { ServiceBand } from "./service-band";

export function Home1() {
  return (
    <main>
      <section className="hero">
        <Image src="/images/mg70172.png" alt="" fill priority sizes="100vw" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container hero-copy">
          <div>
            <div className="subtitle on-dark">บริการครบวงจร</div>
            <h1>บริการคุณภาพ<br />ความเย็นที่สบาย</h1>
          </div>
          <div className="hero-lead">
            <p>เราดูแลล้าง ซ่อม ติดตั้ง และบำรุงรักษาเครื่องปรับอากาศ สำหรับบ้านและธุรกิจ ด้วยทีมช่างที่ทำงานต่อเนื่องตั้งแต่ปี 2010</p>
            <Link className="btn btn-white" href="/contact">นัดหมายบริการ</Link>
          </div>
        </div>
      </section>

      <ServiceBand>
        <div className="service-band-grid">
          {homeServices.map((service) => (
            <article className="service-tile" key={service.slug}>
              <div className="service-tile-photo">
                <h2>{service.title}</h2>
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" />
                
              </div>              
            </article>
          ))}
        </div>
      </ServiceBand>

      <section className="why">
        <div className="container">
          <div className="center-head">
            <div className="subtitle">เหตุผลที่เลือกเรา</div>
            <h2>ทำไมต้อง A-Care</h2>
            <p>ทีมเอ-แคร์ เซอร์วิส ดูแลเครื่องปรับอากาศและระบบทำความเย็นทั้งบ้านพัก สำนักงาน โรงงาน และร้านค้า ด้วยงานตรวจเช็ก ล้าง ซ่อม และติดตั้ง</p>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason) => (
              <article className="reason" key={reason.title}>
                <span className="reason-icon"><Icon name={reason.icon} /></span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialist-wrap">
        <div className="container">
          <div className="specialist">
            <Image src={photos.peaOffice} alt="" fill sizes="100vw" className="specialist-bg" />
            <div className="specialist-shade" />
            <div className="specialist-grid">
              <div>
                <div className="subtitle">ผู้เชี่ยวชาญระบบปรับอากาศ</div>
                <h2>เอ-แคร์ เซอร์วิส ดูแลระบบปรับอากาศและระบบทำความเย็น ให้เหมาะกับพื้นที่และการใช้งานของคุณ</h2>                
              </div>
              <div className="specialist-person">
                <Image src={photos.panyaShirt} alt="ช่าง A-Care Service ขณะล้างแอร์" width={280} height={320} className="person-photo" />
                <h3>เอ-แคร์ เซอร์วิส</h3>
                <p>ดูแลตั้งแต่ปี 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stories">
        <div className="container">
          <Slider per={3} label="ผลงานที่ดูแล" arrows>
            {projects.map((project) => (
              <article className="story" key={project.title}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 720px) 100vw, 33vw" className="story-photo" />
                <Link href="/projects">ดูผลงาน</Link>
              </article>
            ))}
          </Slider>
        </div>
      </section>
      
      <section className="offers">
        <div className="container">
          <div className="center-head">
            <div className="subtitle">โปรแนะนำ</div>
            <h2>ราคาล้างแอร์เริ่มต้น</h2>
          </div>
          <div className="offers-grid">
            {offers.map((offer) => (
              <article className="offer" key={offer.title}>
                <h3>{offer.title}</h3>
                <p className="offer-price">
                  <span>เริ่มต้น</span>
                  <strong>{offer.price.toLocaleString("th-TH")}</strong>
                  <span>บาท {offer.unit}</span>
                </p>
                <Link className="btn" href="/contact">นัดหมายบริการ</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="systems">
        <div className="container">
          <div className="subtitle">ระบบที่ดูแล</div>
          <h2>เครื่องปรับอากาศทุกรูปแบบ</h2>
          <div className="systems-grid">
            <Image src={photos.wirelessHome} alt="ช่างล้างแอร์ติดผนังในบ้านพัก" width={640} height={520} className="systems-photo" />
            <div className="systems-points">
              {systems.map((item) => (
                <article key={item.title}>
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="comfort">
        <div className="comfort-copy">
          <h2>ดูแลความเย็นให้บ้านและธุรกิจทำงานได้ต่อเนื่อง ด้วยทีมที่ตรวจ ซ่อม และบำรุงรักษาอย่างใส่ใจ</h2>
        </div>
        <div className="comfort-photo">
          <Image src={photos.peaUnits} alt="คอยล์ร้อนที่ช่างเข้าซ่อมที่การไฟฟ้าส่วนภูมิภาค" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <BrandStrip />
    </main>
  );
}
