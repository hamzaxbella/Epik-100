"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle"

import gsap from "gsap";
import {
  GraduationCap,
  Briefcase,
  Lightbulb,
  Leaf,
  Cpu,
  Palette,
  MoreHorizontal,
} from "lucide-react";

export default function AwardsRecognitionCeremony() {
   const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const animation = gsap.to(track, {
      x: () => -(track.scrollWidth / 2),
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const cards = track.querySelectorAll<HTMLDivElement>(".carousel-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        animation.pause();

        gsap.to(card, {
          scale: 1.15,
          duration: 0.3,
          ease: "power2.out",
        });

        cards.forEach((other) => {
          if (other !== card) {
            gsap.to(other, {
              scale: 0.9,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      card.addEventListener("mouseleave", () => {
        animation.resume();

        gsap.to(cards, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      animation.kill();
    };
    }, []);

  const items = [
    { label: "Éducation", icon: GraduationCap, image: "/éducation.jpg" },
    { label: "Entrepreneuriat", icon: Briefcase, image: "/Entrepreneuriat.jpg" },
    { label: "Innovation sociale", icon: Lightbulb, image: "/Innovationsociale.jpg" },
    { label: "Environnement", icon: Leaf, image: "/Environnement.jpg" },
    { label: "Technologie", icon: Cpu, image: "/Technologie.jpg" },
    { label: "Art & Culture", icon: Palette, image: "/art.jpg" },
    { label: "et autre", icon: MoreHorizontal, image: "/more.jpg" },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
        <SectionTitle title="Une cérémonie de distinction et de reconnaissance" />

        <p className="text-[#4b5563] font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed">
          Organisée au Maroc pendant la CAN, la cérémonie EPIK 100 rend hommage aux 100 lauréats à travers un trophée symbolique récompensant leur engagement et leurs premières contributions au sein de leurs communautés dans des secteurs tels que :
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 w-max"
        >
          {[...items, ...items].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="carousel-card relative w-[260px] sm:w-[320px] lg:w-[420px] h-[180px] sm:h-[220px] lg:h-[280px] rounded-2xl overflow-hidden shrink-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/55" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-2 sm:gap-3">
                  <Icon
                    size={28}
                    strokeWidth={2.5}
                    className="text-[#e4c45c] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]"
                  />
                  <p className="text-[#e4c45c] text-sm sm:text-base lg:text-lg font-semibold text-center px-2">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-10 sm:mt-14">
        <p className="text-[#4b5563] font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed">
          Au-delà de la reconnaissance, la cérémonie constitue une plateforme de networking panafricaine, réunissant mentors, entreprises, institutions et partenaires, et favorisant les échanges autour de projets à venir.
        </p>
      </div>
    </section>
  );
}
