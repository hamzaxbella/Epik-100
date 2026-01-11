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

    // Animate the container reveal
    tl.fromTo(heroRef.current, 
      { clipPath: 'inset(2% 2% 2% 2% round 1rem)' }, 
      { clipPath: 'inset(0% 0% 0% 0% round 1rem)', duration: heroAnimationDuration, ease: "expo.inOut" }
    );

    // Animate the text elements reveal
    tl.fromTo(
      ".reveal-text",
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power3.out", stagger: 0.3 },
      heroAnimationDuration - 1 // Start this animation halfway through the hero animation
    );

    // Animate the button fade in after the text reveal
    tl.fromTo(
      ".reveal-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      heroAnimationDuration - 0.5 // Start right after first text element (1.5s + 0.3s stagger)
    );

    // Parallax effect for the image
    gsap.to(imageRef.current, {
      y: "20%", // Move the image down by 20% of its height
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // When the top of the hero section hits the top of the viewport
        end: "bottom top", // When the bottom of the hero section hits the top of the viewport
        scrub: true, // Smoothly scrubs the animation as the user scrolls
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


        {/* <div ref={textContainerRef} className="z-10 px-6 md:px-16 flex flex-col gap-6 max-w-[98%] md:max-w-[70%] text-center md:text-left items-center md:items-start">
          <div className="overflow-hidden">
            <h1 className="text-3xl md:text-4xl text-white font-bold reveal-text">Arab-African Summit on Non-Profit Financing in RABAT the 20th November 2025</h1>
          </div>
          <div className="overflow-hidden">
            <h3 className="text-lg md:text-xl text-white font-normal reveal-text"> The future of Non-Profit Financing in the context of global geostrategic shifts.</h3>
          </div>
          <button className="reveal-button hover:bg-primary hover:ring-primary transition-all duration-150 cursor-pointer w-fit flex gap-2 ring-white ring-1 rounded-xl px-6 py-3 md:px-8 md:py-4">
            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfcVy1sk4YTa5kO6F3JxU07ID0lDm1AiMn62PNjF_6x3eRYkA/viewform"} target="_blank" className="text-base md:text-lg uppercase font-semibold text-white  ">Register Now</Link>
            <Image src={btnArrow} alt={"join now"} />
          </button>
        </div> */}
      </div>
    </section>
    )
  }

  export default Hero
