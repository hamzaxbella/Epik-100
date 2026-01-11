"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Handshake,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageTo4CardsFlip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const texts = [
    "Structured community engagement",
    "Early actions serving the public good",
    "Consistency in personal and academic development",
    "Ability to lead and drive collective initiatives",
    ];
  const icons = [Users, Handshake, GraduationCap, TrendingUp];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // état initial
      gsap.set(cardsRef.current, {
        rotationY: 0,
      });

      gsap.set(containerRef.current, {
        gap: 0, // PAS de séparation au début
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // + long = + lent
          scrub: true,
          pin: true,
        },
      });

      // 1️⃣ PHASE 1 — image visible longtemps
      tl.to({}, { duration: 1.3 });

      // 2️⃣ PHASE 2 — séparation progressive (photo reste continue)
      tl.to(containerRef.current, {
        gap: 24,
        duration: 1.2,
        ease: "power2.inOut",
      });

      // 3️⃣ PHASE 3 — pause visuelle (cartes visibles)
      tl.to({}, { duration: 1.8 });

      // 4️⃣ PHASE 4 — flip LENT et lisible
      tl.to(cardsRef.current, {
        rotationY: 360,
        duration: 8,
        stagger: 0.1,
        ease: "none",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const positions = [
    "0% 0%",
    "33.333% 0%",
    "66.666% 0%",
    "100% 0%",
  ];

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center"
    >
      <div
        ref={containerRef}
        className="flex w-full max-w-[1200px] h-[800px] perspective overflow-hidden rounded-2xl"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="relative flex-1 h-full card-3d"

          >
            {/* FRONT — image continue */}
            <div
              className="absolute inset-0 face"
              style={{
                backgroundImage: "url(/out1.avif)",
                backgroundSize: "400% 100%",
                backgroundPosition: positions[i],
              }}
            />

            {/* BACK — contenu */}
            <div className="absolute inset-0 face back bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c] border-4 border-[#e4c45c] shadow-[inset_0_0_0_1px_rgba(228,196,92,0.4)] flex items-center justify-center px-6 text-center">
                <div className="flex flex-col items-center gap-4">
                    {/* ICON */}
                    {(() => {
                        const Icon = icons[i];
                        return (
                        <Icon
                            size={42}
                            strokeWidth={2.5}
                            className="text-[#e4c45c]"
                        />
                        );
                    })()}

                    {/* TEXT */}
                    <p className="text-[#e4c45c] text-lg font-semibold leading-relaxed text-center">
                        {texts[i]}
                    </p>
                    </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
