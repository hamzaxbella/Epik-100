"use client"
import ScrollReveal from './ScrollReveal';


const Description = () => {
  return (
    <div className="w-full flex flex-col items-center text-center lg:py-32 pt-16 px-1 gap-8">

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={15}
        textClassName="font-medium text-[#4b5563] text-2xl lg:text-4xl"
        containerClassName="lg:max-w-[80%]"
      >
        En marge de la Coupe d’Afrique des Nations (CAN), EPIK Leaders lance EPIK 100,
        un programme panafricain de reconnaissance célébrant 100 jeunes Africains engagés,
        sélectionnés pour la cohérence de leur parcours, leur implication dans la communauté
        et leur volonté de générer un impact positif.
      </ScrollReveal>

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={15}
        textClassName="font-medium text-[#4b5563] text-2xl lg:text-4xl"
        containerClassName="lg:max-w-[80%]"
      >
        À travers EPIK 100, EPIK Leaders propose un cadre structuré, bienveillant et exigeant,
        conçu pour accompagner les participants dans les premières étapes de leur parcours
        de leadership.
      </ScrollReveal>

    </div>
  );
};

export default Description;