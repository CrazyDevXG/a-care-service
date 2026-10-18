"use client";

import { useState } from "react";
import { company, services } from "../../lib/content";

const places = ["บ้านพัก", "สำนักงาน", "โรงงาน", "ร้านค้า"];

export function QuoteCard() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `ชื่อ: ${data.get("name")}`,
      `เบอร์โทร: ${data.get("phone")}`,
      `สถานที่: ${data.get("place")}`,
      `บริการ: ${data.get("service")}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("ขอประเมินงาน A-Care Service")}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <form className="quote-card" onSubmit={submit}>
      <h2>ขอประเมินงาน</h2>
      <label>ชื่อผู้ติดต่อ
        <input name="name" required autoComplete="name" placeholder="ชื่อของคุณ" maxLength={100} />
      </label>
      <label>เบอร์โทรศัพท์
        <input name="phone" type="tel" required autoComplete="tel" placeholder="เช่น 099-123-4567" pattern={String.raw`[+0-9\s\(\)\-]{9,20}`} maxLength={20} title="กรอกเบอร์โทร 9–20 ตัวอักษร" />
      </label>
      <label>ประเภทสถานที่
        <select name="place" required defaultValue="">
          <option value="" disabled>เลือกสถานที่</option>
          {places.map((place) => <option key={place}>{place}</option>)}
        </select>
      </label>
      <label>บริการที่สนใจ
        <select name="service" required defaultValue="">
          <option value="" disabled>เลือกบริการ</option>
          {services.map((item) => <option key={item.slug}>{item.title}</option>)}
        </select>
      </label>
      <button className="btn btn-main" type="submit">ส่งคำขอ</button>
      <p>ปุ่มนี้เปิดแอปอีเมลพร้อมข้อมูลที่กรอก</p>
      {prepared && <p className="form-feedback" role="status">เตรียมอีเมลแล้ว หากแอปไม่เปิด โทร {company.phone}</p>}
    </form>
  );
}
