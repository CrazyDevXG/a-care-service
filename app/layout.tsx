import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans_Thai } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollTop from "./components/scroll-top";
import ContactDock from "./components/contact-dock";
import "./globals.css";

const sans = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "A-Care Service | ล้างแอร์ ซ่อมแอร์ และดูแลระบบปรับอากาศ", template: "%s | A-Care Service" },
  description: "บริการล้าง ซ่อม ติดตั้ง และบำรุงรักษาเครื่องปรับอากาศ โดยบริษัท เอ-แคร์ เซอร์วิส จำกัด ดูแลบ้านและธุรกิจด้วยประสบการณ์ตั้งแต่ปี 2010",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={sans.className}>
      <body>
        <a className="skip-link" href="#content">ข้ามไปเนื้อหา</a>
        <Suspense fallback={<div className="site-header is-solid" />}>
          <Header />
        </Suspense>
        <div id="content">{children}</div>
        <Footer />
        <ScrollTop />
        <ContactDock />
      </body>
    </html>
  );
}
