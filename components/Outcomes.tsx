'use client'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { out1, out3 } from "@/public"
import { useRef, useLayoutEffect, useState } from "react"
import { gsap } from "gsap"

const Outcomes = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const imageElementsRef = useRef<HTMLImageElement[]>([])
  
  const outcomContent = [
    {
      number : "01.",
      title : "Roadmap",
      image : out1,
      description : "A joint roadmap for more resilient and sustainable financing."
      
    },
    // {
    //   number : "02.",
    //   title : "Pilot initiatives",
    //   image : out2,
    //   description : "Launching collaborative initiatives between African and Arab countries."
    // },
    {
      number : "03.",
      title : "Dialogue platform",
      image : out3,
      description : "Creating a permanent platform for knowledge sharing and concerted action."
    },
  ]

  useLayoutEffect(() => {
    // Initialize GSAP and set initial state for images
    if (imageElementsRef.current) {
      imageElementsRef.current.forEach((img, index) => {
        if (img) {
          gsap.set(img, { 
            opacity: index === 0 ? 1 : 0,
            scale: index === 0 ? 1 : 1.1
          })
        }
      })
    }
  }, [])

  const handleMouseEnter = (index: number) => {
    if (index === currentImage) return

    const currentImg = imageElementsRef.current[currentImage]
    const nextImg = imageElementsRef.current[index]

    if (currentImg && nextImg) {
      // Animate out current image
      gsap.to(currentImg, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.out"
      })

      // Animate in new image
      gsap.fromTo(nextImg, 
        { opacity: 0, scale: 1.1 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        }
      )
    }

    setCurrentImage(index)
  }
  
  return (
    <div className="px-4 py-4 lg:py-0 md:px-0">
      <SectionTitle title="Summit outcomes" />
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 lg:h-[700px]">
        <div className="flex-1 w-full h-[300px] md:h-[400px] lg:h-full overflow-hidden rounded-2xl relative">
          {outcomContent.map((outcome, index) => (
            <Image 
              key={index}
              ref={el => {
                if (el) imageElementsRef.current[index] = el
              }}
              className="absolute top-0 left-0 w-full h-full object-cover" 
              src={outcome.image} 
              width={1800} 
              height={640} 
              alt={outcome.title}
            />
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <div className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-8 w-full">
            {
              outcomContent.map((outcome, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 md:gap-8 lg:gap-12 p-3 md:p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-primary/20"
                  onMouseEnter={() => {
                    handleMouseEnter(index)
                    setHoveredIndex(index)
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`p-4 md:p-6 lg:p-8 text-base md:text-lg lg:text-xl font-semibold rounded-full transition-all duration-300 flex-shrink-0 ${
                    hoveredIndex === index 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {outcome.number}
                  </div>
                  <div> 
                    <h3 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold ">{outcome.title}</h3>
                    <p className="text-sm md:text-base lg:text-xl text-[#4b5563] font-medium">{outcome.description}</p>
                  </div>
                </div>
              ))
          } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outcomes