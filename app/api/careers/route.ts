import { company } from "../../lib/content";

const MAX_FILE = 4 * 1024 * 1024;
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

function text(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim().slice(0, max);
}

function looksLikeImage(bytes: Uint8Array) {
  const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const png = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
  const gif = bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46;
  const webp = bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46
    && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50;
  return jpeg || png || gif || webp;
}

function extension(type: string) {
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  if (type === "image/gif") return "gif";
  return "jpg";
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return null;
  try {
    return new URL(origin).host === host ? origin : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const origin = sameOrigin(request);
  if (!origin) {
    return Response.json({ ok: false, message: "ส่งใบสมัครจากหน้านี้เท่านั้น" }, { status: 403 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, message: "ไม่สามารถอ่านข้อมูลที่ส่งมาได้" }, { status: 400 });
  }

  if (text(form.get("_honey"), 200)) {
    return Response.json({ ok: true, message: "ส่งใบสมัครแล้ว บริษัทจะติดต่อกลับทางโทรศัพท์" });
  }

  const positions = ["ช่างแอร์"];
  const name = text(form.get("name"), 100);
  const phone = text(form.get("phone"), 20);
  const position = text(form.get("position"), 50);
  const experience = text(form.get("experience"), 3000);

  if (!name) {
    return Response.json({ ok: false, message: "กรุณากรอกชื่อ-นามสกุล" }, { status: 400 });
  }
  if (!positions.includes(position)) {
    return Response.json({ ok: false, message: "กรุณาเลือกตำแหน่งงาน" }, { status: 400 });
  }
  if (!/^[+0-9\s()-]{9,20}$/.test(phone)) {
    return Response.json({ ok: false, message: "กรุณากรอกเบอร์โทรให้ถูกต้อง" }, { status: 400 });
  }
  if (!experience) {
    return Response.json({ ok: false, message: "กรุณาอธิบายประสบการณ์" }, { status: 400 });
  }

  const photos = [form.get("photo1"), form.get("photo2")].filter(
    (item): item is File => item instanceof File && item.size > 0,
  );
  if (photos.length > 2) {
    return Response.json({ ok: false, message: "อัปโหลดรูปได้ไม่เกิน 2 รูป" }, { status: 400 });
  }

  for (const photo of photos) {
    if (!IMAGE_TYPES.has(photo.type) || photo.size > MAX_FILE) {
      return Response.json(
        { ok: false, message: "แต่ละรูปต้องเป็นไฟล์ JPG, PNG, WEBP หรือ GIF และมีขนาดไม่เกิน 4 MB" },
        { status: 400 },
      );
    }
    const bytes = new Uint8Array(await photo.slice(0, 12).arrayBuffer());
    if (!looksLikeImage(bytes)) {
      return Response.json({ ok: false, message: "ไฟล์ที่แนบไม่ใช่รูปภาพ" }, { status: 400 });
    }
  }

  const outbound = new FormData();
  outbound.append("ชื่อ-นามสกุล", name);
  outbound.append("เบอร์โทร", phone);
  outbound.append("ตำแหน่ง", position);
  outbound.append("ประสบการณ์", experience);
  outbound.append("_subject", `สมัครงาน${position} - ${name}`);
  outbound.append("_template", "table");
  outbound.append("_captcha", "false");
  for (const [index, photo] of photos.entries()) {
    outbound.append(`รูปที่ ${index + 1}`, photo, `applicant-photo-${index + 1}.${extension(photo.type)}`);
  }

  let upstream: Response;
  try {
    upstream = await fetch(`https://formsubmit.co/${encodeURIComponent(company.email)}`, {
      method: "POST",
      redirect: "manual",
      headers: {
        Accept: "text/html,application/json",
        Origin: origin,
        Referer: `${origin}/careers`,
      },
      body: outbound,
    });
  } catch {
    return Response.json(
      { ok: false, message: "ส่งใบสมัครไม่สำเร็จ โปรดลองอีกครั้ง หรือโทรติดต่อบริษัท" },
      { status: 502 },
    );
  }

  const raw = await upstream.text();
  const activation = /activat/i.test(raw);
  const delivered = (upstream.status >= 300 && upstream.status < 400)
    || /submission has been received|form submitted successfully/i.test(raw);
  if (!delivered) {
    return Response.json(
      {
        ok: false,
        message: activation
          ? `ส่งลิงก์ยืนยันไปที่ ${company.email} แล้ว โปรดเปิดอีเมลนั้นแล้วกดเปิดใช้งานหนึ่งครั้ง จากนั้นส่งใบสมัครอีกครั้ง`
          : "ส่งใบสมัครไม่สำเร็จ โปรดลองอีกครั้ง หรือโทรติดต่อบริษัท",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, message: `ส่งใบสมัครไปที่ ${company.email} แล้ว บริษัทจะติดต่อกลับทางโทรศัพท์` });
}
