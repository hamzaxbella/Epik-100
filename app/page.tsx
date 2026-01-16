import Hero from "@/components/Hero";
import Description from "@/components/Description";
import ContinuingMission from "@/components/ContinuingMission";
import LeadersGrid from "@/components/LeadersGrid";
import type { Metadata } from "next";
import SelectionBasedOnEngagement from "@/components/SelectionBasedOnEngagement";
import AwardsRecognitionCeremony from "@/components/AwardsRecognitionCeremony";
import PartnersCarousel from "@/components/PartnersCarousel";

export const metadata: Metadata = {
  title: "EPIK 100 | Honoring Africa’s Emerging Young Leaders",
  description:
    "EPIK 100 is a pan-African recognition program by EPIK Leaders, celebrating 100 young African leaders selected for their engagement, leadership potential, and commitment to driving positive impact across the continent.",

  openGraph: {
    title: "EPIK 100 | Honoring Africa’s Emerging Young Leaders",
    description:
      "EPIK 100 is a pan-African recognition program by EPIK Leaders, honoring 100 young African leaders committed to community engagement, leadership, and positive impact across Africa.",
    type: "website",
    url: "https://epik-100.com",
    siteName: "EPIK 100",
    images: [
      {
        url: "/hero.jpg",
        width: 1800,
        height: 900,
        alt: "EPIK 100 – Pan-African Recognition Program by EPIK Leaders",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="px-2 lg:px-4">
      <section aria-label="Hero section" id="home">
        <Hero />
      </section>

      <section aria-label="Description" id="about">
        <Description />
      </section>

      <section aria-label="Engagment" id="engagment">
        <SelectionBasedOnEngagement />
      </section>

      <section aria-label="Awards" id="awards">
        <AwardsRecognitionCeremony />
      </section>

      <section aria-label="Continuing Mission" id="mission" className="lg:mt-20">
        <ContinuingMission />
      </section>

      <section aria-label="Leaders Grid" id="cards">
        <LeadersGrid />
      </section>

      <section aria-label="Partenaire" id="partners">
        <PartnersCarousel />
      </section>
    </main>
  );
}
