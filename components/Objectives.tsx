"use client"

import { obj1, obj2, obj3, obj4 } from "@/public"
import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { useRef, useLayoutEffect, useState, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Objectives = () => {
  const [activeCard, setActiveCard] = useState(0); // First card is active by default
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if initial animation has played
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rotatedTitlesRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const expandedContentRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check for screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const objectives = [
    {
      image: obj1,
      title: "Identify challenges",
      description: "Analyze financial, legal, and political obstacles."
    },
    {
      image: obj2,
      title: "Explore innovative funding models",
      description: "Crowdfunding, social impact investment, Islamic finance, and partnerships."
    },
    {
      image: obj3,
      title: "Strengthen collaboration",
      description: "Create networks between Arab and African stakeholders."
    },
    {
      image: obj4,
      title: "Formulate recommendations",
      description: "Propose policies to support sustainable funding."
    }
  ];

  const initializeCards = useCallback(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Always clear styles first to prevent stale values on resize
        gsap.set(card, { clearProps: "all" });

        if (index === 0) {
          // First card starts expanded
          if (isMobile) {
            gsap.set(card, { height: "30vh", width: "100%" });
          } else if (isTablet) {
            gsap.set(card, { height: "40vh", width: "100%" });
          } else {
            gsap.set(card, { width: "100%" });
          }
          gsap.set(rotatedTitlesRef.current[index], { opacity: 0 });
          gsap.set(expandedContentRef.current[index], { 
            display: "flex", 
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.15)"
          });
          const revealTexts = expandedContentRef.current[index]?.querySelectorAll('.reveal-text');
          if (revealTexts) {
            // Start with text hidden, will animate with ScrollTrigger
            gsap.set(revealTexts, { y: "100%", opacity: 0 });
          }
        } else {
          // Other cards start collapsed
          if (isMobile) {
            gsap.set(card, { height: "12vh", width: "100%" });
          } else if (isTablet) {
            gsap.set(card, { height: "15vh", width: "100%" });
          } else {
            gsap.set(card, { width: "150px" });
          }
          gsap.set(rotatedTitlesRef.current[index], { opacity: 1 });
          gsap.set(expandedContentRef.current[index], { 
            display: "none", 
            zIndex: 5,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
          });
          const revealTexts = expandedContentRef.current[index]?.querySelectorAll('.reveal-text');
          if (revealTexts) {
            gsap.set(revealTexts, { y: "100%" });
          }
        }
      }
    });
  }, [isMobile, isTablet]);

  const animateCardTransition = useCallback(() => {
    // Kill all previous animations to prevent glitches
    gsap.killTweensOf(cardsRef.current);
    gsap.killTweensOf(rotatedTitlesRef.current);
    gsap.killTweensOf(expandedContentRef.current);
    cardsRef.current.forEach((card, index) => {
      const revealTexts = expandedContentRef.current[index]?.querySelectorAll('.reveal-text');
      if (revealTexts) {
        gsap.killTweensOf(revealTexts);
      }
    });

    const tl = gsap.timeline();

    cardsRef.current.forEach((card, index) => {
      if (card) {
        if (index === activeCard) {
          // Expand the active card with responsive dimensions
          if (isMobile) {
            // Mobile: Expand height for full-width cards
            tl.to(card, { 
              height: "30vh", 
              duration: 0.8, 
              ease: "power2.out"
            }, 0);
          } else if (isTablet) {
            // Tablet: Expand height
            tl.to(card, { 
              height: "40vh", 
              duration: 0.8, 
              ease: "power2.out"
            }, 0);
          } else {
            // Desktop: Expand width
            tl.to(card, { 
              width: "100%", 
              duration: 0.8, 
              ease: "power2.out"
            }, 0);
          }
          
          // Hide rotated title earlier and smoother
          tl.to(rotatedTitlesRef.current[index], { 
            opacity: 0, 
            duration: 0.4, 
            ease: "power2.out" 
          }, 0)
          // Show expanded content earlier for smoother transition
          .set(expandedContentRef.current[index], { display: "flex", zIndex: 10 }, 0.1)
          // Animate overlay opacity smoothly
          .to(expandedContentRef.current[index], {
            backgroundColor: "rgba(0, 0, 0, 0.15)", 
            duration: 0.5,
            ease: "power2.out"
          }, 0.1);
          
          // Animate text elements reveal with better timing
          const revealTexts = expandedContentRef.current[index]?.querySelectorAll('.reveal-text');
          if (revealTexts) {
            tl.fromTo(
              revealTexts,
              { y: "100%" },
              { 
                y: "0%", 
                duration: 0.8, 
                ease: "power2.out",
                stagger: 0.15
              }, 0.3);
          }
        } else {
          // Smoother collapse sequence
          const revealTexts = expandedContentRef.current[index]?.querySelectorAll('.reveal-text');
          if (revealTexts) {
            tl.to(
              revealTexts,
              { 
                y: "100%", 
                duration: 0.3, 
                ease: "power2.in",
                stagger: 0.03
              }, 0);
          }
          
          // Collapse card with responsive dimensions
          if (isMobile) {
            tl.to(card, { 
              height: "12vh", 
              width: "100%", // Ensure full width on collapse
              duration: 0.8, 
              ease: "power2.out"
            }, 0.1);
          } else if (isTablet) {
            tl.to(card, { 
              height: "15vh", 
              width: "100%", // Ensure full width on collapse
              duration: 0.8, 
              ease: "power2.out"
            }, 0.1);
          } else {
            tl.to(card, { 
              width: "150px", 
              duration: 0.8, 
              ease: "power2.out"
            }, 0.1);
          }
          
          tl.to(expandedContentRef.current[index], {
            backgroundColor: "rgba(0, 0, 0, 0.6)", 
            duration: 0.4,
            ease: "power2.out"
          }, 0.1)
          .set(expandedContentRef.current[index], { display: "none", zIndex: 5 }, 0.4)
          // Show rotated title with better timing
          .to(rotatedTitlesRef.current[index], { 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out" 
          }, 0.5);
        }
      }
    });
  }, [isMobile, isTablet, activeCard]);

  useLayoutEffect(() => {
    // Initialize GSAP animations for the first load
    initializeCards();
  }, [isMobile, isTablet, initializeCards]);

  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Wait for cards to be initialized
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const revealTexts = expandedContentRef.current[0]?.querySelectorAll('.reveal-text');
        
        if (revealTexts && revealTexts.length > 0) {
          // Create scroll trigger animation for the first card's text
          const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.fromTo(
                revealTexts,
                { y: "100%", opacity: 0 },
                { 
                  y: "0%", 
                  opacity: 1, 
                  duration: 0.8, 
                  ease: "power3.out", 
                  stagger: 0.2,
                  onComplete: () => setHasAnimated(true)
                }
              );
            }
          });

          // Check if already in view and trigger immediately
          trigger.refresh();
          if (trigger.isActive) {
            trigger.kill();
            gsap.fromTo(
              revealTexts,
              { y: "100%", opacity: 0 },
              { 
                y: "0%", 
                opacity: 1, 
                duration: 0.8, 
                ease: "power3.out", 
                stagger: 0.2,
                onComplete: () => setHasAnimated(true)
              }
            );
          }

          return () => {
            trigger.kill();
          };
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile, isTablet]);

  useLayoutEffect(() => {
    // Animate card transitions when activeCard changes
    animateCardTransition();
  }, [activeCard, isMobile, isTablet, animateCardTransition]); // Re-animate when screen size changes

  const handleCardEnter = (index: number) => {
    if (!isMobile && index !== activeCard) {
      setActiveCard(index);
    }
  };

  const handleCardClick = (index: number) => {
    if (isMobile || isTablet) {
      setActiveCard(activeCard === index ? -1 : index); // Allow all to be collapsed
    }
  };

  const handleCardLeave = () => {
    // Only for desktop - mobile uses click interaction
    if (!isMobile) {
      // Optionally, you can keep the current active card or reset to first card
      // For now, we'll keep the current behavior where a card stays active
    }
  };

  return (
    <div ref={sectionRef} className="px-4 md:px-0">
      <SectionTitle title="Summit objectives" />
      <div 
        className={`
          ${isMobile 
            ? 'flex flex-col space-y-4 my-8' 
            : isTablet 
            ? 'flex flex-col space-y-6 items-center my-10' 
            : 'flex gap-6 justify-between'
          }
        `}
        onMouseLeave={() => !isMobile && !isTablet && setActiveCard(0)} // Only auto-reset on desktop
      >
        {objectives.map((objective, index) => (
          <div 
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className={`
              relative rounded-xl overflow-hidden cursor-pointer transition-transform
              ${isMobile 
                ? 'w-full active:scale-[0.98]' 
                : isTablet 
                ? 'w-[90%] active:scale-[0.99]' 
                : 'h-[600px]'
              }
            `}
            onMouseEnter={() => handleCardEnter(index)}
            onMouseLeave={handleCardLeave}
            onClick={() => handleCardClick(index)}
          >
            <Image 
              className={`w-full h-full absolute top-0 left-0 z-[-1] ${
                isMobile 
                  ? 'object-cover' 
                  : isTablet 
                  ? 'object-cover' 
                  : 'object-cover object-center'
              }`}
              src={objective.image} 
              width={1800} 
              height={600} 
              alt={objective.title}
              priority={index === 0}
            />
            
            {/* Expanded content with reveal animation */}
            <div 
              ref={(el) => { expandedContentRef.current[index] = el; }}
              className="absolute inset-0 w-full h-full flex flex-col justify-end items-start p-4 md:p-6 lg:p-16 z-10"
            >
              <div className="overflow-hidden">
                <h3 className="reveal-text text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                  {objective.title}
                </h3>
              </div>
              <div className="overflow-hidden mt-1 md:mt-2">
                <p className="reveal-text text-white text-sm md:text-base lg:text-lg">
                  {objective.description}
                </p>
              </div>
            </div>

            {/* Rotated title for collapsed state */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black/40 z-5">
              <h3 
                ref={(el) => { rotatedTitlesRef.current[index] = el; }}
                className={`
                  whitespace-nowrap text-white font-light
                  ${isMobile 
                    ? 'text-sm px-4 text-center' 
                    : isTablet
                    ? 'text-base px-6 text-center'
                    : 'text-xl lg:text-2xl -rotate-90'
                  }
                `}
              >
                {objective.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Objectives;