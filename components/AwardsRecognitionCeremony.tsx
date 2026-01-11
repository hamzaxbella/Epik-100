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
    { label: "Education", icon: GraduationCap, image: "/education.jpg" },
    { label: "Entrepreneurship", icon: Briefcase, image: "/entrepreneurship.jpg" },
    { label: "Social innovation", icon: Lightbulb, image: "/social.webp" },
    { label: "Environment", icon: Leaf, image: "/environment.jpg" },
    { label: "Technology", icon: Cpu, image: "/technology.jpg" },
    { label: "Art & Culture", icon: Palette, image: "/art.jpg" },
    { label: "and more", icon: MoreHorizontal, image: "/more.jpg" },
  ];

  return (
    <section className="w-full py-28 bg-white overflow-hidden">
      <div className=" mx-auto px-6 mb-14">
        <SectionTitle title="AN AWARDS AND RECOGNITION CEREMONY" />

        {/* <h2 className="text-[#1f2937] text-center text-2xl lg:text-4xl font-semibold mb-8">
          AN AWARDS AND RECOGNITION CEREMONY
        </h2> */}

        {/* TEXT */}
        <p className="text-[#4b5563] font-medium text-center text-3xl leading-relaxed">
          Held in Morocco during AFCON, the EPIK 100 ceremony honors the 100 awardees with a
          symbolic trophy recognizing their engagement and their early contributions to their
          communities across sectors such as:
        </p>
      </div>

      {/* CAROUSEL */}
        <div className="relative w-full overflow-hidden">
            <div
            ref={trackRef}
            className="flex gap-6 w-max"
            >
            {[...items, ...items].map((item, i) => {
                const Icon = item.icon;

                return (
                <div
                    key={i}
                    className="carousel-card relative w-[420px] h-[280px] rounded-2xl overflow-hidden shrink-0"
                    style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
                >
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/55" />

                    {/* CONTENT */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">
                    <Icon
                        size={40}
                        strokeWidth={2.5}
                        className="text-[#e4c45c]"
                    />
                    <p className="text-[#e4c45c] text-lg font-semibold text-center">
                        {item.label}
                    </p>
                    </div>
                </div>
                );
            })}
            </div>
        </div>

      {/* TEXT */}
      <div className="max-w-[1200px] mx-auto px-6 mt-14">
        <p className="text-[#4b5563] font-medium text-center text-3xl leading-relaxed">
          Beyond recognition, the ceremony serves as a pan-African networking platform, bringing
          together mentors, companies, institutions, and partners, and fostering exchanges around
          future projects.
        </p>
      </div>
    </section>
  );
}
