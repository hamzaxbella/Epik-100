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
    "Engagement structuré au sein de la communauté",
    "Actions précoces au service de l’intérêt général",
    "Cohérence dans le développement personnel et académique",
    "Capacité à conduire et à impulser des initiatives collectives",
    ];
  const icons = [Users, Handshake, GraduationCap, TrendingUp];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, {
        rotationY: 0,
      });

      gsap.set(containerRef.current, {
        gap: 0, 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      tl.to({}, { duration: 0.5 });

      tl.to(containerRef.current, {
        gap: 24,
        duration: 0.6,
        ease: "power2.inOut",
      });

      // 3️⃣ PHASE 3 — pause visuelle (cartes visibles)
      tl.to({}, { duration: 0.7 });

      // 4️⃣ PHASE 4 — flip LENT et lisible
      tl.to(cardsRef.current, {
        rotationY: 180,
        duration: 1.5,
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
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6"
    >
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-0 px-2 sm:px-0
             w-full max-w-[1200px] h-[70vh]
             overflow-x-auto sm:overflow-hidden
             perspective rounded-xl sm:rounded-2xl"

      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="relative flex-[0_0_85%] sm:flex-1 h-full card-3d"
          >
            {/* FRONT — image continue */}
            <div
              className="absolute inset-0 face"
              style={{
                backgroundImage: "url(/Bloc2.jpg)",
                backgroundSize: "400% 100%",
                backgroundPosition: positions[i],
              }}
            />

            {/* BACK — contenu */}
            <div className="absolute inset-0 face back bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c] border-2 sm:border-4 border-[#e4c45c] shadow-[inset_0_0_0_1px_rgba(228,196,92,0.4)] flex items-center justify-center px-4 sm:px-6 text-center">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                {/* ICON */}
                {(() => {
                  const Icon = icons[i];
                  return (
                    <Icon
                      size={28}
                      strokeWidth={2.5}
                      className="text-[#e4c45c] sm:w-[36px] sm:h-[36px] lg:w-[42px] lg:h-[42px]"
                    />
                  );
                })()}

                {/* TEXT */}
                <p className="text-[#e4c45c] text-xs sm:text-xs lg:text-lg font-semibold leading-relaxed text-center">
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
