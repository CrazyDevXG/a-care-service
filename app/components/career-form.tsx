"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

const MAX_FILE = 4 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export default function CareerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [previews, setPreviews] = useState<[string, string]>(["", ""]);
  const [fileNames, setFileNames] = useState<[string, string]>(["", ""]);
  const previewsRef = useRef(previews);
  previewsRef.current = previews;

  useEffect(() => () => {
    previewsRef.current.forEach((url) => url && URL.revokeObjectURL(url));
  }, []);

  function onPhoto(index: 0 | 1, file: File | undefined) {
    setFileNames((current) => {
      const next: [string, string] = [...current];
      next[index] = file?.name ?? "";
      return next;
    });
    setPreviews((current) => {
      const next: [string, string] = [...current];
      if (next[index]) URL.revokeObjectURL(next[index]);
      next[index] = file ? URL.createObjectURL(file) : "";
      return next;
    });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const selected = [data.get("photo1"), data.get("photo2")].filter(
      (item): item is File => item instanceof File && item.size > 0,
    );
    for (const photo of selected) {
      if (!IMAGE_TYPES.includes(photo.type) || photo.size > MAX_FILE) {
        setStatus("error");
        setMessage("แต่ละรูปต้องเป็นไฟล์ JPG, PNG, WEBP หรือ GIF และมีขนาดไม่เกิน 4 MB");
        return;
      }
    }

    const body = new FormData();
    body.set("name", String(data.get("name") ?? ""));
    body.set("phone", String(data.get("phone") ?? ""));
    body.set("position", String(data.get("position") ?? ""));
    body.set("experience", String(data.get("experience") ?? ""));
    body.set("_honey", String(data.get("_honey") ?? ""));
    selected.forEach((photo, index) => body.set(`photo${index + 1}`, photo));

    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/careers", { method: "POST", body });
      const payload = await response.json().catch(() => null) as { ok?: boolean; message?: string } | null;
      if (!response.ok || !payload?.ok) {
        setStatus("error");
        setMessage(payload?.message || "ส่งใบสมัครไม่สำเร็จ โปรดลองอีกครั้ง");
        return;
      }
      form.reset();
      setFileNames(["", ""]);
      setPreviews((current) => {
        current.forEach((url) => url && URL.revokeObjectURL(url));
        return ["", ""];
      });
      setStatus("sent");
      setMessage(payload.message || "ส่งใบสมัครแล้ว");
    } catch {
      setStatus("error");
      setMessage("ส่งใบสมัครไม่สำเร็จ โปรดตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="subtitle">สมัครงาน</div>
      <h2>กรอกใบสมัครพนักงาน</h2>
      <p className="muted">กรอกข้อมูลแล้วกดส่ง ใบสมัครจะเข้าอีเมลบริษัท</p>
      <div className="hp-field" aria-hidden="true">
        <input name="_honey" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <div className="form-row">
        <label>ชื่อ-นามสกุล <span>*</span>
          <input name="name" required autoComplete="name" placeholder="ชื่อและนามสกุล" maxLength={100} />
        </label>
        <label>เบอร์โทร <span>*</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="เช่น 099-123-4567"
            pattern={String.raw`[+0-9\s\(\)\-]{9,20}`} maxLength={20}
            title="กรอกเบอร์โทร 9–20 ตัวอักษร ใช้ตัวเลข ช่องว่าง + ( ) หรือ -" />
        </label>
      </div>
      <label>ตำแหน่งงาน <span>*</span>
        <select name="position" required defaultValue="">
          <option value="" disabled>เลือกตำแหน่ง</option>
          <option>ช่างแอร์</option>
        </select>
      </label>
      <label>อธิบายประสบการณ์ <span>*</span>
        <textarea name="experience" required rows={5} maxLength={3000}
          placeholder="เช่น ประสบการณ์ล้าง ติดตั้ง หรือซ่อมแอร์ จำนวนปี และงานที่เคยทำ" />
      </label>
      <div className="career-photos">
        {([0, 1] as const).map((index) => (
          <label key={index} className="career-file">รูปที่ {index + 1} <span className="optional">ไม่บังคับ</span>
            <input className="file-input" name={`photo${index + 1}`} type="file" accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(event) => onPhoto(index, event.target.files?.[0])} />
            <span className="file-picker">{fileNames[index] || "เลือกรูป"}</span>
            {previews[index] && <img className="career-preview" src={previews[index]} alt="" />}
          </label>
        ))}
      </div>
      <p className="form-note">แนบรูปผลงานหรือรูปถ่ายได้ไม่เกิน 2 รูป รูปละไม่เกิน 4 MB</p>
      <button type="submit" className="btn btn-main" disabled={status === "sending"}>
        {status === "sending" ? "กำลังส่งใบสมัคร…" : <>ส่งใบสมัคร <Arrow /></>}
      </button>
      {message && (
        <p className={status === "error" ? "form-feedback is-error" : "form-feedback"} role="status">{message}</p>
      )}
    </form>
  );
}
