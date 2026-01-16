"use client"

import { btnArrow, heroImage } from "@/public"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import CircularText from './CircularText';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const heroAnimationDuration = 2.5;

    tl.fromTo(heroRef.current, 
      { clipPath: 'inset(2% 2% 2% 2% round 1rem)' }, 
      { clipPath: 'inset(0% 0% 0% 0% round 1rem)', duration: heroAnimationDuration, ease: "expo.inOut" }
    );

    tl.fromTo(
      ".reveal-text",
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power3.out", stagger: 0.3 },
      heroAnimationDuration - 1 
    );

    tl.fromTo(
      ".reveal-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      heroAnimationDuration - 0.5 
    );

    gsap.to(imageRef.current, {
      y: "20%", 
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", 
        end: "bottom top", 
        scrub: true, 
      },
    });


    }, [])

    return (
    <section className="w-full h-screen flex justify-center items-center">
      <div ref={heroRef} className="flex justify-center md:justify-start items-center w-[100%] h-[98%] lg:h-[95%] rounded-2xl overflow-hidden relative" >
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full z-10" />
        <Image ref={imageRef} src={heroImage} width={1800} height={560} className="absolute top-0 left-0 w-full object-cover h-full" alt="" />
        <CircularText
        text="EPIK*100*EPIK*100*"
        onHover="speedUp"
        spinDuration={20}
        className="text-white z-10 font-normal !absolute bottom-4 lg:!right-4 !h-28 lg:!h-[200px] "
      />
      </div>
    </section>
    )
  }

  export default Hero
