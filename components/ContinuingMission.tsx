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
      // IMAGE animation (top -> bottom)
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

      // Paragraph 1 (right)
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

      // Paragraph 2 (left)
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

      // Paragraph 3 (right)
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
    <section ref={sectionRef} className="w-full py-28 bg-white">
      <div className=" mx-auto px-6">
        <SectionTitle title="EPIK 100: CONTINUING THE MISSION OF EPIK LEADERS" />

        {/* TITLE */}
        {/* <h2 className="text-[#1f2937] text-3xl font-semibold mb-16">
          EPIK 100: CONTINUING THE MISSION OF EPIK LEADERS
        </h2> */}

                
                


        {/* IMAGE */}
        <div
          ref={imageRef}
          className="max-w-[900px] mx-auto h-[420px] rounded-2xl overflow-hidden mb-16 opacity-0"
        >
          <img
            src="/mission.webp"
            alt="EPIK 100 mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* PARAGRAPHS */}
        <div className="space-y-10">
          <p
            ref={p1Ref}
            className="text-[#4b5563] font-medium text-center text-3xl leading-relaxed opacity-0"
          >
            Designed as a collective moment of recognition, EPIK 100 aligns with the mission of
            EPIK Leaders: to value the engagement of African youth and support them in their first
            leadership journeys across the continent.
          </p>

          <p
            ref={p2Ref}
            className="text-[#4b5563] font-medium text-center text-3xl leading-relaxed opacity-0"
          >
            The initiative encourages continued commitment, strengthens connections between EPIK
            Leaders clubs, and fosters exchanges between local initiatives and pan-African networks.
          </p>

          <p
            ref={p3Ref}
            className="text-[#4b5563] font-medium text-center text-3xl leading-relaxed opacity-0"
          >
            Through this program, EPIK Leaders builds a network of African leaders, ambassadors of
            cooperation, innovation, and civic engagement in their countries.
          </p>
        </div>

      </div>
    </section>
  );
}
