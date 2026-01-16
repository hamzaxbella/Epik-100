"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const partners = [
  "/partners/axa_logo.png",
  "/partners/copag_logo.png",
  "/partners/Epik_logo_720x720.png",
  "/partners/EPIKLEADERS_logo.png",
  "/partners/hit_logo.png",
  "/partners/logo01.png",
  "/partners/nouvelliste_logo.png",
];

export default function PartnersCarousel() {
  const [index, setIndex] = useState(0);

  const visibleCount =
    typeof window !== "undefined"
      ? window.innerWidth < 640
        ? 1
        : window.innerWidth < 1024
        ? 3
        : 5
      : 5;

  const maxIndex = Math.max(partners.length - visibleCount, 0);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="w-full py-16 mb-20">
        <SectionTitle title="Nos Partenaires" />
      <div className="mt-16 max-w-[1400px] mx-auto px-6">

        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {partners.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/5 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Partenaire"
                  className="h-20 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
