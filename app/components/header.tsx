"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon, Logo } from "./ui";
import { company, services } from "../lib/content";

const links = [
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/projects", label: "ผลงาน" },
  { href: "/careers", label: "สมัครงาน" },
  { href: "/contact", label: "ติดต่อเรา" },
];

const homes = [
  { href: "/", id: "1", label: "Home 1" },
  { href: "/?home=3", id: "3", label: "Home 3" },
];

export default function Header() {
  const pathname = usePathname();
  const params = useSearchParams();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [homesOpen, setHomesOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const currentHome = pathname === "/" ? (params.get("home") === "3" ? "3" : "1") : "";
  const light = !(solid || open || currentHome === "3");
  const showTopbar = currentHome === "3" && !solid;

  if (openPath !== pathname) {
    setOpenPath(pathname);
    setOpen(false);
    setServicesOpen(false);
    setHomesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${light ? "is-clear" : "is-solid"}${showTopbar ? " has-topbar" : ""}`}>
      {showTopbar ? (
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="topbar-meta">
              <a href="tel:0996194691"><Icon name="phone" />{company.phone}</a>
              <a href={`mailto:${company.email}`}><Icon name="mail" />{company.email}</a>
              <span><Icon name="clock" />จันทร์–เสาร์ 08:00–17:00 น.</span>
            </div>
            <div className="topbar-social">
              <Link href="https://m.facebook.com/acareserviceth" aria-label="ข้อมูล Facebook"><Icon name="facebook" /></Link>
              <a href={company.lineUrl} target="_blank" rel="noopener noreferrer" aria-label="แชตผ่าน LINE"><Icon name="line" /></a>
            </div>
          </div>
        </div>
      ) : null}
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
          <div className={`has-sub ${homesOpen ? "open" : ""}`}>
            <button
              type="button"
              className="sub-toggle"
              aria-expanded={homesOpen}
              aria-current={currentHome ? "page" : undefined}
              onClick={() => {
                setHomesOpen((value) => !value);
                setServicesOpen(false);
              }}
            >
              หน้าหลัก
            </button>
            <div className="menu-sub">
              {homes.map((home) => (
                <Link key={home.id} href={home.href} aria-current={currentHome === home.id ? "page" : undefined} onClick={() => setOpen(false)}>
                  {home.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={`has-sub ${servicesOpen ? "open" : ""}`}>
            <button
              type="button"
              className="sub-toggle"
              aria-expanded={servicesOpen}
              onClick={() => {
                setServicesOpen((value) => !value);
                setHomesOpen(false);
              }}
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
