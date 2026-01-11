import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Objectives from "@/components/Objectives";
import Axes from "@/components/Axes";
import ContinuingMission from "@/components/ContinuingMission";
import LeadersGrid from "@/components/LeadersGrid";
import type { Metadata } from "next";
import ImageToCards from "@/components/ImageToCards";
import SelectionBasedOnEngagement from "@/components/SelectionBasedOnEngagement";
import AwardsRecognitionCeremony from "@/components/AwardsRecognitionCeremony";

export const metadata: Metadata = {
  title: "Arab-African Summit 2025 | Non-Profit Financing Conference Rabat",
  description: "Join the Arab-African Summit on Non-Profit Financing in Rabat, Morocco on November 20, 2025. Explore innovative funding models, Islamic finance, and sustainable financing solutions.",
  openGraph: {
    title: "Arab-African Summit 2025 | Non-Profit Financing Conference",
    description: "Join us in Rabat on November 20, 2025 for groundbreaking discussions on sustainable financing for non-profits.",
    type: "website",
    images: ["/hero.jpg"],
  },
};

export default function Home() {
  return (
    <main className="px-2 lg:px-4">
      <section aria-label="Hero section" id="home">
        <Hero />
      </section>

      <section aria-label="Summit description" id="about">
        <Description />
      </section>

      <section aria-label=" tives" id="objectives">
        {/* <Objectives /> */}
        <SelectionBasedOnEngagement />
      </section>

      <section aria-label="Thematic axes" id="themes">
        <AwardsRecognitionCeremony />
      </section>

      <section aria-label="Expected outcomes" id="outcomes" className="lg:mt-20">
        <ContinuingMission />
      </section>

      <section aria-label="Register for summit" id="register">
        <LeadersGrid />
      </section>
    </main>
  );
}
