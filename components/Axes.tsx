"use client";
import ScrollStack, { ScrollStackItem } from './ScrollStack'

import React from "react";
import SectionTitle from "./SectionTitle";
import { ax3 } from "@/public";
import Image from "next/image";

const Axes = () => {
  const content = [
    // {
    //   image: ax1,
    //   title: "Traditional financing in the face of new geopolitical dynamics:",
    //   ax1: "The impact of global crises and donor priorities on NPO funding.",
    //   ax2: "Strategies for diversifying funding sources and reducing dependence on international aid.",
    // },
    // {
    //   image: ax2,
    //   title: "The rise of Islamic finance and social impact investment:",
    //   ax1: "The role of Zakat and Waqfs (endowments) as sustainable funding mechanisms.",
    //   ax2: "Opportunities for partnerships with social investment funds and private companies.",
    // },
    {
      image: ax3,
      title: "Governance and transparency in a changing world:",
      ax1: "How improved governance and increased transparency build donor and partner trust.",
      ax2: "Using technology to optimize financial management and accountability.",
    }
  ];

  return (
    <div className="my-8 md:my-10 lg:my-12 px-4 md:px-0">
      <SectionTitle title="Thematic axes"/>
      <div className="">
        <ScrollStack 
          useWindowScroll={true}
          itemDistance={150}
          itemScale={0.03}
          itemStackDistance={60}
          baseScale={0.93}
          className="relative"
        >
          {content.map((axe, idx) => (
            <ScrollStackItem
              key={idx}
              itemClassName="!h-[calc(100vh-80px)] md:!h-[calc(100vh-100px)] !rounded-2xl md:!rounded-3xl overflow-hidden !shadow-2xl !p-0"
            >
              <Image
                className="absolute left-0 top-0 w-full h-full object-cover object-center"
                src={axe.image}
                width= {1800}
                height={600 }
                alt={axe.title}
                priority={idx === 0}
              />
              <div className="p-4 pb-16 md:p-6 lg:px-8 lg:pb-16  flex gap-3 md:gap-4 flex-col justify-end w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent absolute left-0 top-0">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold drop-shadow-lg leading-tight">
                  {axe.title}
                </h2>
                <div className="flex gap-3 md:gap-4 lg:gap-6 items-start">
                  <div className="flex items-center mt-1 md:mt-1.5 lg:mt-2 flex-shrink-0">
                    <div className="w-8 md:w-10 lg:w-12 xl:w-16 h-[2px] bg-white"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white font-medium drop-shadow-md leading-relaxed">
                    {axe.ax1}
                  </p>
                </div>
                <div className="flex gap-3 md:gap-4 lg:gap-6 items-start">
                  <div className="flex items-center mt-1 md:mt-1.5 lg:mt-2 flex-shrink-0">
                    <div className="w-8 md:w-10 lg:w-12 xl:w-16 h-[2px] bg-white"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white font-medium drop-shadow-md leading-relaxed">
                    {axe.ax2}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
};

export default Axes;
