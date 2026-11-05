"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./ui";
import { services } from "../lib/content";

const links = [
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/projects", label: "ผลงาน" },
  { href: "/careers", label: "สมัครงาน" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const light = !(solid || open);

  if (openPath !== pathname) {
    setOpenPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${light ? "is-clear" : "is-solid"}`}>
      <div className="header-sheet">
      <div className="container header-bar">
        <Logo variant={light ? "white" : "default"} />
        <button
          className="menu-toggle"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="เมนูหลัก">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>
            หน้าหลัก
          </Link>
          <div className={`has-sub ${servicesOpen ? "open" : ""}`}>
            <button
              type="button"
              className="sub-toggle"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              บริการ
            </button>
            <div className="menu-sub">
              {services.map((service) => (
                <Link key={service.slug} href={`/services#${service.slug}`} onClick={() => setOpen(false)}>{service.title}</Link>
              ))}
              <Link href="/services" onClick={() => setOpen(false)}>บริการทั้งหมด</Link>
            </div>
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      </div>
    </header>
  );
}
