"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import SectionTitle from "./SectionTitle";
export default function LeadersGrid() {
  const [flipped, setFlipped] = useState<string | null>(null);

  const leaders = [
  {
    id: "1",
    name: "Rashidi Martin",
    country: "CD",
    sector: "23 ans",
    image: "/leaders/martin_tambwe.jpeg",
    bioShort:
      "À 23 ans, il met la communication au service de la transformation de la société congolaise. Président du Club des Jeunes Leaders à Kinshasa, il coordonne des initiatives mobilisant la jeunesse sur les grands défis nationaux...",
    bioFull:
      'À 23 ans, il met la communication au service de la transformation de la société congolaise. Président du Club des Jeunes Leaders à Kinshasa, il coordonne des initiatives mobilisant la jeunesse sur les grands défis nationaux. Son parcours inclut la sensibilisation de plus de 2 000 jeunes contre le paludisme et son rôle de "Veilleur du Web" pour l’UNICEF RDC, où il lutte contre la désinformation et les discours de haine, utilisant le numérique pour donner voix aux sans-voix et promouvoir la santé publique.',
  },
  {
    id: "2",
    name: "SOGBO Dewanou Maurice",
    country: "BJ",
    sector: "27 ans",
    image: "/leaders/dewanou_maurice.png",
    bioShort:
      "Jeune activiste pour la justice sociale et la protection des droits humains, il lutte contre les violences basées sur le genre et mobilise les jeunes via la sensibilisation et la communication communautaire...",
    bioFull:
      "Jeune activiste pour la justice sociale et la protection des droits humains, il lutte contre les violences basées sur le genre et mobilise les jeunes à travers des actions de sensibilisation et de communication communautaire. Chargé de communication à l’Union de la Jeunesse Estudiantine de Ouèssè et engagé au sein de U-Report Bénin, il utilise le numérique pour amplifier la voix des jeunes et soutenir des initiatives à fort impact social, mettant ses compétences au service d’une société plus équitable, inclusive et respectueuse des droits de tous.",
  },
  {
    id: "3",
    name: "BALDE Amadou Bailo",
    country: "GN",
    sector: "29 ans",
    image: "/leaders/AMADOU%20BAILO%20BALDE.jpg",
    bioShort:
      "Ingénieur en environnement et agent de développement communautaire, il œuvre depuis 2019 pour la protection de l’environnement et le développement durable. Il a ensuite dirigé l’ONG EEDDG en 2022...",
    bioFull:
      "Ingénieur en environnement et agent de développement communautaire, il consacre son énergie depuis 2019 à la protection de l’environnement et au développement durable. Il a débuté son engagement au sein de l’Association des Étudiants pour la Protection de l’Environnement (AEPE) à N’Zérékoré, puis a pris la direction de l’ONG Éducation, Environnement et Développement Durable Guinée (EEDDG) en 2022, impulsant des projets locaux et sous-régionaux, participant à des forums internationaux et accompagnant des initiatives concrètes telles que la création de pépinières et de forêts communautaires. À travers ces actions, il forme et inspire une nouvelle génération de leaders responsables, convaincu que l’engagement local des jeunes est clé pour relever les défis environnementaux et climatiques en Afrique.",
  },
  {
    id: "4",
    name: "Brian Okori",
    country: "UG",
    sector: "26 ans",
    image: "/leaders/Okori%20Brian.jpeg",
    bioShort:
      "Fortement engagé dans les associations communautaires, il met le dialogue, la collaboration et l’action collective au service du progrès social. Il contribue à des initiatives d’autonomisation, de sensibilisation et de développement durable...",
    bioFull:
      "Fortement engagé dans les associations communautaires, il met le dialogue, la collaboration et l’action collective au service du progrès social. Son expérience associative lui a permis de développer des compétences en leadership, coordination et plaidoyer, et de contribuer à des initiatives favorisant l’autonomisation, la sensibilisation et le développement durable. Guidé par la volonté de générer un impact positif, il participe activement à des projets et plateformes impliquant les jeunes, convaincu que le renforcement des structures communautaires est essentiel pour inspirer transformation et responsabilité collective.",
  },
  {
    id: "5",
    name: "TSHIMANGA Kadima jephthe",
    country: "CD",
    sector: "27 ans",
    image: "/leaders/JEPHTHE%20TSHIMANGA.jpg",
    bioShort:
      "Porté par un fort sens des responsabilités sociales, il s’investit dans des actions associatives et citoyennes pour l’éducation, l’autonomisation des jeunes et la promotion des droits humains. Il conçoit des programmes inclusifs et mène des campagnes de sensibilisation...",
    bioFull:
      "Porté par un profond sens des responsabilités sociales, il s’est investi dans des actions associatives et citoyennes visant un impact positif et durable, notamment dans l’éducation, l’autonomisation des jeunes et la promotion des droits humains. Il a conçu des programmes inclusifs, mené des campagnes de sensibilisation et soutenu les populations vulnérables, convaincu que l’action collective est un levier puissant de changement. Son engagement lui a permis de renforcer ses compétences en leadership et de rapprocher les institutions des citoyens, avec pour objectif la construction d’une société plus juste, équitable et inclusive.",
  },
  {
    id: "6",
    name: "Diedhiou Djitala",
    country: "SN",
    sector: "25 ans",
    image: "/leaders/Djitala%20Diedhiou.jpg",
    bioShort:
      "Il s'engage activement pour le développement local et la promotion de l’esprit civique, en mobilisant étudiants et citoyens autour de projets éducatifs, de campagnes de sensibilisation et d’initiatives communautaires concrètes...",
    bioFull:
      "Il s'engage activement pour le développement local et la promotion de l’esprit civique, en mobilisant étudiants et citoyens autour de projets éducatifs, de campagnes de sensibilisation et d’initiatives communautaires concrètes. Ses actions visent à renforcer la participation citoyenne et à créer un impact positif durable au sein de sa communauté.",
  },
  {
    id: "7",
    name: "Zainab dass Abdullahi",
    country: "NG",
    sector: "21 ans",
    image: "/leaders/Zainab%20Abdullahi.jpeg",
    bioShort:
      "Membre actif de l’All African Students Union, elle promeut le changement positif au sein de la communauté étudiante et au-delà. Elle contribue à des initiatives qui unissent et responsabilisent les jeunes Africains, en favorisant l’excellence académique et l’échange culturel...",
    bioFull:
      "Membre actif de l’All African Students Union, elle s’engage à promouvoir le changement positif au sein de la communauté étudiante et au-delà. Elle contribue à des initiatives qui unissent, responsabilisent et inspirent les jeunes Africains à devenir des acteurs de transformation dans leurs pays, en favorisant l’excellence académique, l’échange culturel et la responsabilité sociale, convaincu que l’éducation est la clé pour libérer le potentiel et bâtir un avenir prospère pour l’Afrique.",
  },
  {
    id: "8",
    name: "BONABE BONIFACE",
    country: "CM",
    sector: "33 ans",
    image: "/leaders/Bonifils%20Bonabe.jpg",
    bioShort:
      "Il a débuté comme bénévole à l’Association Salama, puis a promu la citoyenneté au sein de la Youth Association for Citizenship. Aujourd’hui, Président de Sahel Initiatives (SAHI), il agit pour la préservation des ressources naturelles et la lutte contre le changement climatique au Cameroun...",
    bioFull:
      "Il a débuté son engagement communautaire comme bénévole au sein de l’Association Salama, découvrant le pouvoir de l’action locale et de la sensibilisation de terrain. Membre ensuite de la Youth Association for Citizenship, il a contribué à promouvoir la citoyenneté, la responsabilité sociale et le leadership des jeunes. Aujourd’hui, en tant que Président de Sahel Initiatives (SAHI), il met son expérience au service de la préservation des ressources naturelles et de la lutte contre le changement climatique dans la région du Grand Nord du Cameroun, en renforçant la résilience communautaire et en encourageant des pratiques durables pour un avenir plus équitable et conscient de l’environnement.",
  },
  {
    id: "9",
    name: "Moudeina Voussou",
    country: "TD",
    sector: "34 ans",
    image: "/leaders/moudaina_voussou.png",
    bioShort:
      "Il s’engage dans la transformation personnelle et le changement social, en accompagnant la guérison des blessures intérieures et en promouvant la paix et la cohésion sociale. Il mène des actions de prévention contre les violences basées sur le genre et forme des ambassadeurs de la paix...",
    bioFull:
      "Il s’engage activement dans la transformation personnelle et le changement social, en accompagnant la guérison des blessures intérieures et en promouvant la paix et la cohésion sociale. Il mène des actions de prévention et de lutte contre les violences basées sur le genre, forme des ambassadeurs de la paix et développe les compétences en leadership pour renforcer l’impact positif au sein de sa communauté.",
  },
  {
    id: "10",
    name: "OROU GANI Chamsoudine",
    country: "BJ",
    sector: "29 ans",
    image: "/leaders/Chamsoudin_OROU_GANI.png",
    bioShort:
      "Agronome passionné, il améliore les conditions de vie des communautés rurales au Bénin en accompagnant les producteurs vers des pratiques durables. Il soutient la valorisation des produits, la formation des agriculteurs, l’agriculture biologique et la commercialisation locale...",
    bioFull:
      "En tant qu’agronome passionné, il consacre son parcours à l’amélioration des conditions de vie des communautés rurales au Bénin. Il accompagne les producteurs locaux dans l’adoption de pratiques agricoles durables, la valorisation de leurs produits, la formation des agriculteurs et la promotion de l’agriculture biologique, tout en soutenant la commercialisation locale. Son engagement vise à construire un avenir plus résilient et prospère pour ses communautés.",
  },
  {
    id: "11",
    name: "TINDANO Hermann",
    country: "BF",
    sector: "29 ans",
    image: "/leaders/Hermann%20Tindano.jpg",
    bioShort:
      "Il s’engage pour la protection de l’environnement et la lutte contre le changement climatique à travers des actions concrètes : sensibilisation, éducation environnementale, ateliers sur la justice climatique, plaidoyers et reboisement à l’échelle nationale...",
    bioFull:
      "Il s’engage activement pour la protection de l’environnement et la lutte contre le changement climatique à travers des actions concrètes sur le terrain : campagnes de sensibilisation et d’éducation environnementale, ateliers sur la justice climatique, plaidoyers et initiatives de reboisement à l’échelle nationale.",
  },
  {
    id: "12",
    name: "Diallo Samba",
    country: "SN",
    sector: "23 ans",
    image: "/leaders/DIALLOSAMBA.jpeg",
    bioShort:
      "Jeune leader engagé dans la gouvernance démocratique et l’innovation en politiques publiques, il préside le Political Science Club de l’UGB. Il a initié la première compétition interuniversitaire sur les politiques publiques au Sénégal, mobilisant étudiants, institutions et partenaires pour proposer des solutions portées par la jeunesse...",
    bioFull:
      "Il est un jeune leader africain engagé dans la gouvernance démocratique et l’innovation en politiques publiques. En tant que Président du Political Science Club de l’Université Gaston Berger et initiateur de la première compétition interuniversitaire sur les politiques publiques au Sénégal, il a mobilisé étudiants, universités, institutions publiques et partenaires internationaux pour concevoir et proposer des solutions politiques portées par la jeunesse. Cette initiative a favorisé le dialogue direct entre étudiants et décideurs, renforcé la participation citoyenne et promu l’émergence d’une jeunesse informée, engagée et capable d’impacter les politiques publiques à l’échelle nationale et panafricaine.",
  },
  {
    id: "13",
    name: "Awawou MANDUNH MBOHOU",
    country: "CM",
    sector: "26 ans",
    image: "/leaders/Radhiya%20Bintou.jpg",
    bioShort:
      "Engagée depuis plus de dix ans pour la santé sexuelle et reproductive, la justice de genre et le leadership des jeunes, elle préside le Youth Action Movement de CAMNAFAW. Fondatrice du Cercle des Voix Courageuses, elle œuvre pour l’autonomisation des filles et jeunes femmes via le plaidoyer, l’action communautaire et les médias...",
    bioFull:
      "Elle s’engage depuis plus de dix ans pour la santé sexuelle et reproductive, la justice de genre et le leadership des jeunes. Présidente du Youth Action Movement de CAMNAFAW et fondatrice du Cercle des Voix Courageuses, elle œuvre pour l’autonomisation des filles et jeunes femmes, le plaidoyer et l’action communautaire. Réalisatrice et actrice, elle utilise le cinéma et les médias numériques pour sensibiliser et mobiliser, ayant touché plus de 10 000 personnes en ligne et 30 000 sur le terrain, convaincu que transformer les récits change les vies et renforce le leadership des jeunes africains.",
  },
  {
    id: "14",
    name: "Ndao Ardo Bigue",
    country: "SN",
    sector: "27 ans",
    image: "/leaders/Baye%20gorgui.jpeg",
    bioShort:
      "Il a développé son leadership et son engagement citoyen au sein de son association, convaincu que chaque jeune doit se former et agir concrètement pour devenir un acteur du développement durable...",
    bioFull:
      "Il a développé son leadership et son engagement citoyen au sein de son association, convaincu que chaque jeune doit se former et agir concrètement pour devenir un acteur du développement durable.",
  },
  {
    id: "15",
    name: "MUGISHO MUTABAZI PASCAL",
    country: "CD",
    sector: "29 ans",
    image: "/leaders/Pascal%20MUGISHO%20MUTABAZI.jpg",
    bioShort:
      "Diplômé en développement rural, il œuvre au Sud-Kivu pour le développement communautaire et la recherche-action participative. Project manager à la Ligue des Visionnaires, il conduit des initiatives sur les droits, l’agriculture durable et le climat, et porte un plaidoyer national sur les déchets plastiques...",
    bioFull:
      "Passionné par le développement communautaire et la recherche-action participative, il est diplômé en développement rural et acteur de la société civile environnementale du Sud-Kivu. Engagé comme project manager à la Ligue des Visionnaires pour le Développement Intégral du Congo, il a conduit des initiatives sur la participation communautaire, la protection des droits, l’agriculture durable et le climat. Il a mené un plaidoyer auprès du gouvernement central sur la gestion des déchets plastiques et l’interdiction de leur importation, malgré les défis liés à la situation sécuritaire. Il a également contribué à la rédaction de recherches et de plans d’action en collaboration avec des ONG, les chefferies décentralisées et le gouvernement local.",
  },
  {
    id: "16",
    name: "Adoumadje Adolphe",
    country: "TD",
    sector: "31 ans",
    image: "/leaders/Adolphe%20Adoumadje.jpg",
    bioShort:
      "Il s’engage auprès des jeunes et des enfants démunis, notamment des orphelins, pour leur offrir soutien, éducation et perspectives d’avenir. À travers des initiatives locales, il renforce leur autonomie, promeut la solidarité et les aide à devenir des acteurs positifs dans leur communauté...",
    bioFull:
      "Il s’engage auprès des jeunes et des enfants démunis, notamment des orphelins, pour leur offrir soutien, éducation et perspectives d’avenir. À travers des initiatives locales et des actions communautaires, il cherche à renforcer leur autonomie, promouvoir des valeurs de solidarité et leur donner les moyens de devenir des acteurs positifs au sein de leur communauté.",
  },
  {
    id: "17",
    name: "Chalom TOPEGLO",
    country: "TG",
    sector: "27 ans",
    image: "/leaders/Chalom%20TOPEGLO.jpg",
    bioShort:
      "Il s’engage pour l’accès à l’énergie propre : fondateur de Pulsar Eco Group, il sensibilise et forme aux énergies renouvelables dans des communautés rurales au Togo. Il collabore avec des ONG pour équiper écoles et centres de santé, convaincu que l’entrepreneuriat social peut transformer l’Afrique...",
    bioFull:
      "Il s’engage pour un impact sociétal positif à travers l’accès à l’énergie propre. Fondateur de Pulsar Eco Group, il a mené des actions de sensibilisation et de formation sur les énergies renouvelables auprès de communautés rurales au Togo, touchant plus de 500 personnes. Il collabore avec des ONG locales pour équiper écoles et centres de santé, souvent à tarifs adaptés. Convaincu que l’entrepreneuriat social peut transformer l’Afrique, il allie innovation, développement durable et impact communautaire.",
  },
  {
    id: "18",
    name: "Kilosho Gaspard",
    country: "CD",
    sector: "25 ans",
    image: "/leaders/gaspard_kilosho.jpeg",
    bioShort:
      "Il a commencé son engagement associatif en 2019 en créant Ngaliema Notre Priorité, une structure dédiée à l’amélioration de la salubrité, à la lutte contre la délinquance et à la promotion des valeurs citoyennes dans sa commune de Ngaliema...",
    bioFull:
      "Il a commencé son engagement associatif en 2019 en créant Ngaliema Notre Priorité, une structure dédiée à l’amélioration de la salubrité, à la lutte contre la délinquance et à la promotion des valeurs citoyennes dans sa commune de Ngaliema.",
  },
   {
    id: "19",
    name: "Ndoye Awa",
    country: "SN",
    sector: "24 ans",
    image: "/leaders/ndoye_awa.jpeg",
    bioShort:
      "Fondatrice et présidente de Ensemble Pour Elles (EPE) à Diender, elle œuvre pour l’autonomisation des femmes et des jeunes filles. Étudiante en pluralité humaine et intervenante en santé mentale, elle met ses compétences au service de l’égalité des genres...",
    bioFull:
      "Fondatrice et présidente de Ensemble Pour Elles (EPE), une initiative communautaire basée à Diender, au Sénégal, dédiée à l’autonomisation des femmes et des jeunes filles. Étudiante en pluralité humaine à l’Université de l’Ontario Français et intervenante en santé mentale auprès de personnes autistes et TDAH, elle met ses compétences au service de l’égalité des genres et de l’émancipation féminine. À travers EPE, elle développe des programmes concrets de formation professionnelle, d’éducation à la santé et d’accompagnement entrepreneurial, visant à créer un impact durable sur sa communauté. Vice-présidente de l’Association des Sénégalais du Québec (ASQ) et ambassadrice des Élites Sénégalaises du Canada, elle promeut une approche inclusive et équitable, convaincue que l’autonomisation des femmes est le levier le plus puissant pour transformer durablement les sociétés.",
  },
  {
    id: "20",
    name: "CISSE Moussa",
    country: "ML",
    sector: "25 ans",
    image: "/leaders/moussa_ciss%C3%A9.jpg",
    bioShort:
      "Secrétaire général de APDI-SAHEL, il agit au quotidien auprès des communautés du Sahel, surtout les femmes et les jeunes. Il participe à des actions de reboisement, de sensibilisation dans les écoles, d’entrepreneuriat féminin et de dialogue communautaire...",
    bioFull:
      "Secrétaire général de APDI-SAHEL (Association pour la Promotion du Développement Intégré dans le Sahel). Son engagement se traduit par un travail de terrain quotidien auprès des communautés, en particulier les femmes et les jeunes, pour relever des défis concrets liés à l’environnement, aux moyens de subsistance et au développement local. À travers APDI-SAHEL, il a participé à des actions de reboisement, à la sensibilisation environnementale dans les écoles, à des initiatives d’entrepreneuriat féminin et au dialogue communautaire avec les autorités locales. Convaincu que le véritable changement commence à l’échelle locale avec des solutions simples et participatives, il œuvre pour un Sahel plus résilient, inclusif et porteur d’espoir, où les jeunes deviennent des acteurs de transformation positive.",
  },
  {
    id: "21",
    name: "AYISSI ETEME Jean baptiste",
    country: "CM",
    sector: "28 ans",
    image: "/leaders/eteme%20ayissi.jpg",
    bioShort:
      "Issu du groupe minoritaire Manguissa, il mène des projets dans l’Extrême-Nord du Cameroun. Fondateur de BIO WATER SARL, il propose une filtration d’eau potable locale et forme/mentor de jeunes porteurs de projets, avec plus de 1 300 étudiants formés entre 2022 et 2024...",
    bioFull:
      "Jeune Africain de la région du Centre au Cameroun, issu du groupe minoritaire Manguissa, il mène plusieurs projets pour sa communauté dans l’Extrême-Nord. Fondateur de BIO WATER SARL, il propose une solution innovante de filtration d’eau potable locale, contribuant à fournir de l’eau propre aux écoles et aux foyers. Il accompagne également les jeunes porteurs d’idées de projets à travers des formations et du mentorat, avec plus de 1 300 étudiants formés entre 2022 et 2024 en maturation de projets, entrepreneuriat et gestion de projets. Grâce au club d’entrepreneuriat qu’il a créé et au réseau francophone de l’AUF, il a organisé des formations certifiées rassemblant jusqu’à 800 étudiants et collaboré avec des experts nationaux et internationaux pour renforcer les compétences et l’insertion professionnelle des jeunes. Ses initiatives visent à réduire le chômage, favoriser l’intégration professionnelle et créer un impact durable pour sa communauté et au-delà.",
  },
  {
    id: "22",
    name: "Djetatoroum Daïmian Sylvaire",
    country: "TD",
    sector: "20 ans",
    image: "/leaders/sylvaire_djetatoroum.jpg",
    bioShort:
      "Il a fondé en décembre 2024 le Collectif des Jeunes Leaders Panafricains, organisant chaque semaine des conférences-débats animées par des experts du continent. Il a aussi organisé une conférence à Moundou sur le panafricanisme, et est également artiste slameur et poète...",
    bioFull:
      "Il a fondé en décembre 2024 le Collectif des Jeunes Leaders Panafricains, qui organise chaque semaine des conférences-débats de deux heures animées par des experts du continent – enseignants-chercheurs, magistrats, avocats, procureurs, politologues – touchant de nombreux jeunes à travers l’Afrique. Il a également organisé une conférence en présentiel à Moundou (Tchad) sur le panafricanisme et sa perception par les jeunes, permettant à de nombreux participants de mieux comprendre ce concept. Parallèlement, il est artiste slameur et poète, membre de Collectif Tchad Slam et de l’association Lisons Ensemble, et nourrit une passion pour la politique et l’engagement citoyen.",
  },
  {
    id: "23",
    name: "Guedje Joséa",
    country: "BJ",
    sector: "26 ans",
    image: "/leaders/Jos%C3%A9a_guedje.jpeg",
    bioShort:
      "Doctorante en économie agricole à Marseille, elle a fondé Avenir Vert Solidaire (AVS) au Bénin et en France. AVS accompagne orphelinats/écoles via l’aquaponie et l’agroécologie, et sensibilise à Marseille à l’agriculture urbaine et à l’environnement...",
    bioFull:
      "Doctorante en économie agricole basé à Marseille et fondatrice d’Avenir Vert Solidaire (AVS), une initiative sociale et solidaire opérant au Bénin et en France. Inspirée par la rencontre d’un enfant Touareg dans la rue, elle s’est engagée à développer des systèmes alimentaires durables favorisant dignité, autonomie et éducation. Au Bénin, AVS accompagne deux orphelinats et des écoles locales dans la mise en place de fermes aquaponiques et agroécologiques, combinant production alimentaire, apprentissage pratique et revenus réinvestis pour renforcer les projets éducatifs. En France, le projet sensibilise les enfants et étudiants de Marseille à l’agriculture urbaine et à l’environnement via des systèmes aéroponiques et des ateliers participatifs. Par ses actions, Joséa allie recherche, engagement social et transformation concrète des systèmes alimentaires, mettant la jeunesse au cœur d’un impact durable et collectif.",
  },
  {
    id: "24",
    name: "Sy Ibrahima",
    country: "SN",
    sector: "27 ans",
    image: "/leaders/ibrahima_sy.jpg",
    bioShort:
      "Membre d’une association sociale de développement communautaire, il mène des actions pour les jeunes, les personnes vulnérables et la cohésion sociale. Il met en place des formations, des programmes de sensibilisation et des initiatives participatives ancrées sur le terrain...",
    bioFull:
      "Il est membre d’une association sociale engagée dans le développement communautaire, visant à améliorer concrètement la vie des populations locales. Il conduit des actions en faveur des jeunes, des personnes vulnérables, et de la cohésion sociale, à travers des formations, des programmes de sensibilisation et des initiatives participatives. Son engagement vise à créer des opportunités durables, renforcer la responsabilité citoyenne et encourager l’autonomie des habitants, avec une approche pragmatique et ancrée sur le terrain, convaincu que le vrai changement commence par l’action locale et l’implication de tous.",
  },
  {
    id: "25",
    name: "MAOUNDIE MAGLOIRE",
    country: "TD",
    sector: "29 ans",
    image: "/leaders/maoundoe_magloire.jpg",
    bioShort:
      "Biologiste clinicien et SG d’ASSOPSET-TCHAD, il promeut le don de sang comme acte médical et citoyen. Entrepreneur digital et formateur, il vulgarise les sciences et conçoit des outils interactifs pour transmettre responsabilité, paix et réconciliation...",
    bioFull:
      "Il est biologiste clinicien et Secrétaire Général d’ASSOPSET-TCHAD, où il promeut le don de sang comme un acte médical, citoyen et solidaire. Son engagement associatif se traduit par la mobilisation collective, la valorisation des partenaires et des communautés, et l’organisation d’initiatives structurées. Parallèlement, entrepreneur digital et formateur, il développe des contenus pédagogiques pour la jeunesse, vulgarise les sciences et conçoit des outils interactifs, en transmettant des valeurs de responsabilité, de paix et de réconciliation. Son parcours illustre la rencontre entre rigueur scientifique et engagement citoyen, démontrant que l’innovation peut servir le bien commun.",
  },
  {
    id: "26",
    name: "Messe ngale Clémenceau joyeux",
    country: "CM",
    sector: "30 ans",
    image: "/leaders/Joyeux%20Ngale.jpg",
    bioShort:
      "Leader de la communauté Baka au Cameroun, il œuvre pour l’autonomie et le leadership des jeunes de son peuple. Il a créé une association proposant des programmes de leadership autochtone, valorise la culture Baka via festivals et écoles de forêt, et porte des initiatives éducatives et sanitaires...",
    bioFull:
      "Il est un leader de la communauté Baka au Cameroun, engagé pour l’autonomie, le développement et le leadership des jeunes de son peuple. Il a fondé une association qui propose des programmes de leadership autochtone, communautaire, politique et sociétal, tout en valorisant la culture Baka à travers des festivals, des écoles de forêt pour transmettre le savoir des aînés aux jeunes, et des initiatives éducatives et sanitaires pour les enfants et adolescents. Grâce à son action, il renforce l’émancipation des jeunes, favorise le transfert des connaissances et contribue à construire une communauté plus dynamique, fière de son identité et tournée vers l’avenir.",
  },
  {
    id: "27",
    name: "Faye Astou",
    country: "SN",
    sector: "23 ans",
    image: "/leaders/Astou%20Faye.jpg",
    bioShort:
      "Titulaire d’une licence en gestion de projets, elle s’engage pour l’autonomisation des jeunes et le développement communautaire. Via le Polaris Project (soutenu par l’Ambassade de France), elle a participé à des actions renforçant l’impact social et l’engagement civique...",
    bioFull:
      "Jeune femme sénégalaise passionnée et engagée, titulaire d’une licence en gestion de projets, elle œuvre pour l’autonomisation des jeunes et le développement communautaire. Grâce à son implication dans le Polaris Project, une initiative soutenue par l’Ambassade de France, elle a participé à des actions concrètes renforçant l’impact social et l’engagement civique. Son parcours allie compétences en gestion de projets, leadership et mobilisation communautaire, convaincue que les jeunes, lorsqu’ils sont soutenus et encouragés, peuvent devenir de véritables acteurs de changement.",
  },
  {
    id: "28",
    name: "MANSSY MOAD",
    country: "MA",
    sector: "21 ans",
    image: "/leaders/moad_manssy.png",
    bioShort:
      "Étudiant à l’ENCG Casablanca, il s’illustre dans des initiatives citoyennes et culturelles (Marathon de Casablanca, club d’art El Pincel) et dans le leadership étudiant au sein d’Epik Leaders. Fort d’expériences en communication et gestion de projets, il fédère et forme des jeunes leaders...",
    bioFull:
      "Jeune leader engagé à l’ENCG Casablanca, il s’illustre par son implication dans des initiatives citoyennes et culturelles, comme le 13ᵉ Marathon de Casablanca et le club d’art El Pincel, et par son rôle dans le développement du leadership étudiant au sein d’Epik Leaders. Fort de ses expériences en communication et en gestion de projets, notamment chez Enactus et Arenasia, il combine rigueur, professionnalisme et sens de l’impact social pour fédérer et former une nouvelle génération de leaders responsables, stratégiques et engagés, capables d’agir dans des environnements exigeants et de promouvoir la créativité et la cohésion au sein de la communauté.",
  },
  {
    id: "29",
    name: "Mahamat Ali Fatime zara",
    country: "TD",
    sector: "27 ans",
    image: "/leaders/ibeou_fatime_zara.jpg",
    bioShort:
      "Étudiante en Master Audit et Contrôle de Gestion, elle s’engage pour la paix, l’environnement, le leadership des jeunes et l’autonomisation des femmes au Sahel. Elle a formé et sensibilisé des centaines de jeunes, coordonné des actions VBG, participé au reboisement et accompagné plus de 40 jeunes filles...",
    bioFull:
      "Etudiante en Master Audit et Contrôle de Gestion à l’Université Numérique du Tchad, s’engage pour la paix, l’environnement, le leadership des jeunes et l’autonomisation des femmes au Sahel. À travers ses rôles associatifs, elle a formé et sensibilisé plusieurs centaines de jeunes, coordonné des actions de prévention des violences basées sur le genre, participé à des initiatives de reboisement et accompagné plus de 40 jeunes filles dans le développement de leurs compétences et de leur autonomie économique. Convaincue que paix, environnement et empowerment vont de pair, elle met son énergie au service d’un impact durable et souhaite, à travers EPIK 100, renforcer son leadership et contribuer à des communautés africaines plus inclusives et résilientes.",
  },
  {
    id: "30",
    name: "Reddani Walid",
    country: "MA",
    sector: "21 ans",
    image: "", 
    bioShort:
      "Premier Coordinateur National d’EPIK Leaders Maroc, il a piloté l’expansion du réseau avec la création de 60+ clubs à travers le Maroc. Étudiant en management de projet, triple champion du Maroc en taekwondo et fondateur d’une marque de sport, il œuvre pour l’impact durable de la jeunesse...",
    bioFull:
      "Premier Coordinateur National d’EPIK Leaders Maroc, est un leader marocain engagé dans le développement stratégique de la jeunesse africaine. Étudiant en management de projet à l’ENCG Agadir, il a piloté l’expansion du réseau EPIK Leaders avec la création de plus de 60 clubs à travers le Maroc, contribuant à la formation de milliers de jeunes en leadership et soft skills. Triple champion du Maroc en taekwondo et fondateur d’une marque de sport marocaine, il œuvre pour un impact durable de la jeunesse en Afrique à travers des initiatives panafricaines structurantes.",
  },
  {
    id: "31",
    name: "CHAFIQ Soufia",
    country: "MA",
    sector: "21 ans",
    image: "/leaders/soufia_chafiq.png",
    bioShort:
      "Étudiante en ingénierie informatique, elle est très engagée dans le leadership et la formation des jeunes via plusieurs clubs. Présidente du Club Epik Leaders, cofondatrice de Morocco Future Foundation et conseillère, elle porte des initiatives d’entrepreneuriat et d’innovation pour les jeunes...",
    bioFull:
      "Étudiante en 2ᵉ année d’ingénierie informatique à l’ENSA Marrakech, elle se distingue par un engagement associatif soutenu, orienté vers le leadership, la formation des jeunes et l’impact sociétal. Elle a occupé des responsabilités croissantes au sein de plusieurs clubs – Self-Dev, MUN, Reporting Eye, TASC – et préside le Club Epik Leaders, où elle organise des initiatives et événements à fort impact. Cofondatrice de Morocco Future Foundation et conseillère de la Success Makers Association, elle contribue à des programmes d’entrepreneuriat et d’innovation pour les jeunes. Son parcours reflète une volonté constante de transmettre le savoir, de fédérer les talents et de développer un leadership responsable, fondé sur l’apprentissage, l’esprit critique et l’engagement citoyen.",
  },
  {
    id: "32",
    name: "NDIAYE Alhousseyni Daouda",
    country: "SN",
    sector: "27 ans",
    image: "/leaders/alhousseyni_daouda_ndiaye.jpg",
    bioShort:
      "Volontaire chez CorpsAfrica/Sénégal, il œuvre pour l’autonomisation des communautés rurales via des initiatives en agriculture résiliente et formation, ciblant jeunes et femmes. Coordinateur de Projet (G.E.R Camps Climat), il pilote sensibilisation, reboisement, partenariats et suivi d’impact...",
    bioFull:
      "Son engagement sociétal est guidé par la conviction que le développement de l’Afrique passe par l’autonomisation des communautés rurales. Volontaire chez CorpsAfrica/Sénégal, il a travaillé au plus près des populations pour identifier leurs besoins et mettre en œuvre des initiatives concrètes en agriculture résiliente et en formation, ciblant particulièrement les jeunes et les femmes. Aujourd’hui, en tant que Coordinateur de Projet pour le G.E.R Camps Climat dans la région de Fatick, il pilote des actions de sensibilisation et de reboisement contre le changement climatique, tout en assurant la gestion des partenariats et le suivi de l’impact social, alliant ainsi vision stratégique et action concrète pour un développement durable au Sénégal.",
  },
  {
    id: "33",
    name: "Grema Boulama Mamadou Bagalé",
    country: "NE",
    sector: "34 ans",
    image: "/leaders/grema_bagale.jpg",
    bioShort:
      "Originaire de Diffa, il s’est engagé très tôt pour répondre aux défis sociaux, sécuritaires et environnementaux. Il anime des initiatives locales (paix, cohésion sociale, citoyenneté active, développement durable) et des projets d’agriculture durable et d’innovation sociale, axés sur l’implication des communautés...",
    bioFull:
      "Issu de la région de Diffa, confrontée à de nombreux défis sociaux, sécuritaires et environnementaux, il s’est très tôt engagé comme acteur de transformation durable. Son parcours associatif l’a conduit à travailler au contact des jeunes, des femmes et des populations vulnérables, pour comprendre leurs besoins et co-construire des solutions adaptées. Leader associatif, il a animé des initiatives locales autour de la paix, de la cohésion sociale, de la citoyenneté active et du développement durable, notamment à travers Dynamique Citoyenne Durable (DCD Fahida) et des projets d’agriculture durable et d’innovation sociale. Convaincu que le développement repose sur l’implication active des communautés et une jeunesse formée et responsable, il s’investit dans le renforcement des capacités, le plaidoyer citoyen et l’alignement des actions locales avec les Objectifs de Développement Durable, guidé par la détermination, l’intégrité et le sens du service pour bâtir une société plus juste et résiliente.",
  },
  {
    id: "34",
    name: "Souley Doudou Djamila",
    country: "NE",
    sector: "29 ans",
    image: "/leaders/djamila_souley.jpeg",
    bioShort:
      "En Master de droit humanitaire international, elle s’engage pour la protection des enfants vulnérables. Fondatrice de l’association Taimakon Marayu, elle développe des programmes éducatifs, du mentorat et des partenariats locaux pour offrir éducation, santé et sécurité aux orphelins et enfants défavorisés...",
    bioFull:
      "Elle poursuit un Master en droit humanitaire international et consacre son engagement à la protection et au bien-être des enfants vulnérables. Fondatrice de l’association Taimakon Marayu (Aider les Orphelins), elle œuvre pour offrir aux enfants orphelins et défavorisés un accès à l’éducation, à la santé et à un environnement sécurisant. Convaincu du potentiel de chaque enfant, elle développe des programmes éducatifs, des initiatives de mentorat et des partenariats locaux afin de renforcer l’impact de son association. Son ambition est de créer un modèle durable et reproductible, visant à construire un réseau de soutien pour les enfants vulnérables dans toute la région et à contribuer à un monde plus juste et équitable.",
  },
  {
    id: "35",
    name: "Joel Shukuru Shako",
    country: "CD",
    sector: "29 ans",
    image: "/leaders/shukuru_shako.jpg",
    bioShort:
      "Basé à Kinshasa, il est engagé dans l’autonomisation des jeunes, la paix et l’entrepreneuriat. Il mobilise des jeunes en RDC et en Afrique de l’Est autour de systèmes alimentaires durables, d’initiatives entrepreneuriales et du dialogue communautaire, animant ateliers et projets touchant des centaines de jeunes...",
    bioFull:
      "Âgé de 29 ans et basé à Kinshasa, il est un jeune leader congolais engagé dans l’autonomisation des jeunes, la paix et l’entrepreneuriat. Il mobilise des groupes de jeunes en RDC et en Afrique de l’Est pour promouvoir des systèmes alimentaires durables, développer des initiatives entrepreneuriales et favoriser le dialogue communautaire. Fort d’une expérience associative de plus de cinq ans, il a animé de nombreux ateliers et projets, touchant des centaines de jeunes et inspirant la prochaine génération à transformer les défis en opportunités.",
  },
  {
    id: "36",
    name: "Tarhaindom mbairassem Josué",
    country: "TD",
    sector: "27 ans",
    image: "/leaders/josue_tarhaindom.jpg",
    bioShort:
      "Ingénieur en informatique appliquée, il a formé 4 500+ jeunes et 1 000 femmes en entrepreneuriat, accompagné 500 porteurs de projets et 120 startups au Tchad. Lauréat de distinctions nationales et internationales, il combine formation, mentorat et innovation pour des solutions africaines intégrant enjeux climatiques et socio-économiques...",
    bioFull:
      "Ingénieur en informatique appliquée et leader engagé, il a formé plus de 4 500 jeunes et 1 000 femmes en entrepreneuriat et accompagné 500 porteurs de projets et 120 startups au Tchad, contribuant à l’inclusion économique, au renforcement des capacités et à la création d’emplois. Lauréat de plusieurs distinctions nationales et internationales, il combine formation, mentorat et innovation pour développer des solutions africaines intégrant enjeux climatiques, économiques et sociaux. À travers EPIK 100, il souhaite renforcer les synergies panafricaines et inspirer une jeunesse engagée et compétente.",
  },
  {
    id: "37",
    name: "Akourim Ghizlane",
    country: "MA",
    sector: "27 ans",
    image: "/leaders/ghizlane_akourim.jpeg",
    bioShort:
      "Consultante et formatrice internationale, elle s’engage pour l’autonomisation des jeunes et l’éducation inclusive. Elle conçoit des programmes pour développer leadership, compétences et impact social, collabore avec des organisations comme l’OIT et SOS Villages d’Enfants International, et croit au mentorat comme levier de transformation...",
    bioFull:
      "Consultante et formatrice internationale engagée dans l’autonomisation des jeunes et l’éducation inclusive. Elle conçoit des programmes innovants pour développer le leadership, les compétences et l’impact social, en particulier pour les jeunes vulnérables. Elle a collaboré avec des organisations comme l’OIT et SOS Villages d’Enfants International, en Afrique et au-delà, et croit que l’éducation et le mentorat sont clés pour transformer les communautés.",
  },
  {
    id: "38",
    name: "Denenodji Phoebe",
    country: "TD",
    sector: "25 ans",
    image: "/leaders/phoebe_denenodji.jpg",
    bioShort:
      "Étudiante en médecine et obstétricienne en formation, fondatrice de l’APSVT et de Phoebe SantéEthique. Elle œuvre pour l’éducation sanitaire, l’innovation et l’autonomisation des femmes au Tchad, formant des agents de santé villageois et menant des actions de santé digitale et de lutte contre les VBG...",
    bioFull:
      "Etudiante en médecine et obstétricienne en formation, est fondatrice de l’APSVT et de Phoebe SantéEthique. Elle œuvre pour l’éducation sanitaire, l’innovation et l’autonomisation des femmes dans les communautés rurales du Tchad. Elle a formé des agents de santé villageois, sensibilisé des centaines de jeunes et femmes, et développé des initiatives en santé digitale et en lutte contre les violences basées sur le genre. Son engagement vise à transformer les obstacles en opportunités et à inspirer la jeunesse africaine.",
  },
  {
    id: "39",
    name: "Seck Sokhna Oumou",
    country: "SN",
    sector: "30 ans",
    image: "/leaders/sokhna_oumou.jpeg",
    bioShort:
      "Elle utilise les médias et la communication pour un impact social positif à Dakar. À travers des collaborations avec plusieurs médias, elle sensibilise sur des enjeux sociaux et éducatifs et soutient des initiatives communautaires pour l’autonomisation des jeunes et la cohésion sociale...",
    bioFull:
      "Elle utilise les médias et la communication pour un impact social positif. À travers ses collaborations avec TFM, Actu24.net, Info24sn.com et Mouslihtv.com, elle sensibilise le public à des enjeux sociaux et éducatifs à Dakar. Engagée dans des initiatives communautaires, elle soutient l’autonomisation des jeunes et la cohésion sociale, en mettant ses compétences au service de projets à fort impact.",
  },
  {
    id: "40",
    name: "Nachid Aymen",
    country: "MA",
    sector: "22 ans",
    image: "/leaders/aymen_nachid.jpg",
    bioShort:
      "Jeune leader passionné par l’innovation et l’impact communautaire, il s’implique dans des projets associatifs pour soutenir la jeunesse, favoriser l’éducation et promouvoir l’accès aux technologies. Il développe leadership, organisation et esprit d’équipe, convaincu que l’engagement citoyen transforme durablement...",
    bioFull:
      "Jeune leader passionné par l’innovation, le développement communautaire et l’impact positif. Il s’implique activement dans des projets associatifs visant à soutenir la jeunesse, favoriser l’éducation et promouvoir l’accès aux technologies. Son engagement concret améliore le quotidien de sa communauté tout en inspirant d’autres jeunes à agir. À travers ces initiatives, il développe leadership, organisation et esprit d’équipe, convaincu que l’engagement citoyen est un levier puissant pour transformer l’Afrique.",
  },
  {
    id: "41",
    name: "ABOUE Lizette Onesia Majoie",
    country: "BJ",
    sector: "24 ans",
    image: "/leaders/Lizette%20ABOUE.jpg",
    bioShort:
      "Engagée depuis plus de cinq ans pour l’autonomisation des jeunes filles, elle agit via l’éducation, la cybersécurité et l’entrepreneuriat. Fondatrice de CyberVoix for Peace (300+ filles formées) et de Young Girl’s Entrepreneurship (150 projets accompagnés), elle coordonne aussi l’OJCS et SafeNet Opportunities...",
    bioFull:
      "Elle s’engage depuis plus de cinq ans pour l’autonomisation des jeunes, en particulier des filles, à travers l’éducation, la cybersécurité et l’entrepreneuriat. Elle est fondatrice de CyberVoix for Peace, qui forme 300+ jeunes filles aux compétences numériques et au leadership, et de Young Girl’s Entrepreneurship, accompagnant 150 jeunes femmes dans le développement de projets générateurs de revenus.\nElle coordonne également l’Organisation des Jeunes pour un Cyberspace Sûr (OJCS), touchant plus de 30 000 jeunes pour promouvoir l’usage responsable des technologies, et a lancé SafeNet Opportunities pour faciliter l’accès équitable aux opportunités numériques. Son action est reconnue nationalement et internationalement et s’inscrit dans une vision panafricaine de jeunesse responsable, engagée et innovante.",
  },
  {
    id: "42",
    name: "NANA AUBRY JORDAN",
    country: "CM",
    sector: "26 ans",
    image: "/leaders/Aubry%20jordan%20Nana.jpg",
    bioShort:
      "Au sein du Club Génie des Procédés, il a développé son leadership via des responsabilités successives. Vice-Président puis Responsable des affaires académiques, il a coordonné des activités, animé l’esprit d’équipe et organisé des initiatives pédagogiques pour renforcer les compétences des étudiants...",
    bioFull:
      "Au sein du Club Génie des Procédés, il a développé son leadership et son engagement associatif à travers des responsabilités successives. En tant que Vice-Président puis Responsable des affaires académiques, il a coordonné des activités, animé l’esprit d’équipe et organisé des initiatives pédagogiques pour renforcer les compétences scientifiques et professionnelles des étudiants. Son parcours reflète son esprit d’initiative, sa rigueur et sa volonté de contribuer à un impact positif au service de la communauté étudiante.",
  },
  {
    id: "43",
    name: "CONDE Abdoulaye",
    country: "GN",
    sector: "29 ans",
    image: "/leaders/Abdoulaye_conde.jpg",
    bioShort:
      "Convaincu que la jeunesse est le moteur du rayonnement africain, il œuvre à mobiliser, former et autonomiser les jeunes. Secrétaire Général Continental adjoint de la CESA et membre fondatrice de l’OIP, il accompagne avec EPIK Leaders en Guinée le leadership et l’innovation pour une Afrique souveraine...",
    bioFull:
      "Il croit fermement que la jeunesse africaine est le moteur du rayonnement du continent. Secrétaire Général Continental adjoint de la CESA et membre fondatrice de l’OIP, il œuvre à mobiliser, former et autonomiser les jeunes africains. Aujourd’hui, avec EPIK LEADERS en Guinée, il accompagne le développement du leadership et de l’innovation pour bâtir une Afrique confiante, créative et souveraine.",
  },
  {
    id: "44",
    name: "Maésarath RAOUFOU",
    country: "BJ",
    sector: "21 ans",
    image: "/leaders/ma%C3%A9sarath_raoufou.jpg",
    bioShort:
      "Depuis ses 19 ans, elle s’engage pour le leadership féminin, la participation politique et l’éducation civique. Communication Manager chez Women and Power Association, elle coordonne des initiatives citoyennes et panafricaines (Conférence des Forces Vives, réseau Uchumba) et a fondé Women in Anthesis...",
    bioFull:
      "Depuis ses 19 ans, elle s’engage pour le leadership féminin, la participation politique et l’éducation civique. Communication Manager au sein de Women and Power Association, elle conçoit des stratégies de plaidoyer pour valoriser la place des femmes en politique. Elle coordonne également des initiatives citoyennes et panafricaines, comme la « Conférence des Forces Vives de la Nation Autrement » et le réseau Uchumba, visant à renforcer la citoyenneté et le leadership des jeunes. Fondatrice de Women in Anthesis, elle accompagne les jeunes filles à gagner en confiance, en visibilité et en leadership. Son engagement, reconnu par la Friedrich Ebert Stiftung, illustre sa conviction que l’avenir démocratique de l’Afrique dépend de femmes et de jeunes formés, organisés et prêts à agir.",
  },
  {
    id: "45",
    name: "Kourouma Mohamed",
    country: "GN",
    sector: "26 ans",
    image: "/leaders/mohamed_kourouma.png",
    bioShort:
      "Engagé auprès de l’ONG SANYA SERVICE, il contribue à la collecte et gestion des déchets pour protéger l’environnement et promouvoir des pratiques durables. Avec l’appui d’étudiantes motivées, il participe à la sensibilisation, aux campagnes de ramassage et à la mise en œuvre de projets environnementaux concrets...",
    bioFull:
      "Il est investi auprès de LONG SANYA SERVICE, une organisation non gouvernementale spécialisée dans la collecte et la gestion des déchets, engagée pour la protection de l’environnement et la promotion de pratiques durables. Dans le cadre de ses activités, l’organisation collabore avec des étudiantes motivées, qui apportent leur énergie, leurs compétences et leur créativité pour sensibiliser les communautés, organiser des campagnes de ramassage et contribuer à la mise en œuvre de projets environnementaux concrets.",
  },
  {
    id: "46",
    name: "FATON Mahoukpego Henoc",
    country: "BJ",
    sector: "22 ans",
    image: "/leaders/h%C3%A9noc_faton.jpg",
    bioShort:
      "Étudiante en Master Droits Humains et Démocratie, elle agit pour la protection des droits fondamentaux et l’égalité de genre au Bénin. Elle collabore avec des ONG, participe à des campagnes contre les VBG et l’autonomisation des jeunes filles, coordonne des projets communautaires et porte du plaidoyer...",
    bioFull:
      "Étudiante en Master Droits Humains et Démocratie, elle s’engage activement pour la protection des droits fondamentaux et l’égalité de genre au Bénin. Depuis plusieurs années, elle collabore avec des ONG locales et internationales, participe à des campagnes de sensibilisation sur les violences basées sur le genre et l’autonomisation des jeunes filles, coordonne des projets communautaires et œuvre pour la promotion de la participation citoyenne et la défense des droits humains. Elle combine formation académique, action terrain et plaidoyer pour transformer concrètement sa communauté et renforcer l’impact social des initiatives locales.",
  },
  {
    id: "47",
    name: "Mouhamed Ben Omar DIOUF",
    country: "SN",
    sector: "29 ans",
    image: "/leaders/ben_omar_diouf.png",
    bioShort:
      "Engagé dans des réseaux jeunesse et plateformes panafricaines, il mène des initiatives pour autonomiser les jeunes et promouvoir le développement durable. Il a collaboré avec des leaders de 30+ pays sur le climat, la paix et l’inclusion sociale, et traduit les enjeux globaux en solutions locales (agriculture durable, énergie renouvelable, systèmes alimentaires résilients)...",
    bioFull:
      "Il s’engage activement dans des initiatives associatives et communautaires visant à autonomiser les jeunes et promouvoir le développement durable à l’échelle locale, nationale et internationale. Impliqué dans des réseaux jeunesse, des associations et des plateformes panafricaines, il a collaboré avec des leaders de plus de 30 pays sur des thématiques telles que le climat, la paix et l’inclusion sociale. Son action combine plaidoyer, sensibilisation et projets concrets en agriculture durable, énergie renouvelable et systèmes alimentaires résilients, traduisant les enjeux globaux en solutions locales et amplifiant la voix de la jeunesse pour un avenir plus juste et durable.",
  },
  {
    id: "48",
    name: "Barongozi Cédric",
    country: "CD",
    sector: "23 ans",
    image: "/leaders/C%C3%A9dric%20Barongozi.jpg",
    bioShort:
      "Étudiant en 6ᵉ année de médecine à Bukavu, il a fondé le Parlement de Bukavu Health Data Hub pour promouvoir le débat citoyen et l’usage des données de santé. Point focal RDC dans plusieurs réseaux, il coordonne des séminaires, fait du tutorat bénévole et s’engage comme volontaire en ligne et au sein de U-Report UNICEF RDC...",
    bioFull:
      "Étudiant en 6ᵉ année de médecine à Bukavu, il est président fondateur du Parlement de Bukavu Health Data Hub, promouvant le débat citoyen et l’utilisation des données de santé. Point focal national de la RDC au RAEC et point focal adjoint d’Afri Youth Hub RDC, il soutient l’innovation sociale et la coopération entre jeunes leaders. Il coordonne les séminaires du club des étudiants en médecine et accompagne les étudiants en tutorat bénévole. Volontaire en ligne pour les Nations Unies et membre actif de U-Report UNICEF RDC, il œuvre pour une jeunesse africaine responsable et engagée.",
  },
  {
    id: "49",
    name: "Bosey Blanchard",
    country: "CD",
    sector: "27 ans",
    image: "/leaders/Blanchard%20Bosey.jpg",
    bioShort:
      "Engagé pour les jeunes et les communautés en Afrique, il a animé la sensibilisation à l’IA (Youth-Talks 2023) et créé le blog “Un avenir vert”. Coordinateur de Green for Humanitarian and Development, il a lancé Eleza Green pour former et mobiliser les jeunes sur l’action climatique...",
    bioFull:
      "Depuis plusieurs années, il s’engage pour les jeunes et les communautés à travers l’Afrique. Il a animé la campagne de sensibilisation à l’IA lors de Youth-Talks 2023 et créé le blog “Un avenir vert” sur Mondoblog pour partager des solutions concrètes sur le climat et le développement durable, ce qui lui a valu d’être reconnue parmi les 100 Young Hopes de RDC et aux Africans Raising Activism Awards. Coordinateur de Green for Humanitarian and Development, il a organisé deux activités nationales pour COP30 et lancé Eleza Green pour former et mobiliser les jeunes sur l’action climatique et le leadership durable. Convaincu que chaque action compte, il œuvre pour inspirer et transformer sa communauté.",
  },
  {
    id: "50",
    name: "baiche hiba",
    country: "MA",
    sector: "20 ans",
    image: "/leaders/hiba_biache.jpeg",
    bioShort:
      "Engagée activement dans le milieu associatif depuis plusieurs années, elle a renforcé ses compétences en leadership, organisation et travail d’équipe. Elle a contribué à des projets significatifs dans sa communauté et poursuit sa volonté de créer un impact positif...",
    bioFull:
      "Elle s’engage activement dans le milieu associatif depuis plusieurs années. Ces expériences ont renforcé ses compétences en leadership, organisation et travail d’équipe, tout en lui permettant de contribuer à des projets significatifs dans sa communauté. Cet engagement fait désormais partie intégrante de son identité et continue de guider sa volonté de créer un impact positif autour d’elle.",
  },
  {
    id: "51",
    name: "Yvette Jolivia KEMEBOUNE NKOMBE",
    country: "GA",
    sector: "20 ans",
    image: "/leaders/jolivia_nkombe.jpeg",
    bioShort:
      "Étudiante en droit des affaires, elle s’engage dans le leadership et l’action associative depuis 2021 (responsable com, panels, événements). En 2024, elle a lancé un service de personal shopper international et développé ses compétences en rédaction et gestion de projets. Depuis 2025, elle préside le Club EPIK Leaders...",
    bioFull:
      "Étudiante en Licence 3 de Droit des Affaires à l’Université Internationale de Casablanca, elle s’engage depuis plusieurs années dans le leadership et l’action associative. Elle a débuté en 2021 comme Responsable Communication au Gabon, puis a animé des panels et événements académiques à Casablanca.\nEn 2024, elle a lancé un service de personal shopper international et développé ses compétences en rédaction et gestion de projets. Depuis 2025, elle est Présidente du Club EPIK Leaders, où elle coordonne les activités, forme de jeunes leaders et participe au développement de projets innovants.",
  },
  {
    id: "52",
    name: "DANWE AMOUGOU",
    country: "TD",
    sector: "25 ans",
    image: "/leaders/Amougou%20Danw%C3%A9.jpg",
    bioShort:
      "Étudiant en Master 2 à l’IRIC, il se consacre à l’éducation, la citoyenneté et l’autonomisation des jeunes. Vice-président du Chapitre Tchad de Right for Education Africa, il coordonne des projets éducatifs et s’illustre aussi par l’écriture et le journalisme, distingué par plusieurs prix...",
    bioFull:
      "Étudiant en Master 2 à l’Institut des Relations Internationales du Cameroun (IRIC), il se consacre à l’éducation, à la citoyenneté et à l’autonomisation des jeunes en Afrique. Vice-président du Chapitre Tchad de Right for Education Africa, il conçoit et coordonne des projets éducatifs visant à renforcer l’esprit critique et l’engagement citoyen des jeunes. Passionné par l’écriture et le journalisme, il aborde des thématiques telles que la jeunesse, l’éthique et l’exil, et a été distingué par plusieurs prix internationaux, dont l’Anthologie de contes africains et afro-descendants (NJAAY Sénégal) et le concours APCEN 02. Son parcours allie action de terrain, production intellectuelle et leadership, reflétant sa volonté de contribuer à une jeunesse africaine informée, engagée et capable de façonner son propre avenir.",
  },
  {
    id: "53",
    name: "Diallo Abdoul Goudoussi",
    country: "GN",
    sector: "24 ans",
    image: "/leaders/abdoul_goudoussy_diallo.jpg",
    bioShort:
      "Engagé dès le collège, membre actif de PACTES, il participe à des projets en éducation, environnement et autonomisation des jeunes. Il a représenté la Guinée à la Youth Academy sur l’Environnement à Nairobi et transforme cette expérience en actions locales pour le développement durable et la résilience climatique...",
    bioFull:
      "Il s’est engagé dès le collège dans la vie associative, motivé par le désir de contribuer au développement de sa communauté en Guinée. Membre actif de PACTES (Des Paroles et Des Actes), il participe à des projets concrets en éducation, environnement et autonomisation des jeunes.\nIl a représenté la Guinée à la Youth Academy sur l’Environnement à Nairobi, renforçant ses compétences en leadership et promouvant des solutions africaines aux défis du continent. De retour, il transforme cette expérience en actions locales, consolidant des projets communautaires axés sur le développement durable et la résilience climatique.",
  },
  {
    id: "54",
    name: "BASSAN ADÉWOLÉ PIERRE",
    country: "TG",
    sector: "24 ans",
    image: "/leaders/Pierre%20BASSAN.png",
    bioShort:
      "Doctorant en médecine et président d’ACTION SANTÉ ÉDUCATION, il mène des projets en santé, éducation et insertion des jeunes. Il a coordonné des initiatives (STOP HÉPATITE B, prévention des MNT, hygiène menstruelle) touchant des milliers de jeunes, et renforce la transparence via la gouvernance ouverte...",
    bioFull:
      "Doctorant en médecine, il est président d’ACTION SANTÉ ÉDUCATION, où il mène des projets en santé, éducation et insertion des jeunes. Il a coordonné des initiatives comme STOP HÉPATITE B, la prévention des maladies non transmissibles et la gestion de l’hygiène menstruelle en milieu scolaire, touchant des milliers de jeunes. Certifié en gouvernance ouverte, il renforce la transparence et l’efficacité des actions citoyennes. Son parcours combine expertise médicale, innovation sociale et engagement pour le développement durable.",
  },
  {
    id: "55",
    name: "Bounaji Khadija",
    country: "MA",
    sector: "21 ans",
    image: "/leaders/khadija_bounaji.jpeg",
    bioShort:
      "Ingénieure Data & IA, elle voit la technologie comme un levier d’émancipation de la jeunesse africaine. Elle a conçu des outils d’analyse de données à la BCP et, dans l’associatif (Steps Into Space, EPIK Leaders), organise ateliers scientifiques, festivals éducatifs et projets à impact. Son projet d’autonomisation digitale a été reconnu à l’INSPAIRX Youth Africa Summit 2025...",
    bioFull:
      "Ingénieure en Data & Intelligence Artificielle à l’EMSI, elle considère la technologie comme un levier clé pour l’émancipation de la jeunesse africaine. Elle combine expertise technique et action de terrain : stagiaire Data Analyst à la Banque Centrale Populaire, elle a conçu des outils d’analyse de données améliorant la prise de décision. Dans l’associatif, elle est membre active de Steps Into Space et EPIK Leaders, où elle organise des ateliers scientifiques, des festivals éducatifs et des projets à impact social. Engagée pour l’éducation et l’égalité des chances, elle soutient également l’apprentissage des enfants via le bénévolat et le tutorat. Son leadership et son projet d’autonomisation digitale ont été reconnus au INSPAIRX Youth Africa Summit 2025, confirmant son potentiel à transformer ses initiatives locales en actions à l’échelle panafricaine.",
  },
  {
    id: "56",
    name: "GUEDZE Komi Mawuko Guy-charles",
    country: "TG",
    sector: "19 ans",
    image: "/leaders/Guy-charles%20GUEDZE.jpg",
    bioShort:
      "Engagé dans des initiatives communautaires pour les droits humains et le développement local, il organise des sensibilisations dans les écoles et espaces publics. Il participe à l’aménagement d’espaces verts, la réhabilitation d’écoles, et coordonne la collecte de pétitions sur le terrain et en ligne pour amplifier leur impact...",
    bioFull:
      "Il est activement engagé dans des initiatives communautaires et associatives visant à promouvoir les droits humains et le développement local. Il organise des séances de sensibilisation sur les questions de droits humains dans les écoles et les espaces publics, participe à l’aménagement d’espaces verts et à la réhabilitation de bâtiments scolaires dans les villages, et coordonne la collecte de pétitions sur le terrain ainsi que leur mise en ligne pour amplifier leur impact. Son engagement illustre sa volonté de transformer concrètement les réalités locales et de renforcer la participation citoyenne.",
  },
  {
    id: "57",
    name: "KISINDJA JAMES",
    country: "CD",
    sector: "22 ans",
    image: "/leaders/james_mayza.jpg",
    bioShort:
      "Engagé pour améliorer l’accès à l’information et aux services de santé sexuelle et reproductive des jeunes en RDC, il coordonne l’ONG Ailes du Cœur au niveau provincial. Il a mené des campagnes dans écoles, marchés et quartiers (VIH/SIDA, planification familiale, dépistage) et des mobilisations citoyennes via pétitions terrain et en ligne...",
    bioFull:
      "Il s’engage depuis plusieurs années pour améliorer l’accès à l’information et aux services de santé sexuelle et reproductive (DSSR) des jeunes en RDC, notamment dans des provinces comme le Maniema. En tant que coordonnateur provinciale de l’ONG Ailes du Cœur, il a dirigé des campagnes communautaires et des séances de sensibilisation dans les écoles, les marchés et les quartiers, abordant des sujets tels que le VIH/SIDA, la planification familiale et les dépistages volontaires. Il a également conduit des initiatives de mobilisation citoyenne, collectant des pétitions sur le terrain et en ligne pour défendre les droits des jeunes. Par ses actions, il cherche à autonomiser les jeunes, leur donner les moyens de faire des choix éclairés et contribuer à la formation d’une génération responsable, consciente et libre.",
  },
  {
    id: "58",
    name: "Ali Ousman Hafiz",
    country: "TD",
    sector: "27 ans",
    image: "/leaders/Hafiz%20Ali%20Ousman.jpeg",
    bioShort:
      "Spécialisé en droit des affaires et gouvernance des ressources extractives, il est engagé pour la transparence et la participation des communautés. Il a coordonné des projets touchant 3 000+ jeunes sur l’accès aux données extractives et les droits humains, et organisé le concours national en droit OHADA. Passionné d’art oratoire, il a remporté plusieurs distinctions...",
    bioFull:
      "Spécialisé en droit des affaires et gouvernance des ressources extractives. Il s’illustre par son engagement citoyen et associatif, notamment comme président du club OHADA-UGB, secrétaire national de la Fédération des clubs OHADA du Sénégal, et assistant programme à NRGI Sénégal, où il promeut la transparence et la participation des communautés dans les projets extractifs.\nIl a coordonné des projets impactant plus de 3 000 jeunes sur l’accès aux données extractives et la sensibilisation aux droits humains, et organisé le concours national de l’élite en droit OHADA à Saint-Louis. Passionné d’art oratoire et de débats, il a remporté plusieurs distinctions nationales et internationales.",
  },
  {
    id: "59",
    name: "Benoudjoum Nekillamian Williams",
    country: "TD",
    sector: "26 ans",
    image: "/leaders/williams%20nekillamian.jpg",
    bioShort:
      "Fondateur et dirigeant de la Salama Peace Initiative, il promeut le dialogue intergénérationnel, la participation citoyenne et la culture de la paix au Tchad. Il mobilise jeunes, femmes et leaders communautaires via des campagnes et actions de terrain pour transformer les conflits en cohésion sociale...",
    bioFull:
      "Confronté tôt aux défis de la paix dans son pays, il a fondé et dirige aujourd’hui la Salama Peace Initiative, promouvant le dialogue intergénérationnel, la participation citoyenne et la culture de la paix. Par ses campagnes de sensibilisation et ses actions de terrain, il mobilise jeunes, femmes et leaders communautaires pour transformer les conflits en cohésion sociale. Convaincu que le changement se construit collectivement, il œuvre pour donner voix à la jeunesse tchadienne résiliente et contribuer à une Afrique de paix, de dignité et d’action.",
  },
  {
    id: "60",
    name: "GAYE Cheikh Sydia",
    country: "SN",
    sector: "25 ans",
    image: "/leaders/Cheikh%20Sydia%20Gaye.jpeg",
    bioShort:
      "Il crée des espaces crédibles de représentation pour la jeunesse : fondateur du Club de Culture Générale (CCG) et de sa Fédération nationale, il promeut l’excellence intellectuelle, le mentorat et l’engagement citoyen. Il est aussi VP du Club des Élites Fiscalistes et président des Jeunes Diplomates Africains (20+ pays)...",
    bioFull:
      "Il œuvre pour donner à la jeunesse des espaces crédibles de représentation et d’action. Fondateur du Club de Culture Générale (CCG) et de sa Fédération nationale, il promeut l’excellence intellectuelle, le mentorat et l’engagement citoyen auprès d’étudiants et lycéens.\nVice-président du Club des Élites Fiscalistes et président des Jeunes Diplomates Africains (JDA), réseau actif dans plus de 20 pays, il contribue à renforcer la participation des jeunes dans les débats diplomatiques, stratégiques et institutionnels.",
  },
  {
    id: "61",
    name: "Madjissem Ngarona Harmonie",
    country: "TD",
    sector: "22 ans",
    image: "/leaders/madjissem_ngarona_harmonie.jpg",
    bioShort:
      "Étudiante en génie informatique, elle s’engage dans l’innovation sociale et le développement communautaire. Elle participe à des initiatives jeunesse axées sur le leadership, la technologie et la création de solutions durables adaptées aux réalités locales, notamment sur le climat et le numérique...",
    bioFull:
      "Etudiante en génie informatique, elle s’engage dans l’innovation sociale et le développement communautaire. Son parcours associatif se distingue par une participation active à des initiatives de jeunesse axées sur le leadership, la technologie et la création de solutions durables adaptées aux réalités locales, notamment dans les domaines du climat et du numérique.",
  },
  {
    id: "62",
    name: "Ndoye Diakhere",
    country: "SN",
    sector: "26 ans",
    image: "/leaders/Diakhere%20Ndoye.jpeg",
    bioShort:
      "Engagée dans la mobilisation des jeunes, elle a été Secrétaire générale de l’Association des élèves et étudiants de Yoff et Vice-coordonnatrice dans des initiatives locales. Militante DSSR, elle a participé au Dialogue régional des jeunes au Bénin. Politiste de formation, elle relie analyse et action pour un développement inclusif...",
    bioFull:
      "Son parcours associatif est profondément ancré dans l’engagement communautaire et la mobilisation des jeunes. Elle a été Secrétaire générale de l’Association des élèves et étudiants de Yoff et Vice-coordonnatrice au sein d’initiatives locales, contribuant à structurer les actions associatives et à renforcer la participation citoyenne des jeunes.\nMilitante pour la santé sexuelle et reproductive des jeunes, elle a participé au Dialogue régional des jeunes au Bénin, échangeant avec des leaders africains sur les droits en santé et les politiques publiques inclusives. Politiste de formation, elle relie analyse théorique et action concrète, convaincue que l’éducation, le dialogue et l’implication citoyenne sont des leviers essentiels pour un développement durable et inclusif.",
  },
  {
    id: "63",
    name: "Fall Serigne saliou",
    country: "SN",
    sector: "25 ans",
    image: "/leaders/Serigne%20Saliou%20Fall.jpeg",
    bioShort:
      "Issu d’un parcours associatif solide, il s’engage autour du leadership, de la responsabilité et du service à la communauté. Il contribue à la mobilisation collective, à la défense des intérêts communs et à la promotion du développement social, en portant des initiatives inclusives favorisant dialogue et cohésion sociale...",
    bioFull:
      "Issu d’un solide parcours associatif, il s’engage autour des valeurs de leadership, de responsabilité et de service à la communauté. À travers son implication dans des organisations estudiantines et communautaires, il contribue à la mobilisation collective, à la défense des intérêts communs et à la promotion du développement social.\nAnimé par le sens du devoir et de l’intérêt général, il œuvre pour des initiatives inclusives favorisant dialogue, solidarité et cohésion sociale, convaincu que l’engagement citoyen est un moteur fondamental du progrès.",
  },
  {
    id: "64",
    name: "HOUEZE Isidore",
    country: "BJ",
    sector: "19 ans",
    image: "/leaders/Isidore%20Hou%C3%A9z%C3%A9.jpg",
    bioShort:
      "Jeune acteur culturel, il voit la culture et le cinéma comme leviers de transformation sociale. Étudiant en transport/logistique et en sociologie-anthropologie, il a fondé IDH CINÉ et le concours ICA pour promouvoir créativité et leadership des jeunes femmes africaines, créant des espaces de formation et de dialogue interculturel...",
    bioFull:
      "Jeune acteur culturel engagé, il croit que la culture, le cinéma et la créativité sont des leviers puissants de transformation sociale en Afrique. Étudiant en Transport et Logistique à l’ENEAM et en Sociologie–Anthropologie à l’Université d’Abomey-Calavi, il développe une approche structurelle et humaine de l’engagement sociétal.\nIl a fondé IDH CINÉ, une plateforme valorisant le cinéma et la culture africaine, ainsi que le concours INNOVATIONS CULTURELLES DES AMAZONES (ICA), visant à promouvoir le leadership et la créativité des jeunes femmes africaines. À travers ces initiatives, il a créé des espaces de formation, de visibilité et de dialogue interculturel, impactant directement des centaines de jeunes.",
  },
  {
    id: "65",
    name: "Kandé Youssouph",
    country: "SN",
    sector: "30 ans",
    image: "", // ⚠️ chemin image manquant dans ton tableau
    bioShort:
      "Il œuvre pour l’employabilité des jeunes au Sénégal en déployant des programmes de renforcement de compétences, des formations techniques et professionnelles et un accompagnement à l’entrepreneuriat. Son objectif : aider les jeunes à comprendre le marché du travail et saisir des opportunités concrètes pour devenir autonomes...",
    bioFull:
      "Il œuvre activement pour l’employabilité des jeunes au Sénégal, en mettant en place des programmes de renforcement de compétences, des formations techniques et professionnelles, ainsi que des initiatives d’accompagnement à l’entrepreneuriat. Son objectif est de permettre aux jeunes de mieux comprendre le marché du travail, de développer leurs aptitudes et de saisir des opportunités concrètes, afin de devenir des acteurs autonomes et responsables du développement économique et social de leur pays.",
  },
  {
    id: "66",
    name: "AYO ABOSSOLO Paule Mazarine",
    country: "CM",
    sector: "23 ans",
    image: "/leaders/Paule%20Mazarine.jpeg",
    bioShort:
      "Titulaire d’un master en droit de l’Homme et action humanitaire, elle s’engage pour la protection de l’enfance et le développement communautaire. Chargée des bénévoles chez Afrique Sans Frontières, elle coordonne des campagnes, ateliers éducatifs et formations de bénévoles. Elle développe aussi des projets de communication en community management au service de l’impact social...",
    bioFull:
      "Titulaire d’un master en Droit de l’Homme et Action Humanitaire, il s'engage activement pour la protection de l’enfance et le développement communautaire. Depuis 2024, en tant que Chargée des Bénévoles et des Activités chez Afrique Sans Frontières, il a coordonné des campagnes de sensibilisation, animé des ateliers éducatifs et formé des bénévoles pour renforcer l’inclusion et l’accès à l’éducation. Parallèlement, il développe des projets de communication pour diverses entreprises, mettant mes compétences en community management au service de l’impact social et de l’engagement citoyen, tout en favorisant le dialogue interculturel.",
  },
  {
    id: "67",
    name: "Bald2 Issa",
    country: "SN",
    sector: "28 ans",
    image: "/leaders/Issa%20Balde.jpg",
    bioShort:
      "Fondateur de l’Association Les Jeunes Bâtisseurs de Mballocounda (2020), il mobilise 115+ jeunes autour de projets concrets de développement. Son association a réhabilité l’école locale, fourni médicaments et matériel au poste de santé, mené des sensibilisations auprès des femmes enceintes et des campagnes de reboisement avec le PNUD Sénégal...",
    bioFull:
      "Fondateur de l’Association Les Jeunes Bâtisseurs de Mballocounda en mai 2020, il mobilise plus de 115 jeunes issus de Mballocounda et des villages voisins autour de projets concrets de développement communautaire. Son association a notamment contribué à la réhabilitation de l’école élémentaire locale, à la fourniture de médicaments et de matériel bureautique au poste de santé, à la sensibilisation des femmes enceintes et à des campagnes de reboisement en collaboration avec le PNUD Sénégal.",
  },
  {
    id: "68",
    name: "Nuhu Mahmoud Buhari",
    country: "NG",
    sector: "23 ans",
    image: "/leaders/buhari%20datti.jpeg",
    bioShort:
      "Jeune leader étudiant engagé pour l’autonomisation des jeunes et la représentation de leurs voix. Il impulse des initiatives pour le bien-être étudiant, l’éducation et le développement communautaire, et mobilise ses pairs avec de solides compétences en communication et leadership, en défendant l’inclusion et l’excellence...",
    bioFull:
      "Jeune leader étudiant et militant engagé pour la jeunesse, il est passionné par l’autonomisation des jeunes et la représentation de leurs voix. À travers des initiatives favorisant le bien-être étudiant, l’éducation et le développement communautaire, il impulse un changement positif. Doté de solides compétences en communication et en leadership, il mobilise et inspire ses pairs, défend les droits des étudiants et promeut l’inclusion et l’excellence, avec pour objectif de créer un impact durable et un avenir meilleur pour tous.",
  },
  {
    id: "69",
    name: "YACOUBA SALOU Abdoul Nasser",
    country: "NE",
    sector: "28 ans",
    image: "/leaders/YACOUBA%20SALOU%20Abdoul%20Nasser.jpg",
    bioShort:
      "Depuis 2015, il s’engage via le scoutisme et plusieurs associations au Niger. Reconnu par l’UNICEF comme Ambassadeur de paix au Sahel, il œuvre pour la paix et le dialogue et transforme les défis locaux en actions concrètes au service de sa communauté...",
    bioFull:
      "Depuis 2015, il met son énergie et ses compétences au service de sa communauté à travers le scoutisme et plusieurs associations. Son engagement pour la paix et le dialogue lui a valu d’être reconnu par l’UNICEF comme Ambassadeur de paix au Sahel, illustrant sa volonté de transformer les défis locaux en actions concrètes.",
  },
  {
    id: "70",
    name: "Sudi Merci Philémon",
    country: "CD",
    sector: "22 ans",
    image: "/leaders/Sudi%20Merci%20Phil%C3%A9mon.jpg",
    bioShort:
      "Jeune juriste engagé, il promeut la justice sociale, les droits humains et le leadership jeunesse. Directeur national de FALAS RDC et Jeune Leader Parlementaire à l’UA, il coordonne des initiatives d’éducation juridique, de participation citoyenne et de protection des femmes et filles...",
    bioFull:
      "Jeune juriste africain engagé, promeut la justice sociale, les droits humains et le leadership jeunesse. Directeur national de FALAS RDC et Jeune Leader Parlementaire à l’UA, il coordonne des initiatives pour l’éducation juridique, la participation citoyenne et la protection des femmes et filles. Son action allie engagement concret, impact collectif et inspiration des jeunes Africains à transformer leurs communautés.",
  },
  {
    id: "71",
    name: "Niambaly Pape Cheikh Ndiaye",
    country: "SN",
    sector: "25 ans",
    image: "/leaders/Sophietou%20Ndour.jpg",
    bioShort:
      "Jeune leader engagé, guidé par la solidarité et le service à la communauté, il œuvre via des actions associatives et initiatives locales pour l’autonomisation des jeunes, la cohésion sociale et l’impact positif. Il défend l’idée que le changement durable naît de l’entraide et de la coopération entre communautés...",
    bioFull:
      "Jeune leader africain engagé, dont le parcours est guidé par les valeurs de solidarité et de service à la communauté. À travers ses actions associatives et initiatives locales, il œuvre pour l’autonomisation des jeunes, la promotion de la cohésion sociale et l’impact positif sur son environnement. Son engagement reflète sa conviction que le changement durable naît de l’entraide et de la coopération entre individus et communautés.",
  },
  {
    id: "72",
    name: "SOME Julia",
    country: "BF",
    sector: "22 ans",
    image: "/leaders/Julia%20Some.jpeg",
    bioShort:
      "Engagée dans la citoyenneté active, le leadership des jeunes et la protection de l’environnement, elle a représenté son pays à l’international, notamment au Sénégal (Citizen Mobility and Movement Learning – Y EN A MARRE). Elle a aussi participé à des programmes internationaux d’innovation sociale et de coopération panafricaine, alliant mobilisation des jeunes et sensibilisation écologique...",
    bioFull:
      "Engagée dans la citoyenneté active, le leadership des jeunes et la protection de l’environnement. Elle a représenté son pays à l’international, notamment au Sénégal dans le cadre du programme « Citizen Mobility and Movement Learning » de Y EN A MARRE, et a participé à des programmes internationaux axés sur l’innovation sociale et la coopération panafricaine. Son engagement allie mobilisation des jeunes, sensibilisation écologique et impact concret sur les communautés locales.",
  },
  {
    id: "73",
    name: "Chilah Mohamed",
    country: "MA",
    sector: "30 ans",
    image: "/leaders/Mohamed%20Chilah.jpeg",
    bioShort:
      "Entrepreneur originaire de Nador, fondateur de Chilah & Associés, il a développé une équipe de 30 personnes en France et ouvert des bureaux au Maroc, avec un centre de formation à Nador. Engagé pour l’impact social, il favorise l’insertion des jeunes et l’accès des femmes à l’emploi qualifié, anime un grand réseau d’experts-comptables sur WhatsApp et investit dans des fintech...",
    bioFull:
      "Jeune entrepreneur originaire de Nador, il est fondateur de Chilah & Associés, un cabinet d’expertise comptable et de conseil orienté vers l’humain et l’innovation. En moins de deux ans, il a développé une équipe de 30 personnes en France et ouvert des bureaux au Maroc, dont un centre de formation à Nador pour former des talents locaux et créer des opportunités professionnelles durables. Engagé pour l’impact social, il favorise l’insertion des jeunes issus de quartiers défavorisés et l’accès des femmes à l’emploi qualifié. Parallèlement, il anime le plus grand réseau français d’experts-comptables sur WhatsApp et investit dans des fintech innovantes, alliant technologie, expertise et valeurs humaines pour moderniser son métier et générer un impact concret.",
  },
  {
    id: "74",
    name: "DIENE Fatou",
    country: "SN",
    sector: "27 ans",
    image: "/leaders/fatou_diene.jpeg",
    bioShort:
      "Fondatrice et présidente du Réseau d’Autonomisation Féminine (RAF), elle promeut les droits des femmes, lutte contre les VBG et renforce l’autonomie socio-économique, surtout en zones rurales. Depuis 6+ ans, elle mène sensibilisations, formations et dialogues communautaires, et participe à des actions de terrain (suivi nutritionnel, éducation sanitaire, accompagnement des personnes âgées)...",
    bioFull:
      "Fondatrice et présidente du Réseau d’Autonomisation Féminine (RAF), engagé dans la promotion des droits des femmes, la lutte contre les violences basées sur le genre et le renforcement de l’autonomie sociale et économique des femmes, notamment en zones rurales et défavorisées. Depuis plus de six ans, elle conduit des campagnes de sensibilisation, des ateliers de formation et des dialogues communautaires, tout en participant directement à des actions de terrain telles que le suivi nutritionnel des enfants, l’éducation sanitaire des familles et l’accompagnement des personnes âgées. Son parcours illustre une conviction forte : le changement social durable se construit par l’empathie, l’action collective et un engagement constant au service des communautés.",
  },
  {
    id: "75",
    name: "Bizgaren Hassan",
    country: "MA",
    sector: "19 ans",
    image: "/leaders/HASSAN%20BIZGAREN.jpg",
    bioShort:
      "Militante associative à Sidi Ifni (Fikr), elle organise des activités pour les enfants et participe au développement local. Ambassadrice du Mouvement citoyen au sein de l’association Les Citoyens, elle contribue à la formation et à l’émergence de futurs leaders dans leurs communautés...",
    bioFull:
      "Militante associative au sein de Fikr à Sidi Ifni, où elle organise des activités pour les enfants et participe au développement local. Elle est également ambassadrice du Mouvement citoyen au sein de l’association Les Citoyens, contribuant à la formation et à l’émergence de futurs leaders dans leurs communautés.",
  },
  {
    id: "76",
    name: "Olivia Bong",
    country: "CM",
    sector: "28 ans",
    image: "/leaders/Olisty.jpeg",
    bioShort:
      "Engagée pour la jeunesse et le développement communautaire, elle agit au sein de l’ONG AEECG comme Secrétaire générale, conduisant des projets sociaux, éducatifs et environnementaux, et renforçant le leadership féminin. Son parcours inclut des responsabilités étudiantes majeures (présidente du Conseil étudiant UCAO, représentation nationale), et elle a été lauréate de concours d’éloquence et de programmes environnementaux...",
    bioFull:
      "Son engagement en faveur de la jeunesse et du développement communautaire se manifeste à travers l’ONG AEECG, où elle œuvre pour le développement personnel, intellectuel et social des jeunes en Guinée. En tant que Secrétaire générale, elle conduit des projets sociaux, éducatifs et environnementaux favorisant la participation citoyenne, la solidarité et le leadership féminin.\nSon parcours inclut des responsabilités marquantes : présidente du Conseil étudiant de l’UCAO, elle a initié des actions sociales en faveur des plus vulnérables et promu l’excellence académique ; secrétaire du Bureau national des étudiants des universités privées de Guinée, elle a renforcé la représentation des étudiants et l’unification des initiatives universitaires. Lauréate du SALES Grand Public Speaking Contest et de programmes environnementaux européens et locaux, elle a mené des campagnes de sensibilisation et des projets écologiques auprès des écoles et des communautés.",
  },
  {
    id: "77",
    name: "Mahamat Nour Hamid Adoum",
    country: "TD",
    sector: "21 ans",
    image: "/leaders/Adam%20Mahamat%20Nour%20Hamid.jpg",
    bioShort:
      "Engagée dans la vie associative, elle participe à des initiatives communautaires visant la participation citoyenne, la solidarité et le développement des jeunes. Elle contribue à des projets à impact social en faveur de l’autonomisation des communautés et du progrès collectif...",
    bioFull:
      "Engagée dans la vie associative, elle s’investit activement dans des initiatives communautaires visant à renforcer la participation citoyenne, la solidarité et le développement des jeunes. À travers ses actions, elle contribue à des projets à impact social, en faveur de l’autonomisation des communautés et du progrès collectif.",
  },
  {
    id: "78",
    name: "FOFANA MOHAMED",
    country: "GN",
    sector: "29 ans",
    image: "/leaders/Mohamed%20Fofana.jpg",
    bioShort:
      "Pour lui, servir est une mission de vie. Son engagement associatif est guidé par une conviction : la jeunesse est un moteur immédiat de transformation sociale en Guinée, notamment dans le milieu estudiantin de CESA Africa...",
    bioFull:
      "Servir n’est pas pour lui une simple activité, mais une véritable mission de vie. Son engagement associatif repose sur une conviction forte : la jeunesse n’est pas seulement l’avenir, elle est un moteur immédiat de transformation sociale en République de Guinée, notamment au sein du milieu estudiantin de CESA Africa.",
  },
  {
    id: "79",
    name: "Rouchdi Salma",
    country: "MA",
    sector: "21 ans",
    image: "/leaders/Salma%20Rouchdi.jpg",
    bioShort:
      "Très impliquée et orientée résultats, elle a été trésorière de la Green March 2.0, jouant un rôle clé dans la structuration de l’initiative. Aujourd’hui Vice-Présidente Sponsoring d’Epic Leaders FSU ES, elle mobilise partenariats et ressources pour concrétiser des projets à fort impact...",
    bioFull:
      "Son engagement associatif se distingue par une implication active et orientée résultats. Trésorière lors de la Green March 2.0, elle a joué un rôle clé dans la structuration et le bon déroulement de cette initiative citoyenne. Aujourd’hui, en tant que Vice-Présidente Sponsoring d’Epic Leaders FSU ES, elle mobilise partenariats et ressources pour donner vie à des projets concrets et à fort impact.",
  },
  // ⚠️ Doublon détecté : "Awa Ndoye" = déjà ajoutée précédemment comme "Ndoye Awa" (SN, 24)
  {
    id: "80",
    name: "TAPILY El Hadj Hussein",
    country: "CI",
    sector: "29 ans",
    image: "/leaders/TAPILY%20El%20Hadj%20Hussein.jpg",
    bioShort:
      "Engagé pour l’éducation, l’employabilité et la participation citoyenne des jeunes, il est Vice-Président Afrique de l’Ouest de l’AASU. Il a mené des initiatives pour améliorer la vie étudiante, la transparence des bourses et frais universitaires, et représenté l’Afrique de l’Ouest dans des comités et sommets internationaux, défendant la coopération Sud-Sud et la place des jeunes...",
    bioFull:
      "Engagé pour l’éducation, l’employabilité et la participation citoyenne des jeunes. Vice-Président Afrique de l’Ouest de l’All Africa Students Union (AASU), il a conduit des initiatives concrètes pour améliorer les conditions de vie et d’études des étudiants, promouvoir la réussite académique et renforcer la transparence dans la gestion des bourses et frais universitaires.\nÀ l’échelle continentale, il a représenté l’Afrique de l’Ouest dans des comités d’évaluation de la qualité de l’enseignement supérieur et participé à des sommets internationaux, défendant la coopération Sud-Sud et la place des jeunes dans les décisions éducatives et politiques. Son engagement couvre également l’éducation civique, la mobilisation des jeunes et le rapprochement entre formation académique et employabilité, faisant de lui un acteur déterminé à transformer concrètement les réalités de sa génération.",
  },
  {
    id: "81",
    name: "Diallo Ndeye Maréme",
    country: "SN",
    sector: "26 ans",
    image: "",
    bioShort:
      "Engagée pour la paix, la résolution des conflits et le civisme, elle dirige l’ASSEASPO qu’elle a transformée en plateforme de formation, débats démocratiques et leadership éthique. Directrice Paix & Résolution des Conflits à Valu Africa Sénégal et formatrice certifiée, elle anime ateliers, forme des volontaires et contribue à des politiques publiques inclusives...",
    bioFull:
      "Passionnée par la paix, la résolution des conflits et l’engagement citoyen. À la tête de l’ASSEASPO, elle a transformé l’association en une plateforme dynamique de formation civique, de débats démocratiques et de leadership éthique, acquérant une solide expertise en gestion de projets et mobilisation estudiantine.\nAu-delà du cadre universitaire, elle œuvre activement comme directrice de la Paix et de la Résolution des Conflits à la Fondation Valu Africa Sénégal et formatrice certifiée en éducation civique et engagement citoyen, où elle anime des ateliers, forme des volontaires et contribue à l’élaboration de politiques publiques inclusives. Formée en droits humains et action humanitaire, elle croit que l’avenir de l’Afrique repose sur une jeunesse informée, responsable et pacifique.",
  },
  {
    id: "82",
    name: "SAVANE Djibril",
    country: "GN",
    sector: "24 ans",
    image: "/leaders/Djiby.jpg",
    bioShort:
      "Jeune patriote et panafricaniste, il s’engage pour l’autonomisation des jeunes et des femmes, la paix et le civisme. Il a présidé l’Association des Citoyens pour le Développement, cofondé « Afrique en Marche », et combine action associative, plaidoyer et enseignement au sein de réseaux comme CESA...",
    bioFull:
      "Jeune patriote et panafricaniste engagé, dédié à l’autonomisation des jeunes et des femmes, à la promotion de la paix et du civisme en Afrique. Il a présidé l’Association des Citoyens pour le Développement et cofondé « Afrique en Marche », menant des initiatives citoyennes, éducatives et médiatiques. Membre du Groupe Femmes, Jeunes, Paix et Sécurité et de la Confédération Estudiantine et Scolaire d’Afrique (CESA), il combine action associative, plaidoyer et enseignement pour faire de la jeunesse un moteur de transformation durable.",
  },
  {
    id: "83",
    name: "Manuela AGNRAM",
    country: "TG",
    sector: "26 ans",
    image: "/leaders/ella_ASSI21.jpg",
    bioShort:
      "Son engagement est axé sur l’action concrète : elle a mené des campagnes locales (« Égalité pour Elles ») contre les VBG et participé à des missions de protection de l’enfance avec l’ONU. Ambassadrice mondiale de la jeunesse, elle crée des passerelles entre politiques publiques et communautés, convaincue que l’autonomisation est la base d’un changement durable...",
    bioFull:
      "Son parcours associatif se caractérise par l’action concrète : elle a mené des campagnes locales telles que « Égalité pour Elles » contre les violences basées sur le genre et a participé à des missions de protection de l’enfance avec l’ONU. En tant qu’Ambassadrice mondiale de la jeunesse, elle crée des passerelles entre les politiques publiques et les communautés, convaincue que l’autonomisation des individus est le socle d’un changement durable et concret.",
  },
  {
    id: "84",
    name: "BATIENON Eulalie de Mérida",
    country: "BF",
    sector: "24 ans",
    image: "/leaders/Eulalie_Batienon.jpg",
    bioShort:
      "Fondatrice et coordinatrice à l’Africa Young Ambassadors Association, elle porte une vision où la jeunesse est au cœur des solutions. Elle mène des initiatives sur l’autonomisation des jeunes, le leadership civique et l’égalité des genres via renforcement de capacités, plaidoyer et activités nationales/internationales, formant des jeunes leaders et promouvant l’engagement responsable...",
    bioFull:
      "Son parcours associatif est guidé par une conviction forte : la jeunesse africaine doit être au cœur des solutions pour le développement de ses communautés. Fondatrice et coordinatrice de projets au sein de l’Africa Young Ambassadors Association, elle a conduit des initiatives concrètes sur l’autonomisation des jeunes, le leadership civique et l’égalité des genres.\nÀ travers des programmes de renforcement de capacités, des actions de plaidoyer et l’organisation d’activités nationales et internationales, elle contribue à former des jeunes leaders et à promouvoir un engagement citoyen responsable.",
  },
  {
    id: "85",
    name: "SOGBE Sifano Philippe",
    country: "BJ",
    sector: "22 ans",
    image: "/leaders/Philippe_Sifano_SOGBE.jpg",
    bioShort:
      "Étudiant en master de droit public et community manager, il est engagé pour la jeunesse et le développement social. Fondateur de CM Academy Pro, il forme des jeunes aux métiers du digital pour favoriser leur insertion et autonomie. Il contribue aussi à l’organisation et la communication d’événements sociaux et économiques à Cotonou...",
    bioFull:
      "Étudiant en Master de droit public, community manager et spécialiste de la fidélisation client, il est un jeune leader engagé pour la jeunesse et le développement social. Fondateur de CM Academy Pro, il forme et accompagne les jeunes dans les métiers du digital, favorisant leur insertion professionnelle et leur autonomie. Parallèlement, il contribue à l’organisation et à la communication de grands événements à portée sociale et économique, tels que la Renaissance Entrepreneuriale et le Festival International des Familles à Cotonou, mettant ses compétences au service de l’impact collectif.",
  },
  {
    id: "86",
    name: "INOUSSA Habib",
    country: "BJ",
    sector: "21 ans",
    image: "/leaders/Habib_Inoussa.jpg",
    bioShort:
      "Étudiant en science politique, il s’engage dans la société civile et le leadership étudiant. Vice-président des Étudiants Lopka, il lutte contre la désinformation avec Wendia Faaba, promeut les droits DSSR des jeunes, et appuie des projets de protection de l’environnement comme assistant projet à Pauly Afrique Bio...",
    bioFull:
      "Étudiant en fin de formation en Science Politique à l’Université de Parakou, il s’engage activement dans la société civile et le leadership étudiant. Vice-président des Étudiants Lopka, il contribue également à la lutte contre la désinformation au sein de Wendia Faaba et promeut les droits en santé sexuelle et reproductive des jeunes. Parallèlement, il appuie des projets de protection de l’environnement en tant qu’assistant projet à l’ONG Pauly Afrique Bio.",
  },
  {
    id: "87",
    name: "Suleiman Aliyu",
    country: "NG",
    sector: "27 ans",
    image: "/leaders/aliyu_suleiman.jpg",
    bioShort:
      "Passionné par la gouvernance et la justice sociale, il est diplômé en science politique et mène des actions civiques au Nigeria. Président de YTWT et membre exécutif de la PLO Lumumba Foundation, il porte des campagnes sur la paix, la tolérance religieuse, la prévention de la drogue et l’autonomisation des jeunes, et a représenté le Nigeria à des forums internationaux. Il a aussi été stagiaire à la Commission CEDEAO...",
    bioFull:
      "Passionné par la gouvernance, la justice sociale et le développement durable en Afrique. Suleiman est titulaire d’un Bachelor en Science Politique de la Kaduna State University, il se distingue par son engagement associatif et civique à l’échelle nationale et continentale.\nPrésident de Youth Together Work Together (YTWT) et membre exécutif de la PLO Lumumba Foundation (Nigeria Chapter), il mène des campagnes sur la paix, la tolérance religieuse, la prévention de la drogue et l’autonomisation des jeunes, tout en représentant le Nigeria lors de sommets et forums internationaux sur le leadership et le développement durable. Il a également exercé comme stagiaire administratif à la Commission de la CEDEAO, renforçant son expertise en gouvernance régionale et coopération institutionnelle.",
  },
  {
    id: "88",
    name: "Moussa Haladou Mahamadou",
    country: "NE",
    sector: "25 ans",
    image: "/leaders/Mahamadou_Moussa.jpg",
    bioShort:
      "Co-fondateur et responsable de programmes de l’IJEN, il conçoit des projets sur la citoyenneté active, le leadership des jeunes, la démocratie participative et l’engagement communautaire au Niger. Titulaire d’un Master en logistique humanitaire, il mène aussi des actions sociales/humanitaires et des projets liant environnement et participation communautaire...",
    bioFull:
      "Il croit fermement que la jeunesse africaine n’est pas seulement l’avenir, mais le moteur actuel du changement. Co-fondateur et responsable de programmes de l’Initiative Jeunesse pour l’Émergence du Niger (IJEN), il conçoit et met en œuvre des projets axés sur la citoyenneté active, le leadership des jeunes, la démocratie participative et l’engagement communautaire.\nTitulaire d’un Master en logistique humanitaire, il s’investit également dans des actions sociales et humanitaires, allant de la sensibilisation à l’hygiène et la mobilisation citoyenne à des projets innovants liant protection de l’environnement et participation communautaire.",
  },
  {
    id: "89",
    name: "Kambi Fabien",
    country: "CD",
    sector: "25 ans",
    image: "/leaders/Fabien_Kambi.jpg",
    bioShort:
      "Actif depuis 2021 au sein de U-Report RDC, il a participé à 76 campagnes communautaires, mobilisé 600+ jeunes, animé 15 forums (droits humains, paix, citoyenneté) et formé 160 U-Reporters au plaidoyer. Étudiant en Master en presse et communication publique, il transforme les voix des jeunes en informations utiles pour les acteurs publics et humanitaires...",
    bioFull:
      "Engagé sur le terrain, il place les jeunes et leurs réalités quotidiennes au cœur de son action. Depuis 2021, il est actif au sein de U-Report RDC, où il a participé à l’organisation de 76 campagnes communautaires, mobilisé plus de 600 jeunes, et animé 15 forums sur les droits humains, la paix et la citoyenneté. Il a également formé et encadré 160 U-Reporters sur le plaidoyer et l’engagement civique.\nGuidé par la justice sociale, la solidarité et la responsabilité partagée, il transforme les voix des jeunes en informations concrètes pour les acteurs publics et humanitaires, renforçant le lien entre communautés, institutions et partenaires techniques. Actuellement étudiant en Master en Presse, Information et Communication Publique à l’Université de Kisangani, il poursuit son engagement pour construire des initiatives durables au service des communautés africaines.",
  },
  {
    id: "90",
    name: "NIYONKURU Jean Claude",
    country: "BI",
    sector: "29 ans",
    image: "/leaders/JEAN_CLAUDE_NIYONKURU.JPG",
    bioShort:
      "Jeune entrepreneur engagé dans l’agriculture et l’élevage, il voit ces secteurs comme leviers de développement. Il collabore avec des organisations communautaires pour l’autonomisation des agriculteurs et l’accès à des ressources durables, et partage des pratiques innovantes via ateliers, mentorat et partenariats locaux, au service de la jeunesse rurale...",
    bioFull:
      "Jeune entrepreneur engagé dans l’agriculture et l’élevage, convaincu que ces secteurs sont des leviers essentiels de développement social et économique. Il collabore avec des organisations communautaires pour promouvoir l’autonomisation des agriculteurs et l’accès à des ressources durables. À travers des ateliers de formation, du mentorat et la mise en place de partenariats locaux, il partage des pratiques agricoles innovantes et soutient la jeunesse rurale.",
  },
  {
    id: "91",
    name: "Bhira Mohamed Amine",
    country: "TN",
    sector: "25 ans",
    image: "/leaders/mohamed_amine_bhira.jpg",
    bioShort:
      "Fort de plusieurs années d’engagement associatif, il a construit un parcours centré sur la jeunesse, l’éducation et le leadership. Son expérience inclut coordination de projets, gestion d’événements et renforcement des capacités, avec un focus sur l’autonomisation des jeunes et le développement durable des communautés...",
    bioFull:
      "Il possède un solide parcours associatif, construit grâce à plusieurs années d’engagement actif dans des organisations centrées sur la jeunesse, l’éducation et le leadership. Son expérience englobe la coordination de projets, la gestion d’événements et le renforcement des capacités, avec un accent sur l’autonomisation des jeunes et le développement durable des communautés.",
  },
  {
    id: "92",
    name: "Makni Akram",
    country: "TN",
    sector: "27 ans",
    image: "/leaders/Akram_Makni.jpeg",
    bioShort:
      "Au sein de la Tunivisions Foundation, il a participé à des initiatives d’autonomisation des jeunes, d’éducation et de leadership. Son expérience en coordination, mentorat et collaboration l’a aidé à mobiliser ses pairs. Passionné d’engagement civique, il œuvre pour des solutions concrètes et durables au service de la société...",
    bioFull:
      "Animé par la volonté de créer un impact positif dans sa communauté. Au sein de la Tunivisions Foundation, il a participé à l’organisation d’initiatives visant à autonomiser les jeunes, promouvoir l’éducation et renforcer le leadership. Son expérience en coordination de projets, mentorat et collaboration avec des groupes diversifiés lui a permis de mobiliser et d’inspirer ses pairs. Passionné par l’engagement civique et le développement de solutions concrètes, il œuvre pour des changements durables au service de la société.",
  },
  {
    id: "93",
    name: "Idriss Firas",
    country: "TN",
    sector: "23 ans",
    image: "/leaders/Firas_Idriss.jpeg",
    bioShort:
      "Jeune tunisien engagé, il a construit son parcours autour du leadership et de l’action de terrain (Scouts Tunisiens, éducation à la citoyenneté, initiatives sociales). Il a dirigé des projets nationaux We Are Kairouan et We Are Carthage, et est aujourd’hui responsable création de contenu à EPIK Leaders Tunisia, formant et mobilisant la jeunesse autour du leadership panafricain et de l’impact social...",
    bioFull:
      "Jeune tunisien engagé dans le développement social, culturel et humain à travers l’action associative et citoyenne. Son parcours s’est construit autour du leadership jeunesse, de l’engagement de terrain et de la création d’impact durable. Il a débuté au sein des Scouts Tunisiens et du Club d’Éducation à la Citoyenneté, puis a contribué à des initiatives sociales et humanitaires avec les associations Osrati et Abnaouna.\nIl a dirigé les projets nationaux We Are Kairouan et We Are Carthage, valorisant la culture, le patrimoine et la participation citoyenne, et a été reconnu comme l’un des étudiants les plus influents à l’échelle nationale. Aujourd’hui, au sein de EPIK Leaders Tunisia, il est Responsable de la création de contenu, formant et mobilisant la jeunesse tunisienne autour du leadership panafricain, de l’engagement citoyen et de l’impact social, et contribuant activement à l’émergence d’une nouvelle génération de leaders.",
  },
  {
    id: "94",
    name: "Hadj Sassi Dhia",
    country: "TN",
    sector: "26 ans",
    image: "/leaders/hadj_sassi_dhia.jpeg",
    bioShort:
      "Très impliqué dans l’associatif, co-fondateur de JCI Sfax Junior, il a développé des compétences en organisation et coordination à Tunivisions. Il a dirigé des projets caritatifs et culturels (Romdhan l’M7aba, We Are Carthage), occupé des rôles logistiques et de management d’événements, puis a fondé et coordonne EPIK Leaders Tunisia (2026) pour former une nouvelle génération de leaders citoyens et panafricains...",
    bioFull:
      "Il s’investit activement dans le milieu associatif, contribuant à la création et au développement de nombreuses initiatives locales et nationales. Co-fondateur de JCI Sfax Junior, il découvre le leadership collectif avant de rejoindre le Club Tunivisions ISASS, où il acquiert des compétences en organisation et coordination. Il dirige ensuite le projet caritatif Romdhan l’M7aba, travaille comme consultant logistique à la Tunivisions Foundation, et évolue vers des responsabilités de manager d’événements et coordinateur au sein du Chapter Alumni. En 2023, il prend en charge le projet culturel et identitaire We Are Carthage, puis, en 2025, devient responsable du Tunivisions Store et des membres alumni lors des conférences nationales. En 2026, il fonde et coordonne EPIK Leaders Tunisia, initiative visant à former et inspirer une nouvelle génération de leaders citoyens et panafricains.",
  },
  {
    id: "95",
    name: "Khlifi Bechir",
    country: "TN",
    sector: "28 ans",
    image: "/leaders/Bechir_Khlifi.jpg",
    bioShort:
      "Son engagement durable à la Fondation Tunivisions l’a conduit à former et accompagner des jeunes leaders (médias, citoyenneté, entrepreneuriat, action communautaire). Il a aussi représenté la Tunisie dans des instances régionales et continentales de jeunesse, renforçant sa vision du leadership comme un service et de la jeunesse comme moteur de changement durable...",
    bioFull:
      "Son parcours associatif reflète un engagement durable en faveur de la jeunesse et du développement sociétal, construit au sein de la Fondation Tunivisions. Il y a contribué à des initiatives à impact concret, favorisant la participation, la responsabilisation et l’épanouissement des jeunes.\nÀ travers cet engagement, il a participé à la formation et à l’accompagnement de jeunes leaders dans des domaines tels que les médias, l’engagement citoyen, l’entrepreneuriat et l’action communautaire. Ce parcours l’a également conduit à représenter la Tunisie et la Fondation Tunivisions au sein d’instances régionales et continentales de jeunesse, notamment l’Union Panafricaine de la Jeunesse et le Conseil Afro-Arabe de la Jeunesse, renforçant sa vision du leadership comme un service et de la jeunesse comme moteur de changement durable.",
  },
  {
    id: "96",
    name: "EL AZZABI Abdessamad",
    country: "MA",
    sector: "21 ans",
    image: "/leaders/Abdessamad_El_Azzabi.jpg",
    bioShort:
      "Engagé pour le leadership et l’impact social, il est actif au JLM et CDI (ENCG Agadir) et a été Vice Team Leader d’Enactus ENCG Agadir (2024–2025), pilotant de grands événements. Après un rôle de Sponsoring Manager (JLM – EST Meknès), il poursuit à Epik Leaders et accompagne des jeunes lecteurs comme coach/coordinateur au Reading Club Sijilmassa...",
    bioFull:
      "Jeune animé par le leadership, l’impact social et le développement de la jeunesse. Il est actif au JLM et au CDI – ENCG Agadir, il a servi comme Vice Team Leader d’Enactus ENCG Agadir (2024–2025), où il a piloté de grands événements, renforçant ses compétences en travail d’équipe, organisation et ambition.\nAprès son expérience comme Sponsoring Manager du JLM – EST Meknès, il poursuit son engagement au sein d’Epik Leaders en tant que membre actif et ambassadeur. Parallèlement, il occupe les fonctions de coach, coordinateur et manager du Reading Club Sijilmassa, accompagnant de jeunes lecteurs dans leur développement personnel et leur expression.",
  },
  {
    id: "97",
    name: "Diop Ndeye Amy",
    country: "SN",
    sector: "28 ans",
    image: "/leaders/Ndeye_Amy_Diop.jpg",
    bioShort:
      "Formée en santé communautaire et suivi-évaluation, elle a bâti son engagement sur le terrain avec CorpsAfrica/Sénégal à Thilambol. Elle a co-construit des projets à fort impact, dont un mini-forage pour un périmètre maraîcher de 4 hectares, renforçant l’autonomie économique et la sécurité alimentaire de 200+ femmes. Elle mène aussi des actions de sensibilisation, de formation et des initiatives environnementales...",
    bioFull:
      "Son engagement sociétal est né sur le terrain, au contact direct des communautés, là où les besoins sont réels et les solutions doivent être co-construites. Formée en santé communautaire et en suivi-évaluation, elle a rapidement compris que l’impact durable repose sur l’écoute, la mobilisation communautaire et la valorisation des ressources locales.\nLors de son volontariat avec CorpsAfrica/Sénégal à Thilambol (département de Podor), elle a accompagné les habitants dans l’identification de leurs priorités et la mise en œuvre de projets à fort impact social, notamment l’installation d’un mini-forage pour un périmètre maraîcher de 4 hectares, renforçant l’autonomie économique et la sécurité alimentaire de plus de 200 femmes.\nParallèlement, elle a mené des actions de sensibilisation et de formation en santé communautaire, facilité des initiatives environnementales et génératrices de revenus, et contribué à l’amélioration des infrastructures éducatives.",
  },
  {
    id: "99",
    name: "BOUDA Paulin",
    country: "BF",
    sector: "24",
    image: "", // manquant
    bioShort:
      "Engagé pour la justice climatique, les droits humains et le développement durable. Président d’Agir pour le Climat et l’Environnement, cofondateur du Burkinabe Center for Debates and Advocacy, il combine droit, plaidoyer et leadership. Lauréat Powerlist African DOers 2025, il poursuit un doctorat en droit public avec l’ambition de devenir diplomate...",
    bioFull:
      "Il est engagé pour la justice climatique, les droits humains et le développement durable. Président de l’association Agir pour le Climat et l’Environnement, il a représenté le Burkina Faso au Parlement Francophone des Jeunes et participe activement à des initiatives panafricaines. Juriste de formation, co-fondateur du Burkinabe Center for Debates and Advocacy, il combine expertise en droit, plaidoyer et leadership pour promouvoir la participation des jeunes et l’impact social durable. Lauréat du Powerlist African DOers 2025, il poursuit un doctorat en droit public avec l’ambition de devenir diplomate.",
  },
  {
    id: "100",
    name: "Hardy Heritier KOYAMEBI MBESSE",
    country: "CF",
    sector: "24 ans",
    image: "/leaders/Hardy_Heritier_Mbéssè.jpg",
    bioShort:
      "Lauréat 2025 du programme Démocratie, Territoire et Participation citoyenne des Jeunes à Bangui, il allie Master 2 d’Ingénierie Fiscale et leadership citoyen. SG du Club des Élites Fiscalistes, président fédéral des Étudiants Étrangers à l’UGB, il a piloté des initiatives comme les 72 Heures d’Activités des Nations (immigration, reboisement, actions solidaires)...",
    bioFull:
      "Il est engagé pour le service à la communauté et le développement des talents de son continent. Lauréat 2025 du programme Démocratie, Territoire et Participation citoyenne des Jeunes à Bangui, il allie expertise académique en Master 2 d’Ingénierie Fiscale et leadership citoyen.\nSecrétaire Général du Club des Élites Fiscalistes, il accompagne jeunes entrepreneurs et start-ups à transformer la fiscalité en levier de croissance. Président fédéral des Étudiants Étrangers à l’Université Gaston Berger, il a piloté des initiatives concrètes telles que les 72 Heures d’Activités des Nations, combinant sensibilisation à l’immigration, reboisement et actions solidaires.",
  },
  {
    id: "101",
    name: "MAIGA Boucari Oumar",
    country: "ML",
    sector: "28 ans",
    image: "/leaders/Boucari_Oumar_MAIGA.jpg",
    bioShort:
      "Engagé en société civile autour de l’éducation, la citoyenneté, la paix et le développement durable. Au Club UNESCO de l’ENI-ABT, il a coordonné des projets éducatifs et civiques (Concours Inter-Lycées d’Excellence) et des campagnes environnement/cohésion sociale. Étudiant en génie énergétique, il forme les jeunes sur la justice climatique et représente les jeunes dans des réseaux comme YOUNGO et UNCCD Youth Caucus...",
    bioFull:
      "Il est engagé depuis longtemps dans la société civile et les organisations communautaires, avec un parcours axé sur l’éducation, la citoyenneté, la paix et le développement durable. Au Club UNESCO de l’ENI-ABT, il a coordonné des projets éducatifs et civiques, dont le Concours Inter-Lycées d’Excellence, et conduit des campagnes de sensibilisation sur l’environnement et la cohésion sociale. Étudiant en génie énergétique, il mobilise ses compétences pour former les jeunes sur la justice climatique et la résilience communautaire. Actif dans des réseaux internationaux comme YOUNGO et le UNCCD Youth Caucus, il représente les jeunes dans les instances décisionnelles et œuvre à renforcer leur participation aux politiques publiques pour bâtir des sociétés justes, durables et inclusives.",
  },
  {
    id: "102",
    name: "Falmata Caroline",
    country: "TD",
    sector: "26 ans",
    image: "/leaders/Falmata_Caroline.jpg",
    bioShort:
      "Militante engagée, elle défend les droits, la dignité, la santé et l’autonomisation des filles et des femmes. Cofondatrice et SG du Parlement des Jeunes Filles Leaders du Tchad, elle a créé un espace d’expression et d’influence, menant caravanes, radios, conférences et campagnes pour la scolarisation et la protection des filles...",
    bioFull:
      "Militante engagée et survivante, elle transforme ses expériences en actions pour le changement. Elle défend les droits des filles et des femmes, leur dignité, leur santé et leur autonomisation, sur le terrain, dans les espaces de plaidoyer et en ligne.\nCofondatrice et Secrétaire Générale du Parlement des Jeunes Filles Leaders du Tchad, elle a créé un espace où les jeunes filles s’expriment et influencent les décisions. Sous sa direction, le Parlement organise des caravanes de sensibilisation, des émissions radios, des conférences et des campagnes pour la scolarisation et la protection des filles.",
  },
  {
    id: "103",
    name: "Diallo Amadou Tidiane",
    country: "GN",
    sector: "24 ans",
    image: "/leaders/amadou_tidiane_diallo.jpg",
    bioShort:
      "Ingénieur météorologue et activiste climatique, il est responsable environnement & DD à l’ONG AJED et responsable communication rapports chez Green Generation (UNICEF Sénégal). Récompensé (Meilleur Défenseur Environnement Guinée 2024, finaliste Trophée Dakar 2024, QS Impact Climate Award 2025, LIGHT AWARD CI), il promeut une jeunesse africaine engagée et moteur de solutions durables...",
    bioFull:
      "Ingénieur météorologue et activiste climatique, il est Secrétaire chargé des questions environnementales et du développement durable au sein de l’ONG AJED (Appui Jeunes pour le Développement) et Secrétaire chargé de la communication des rapports chez Green Generation (UNICEF Sénégal). Son engagement porte sur la justice climatique, l’éducation environnementale et la mobilisation communautaire. En reconnaissance de ses actions, il a été élu Meilleur Défenseur de l’Environnement en Guinée (2024), finaliste du Trophée d’Excellence Climatique à Dakar (2024), lauréat du QS Impact Climate Award (2025) et nommé parmi les jeunes leaders africains par le LIGHT AWARD en Côte d’Ivoire. À travers son parcours, il promeut une jeunesse africaine consciente, engagée et moteur de solutions durables.",
  },
  {
    id: "104",
    name: "Thioune Binetou Rassoul",
    country: "SN",
    sector: "28 ans",
    image: "/leaders/binetou_rassoul_thioune.jpg",
    bioShort:
      "Jeune leader communautaire engagée pour l’environnement, elle contribue aux actions de Synergie d’Actions Citoyennes pour l’Environnement (sensibilisation, mobilisation, pratiques durables). Elle a aussi participé à des initiatives nationales (RGP, 100 000 Étudiants contre le COVID-19, distribution de moustiquaires Milda)...",
    bioFull:
      "Jeune leader communautaire et militant pour l’environnement, elle s’engage pour un changement social positif. Elle participe activement aux actions de Synergie d’Actions Citoyennes pour l’Environnement, contribuant à la sensibilisation, à la mobilisation communautaire et à la promotion de pratiques durables. Elle a également pris part à des initiatives nationales telles que le Recensement Général de la Population, le programme « 100 000 Étudiants contre le COVID-19 » et la distribution de moustiquaires imprégnées (Milda).",
  },
  {
    id: "105",
    name: "Mulamba Ornella",
    country: "CD",
    sector: "19 ans",
    image: "/leaders/ornella_mulamba.jpg",
    bioShort:
      "Son leadership est ancré dans l’engagement des jeunes et des communautés. Formée en leadership par valeurs via Cornerstone Development Africa, elle dirige un groupe au sein de l’AYLF, encadre ses pairs et s’investit dans le High School Leadership Development. Candidate WAAW Foundation, elle œuvre pour l’autonomisation des femmes en STEM et un développement inclusif...",
    bioFull:
      "Son parcours de leadership est profondément ancré dans l’engagement des jeunes et des communautés. Grâce à Cornerstone Development Africa, où elle a appris l’anglais, elle a développé des bases solides en leadership basé sur les valeurs, le service et la vision. Elle dirige actuellement un groupe au sein du African Young Leadership Forum (AYLF), où elle encadre ses pairs et promeut la responsabilité civique, tout en s’investissant bénévolement dans le High School Leadership Development (HLD) pour la formation des lycéens. Candidate à la bourse WAAW Foundation, elle œuvre pour l’autonomisation des femmes en STEM et pour un développement durable et inclusif. Ces expériences témoignent de son engagement pour un leadership conscient et un impact social concret.",
  },
  {
    id: "106",
    name: "Imoula Achraf",
    country: "MA",
    sector: "23 ans",
    image: "/leaders/achraf_imoula.jpg",
    bioShort:
      "Vice-Président chargé des Événements, il conçoit et coordonne des initiatives associatives comme des moments d’inspiration et de changement concret, convaincu que des événements bien conçus activent les talents, renforcent les communautés et stimulent l’impact social...",
    bioFull:
      "Engagé et passionné par la mobilisation collective et le développement humain. En tant que Vice-Président chargé des Événements, il transforme chaque initiative associative en un moment d’inspiration, de partage et de changement concret, convaincu que les événements bien conçus peuvent activer les talents, renforcer les communautés et stimuler l’impact social.",
  },
  {
    id: "107",
    name: "AGNIKPE Youris",
    country: "BJ",
    sector: "26 ans",
    image: "/leaders/youris_agnikpe.jpg",
    bioShort:
      "Au sein de 10,000 Codeurs, il œuvre pour l’inclusion numérique et l’insertion professionnelle des jeunes. De mai 2023 à Service Quality Manager (février 2025), il supervise satisfaction, communication, partenariats et événements, accompagnant des centaines de jeunes vers les métiers du digital via forums et ateliers...",
    bioFull:
      "Il est convaincu que le développement de l’Afrique repose sur une jeunesse éduquée, confiante et connectée aux opportunités digitales. C’est cette conviction qui le guide au sein de 10,000 Codeurs, association dédiée à l’inclusion numérique et à l’insertion professionnelle des jeunes.\nDepuis mai 2023, il a occupé plusieurs postes, jusqu’à devenir Service Quality Manager en février 2025, responsable de la satisfaction des bénéficiaires, de la communication, des partenariats et de la coordination d’événements. Il a ainsi accompagné des centaines de jeunes vers les métiers du digital, organisé forums et ateliers, et renforcé les liens avec partenaires et institutions.",
  },
  {
  id: "108",
  name: "Diarra Baba",
  country: "ML",
  sector: "21 ans",
  image: "",
  bioShort:
    "Étudiant en Master 2 à l’ENCG Agadir, il possède un solide parcours associatif axé sur le leadership, l’inclusion et l’engagement sociétal. Ancien président du International Student Club, il a favorisé l’échange culturel et l’intégration des étudiants internationaux...",
  bioFull:
    "En Master 2 à l’ENCG Agadir, il possède un solide parcours associatif centré sur le leadership, l’inclusion et l’engagement sociétal. Il a été président du International Student Club, favorisant l’échange culturel et l’intégration des étudiants internationaux, et a exercé diverses responsabilités au sein de l’Association des Étudiants et Stagiaires Maliens (ASEM), section Agadir. Aujourd’hui, en tant que Responsable Nationale des Ressources Humaines d’Epik Leaders Morocco, il contribue au développement du leadership, à la valorisation des talents et au renforcement de l’engagement étudiant à l’échelle nationale.",
},
{
  id: "109",
  name: "Djedjo Rosália",
  country: "GW",
  sector: "27 ans",
  image: "/leaders/Rosália_Djedjo.jpg",
  bioShort:
    "Leader associative et militante sociale en Guinée-Bissau, engagée depuis plus de 15 ans dans le mouvement étudiant, les droits humains et l’action communautaire. Présidente de la CONAEGUIB et vice-présidente Afrique de l’Ouest de l’AASU...",
  bioFull:
    "Elle est leader associative et militante sociale en Guinée-Bissau, engagée depuis plus de 15 ans dans le mouvement étudiant, les droits humains et l’action communautaire. Présidente de la CONAEGUIB, elle conduit des programmes de formation au leadership, des campagnes de sensibilisation et le renforcement des associations étudiantes. Vice-Présidente du CNJ et Secrétaire aux Relations Internationales du Réseau des Défenseurs des Droits Humains, elle promeut la participation des jeunes dans les instances nationales et régionales, et a été élue Vice-Présidente Afrique de l’Ouest de l’AASU. Directrice Exécutive de la Fondation Sousa Sambú, elle pilote des projets sociaux et éducatifs inclusifs au bénéfice des jeunes, des femmes et des communautés vulnérables.",
},
{
  id: "110",
  name: "KOUASSI N’CHO JUDE WILFRIED",
  country: "CI",
  sector: "23 ans",
  image: "/leaders/BDFLIX.jpeg",
  bioShort:
    "Bénévole à la Croix-Rouge Côte d’Ivoire, il coordonne des projets jeunesse, des campagnes de sensibilisation et des actions en faveur des populations vulnérables. Il œuvre pour l’inclusion, l’accès au savoir et la santé mentale...",
  bioFull:
    "Bénévole à la Croix-Rouge Côte d’Ivoire, il a coordonné de nombreux projets pour la jeunesse, des campagnes de sensibilisation et des actions de soutien aux populations vulnérables. Son parcours vise à promouvoir l’inclusion, l’accès au savoir et à briser les tabous liés aux troubles du développement, du langage et de la santé mentale. À travers des projets, ateliers et interventions de terrain, il sensibilise, renforce les compétences et mobilise les communautés autour de problématiques sociales essentielles.",
},
{
  id: "111",
  name: "Lutu Mechak",
  country: "CD",
  sector: "29 ans",
  image: "/leaders/mechak_Lutu.jpeg",
  bioShort:
    "Membre du think tank RDC Stratégie, elle œuvre pour le développement du capital humain et la prospective nationale. Son engagement vise à bâtir une RDC forte et durable à l’horizon 2060...",
  bioFull:
    "Depuis quatre ans, elle s’engage avec courage et rigueur au sein du think tank RDC Stratégie, incubateur de politiques publiques et de prospective, animé par la vision de bâtir la RDC de nos rêves. Elle y œuvre pour le développement du capital humain et la promotion des secteurs stratégiques, contribuant à l’essor de la nation dans un esprit d’engagement collectif, avec l’ambition d’un impact durable à l’horizon 2060.",
},
{
  id: "112",
  name: "Kanika Hortensia",
  country: "CD",
  sector: "23 ans",
  image: "/leaders/hortensia_kan.jpg",
  bioShort:
    "Engagée au sein d’un think tank, elle participe à des initiatives majeures en géopolitique, développement économique et prospective. Initiatrice du Futur’s Forum RDC 2060, elle mobilise la jeunesse autour de la co-création de l’avenir...",
  bioFull:
    "Elle a rejoint le think tank fin 2023, animée par l’ambition de contribuer à une organisation qui dépasse la production d’idées pour façonner les mentalités et impulser des visions tournées vers l’avenir avec un impact concret. Elle a contribué à l’organisation d’une conférence à Bruxelles sur les enjeux géostratégiques de l’exploitation minière en RDC, au Financial Sector Forum à Kinshasa et à la World Futures Day de l’UNESCO. Son projet phare est le Futur’s Forum (Forum du Futur RDC 2060), lancé en juin 2025 et prévu pour mars 2026.",
},
{
  id: "113",
  name: "YOAMBALE LOOLA Jonathan",
  country: "CD",
  sector: "23 ans",
  image: "/leaders/jonathan_YOAMBALE_LOOLA.jpeg",
  bioShort:
    "Initiateur du programme UESCOM MWANA MBOKA pour la promotion des talents congolais au Maroc. Étudiant ambassadeur de l’Université Mohammed V, il coordonne des conférences de leadership et la mobilisation RH...",
  bioFull:
    "Initiateur et Chef de projet de UESCOM MWANA MBOKA (UMB), programme d’excellence consacré à la révélation et à la promotion des talents congolais au Maroc. Étudiant ambassadeur de l’Université Mohammed V, initiateur et coordonnateur de la conférence Journée de Leadership. Responsable des Ressources humaines et de la mobilisation au sein du Léopard Business Village (LBV).",
},
{
  id: "114",
  name: "Eunice Mbala",
  country: "CD",
  sector: "27 ans",
  image: "/leaders/eunice_Mbala.jpg",
  bioShort:
    "Chargée des partenariats et finances au Think Tank RDC Stratégie, elle œuvre à la mise en œuvre de projets à fort impact économique et sociétal, fondés sur une gouvernance responsable et des partenariats stratégiques...",
  bioFull:
    "Chargée des partenariats et des finances au Think Tank RDC Stratégie, elle s’engage dans la conception et la mise en œuvre de projets à fort impact économique et sociétal. Son action est guidée par la conviction que le développement durable de la RDC repose sur des partenariats stratégiques solides, une gouvernance responsable et la valorisation du capital humain.",
},
{
  id: "115",
  name: "Hssine Ayoub",
  country: "MA",
  sector: "19 ans",
  image: "/leaders/Ayoub_Hssine.jpeg",
  bioShort:
    "Engagé depuis 2017 pour le développement des jeunes et des communautés, il a mené des actions citoyennes, éducatives et sociales. Son engagement s’est structuré à Supemir puis avec Epik Leaders, où il a assumé des responsabilités de président étudiant...",
  bioFull:
    "Il s’engage depuis 2017 dans le développement des jeunes et des communautés, débutant par des actions de sensibilisation citoyenne à la COP22 sur l’environnement et la pollution. À partir de 2022, il a intensifié son action sur le terrain dans les régions du Sud, en organisant des événements éducatifs, culturels et sociaux pour les enfants. À Supemir, il a participé à des séances d’orientation et des forums éducatifs. Avec Epik Leaders, il a contribué au soutien scolaire, à l’orientation et à l’action humanitaire, exerçant des responsabilités de vice-président puis président du bureau des étudiants.",
},
{
  id: "116",
  name: "NDAGIJE Héritier",
  country: "CD",
  sector: "27 ans",
  image: "/leaders/Héritier_NDAGIJE.jpg",
  bioShort:
    "Chercheur et volontaire de la société civile engagé pour la paix et la justice sociale dans l’Est de la RDC. Actif au Pole Institute, il mène des campagnes contre le tribalisme et pour la citoyenneté responsable...",
  bioFull:
    "Chercheur et volontaire de la société civile engagé pour la paix, la justice sociale et l’esprit critique des jeunes dans l’Est de la RDC. Depuis 2020, il est actif au sein du Pole Institute, participant à des campagnes contre le tribalisme et pour la citoyenneté responsable. Il a contribué à des colloques internationaux et à des initiatives de cohésion sociale et de consolidation de la paix avec des organisations comme Search for Common Ground.",
},
{
  id: "117",
  name: "Mohamed Musa Abdualazim",
  country: "SD",
  sector: "21 ans",
  image: "/leaders/Abdualazim_Mohamed.jpeg",
  bioShort:
    "Étudiant en médecine et militant climatique, il s’engage au sein de l’Afro-Arab Youth Council pour la paix, le dialogue et l’autonomisation des jeunes. Il relie santé, climat et justice sociale à travers des actions éducatives...",
  bioFull:
    "Il a construit son parcours associatif autour de la conviction que l’action collective des jeunes est un moteur de transformation sociale. Actif au sein de l’Afro-Arab Youth Council, il collabore avec des jeunes leaders d’Afrique et du monde arabe. Étudiant en médecine et militant climatique, il participe à des campagnes de sensibilisation sur l’impact du changement climatique sur la santé et les populations vulnérables.",
},
{
  id: "118",
  name: "Mojapelo Princess",
  country: "ZA",
  sector: "25 ans",
  image: "/leaders/princess_princeé_mo.jpeg",
  bioShort:
    "Parlementaire jeunesse sud-africaine et conférencière, elle est engagée en politique et leadership institutionnel. Honourable Youth Parliamentarian, elle participe à l’élaboration de politiques et à la représentation des priorités de la jeunesse...",
  bioFull:
    "Elle est parlementaire jeunesse, conférencière et militante engagée, spécialisée en politique, leadership et engagement institutionnel. Honourable Youth Parliamentarian pour l’Afrique du Sud, elle est rapporteure au Business, Innovation, and Entrepreneurship Committee du Southern Africa Youth Forum. Elle poursuit un Master en recherche politique et gouvernance à l’Université de Johannesburg.",
},
{
  id: "119",
  name: "Mahamat Zenal Abdhine Ben Ali",
  country: "CF",
  sector: "27 ans",
  image: "/leaders/abdhine_ben_ali.jpg",
  bioShort:
    "Engagé au sein de l’Afro-Arab Youth Council, il œuvre pour le dialogue, la coopération et la compréhension entre les jeunes d’Afrique et du monde arabe, avec une vision panafricaine tournée vers la paix et le développement durable...",
  bioFull:
    "Son engagement au sein de l’Afro-Arab Youth Council a façonné sa vision panafricaine et afro-arabe. Il participe à des initiatives favorisant le dialogue, la coopération et la compréhension mutuelle entre les jeunes d’Afrique et du monde arabe, convaincu que les aspirations collectives peuvent se traduire en actions concrètes pour le développement durable et la paix.",
},
{
  id: "120",
  name: "BUNE FUAD GENA",
  country: "ET",
  sector: "24 ans",
  image: "/leaders/Fuad_Gena.jpg",
  bioShort:
    "Président du Conseil National de la Jeunesse Éthiopienne, il œuvre pour l’inclusion, la mobilisation des jeunes et la cohésion sociale. Il collabore avec institutions et associations pour renforcer la participation citoyenne...",
  bioFull:
    "Président du Conseil National de la Jeunesse Éthiopienne, engagé dans l’inclusion, la mobilisation des jeunes et le développement de la nation. Il a travaillé avec associations, institutions académiques et organismes publics pour renforcer la participation des jeunes aux décisions et promouvoir leur rôle dans la paix et la cohésion sociale.",
},
{
  id: "121",
  name: "oumasst oussama",
  country: "MA",
  sector: "20 ans",
  image: "/leaders/oussamaoumasst.png",
  bioShort:
    "Figure majeure de l’écosystème entrepreneurial étudiant, il a dirigé le Hult Prize CUAM, incubant 16 startups et organisant plus de 50 événements. Fondateur d’Epik Leaders CUAM, il a impacté plus de 400 étudiants...",
  bioFull:
    "Il a débuté son parcours au Campus Universitaire Ait Melloul avec le Hult Prize, passant de participant à Campus Director, pilotant un programme d’incubation de 16 startups, 30 événements et 20 partenariats. Fondateur d’Epik Leaders CUAM, il accompagne la jeunesse dans le leadership et l’entrepreneuriat.",
},
{
  id: "122",
  name: "Zeinaba Narabene Farka",
  country: "ML",
  sector: "29 ans",
  image: "/leaders/Zeinaba_Narabene.jpeg",
  bioShort:
    "Coordinatrice du Sahelian Youth Climate Network au Mali, elle mène des actions de sensibilisation, d’éducation climatique et de plaidoyer. Co-présidente du RBM Youth Workstream, elle intervient dans des forums internationaux...",
  bioFull:
    "Elle coordonne le Sahelian Youth Climate Network au Mali, menant des initiatives de sensibilisation, d’éducation climatique et de mobilisation citoyenne. À l’international, elle co-préside le RBM Youth Workstream et intervient dans des forums de haut niveau, y compris aux Nations Unies.",
},
{
  id: "123",
  name: "Ali Mfaoume Andjibou Nourrat",
  country: "KM",
  sector: "28 ans",
  image: "/leaders/Nourrat_Aman.jpg",
  bioShort:
    "Directeur d’un centre culturel et éducatif, il œuvre depuis plus de dix ans pour la lecture, l’éducation et l’inclusion sociale. Il coordonne des actions communautaires favorisant le développement personnel et collectif...",
  bioFull:
    "Engagé depuis plus de dix ans au Cultural and Reading Center, il a contribué à de nombreuses initiatives éducatives et culturelles. Depuis deux ans, en tant que directeur, il coordonne des actions communautaires visant à rendre la culture et l’éducation accessibles à tous.",
},
{
  id: "124",
  name: "Magadu Gerald Leeroy",
  country: "ZW",
  sector: "20 ans",
  image: "/leaders/magadu.jpg",
  bioShort:
    "Jeune leader visionnaire du Zimbabwe, engagé pour l’autonomisation des jeunes et la lutte contre la drogue. Fondateur de S.O.L.I.D, il promeut un leadership responsable et panafricaniste...",
  bioFull:
    "Jeune leader visionnaire et futur diplomate du Zimbabwe, engagé dans l’autonomisation des jeunes, le leadership responsable et la lutte contre la drogue. Étudiant en Sciences Politiques et Diplomatie à l’Université du Zimbabwe, il allie formation académique et action citoyenne. Fondateur de S.O.L.I.D, il sensibilise les jeunes aux choix positifs et au leadership, et son engagement au sein de l’Afro Arab Youth Council renforce sa vision panafricaine et afro-arabe.",
},
{
  id: "125",
  name: "Ulrich YOROU",
  country: "BJ",
  sector: "24 ans",
  image: "/leaders/yorou.jpg",
  bioShort:
    "Entrepreneur social et leader associatif, il s’engage pour la jeunesse et le développement durable. Fondateur de MycoGreen Solutions, il œuvre pour la sécurité alimentaire et l’innovation locale...",
  bioFull:
    "Son engagement associatif se concentre sur le leadership, la jeunesse et le développement durable. Entrepreneur social, il a fondé MycoGreen Solutions, initiative primée visant la sécurité alimentaire et la création d’opportunités économiques pour les jeunes. Il est également Facilitateur Bénin au sein de DAMAS Global.",
},
{
  id: "126",
  name: "AABADLI CHAHD",
  country: "MA",
  sector: "21 ans",
  image: "/leaders/aabadli_chahd.jpg",
  bioShort:
    "Entrepreneure engagée, elle combine leadership associatif et innovation durable. Active au sein d’Enactus, elle développe des startups écologiques axées sur l’agriculture et l’environnement...",
  bioFull:
    "Convaincue que le leadership doit produire un impact concret, elle s’illustre au sein d’Enactus et dans des caravanes médicales et sociales. Entrepreneure, elle a fondé SGW – Shrimp Green Water puis FertiShrimp, intégrées à l’AgriFoodTech Incubator – UM6P StartGate, incarnant une vision durable et scalable.",
},
{
  id: "127",
  name: "DEGLA Sewanou Hector Roland",
  country: "BJ",
  sector: "25 ans",
  image: "/leaders/Hector_DEGLA.jpg",
  bioShort:
    "Fondateur de Green Voices Afrique, il est engagé pour l’action climatique et la mobilisation des jeunes. Il coordonne des projets de reforestation, de sensibilisation et de justice climatique...",
  bioFull:
    "Engagé dans la protection de l’environnement et l’action climatique, fondateur de Green Voices Afrique. Il organise des actions communautaires, conférences et projets de reforestation, transformant ses idées en initiatives durables portées par la jeunesse africaine.",
},
{
  id: "128",
  name: "El Baida Ayman",
  country: "MA",
  sector: "21 ans",
  image: "/leaders/ayman_el_bayda.jpg",
  bioShort:
    "Jeune leader académique et associatif, il s’est illustré très tôt en public speaking et leadership étudiant. Président de plusieurs instances étudiantes, il développe des initiatives à fort impact institutionnel...",
  bioFull:
    "Son parcours se construit autour de l’excellence académique et du leadership. Président du BDE CPGEK puis Vice-Président du BDE Maroc, il mène des actions solidaires et institutionnelles. Aujourd’hui élève-ingénieur à l’ESI, il préside plusieurs structures étudiantes et participe à des forums internationaux.",
},
{
  id: "129",
  name: "Madoussou Yasmine TOURE",
  country: "CI",
  sector: "26 ans",
  image: "",
  bioShort:
    "Engagée au Sénat des Jeunes, elle mène des actions de plaidoyer pour l’éducation, l’insertion professionnelle et la participation citoyenne. Son impact se manifeste aussi bien sur le terrain que sur les réseaux...",
  bioFull:
    "Son engagement au sein du Sénat des Jeunes se traduit par des actions fortes en faveur de l’éducation, de l’insertion professionnelle et de la participation active des jeunes à la vie publique, générant une mobilisation durable et visible.",
},
{
  id: "130",
  name: "Olivier Akuzibwe Mayeri",
  country: "CD",
  sector: "28 ans",
  image: "/leaders/ayman_el_bayda.jpg",
  bioShort:
    "Jeune leader congolais engagé pour l’agriculture durable, la paix et l’entrepreneuriat jeune. Fondateur d’AGRI STORE ASBL, il agit pour l’autonomisation de la jeunesse en contexte fragile...",
  bioFull:
    "Jeune leader congolais de l’Est de la RDC, fondateur d’AGRI STORE ASBL et coordinateur de CIDE-SOLIDARITÉ. Il mène des actions en agriculture durable, protection de l’environnement et cohésion sociale, tout en soutenant le leadership étudiant et communautaire.",
},
{
  id: "131",
  name: "Sama Sarki Moussa",
  country: "NE",
  sector: "29 ans",
  image: "/leaders/moussa_sama_sarki.jpg",
  bioShort:
    "Étudiant en médecine et acteur de santé communautaire, il œuvre pour la prévention, l’accès aux soins et le leadership des jeunes dans les régions du Niger...",
  bioFull:
    "Son engagement associatif débute dans les régions de Tahoua et Zinder autour de la sensibilisation sanitaire. Étudiant en médecine, il coordonne des projets de prévention et poursuit son action pour renforcer la santé communautaire et l’impact social.",
},
{
  id: "132",
  name: "GASSI SALAH EDDINE",
  country: "MA",
  sector: "23 ans",
  image: "/leaders/salah_gassi.jpg",
  bioShort:
    "Engagé au sein d’EPIK Leaders, il développe son leadership à travers des actions solidaires et éducatives. Il participe à des événements panafricains et à des projets en faveur des enfants vulnérables...",
  bioFull:
    "Engagé depuis sa rencontre avec EPIK Leaders, il participe à de nombreux événements nationaux et internationaux. Il organise des actions solidaires avec l’association Bab Rayan, renforçant ses compétences en coordination et gestion de projets.",
},
{
  id: "133",
  name: "Atif Adam",
  country: "MA",
  sector: "22 ans",
  image: "/leaders/adam_atif.jpeg",
  bioShort:
    "Leader étudiant engagé pour l’environnement et le développement du leadership. Fondateur du club Green Impact Ain Sebaa et Président d’Epik Leaders FSJES Ain Sebaa...",
  bioFull:
    "Étudiant en Master Marketing Digital, il débute au club JLM puis Enactus, où il pilote des projets événementiels à impact social. Fondateur de Green Impact Ain Sebaa et Président d’Epik Leaders FSJES Ain Sebaa, il développe des initiatives porteuses de sens.",
},
{
  id: "134",
  name: "BARHADOSANYA Deogratias",
  country: "CD",
  sector: "26 ans",
  image: "/leaders/déogratias_cito.jpg",
  bioShort:
    "Activiste climatique, entrepreneur et journaliste environnemental, il s’engage pour la paix, la cohésion sociale et l’impact collectif dans la région des Grands Lacs...",
  bioFull:
    "Activiste engagé pour le climat et les droits humains, PDG de ComKivu Solution. Il promeut la paix et la cohésion sociale dans la région des Grands Lacs et œuvre comme journaliste environnemental.",
},
{
  id: "135",
  name: "Bincaz Violette",
  country: "FR",
  sector: "17 ans",
  image: "/leaders/violette_bincaz.jpg",
  bioShort:
    "Jeune leader engagée dans les Model United Nations, elle développe une forte compréhension des enjeux géopolitiques et sociaux. Active dans des actions solidaires au Maroc...",
  bioFull:
    "Engagée dans les Model United Nations depuis le lycée, elle a développé des compétences en leadership et en géopolitique. Active au Maroc, elle s’implique dans l’association Solidarité avec INSAF pour l’amélioration des conditions de vie des femmes et enfants.",
},
{
  id: "136",
  name: "Zongo Abdoul Ismaël",
  country: "BF",
  sector: "27 ans",
  image: "/leaders/ismael_zongo.jpeg",
  bioShort:
    "Médecin en formation engagé au service des communautés, il mène des actions humanitaires, sanitaires et de plaidoyer pour la santé sexuelle et reproductive...",
  bioFull:
    "Doctorant en médecine et interne en gynécologie-obstétrique, il s’engage pour la santé communautaire, la collecte de sang, l’aide humanitaire et le plaidoyer en santé sexuelle et reproductive.",
},
{
  id: "137",
  name: "ABKARI Mohammed Amine",
  country: "MA",
  sector: "34 ans",
  image: "/leaders/Mohammed_amine_abkari.jpeg",
  bioShort:
    "Acteur associatif engagé, il œuvre pour l’éducation, la citoyenneté et l’autonomisation des jeunes. Il croit en la société civile comme moteur de changement durable...",
  bioFull:
    "Il possède une solide expérience dans le travail associatif et communautaire, avec une implication active dans des initiatives éducatives et citoyennes visant à promouvoir l’autonomisation des jeunes et l’impact collectif.",
},
{
  id: "138",
  name: "Savane Djibril",
  country: "GN",
  sector: "24 ans",
  image: "/leaders/djiby_le_panaf.jpg",
  bioShort:
    "Panafricaniste engagé, il œuvre pour le développement citoyen, l’autonomisation des femmes et la paix en Afrique de l’Ouest et au Sahel...",
  bioFull:
    "Engagé depuis son jeune âge pour le développement de la Guinée et de l’Afrique, il mène des campagnes citoyennes, participe à des projets régionaux et œuvre pour la paix, l’unité et l’éducation.",
},
{
  id: "139",
  name: "Touré Faty Malima Ndouo",
  country: "ML",
  sector: "23 ans",
  image: "/leaders/faty_toure.png",
  bioShort:
    "Étudiante en médecine engagée dans l’action humanitaire, elle participe à des projets de santé, de sensibilisation et de soutien aux populations vulnérables...",
  bioFull:
    "Engagée au sein de l’ONG OPEN Mali, elle participe à des actions humanitaires, campagnes de sensibilisation et projets sociaux, renforçant la visibilité et l’impact des initiatives en faveur des communautés.",
},
{
  id: "140",
  name: "Diallo Thierno Aliou",
  country: "GN",
  sector: "29 ans",
  image: "/leaders/Thierno_Aliou_DIALLO.jpeg",
  bioShort:
    "Directeur technique et entrepreneur du secteur énergétique, il contribue activement à l’électrification et au développement infrastructurel de la Guinée...",
  bioFull:
    "Cogérant et Directeur Technique de CONSETIC SARL, il œuvre dans l’électrification et les infrastructures en Guinée, avec un impact significatif sur le développement énergétique national.",
},
{
  id: "141",
  name: "Diallo Thierno Mamadou Mouctar",
  country: "GN",
  sector: "26 ans",
  image: "/leaders/Thierno_Mamadou_Mouctar_Diallo.jpeg",
  bioShort:
    "Leader étudiant panafricain, il s’engage pour l’éducation, la citoyenneté universitaire et la défense des droits des étudiants à l’échelle continentale...",
  bioFull:
    "Secrétaire général de la Confédération Estudiantine et Scolaire d’Afrique (CESA), il œuvre pour l’accès équitable à une éducation de qualité et le renforcement des capacités des jeunes leaders africains.",
},
{
  id: "142",
  name: "Bah Mamadou Dian Baïlo",
  country: "GN",
  sector: "22 ans",
  image: "/leaders/MamadouDianBailo.png",
  bioShort:
    "Engagé au sein de la CESA, il contribue à la communication, à la mobilisation et à la promotion de l’éducation et de la citoyenneté chez les jeunes...",
  bioFull:
    "Secrétaire adjoint à la communication de la CESA, il participe aux actions de sensibilisation, de mobilisation et de diffusion d’informations en faveur des élèves et étudiants africains.",
}

];



  return (
    <section className="w-full py-16 sm:py-20 lg:py-28  bg-white">
        <SectionTitle title="THE 100 YOUNG AFRICAN LEADERS – EPIK 100" />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
          {leaders.map((leader) => {
            const hasImage = !!leader.image;
            const letter = leader.name.charAt(0);

            return (
              <div key={leader.id} className="perspective2">
                <div
                  className={`card-3d2 relative w-full h-[380px] sm:h-[420px] lg:h-[440px] border border-black/5 rounded-2xl ${
                    flipped === leader.id ? "is-flipped2" : ""
                  }`}
                >
                  <div className="card-face2 card-front2 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
                    <div className="w-full h-[140px] rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                      {hasImage ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c]">
                          {letter}
                        </div>
                      )}
                    </div>

                    <h3 className="text-[#1f2937] text-sm sm:text-base font-semibold">
                      {leader.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-[#4b5563] mt-1">
                      <ReactCountryFlag
                        svg
                        countryCode={leader.country}
                        style={{ width: "1.6em", height: "1.6em" }}
                        className="sm:[&]:!w-[2.1em] sm:[&]:!h-[2.1em]"
                      />
                        <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#e4c45c]/80 text-[#e4c45c] text-xs font-medium tracking-wide">
                            {leader.sector}
                        </span>
                    </div>

                    <p className="text-[#4b5563] text-xs sm:text-2xs mt-3 line-clamp-3">
                      {leader.bioShort}
                    </p>

                    <button
                      onClick={() => setFlipped(leader.id)}
                      className="mt-auto text-xs text-[#e4c45c] font-semibold self-start"
                    >
                      See more
                    </button>
                  </div>

                  <div className="card-face2 card-back2 absolute inset-0 bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c] rounded-2xl p-5 text-white flex flex-col">
                    <h3 className="text-[#e4c45c] text-sm sm:text-base font-semibold mb-3">
                      {leader.name}
                    </h3>

                    <p className="text-xs sm:text-2xs leading-relaxed text-white/90 flex-1">
                      {leader.bioFull}
                    </p>

                    <button
                      onClick={() => setFlipped(null)}
                      className="mt-4 text-xs text-[#e4c45c] font-semibold self-start"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
