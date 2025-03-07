import Booki_1 from "@/public/projects/booki_1.png"
import Booki_2 from "@/public/projects/booki_2.png"
import Booki_3 from "@/public/projects/booki_3.png"
import SophieBluel from "@/public/projects/sophie_bluel.png"
import SophieBluel_2 from "@/public/projects/sophie_bluel_2.png"
import SophieBluel_3 from "@/public/projects/sophie_bluel_3.png"
import NinaCarducci from "@/public/projects/nina_carducci.png"
import Kasa from "@/public/projects/kasa.png"
import MonVieuxGrimoire from "@/public/projects/mon_vieux_grimoire.png"
import Qwenta from "@/public/projects/qwenta.png"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiMongodb,
  SiFeedly,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { VscDebugAll } from "react-icons/vsc";
import { BiHandicap } from "react-icons/bi";
import { CiMobile1 } from "react-icons/ci";
import { RiNotionFill } from "react-icons/ri";

export const openClassroomsProjects = [
    {
      title: "Booki",
      images: [Booki_1, Booki_2, Booki_3],
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: CiMobile1, color: "text-black", darkColor: "text-white" },],
      description:"( scénario fictif )\nLa start-up Booki souhaitait réaliser leur site internet et m'ont chargés d'intégrer son interface. Il permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai utilisé les langages HTML et CSS afin de reproduire la maquette qui m'était fournie.\n \nLe site est responsive, ce qui signifie que le contenu s'adapte selon la taille d'écran. Le site a une version tablette ainsi qu'une version mobile.",
      github: "https://github.com/Leo-Brd/OC_Booki",
    },
    {
      title: "Sophie Bluel",
      images: [SophieBluel, SophieBluel_2, SophieBluel_3],
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: SiJavascript, color: "text-[#F7DF1E]" }],
      description:"( scénario fictif )\nUne équipe travaillant sur le portfolio d'une architecte d'intérieur m'a recruté pour que je m'occupe de la partie Frontend. J'ai utilisé le langage Javascript mêlé au HTML/CSS afin de rendre la page dynamique et faire des requêtes à l'API.\nLe site est composé d'une présentation professionnelle ainsi que d'un formulaire de contact. Il possède une page de connexion qui permet à l'architecte de s'identifier. En mode connecté, il est possible d'ajouter ou de supprimer des projets dynamiquement via une modale. Les projets peuvent être triés par catégorie dans la page principale.",
      github: "https://github.com/Leo-Brd/OC_Sophie_Bluel",
    },
    {
      title: "Nina Carducci",
      images: [NinaCarducci],
      icons: [
        { icon: VscDebugAll, color: "text-[#DC3545]" },
        { icon: BiHandicap, color: "text-black", darkColor: "text-white" },
        { icon: TbSeo, color: "text-[#0D6EFD]" }],
        description:"test",
        github: "https://github.com/Leo-Brd/OC_Nina_Carducci",
    },
    {
      title: "Kasa",
      images: [Kasa],
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiSass, color: "text-[#CC6699]" }],
      description:"test",
      github: "https://github.com/Leo-Brd/OC_Kasa",
    },
    {
      title: "Mon vieux grimoire",
      images: [MonVieuxGrimoire],
      icons: [
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" }],
      description:"test",
      github: "https://github.com/Leo-Brd/OC_Mon_Vieux_Grimoire",
    },
    {
      title: "Qwenta",
      images: [Qwenta],
      icons: [
        { icon: SiFeedly, color: "text-[#339933]" },
        { icon: RiNotionFill, color: "text-black", darkColor: "text-white" }],
      description:"test",
      github: "https://github.com/Leo-Brd/OC_Qwenta",
    },
];
  

export const otherProjects = [
    {
      title: "MangaBunka",
      images: [SophieBluel],
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" }],
      description:"test",
      github: "https://github.com/Leo-Brd/MangaBunka",
    },
    {
      title: "Autre",
      images: [SophieBluel],
      icons: [],
      description:"test",
      github: "https://github.com/Leo-Brd/OC_Sophie_Bluel",
    },
];