import Link from "next/link";
import Image from "next/image";
import {
  AirVent,
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Snowflake,
  Droplets,
  Heater,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  phone: Phone,
  snow: Snowflake,
  tool: Wrench,
  air: AirVent,
  shield: ShieldCheck,
  clock: Clock,
  check: Check,
  pin: MapPin,
  mail: Mail,
  chat: MessageCircle,
  droplets: Droplets,
  heater: Heater,
};

const brandPaths = {
  facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  line: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314",
};

export function Arrow() {
  return <ArrowRight size={18} aria-hidden="true" />;
}

export function Icon({ name }: { name: string }) {
  if (name === "facebook" || name === "line") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d={brandPaths[name]} />
      </svg>
    );
  }
  const Glyph = icons[name] ?? AirVent;
  return <Glyph aria-hidden="true" />;
}

export function Logo({ variant = "default" }: { variant?: "default" | "white" }) {
  const onDark = variant === "white";
  return (
    <Link href="/" className={onDark ? "logo logo-white" : "logo"} aria-label="A-Care Service หน้าแรก">
      <Image className="logo-full" src="/images/logo/a-care-logo.png" alt="" width={480} height={160} priority />
      {onDark ? (
        <Image className="logo-on-dark" src="/images/logo/a-care-logo-white.png" alt="" width={480} height={160} />
      ) : (
        <Image className="logo-mark" src="/images/logo/a-logo.png" alt="" width={128} height={119} priority />
      )}
    </Link>
  );
}

export function PageHero({
  kicker,
  title,
  crumb,
}: {
  kicker: string;
  title: string;
  crumb: string;
}) {
  return (
    <section className="page-hero">
      <Image src="/images/16.webp" alt="" fill priority sizes="100vw" className="page-hero-img" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        <div>
          <div className="subtitle on-dark">{kicker}</div>
          <h1>{title}</h1>
          <ul className="crumb">
            <li><Link href="/">หน้าแรก</Link></li>
            <li aria-current="page">{crumb}</li>
          </ul>
        </div>
        <p className="page-hero-aside">ดูแลเครื่องปรับอากาศและระบบทำความเย็น</p>
      </div>
      <div className="hero-bridge">
        <Link href="/contact" className="bridge-btn" aria-label="นัดหมายบริการ">
          <Icon name="phone" />
        </Link>
      </div>
    </section>
  );
}

export function AppointmentBand() {
  return (
    <section className="appoint">
      <div className="container appoint-inner">
        <h2><Icon name="check" />พร้อมให้ทีมงานเข้าดูแลระบบปรับอากาศ</h2>
        <Link href="/contact" className="btn btn-soft">นัดหมายบริการ</Link>
      </div>
    </section>
  );
}
