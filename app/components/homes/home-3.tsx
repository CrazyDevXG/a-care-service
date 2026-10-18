import Image from "next/image";
import Link from "next/link";
import Slider from "../slider";
import { Icon } from "../ui";
import { company, photos, projects, reasons } from "../../lib/content";
import { BrandStrip } from "./brand-strip";
import { FaqList } from "./faq-list";
import { HeroSlides } from "./hero-slides";

const faqs = [
  { question: "ควรล้างแอร์เมื่อไร", answer: "ควรทำความสะอาดเป็นระยะ และนัดทีมงานเมื่อแอร์มีกลิ่น ลมอ่อน น้ำหยด หรือเย็นไม่ทั่วห้อง" },
  { question: "ก่อนเรียกซ่อมควรแจ้งอะไร", answer: "บอกประเภทเครื่อง จำนวนเครื่อง อาการ และสถานที่ให้บริการ เพื่อให้ทีมงานประเมินงานได้ตรงจุด" },
  { question: "ดูแลระบบขนาดใหญ่ได้ไหม", answer: "รับงาน Wall Type / Cassette Type / Ceiling Type / Chiller ทั้งบ้าน สำนักงาน โรงงาน และอาคาร" },
  { question: "ขอให้ประเมินงานอย่างไร", answer: "โทรหาทีมงานหรือกรอกแบบฟอร์มติดต่อ แล้วระบุอาการกับสถานที่ที่ต้องการให้เข้าดูแล" },
];

const products = [
  { image: "/images/products/1.webp", title: "ชุดแอร์บ้าน", text: "แอร์ติดผนังคู่คอยล์ร้อน เหมาะกับบ้าน คอนโด ออฟฟิศ และห้องทำงานทั่วไป" },
  { image: "/images/products/2.webp", title: "แอร์ 4 ทิศทางฝังฝ้า", text: "แอร์ 4 ทิศทางฝังฝ้าเหมาะกับร้านค้า ห้องโถง ร้านค้า และพื้นที่ใช้งานต่อเนื่อง ตรวจเช็กและล้างตามรอบการใช้งาน" },
  { image: "/images/products/8.png", title: "แอร์แขวน", text: "แอร์แขวนภายในอาคาร เหมาะกับออฟฟิศ ร้านอาหาร และพื้นที่ฝ้าเพดานใช้งานทั่วไป" },
  { image: "/images/products/4.webp", title: "คอยล์ร้อนตั้งพื้น", text: "แอร์โรงงาน ที่มีคอยล์ร้อนตั้งพื้นขนาดใหญ่ ชุดภายนอกสำหรับระบบอาคาร ตรวจเช็กและบำรุงรักษาตามหน้างาน" },
  
];

const tips = [
  { image: photos.peaCover, alt: "ช่างล้างแอร์โดยคลุมผ้ากันเปื้อน", title: "สังเกตลมอ่อนและน้ำหยด", text: "ถ้าลมเบาลง มีกลิ่น หรือมีน้ำหยดจากเครื่อง ควรนัดล้างและตรวจเช็กก่อนอาการลุกลาม" },
  { image: photos.wirelessHome, alt: "ช่างล้างแอร์ติดผนังในบ้าน", title: "ไม่ควรปล่อยฝุ่นสะสม", text: "ฝุ่นที่คอยล์และแผงกรองทำให้แอร์ทำงานหนักขึ้น การล้างตามรอบช่วยให้ระบบทำงานได้ต่อเนื่อง" },
  { image: photos.officeClean, alt: "ช่างล้างแอร์ในสำนักงาน", title: "ระบบอาคารควรมีรอบตรวจ", text: "Wall Type / Cassette Type / Ceiling Type / Chiller ควรจัดรอบตรวจเช็กและบำรุงรักษาตามการใช้งานของอาคาร" },
];

export function Home3() {
  return (
    <main>
      <HeroSlides />
      <section className="appoint">
        <div className="container appoint-inner">
          <h2><Icon name="check" />พร้อมดูแลระบบปรับอากาศทั้งบ้านและธุรกิจ</h2>
          <Link href="/contact" className="btn btn-soft">ขอประเมินงาน</Link>
        </div>
      </section>

      <section className="section" id="section-products">
        <div className="container">
          <div className="center-head">
            <div className="subtitle">ระบบที่ดูแล</div>
            <h2>ประเภทเครื่องปรับอากาศ</h2>
            <p>รับล้าง ซ่อม ติดตั้ง และบำรุงรักษาทั้งเครื่องติดผนัง เครื่องฝังฝ้า และชุดภายนอกอาคาร</p>
          </div>
          <div className="catalog">
            {products.map((product) => (
              <article className="catalog-card" key={product.title}>
                <div className="catalog-face">
                  <Image src={product.image} alt={product.title} width={420} height={280} />
                  <h3>{product.title}</h3>
                </div>
                <div className="catalog-hover">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <Link className="btn btn-main" href="/contact">สอบถามงานนี้</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialist-wrap">
        <div className="container">
          <div className="specialist specialist-dark">
            <Image src={photos.peaOffice} alt="" fill sizes="100vw" className="specialist-bg" />
            <div className="specialist-shade dark" />
            <div className="specialist-grid">
              <div>
                <div className="subtitle on-dark">ผู้เชี่ยวชาญระบบปรับอากาศ</div>
                <h2>เอ-แคร์ เซอร์วิส ดูแลระบบปรับอากาศและระบบทำความเย็น ให้เหมาะกับพื้นที่และการใช้งานของคุณ</h2>
              </div>
              <div className="specialist-person">
                <Image src={photos.panyaShirt} alt="ช่าง A-Care Service ขณะล้างแอร์" width={260} height={300} className="person-photo" />
                <h3>เอ-แคร์ เซอร์วิส</h3>
                <p>ดูแลตั้งแต่ปี 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section stories">
        <div className="container">
          <div className="center-head">
            <div className="subtitle">งานที่ได้รับความไว้วางใจ</div>
            <h2>สถานที่ที่เราเข้าดูแล</h2>
          </div>
          <Slider per={3} label="สถานที่ที่เราเข้าดูแล" arrows>
            {projects.map((project) => (
              <article className="story" key={project.title}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 720px) 100vw, 33vw" className="story-photo" />
                <Link href="/projects">ดูผลงาน</Link>
              </article>
            ))}
          </Slider>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container faq-grid">
          <Link href="/contact" className="faq-photo">
            <Image src="/images/mg70174.png" alt="ทีมช่างกำลังล้างเครื่องปรับอากาศ" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span>โทรหาเรา</span>
          </Link>
          <div>
            <div className="subtitle">มีข้อสงสัย</div>
            <h2>คำถามที่พบบ่อย</h2>
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-head">
            <div className="subtitle">คำแนะนำ</div>
            <h2>ดูแลแอร์เบื้องต้น</h2>
            <p>แนวทางสังเกตอาการก่อนนัดทีมงาน ไม่ใช่บทความข่าวของบริษัท</p>
          </div>
          <div className="tip-grid">
            {tips.map((tip) => (
              <article className="tip-card" key={tip.title}>
                <Image src={tip.image} alt={tip.alt} width={480} height={260} />
                <div>
                  <h3>{tip.title}</h3>
                  <p>{tip.text}</p>
                  <Link className="btn btn-ghost" href="/contact">นัดหมายตรวจเช็ก</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section phone-band-wrap">
        <div className="container">
          <div className="phone-band">
            <div className="phone-photo">
              <Image src="/images/mg70173.png" alt="" fill sizes="50vw" />
            </div>
            <div>
              <div className="subtitle on-dark">โทรนัดทีมงาน</div>
              <a href="tel:0996194691"><Icon name="phone" />{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
    </main>
  );
}
