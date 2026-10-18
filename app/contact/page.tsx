import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "../lib/content";
import { Icon, PageHero } from "../components/ui";

export const metadata: Metadata = { title: "ติดต่อและนัดหมายบริการ" };

export default function Contact() {
  return (
    <main>
      <PageHero kicker="ติดต่อเรา" title="นัดหมายบริการ" crumb="ติดต่อเรา" />
      <section className="section">
        <div className="container">
          <div className="channel-grid">
            <article className="channel">
              <span className="reason-icon"><Icon name="phone" /></span>
              <h2>โทรหาเรา</h2>
              <p>พูดคุยและนัดหมายกับทีมงาน</p>
              <a className="channel-phone" href="tel:0996194691">{company.phone}</a>
              <a className="channel-sub" href="tel:0981517561">{company.secondaryPhone}</a>
            </article>
            <article className="channel" id="facebook">
              <span className="reason-icon"><Icon name="facebook" /></span>
              <h2>Facebook</h2>
              <p>ติดตามข่าวสารและผลงานของเรา</p>
              {company.facebookUrl
                ? <a className="text-link" href={company.facebookUrl} target="_blank" rel="noopener noreferrer">เปิด Facebook Page</a>
                : <><span className="placeholder-value">A-Care Service</span><span className="placeholder-note">รอเพิ่มลิงก์ Facebook Page ของบริษัท</span></>}
            </article>
            <article className="channel" id="line">
              <span className="reason-icon"><Icon name="line" /></span>
              <h2>LINE</h2>
              <p>ส่งรูปอาการแอร์และสอบถามบริการ</p>
              {company.lineUrl
                ? <a className="text-link" href={company.lineUrl} target="_blank" rel="noopener noreferrer">แชตผ่าน LINE</a>
                : <><span className="placeholder-value">@acareservice</span><span className="placeholder-note">รอเพิ่ม LINE ID และลิงก์แชตของบริษัท</span></>}
            </article>
          </div>

          <div className="contact-layout">
            <div className="contact-information">
              <div className="subtitle">ข้อมูลติดต่อ</div>
              <h2>ยินดีดูแลและให้คำปรึกษา</h2>
              <p>แจ้งรายละเอียดความต้องการ ทีมงานจะช่วยประเมินบริการที่เหมาะสม</p>
              <div className="contact-detail">
                <Icon name="pin" />
                <div>
                  <h3>ที่อยู่บริษัท</h3>
                  <p>{company.name}<br />{company.address}</p>
                  <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`} target="_blank" rel="noopener noreferrer">เปิดแผนที่</a>
                </div>
              </div>
              <div className="contact-detail">
                <Icon name="mail" />
                <div>
                  <h3>อีเมล</h3>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
              <div className="contact-detail">
                <Icon name="clock" />
                <div>
                  <h3>เวลาทำการ</h3>
                  <p>จันทร์–เสาร์ 08:00–17:00 น.</p>
                  <span className="placeholder-note">โปรดโทรสอบถามเวลาทำการจริงก่อนนัดหมาย</span>
                </div>
              </div>
            </div>
            <aside className="contact-form contact-qr">
              <div className="subtitle">สอบถามบริการ</div>
              <h2>ฝากรายละเอียดให้เราดูแล</h2>
              <p className="muted">สแกน QR Code เพื่อแชตกับทีมงานผ่าน LINE</p>
              <a className="contact-qr-link" href={company.lineUrl} target="_blank" rel="noopener noreferrer">
                <Image src="/images/qr-code.jpg" alt="QR Code LINE ของ A-Care Service" width={600} height={600} />
              </a>
            </aside>
          </div>
          <p className="form-side-note">หากต้องการคุยกับทีมงานทันที โทร <Link href="tel:0996194691">{company.phone}</Link></p>
        </div>
      </section>
    </main>
  );
}
