import ImageToCards from "./ImageToCards";
import SectionTitle from "./SectionTitle"


export default function SelectionBasedOnEngagement() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6">

        <SectionTitle title="Une sélection guidée par l’engagement et le potentiel des jeunes leaders" />

        <p className="text-[#4b5563] font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed mb-4 sm:mb-6">
          Les lauréats de EPIK 100 ont été identifiés à travers les clubs EPIK Leaders et les réseaux partenaires, selon plusieurs critères :
        </p>

        <div className="my-12 sm:my-16 lg:my-24">
          <ImageToCards />
        </div>

        <p className="text-[#4b5563] mt-6 sm:mt-8 font-medium text-center text-lg sm:text-xl lg:text-3xl leading-relaxed">
          EPIK 100 met en lumière des leaders émergents dont le parcours est encore en évolution, représentant une génération consciente des défis de l’Afrique et désireuse de contribuer activement à leur résolution.
        </p>

      </div>
    </section>
  );
}
