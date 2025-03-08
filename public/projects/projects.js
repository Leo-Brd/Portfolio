import Booki_1 from "@/public/projects/booki_1.png"
import Booki_2 from "@/public/projects/booki_2.png"
import Booki_3 from "@/public/projects/booki_3.png"
import SophieBluel from "@/public/projects/sophie_bluel.png"
import SophieBluel_2 from "@/public/projects/sophie_bluel_2.png"
import SophieBluel_3 from "@/public/projects/sophie_bluel_3.png"
import NinaCarducci from "@/public/projects/nina_carducci.png"
import NinaCarducci_2 from "@/public/projects/nina_carducci_2.png"
import NinaCarducci_3 from "@/public/projects/nina_carducci_3.png"
import NinaCarducci_4 from "@/public/projects/nina_carducci_4.png"
import Kasa from "@/public/projects/kasa.png"
import Kasa_2 from "@/public/projects/kasa_2.png"
import Kasa_3 from "@/public/projects/kasa_3.png"
import Kasa_4 from "@/public/projects/kasa_4.png"
import MonVieuxGrimoire from "@/public/projects/mon_vieux_grimoire.png"
import MonVieuxGrimoire_2 from "@/public/projects/mon_vieux_grimoire_2.png"
import MonVieuxGrimoire_3 from "@/public/projects/mon_vieux_grimoire_3.png"
import MonVieuxGrimoire_4 from "@/public/projects/mon_vieux_grimoire_4.png"
import Qwenta from "@/public/projects/qwenta.png"
import Qwenta_2 from "@/public/projects/qwenta_2.png"
import Qwenta_3 from "@/public/projects/qwenta_3.png"
import Qwenta_4 from "@/public/projects/qwenta_4.png"
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
      images: [NinaCarducci, NinaCarducci_2, NinaCarducci_3, NinaCarducci_4],
      icons: [
        { icon: VscDebugAll, color: "text-[#DC3545]" },
        { icon: BiHandicap, color: "text-black", darkColor: "text-white" },
        { icon: TbSeo, color: "text-[#0D6EFD]" }],
        description:"( scénario fictif )\nAprès avoir remarqué de nombreux problèmes sur le site de la photographe Nina Carducci, je l'ai contacté afin de lui proposer mes services.\nJ'ai tout d'abord réglé quelques erreurs de code qui faisaient disfonctionner le site. J'ai ensuite réalisé un audit et un rapport d'intervention afin de lister les modifications apportées.\nLes performances du site ont été nettement améliorées, en grande partie grâce à la compression des images. Le site a été restructuré et adapté afin d'être accessible par tout type d'utilisateur ( notamment les personnes handicapées ). J' ai aussi rendu le code plus clair et j'ai ajouté des balises afin d'améliorer son référencement par les navigateurs de recherche ( SEO ).",
        github: "https://github.com/Leo-Brd/OC_Nina_Carducci",
    },
    {
      title: "Kasa",
      images: [Kasa, Kasa_2, Kasa_3, Kasa_4],
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiSass, color: "text-[#CC6699]" },
        { icon: CiMobile1, color: "text-black", darkColor: "text-white" },],
      description:"( scénario fictif )\nL'entreprise de location immobilière Kasa entamait la refonte de son site internet. En tant que développeur Frontend freelance, j'ai été chargé de recoder le site en utilisant le framework javascript React. Le site permet aux utilisateurs de trouver un appartement à louer et de se renseigner sur celui-ci.\nJ'ai donc reproduis la maquette en créant les composants React nécessaires. Le style du site a été réalisé avec le langage Sass qui permet de rendre l'utilisation du CSS plus pratique. Quelques petites animations ont été réalisées, par exemple lors de l'ouverture des collapses. Le site est responsive et donc adapté pour les utilisateurs sur mobile.",
      github: "https://github.com/Leo-Brd/OC_Kasa",
    },
    {
      title: "Mon vieux grimoire",
      images: [MonVieuxGrimoire_3, MonVieuxGrimoire, MonVieuxGrimoire_2, MonVieuxGrimoire_4],
      icons: [
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" }],
      description:"( scénario fictif )\nUn collègue souhaitait réaliser un site de référencement et de notation de livres pour une chaîne de librairie nommée \"Mon vieux grimoire\". J'ai accepté de m'occuper de la partie Backend qui devait être réalisée avec le framework Express de Nodejs, en communiquant avec une base de données MongoDB.\nJ'ai tout d'abord réalisé les méthodes qui permettent aux utilisateurs de s'inscrire et de se connecter. J'ai ensuite réalisé les routes API qui servent à créer, modifier ou supprimer des livres. Les images des livres sont stockées avec Multer et compressées avec Sharp. J'ai finis par coder les routes qui permettent aux utilisateurs de noter les livres postés sur le site. Les 3 livres les mieux notés apparaissent sur chaque page.",
      github: "https://github.com/Leo-Brd/OC_Mon_Vieux_Grimoire",
    },
    {
      title: "Qwenta",
      images: [Qwenta, Qwenta_2, Qwenta_3, Qwenta_4],
      icons: [
        { icon: SiFeedly, color: "text-[#339933]" },
        { icon: RiNotionFill, color: "text-black", darkColor: "text-white" }],
      description:"( scénario fictif )\nEn tant que développeur de l'agence Webgencia, j'ai été choisi afin de planifier notre prochain projet. Il s'agissait du nouveau site internet \"Menu Maker\" de l'entreprise Qwenta. Le site permet aux restaurateurs de créer un menu de restaurant personnalisé afin de l'utiliser comme ils le souhaitent.\nJ'ai tout d'abord effectué une veille technologique organisée afin de sélectionner les outils du projet. J'ai ensuite créé le document qui liste les détails des spécifications techniques. J'ai alors réparti les tâches au sein d'un tableau Kanban sur Notion afin d'organiser le projet. J'ai finis par préparer la présentation au Product Owner afin de le briefer.",
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