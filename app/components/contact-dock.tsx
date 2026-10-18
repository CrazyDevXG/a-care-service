"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { company } from "../lib/content";
import { Icon } from "./ui";

export default function ContactDock() {
  const [open, setOpen] = useState(true);
  const tel = company.phone.replace(/-/g, "");
  const lineHref = company.lineUrl || "/contact#line";

  if (!open) {
    return (
      <button type="button" className="contact-dock-launcher" onClick={() => setOpen(true)} aria-label="เปิดช่องทางติดต่อ">
        <Icon name="line" />
      </button>
    );
  }

  return (
    <aside className="contact-dock" aria-label="ติดต่อด่วน">
      <button type="button" className="contact-dock-close" onClick={() => setOpen(false)} aria-label="ปิดช่องทางติดต่อ">
        <X size={16} aria-hidden="true" />
      </button>
      <a
        className="contact-dock-row"
        href={lineHref}
        {...(company.lineUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="contact-dock-line"><Icon name="line" /></span>
        <span>
          <strong>LINE</strong>
          <small>แชตกับทีมงาน</small>
        </span>
      </a>
      <a className="contact-dock-row" href={`tel:${tel}`}>
        <span className="contact-dock-phone"><Icon name="phone" /></span>
        <span>
          <strong>โทรเลย</strong>
          <small>{company.phone}</small>
        </span>
      </a>
    </aside>
  );
}
