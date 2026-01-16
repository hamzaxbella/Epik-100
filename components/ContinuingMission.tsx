"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle"


gsap.registerPlugin(ScrollTrigger);

export default function ContinuingMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: -80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        p1Ref.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: p1Ref.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        p2Ref.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: p2Ref.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        p3Ref.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: p3Ref.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-20 lg:py-28 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-6">
        <SectionTitle title="EPIK 100 : prolonger l’engagement d’EPIK Leaders" />

        <div
          ref={imageRef}
          className="max-w-[900px] mx-auto h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden mb-10 sm:mb-14 lg:mb-16 opacity-0"
        >
          <img
            src="/Bloc5.jpg"
            alt="EPIK 100 mission"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <p
            ref={p1Ref}
            className="text-[#4b5563] font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed opacity-0"
          >
            Conçue comme un moment collectif de reconnaissance, EPIK 100 s’inscrit dans la mission d’EPIK Leaders : valoriser l’engagement de la jeunesse africaine et l’accompagner dans ses premiers pas de leadership à travers le continent.
          </p>

          <p
            ref={p2Ref}
            className="text-[#4b5563] font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed opacity-0"
          >
            Cette initiative encourage la poursuite de l’engagement, renforce les liens entre les clubs EPIK Leaders et favorise les échanges entre initiatives locales et réseaux panafricains.
          </p>

          <p
            ref={p3Ref}
            className="text-[#4b5563] font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed opacity-0"
          >
            À travers ce programme, EPIK Leaders construit un réseau de leaders africains, véritables ambassadeurs de la coopération, de l’innovation et de l’engagement citoyen dans leurs pays.
          </p>
        </div>
      </div>
    </section>
  );
}
