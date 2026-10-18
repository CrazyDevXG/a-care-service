import type { Metadata } from "next";
import Image from "next/image";
import CareerForm from "../components/career-form";
import { Icon, PageHero } from "../components/ui";
import { company } from "../lib/content";

export const metadata: Metadata = { title: "สมัครเป็นพนักงาน" };

const qualifications = [
  "วุฒิการศึกษา ปวส. หรือเทียบเท่าขึ้นไป",
  "มีใบขับขี่ จะพิจารณาเป็นพิเศษ",
  "มีใจรักงานบริการ ซื่อสัตย์สุจริต",
];

const benefits = [
  "ค่าคอมมิชชั่น",
  "ค่าเบี้ยขยัน",
  "ท่องเที่ยวประจำปี",
  "โบนัสตามผลประกอบการ",
  "ประกันอุบัติเหตุ",
  "พาเที่ยวต่างจังหวัดทุก 2-3 ปี",
  "มีทุนเรียนเพิ่มทักษะ ฟรี หลังทำงานครบ 1 ปี",
];

export default function Careers() {
  return (
    <main>
      <PageHero kicker="รับสมัครพนักงาน" title="ช่างแอร์" crumb="สมัครงาน" />
      <section className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <Image src="/images/mg70173.png" alt="ช่าง A-Care Service ขณะปฏิบัติงาน" fill sizes="(max-width: 800px) 100vw, 46vw" />
          </div>
          <div>
            <div className="subtitle">ตำแหน่งที่เปิดรับ</div>
            <h2>คุณสมบัติช่างแอร์</h2>
            <p>บริษัท เอ-แคร์ เซอร์วิส จำกัด เปิดรับช่างแอร์เพื่อดูแลงานล้าง ซ่อม ติดตั้ง และบำรุงรักษาเครื่องปรับอากาศ</p>
            <ul className="job-list">
              {qualifications.map((item) => (
                <li key={item}><Icon name="check" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-mist" id="apply">
        <div className="container career-split">
          <div>
            <div className="subtitle">สวัสดิการ</div>
            <h2>สวัสดิการบริษัทมีดังนี้</h2>
            <ol className="benefit-list">
              {benefits.map((item, index) => (
                <li key={item}><span>{index + 1}</span>{item}</li>
              ))}
            </ol>
          </div>
          <CareerForm />
        </div>
      </section>
      <section className="appoint">
        <div className="container appoint-inner">
          <h2><Icon name="phone" />สนใจติดต่อ คุณโอ๊ะ</h2>
          <a className="btn btn-soft" href={`tel:${company.secondaryPhone.replace(/-/g, "")}`}>{company.secondaryPhone}</a>
        </div>
      </section>
    </main>
  );
}
