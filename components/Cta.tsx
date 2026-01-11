import Image from "next/image";
import { crystalWaves, waveleft, waveright } from "@/public";
import ShinyText from "./ShinyText";
import Link from "next/link"
import { btnArrow } from "@/public";
const Cta = () => {
  return (
    <div className="relative my-14 md:my-12 lg:my-24 max-w-full flex justify-between items-center px-4 md:px-0 rounded-xl overflow-hidden lg:max-w-[70%] mx-auto ">
      {/* <Image className="z-[0] hidden md:block" src={waveright} alt="wave right" /> */}

      <div className=" z-[1]  rounded-xl overflow-hidden py-6 px-6 md:py-8 md:px-10 lg:px-12 h-fit flex gap-4 md:gap-6 flex-col justify-center items-center">
      
      <ShinyText
        text="Join the Arab-African Summit on Non-Profit Financing. Sign up as Institutional Partner, Media Partner, or Sponsor."
        disabled={false}
        speed={8}
        className="custom-class text-center gap-4 md:gap-6  !text-gray-200 z-[2] text-base md:text-xl lg:text-2xl"
      />
      
       <button className="reveal-button z-[2] hover:bg-primary hover:ring-primary transition-all duration-150 cursor-pointer w-fit flex gap-2 ring-white ring-1 rounded-xl px-6 py-3 md:px-8 md:py-4">
            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfcVy1sk4YTa5kO6F3JxU07ID0lDm1AiMn62PNjF_6x3eRYkA/viewform"} target="_blank" className="text-base md:text-lg uppercase font-semibold text-white  ">Register Now</Link>
            <Image src={btnArrow} alt={"join now"} />
          </button>
          <div className="absolute z-[0] top-0 left-0 w-full h-full backdrop:blur-2xl bg-black/60"/>
        <Image className="absolute z-[-1] top-0 left-0 w-full h-full object-fit" src={crystalWaves} alt="crystal waves" />
      </div>
      {/* <Image className="scale-x-[-1] z-[0] hidden md:block" src={waveleft} alt="wave left" /> */}
    </div>
  );
};

export default Cta;
