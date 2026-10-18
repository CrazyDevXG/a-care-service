import Link from "next/link";
import { company, services } from "../lib/content";
import { Icon, Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo variant="white" />
          <p>บริการล้าง ซ่อม ติดตั้ง และบำรุงรักษาเครื่องปรับอากาศ โดยทีมช่างของเอ-แคร์ เซอร์วิส ดูแลบ้านและธุรกิจตั้งแต่ปี 2010</p>
          <div className="social">
            <Link href="https://m.facebook.com/acareserviceth" aria-label="ข้อมูล Facebook"><Icon name="facebook" /></Link>
            <a href={company.lineUrl} target="_blank" rel="noopener noreferrer" aria-label="แชตผ่าน LINE"><Icon name="line" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h2>บริษัท</h2>
            <ul>
              <li><Link href="/">หน้าหลัก</Link></li>
              <li><Link href="/services">บริการของเรา</Link></li>
              <li><Link href="/projects">ผลงาน</Link></li>
              <li><Link href="/about">เกี่ยวกับเรา</Link></li>
              <li><Link href="/careers">สมัครงาน</Link></li>
              <li><Link href="/contact">ติดต่อเรา</Link></li>
            </ul>
          </div>
          <div>
            <h2>บริการ</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}><Link href={`/services#${service.slug}`}>{service.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h2>ติดต่อทีมงาน</h2>
          <a className="footer-phone" href="tel:0996194691"><Icon name="phone" />{company.phone}</a>
          <a className="footer-phone-sub" href="tel:0981517561">{company.secondaryPhone}</a>
          <p><Icon name="pin" /><span><strong>ที่ตั้งสำนักงาน</strong>{company.address}</span></p>
          <p><Icon name="mail" /><span><strong>ส่งข้อความ</strong><a href={`mailto:${company.email}`}>{company.email}</a></span></p>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <span>© {new Date().getFullYear()} A-Care Service Co., Ltd.</span>
          <a href="#content">กลับด้านบน</a>
        </div>
      </div>
    </footer>
  );
}
