import type { Metadata } from "next";
import Gallery from "../components/gallery";
import { AppointmentBand, PageHero } from "../components/ui";

export const metadata: Metadata = { title: "ผลงาน" };

export default function ProjectsPage() {
  return (
    <main>
      <PageHero kicker="ผลงาน" title="งานที่เราดูแล" crumb="ผลงาน" />
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <AppointmentBand />
    </main>
  );
}
