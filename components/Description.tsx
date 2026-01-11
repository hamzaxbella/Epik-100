"use client"
import ScrollReveal from './ScrollReveal';


const Description = () => {
  return (
    <div className="w-full  flex justify-center text-center lg:py-32 pt-16 px-1 ">
    <ScrollReveal
      baseOpacity={0}
      enableBlur={true}
      baseRotation={5}
      blurStrength={15}
      textClassName='font-medium text-[#4b5563] text-2xl lg:text-4xl'
      containerClassName='lg:max-w-[80%]'
    >
      On the sidelines of the Africa Cup of Nations (AFCON), EPIK Leaders launches EPIK 100,
      a pan-African recognition program celebrating 100 young, engaged Africans selected for
      the coherence of their journey, their community involvement, and their commitment to
      making a positive impact.
      
      Through EPIK 100, EPIK Leaders provides a structured, supportive, and demanding
      framework designed to guide participants through the early stages of leadership.
    </ScrollReveal>
    </div>
  );
};

export default Description;