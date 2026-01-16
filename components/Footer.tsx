"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { logo } from "@/public";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([logoRef.current, contentRef.current], {
        y: 50,
        opacity: 0,
      });
      gsap.set(dividerRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Create timeline for footer reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=50",
          end: "top center",
          toggleActions: "play none none none",
        },
      });

      // Animate divider first
      tl.to(dividerRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
      })

        // Then animate logo
        .to(
          logoRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )

        .to(
          contentRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 rounded-t-4xl">
      <div className=" mx-auto">

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 md:gap-8">
          <div ref={logoRef} className="flex flex-1 flex-col md:flex-row !items-center md:items-start gap-4 md:gap-6">
            <Image
              src={logo}
              alt="Arab Summit Logo"
              
              className="object-contain w-42 md:w-28 lg:w-[220px] flex-shrink-0"
            />
            <div>
              
          <p className="!text-sm lg:text-lg text-gray-200 md:text-sm font-light text-justify  md:text-left leading-relaxed">
            EPIK LEADERS is a visionary association dedicated to equipping young
            talents with the skills and tools to tackle today’s challenges and
            build tomorrow’s opportunities.   
          </p>
          <p className="!text-sm lg:text-lg text-gray-200 md:text-sm font-light text-justify  md:text-left leading-relaxed">
            To address this, EPIK LEADERS is
            organizing the Arab-African Summit on Non-Profit Financing on
            November 20, 2025, in Rabat, a gathering designed to explore
            innovative funding models, foster collaboration, and build
            resilience for non-profits.
          </p>
            </div>
          </div>
          <div className="hidden lg:block  h-[200px] w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-80" />
          <div
            ref={contentRef}
            className="flex flex-col lg:flex-row items-start  gap-6 lg:gap-12 text-gray-600 w-full lg:w-auto "
          >
            <div className="flex flex-col gap-1  text-start lg:text-left">
              <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">Contact</h4>
              <a 
                href="mailto:info@epikleaders.org"
                className="text-sm text-gray-200 hover:text-white transition-colors duration-300"
              >
                hello@epikleaders.org
              </a>
              <a 
                href="tel:+212522171538"
                className="text-sm text-gray-200 hover:text-white transition-colors duration-300"
              >
                +212 522 17 15 38
              </a>
              <p className="text-sm text-gray-200 hover:text-white max-w-xs">
                Capital Tower, Bd Moulay Abdellah Cherif, Casablanca – Morocco
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 text-center lg:text-center lg:mx-auto">
        <p className="text-sm text-gray-200">
          © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
