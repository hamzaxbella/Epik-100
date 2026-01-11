import ImageToCards from "./ImageToCards";
import SectionTitle from "./SectionTitle"


export default function SelectionBasedOnEngagement() {
  return (
    <section className="w-full py-24 bg-white">
      <div className=" mx-auto px-6">

        {/* TITLE */}
        <SectionTitle title="A SELECTION BASED ON ENGAGEMENT AND POTENTIAL" />
        {/* <h2 className="text-[#1f2937] text-center text-2xl lg:text-4xl font-semibold mb-8">
          A SELECTION BASED ON ENGAGEMENT AND POTENTIAL
        </h2> */}

        {/* TEXT */}
        <p className="text-[#4b5563] font-medium text-center text-3xl leading-relaxed mb-6">
          The EPIK 100 awardees were identified through EPIK Leaders clubs and partner networks,
          based on several criteria:
        </p>

        {/* LIST */}
        <ImageToCards />

        {/* TEXT */}
        <p className="text-[#4b5563] mt-8 font-medium text-center text-3xl leading-relaxed">
          EPIK 100 highlights emerging leaders whose journeys are still evolving, representing a
          generation that is aware of Africa’s challenges and eager to actively contribute to solutions
        </p>

      </div>
    </section>
  );
}
