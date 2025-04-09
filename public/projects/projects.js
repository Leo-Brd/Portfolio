import Booki_1 from "@/public/projects/booki/booki_1.webp"
import Booki_2 from "@/public/projects/booki/booki_2.webp"
import Booki_3 from "@/public/projects/booki/booki_3.webp"
import SophieBluel from "@/public/projects/sophie_bluel/sophie_bluel.webp"
import SophieBluel_2 from "@/public/projects/sophie_bluel/sophie_bluel_2.webp"
import SophieBluel_3 from "@/public/projects/sophie_bluel/sophie_bluel_3.webp"
import NinaCarducci from "@/public/projects/nina_carducci/nina_carducci.webp"
import NinaCarducci_2 from "@/public/projects/nina_carducci/nina_carducci_2.webp"
import NinaCarducci_3 from "@/public/projects/nina_carducci/nina_carducci_3.webp"
import NinaCarducci_4 from "@/public/projects/nina_carducci/nina_carducci_4.webp"
import Kasa from "@/public/projects/kasa/kasa.webp"
import Kasa_2 from "@/public/projects/kasa/kasa_2.webp"
import Kasa_3 from "@/public/projects/kasa/kasa_3.webp"
import Kasa_4 from "@/public/projects/kasa/kasa_4.webp"
import MonVieuxGrimoire from "@/public/projects/mon_vieux_grimoire/mon_vieux_grimoire.webp"
import MonVieuxGrimoire_2 from "@/public/projects/mon_vieux_grimoire/mon_vieux_grimoire_2.webp"
import MonVieuxGrimoire_3 from "@/public/projects/mon_vieux_grimoire/mon_vieux_grimoire_3.webp"
import MonVieuxGrimoire_4 from "@/public/projects/mon_vieux_grimoire/mon_vieux_grimoire_4.webp"
import Qwenta from "@/public/projects/qwenta/qwenta.webp"
import Qwenta_2 from "@/public/projects/qwenta/qwenta_2.webp"
import Qwenta_3 from "@/public/projects/qwenta/qwenta_3.webp"
import Qwenta_4 from "@/public/projects/qwenta/qwenta_4.webp"
import Portfolio_1 from "@/public/projects/portfolio_1.webp"
import Mangabunka from "@/public/projects/mangabunka/mangabunka.webp"
import Mangabunka_2 from "@/public/projects/mangabunka/mangabunka_2.webp"
import Mangabunka_3 from "@/public/projects/mangabunka/mangabunka_3.webp"
import Mangabunka_4 from "@/public/projects/mangabunka/mangabunka_4.webp"
import Mangabunka_5 from "@/public/projects/mangabunka/mangabunka_5.webp"
import Mangabunka_6 from "@/public/projects/mangabunka/mangabunka_6.webp"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiMongodb,
  SiFeedly,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
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
      carouselImgPosition: "left",
      ProjectPageImgPosition: "left",
    },
    {
      title: "Sophie Bluel",
      images: [SophieBluel, SophieBluel_2, SophieBluel_3],
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: SiJavascript, color: "text-[#F7DF1E]" }],
      description:"( scénario fictif )\nUne équipe travaillant sur le portfolio d'une architecte d'intérieur m'a recruté pour que je m'occupe de la partie Frontend. J'ai utilisé le langage Javascript mêlé au HTML/CSS afin de rendre la page dynamique et faire des requêtes à l'API.\nLe site est composé d'une présentation professionnelle ainsi que d'un formulaire de contact. Il possède une page de connexion qui permet à l'architecte de s'identifier. En mode connecté, il est possible d'ajouter ou de supprimer des projets dynamiquement via une modale. Les projets peuvent être triés par catégorie dans la page principale.\n\n Difficultés rencontrées :\nJ'ai eu un soucis de rechargement de page lors de la soumission du formulaire. C'est en parcourant dans les ChromeDevtools que j'ai trouvé que le problème venait de l'extension Live Server qui rechargait ma page lors du clic. J'ai aussi eu quelques soucis lors du fetch pour ajouter des projets, que j'ai pu résoudre à l'aide de mon mentor.",
      github: "https://github.com/Leo-Brd/OC_Sophie_Bluel",
      carouselImgPosition: "center",
      ProjectPageImgPosition: "left",
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
        carouselImgPosition: "center",
        ProjectPageImgPosition: "left",
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
      carouselImgPosition: "center",
      ProjectPageImgPosition: "left",
    },
    {
      title: "Mon vieux grimoire",
      images: [MonVieuxGrimoire_3, MonVieuxGrimoire, MonVieuxGrimoire_2, MonVieuxGrimoire_4],
      icons: [
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" }],
      description:"( scénario fictif )\nUn collègue souhaitait réaliser un site de référencement et de notation de livres pour une chaîne de librairie nommée \"Mon vieux grimoire\". J'ai accepté de m'occuper de la partie Backend qui devait être réalisée avec le framework Express de Nodejs, en communiquant avec une base de données MongoDB.\nJ'ai tout d'abord réalisé les méthodes qui permettent aux utilisateurs de s'inscrire et de se connecter. J'ai ensuite réalisé les routes API qui servent à créer, modifier ou supprimer des livres. Les images des livres sont stockées avec Multer et compressées avec Sharp. J'ai finis par coder les routes qui permettent aux utilisateurs de noter les livres postés sur le site. Les 3 livres les mieux notés apparaissent sur chaque page.\n\n Difficultés rencontrées :\nJ'ai pu rencontrer quelques problèmes lors de ce projet, notamment lors de l'affichage des notes, les données renvoyées causaient des erreurs d'affichage (j'ai finis par résoudre l'erreur de syntaxe en parcourant le code avec mon mentor). Lors du stockage des images avec Multer, j'ai eu du mal à permettre la suppression des images à cause des permissions windows, mais j'ai finis par trouver une solution sur internet.",
      github: "https://github.com/Leo-Brd/OC_Mon_Vieux_Grimoire",
      carouselImgPosition: "center",
      ProjectPageImgPosition: "left",
    },
    {
      title: "Qwenta",
      images: [Qwenta, Qwenta_2, Qwenta_3, Qwenta_4],
      icons: [
        { icon: SiFeedly, color: "text-[#339933]" },
        { icon: RiNotionFill, color: "text-black", darkColor: "text-white" }],
      description:"( scénario fictif )\nEn tant que développeur de l'agence Webgencia, j'ai été choisi afin de planifier notre prochain projet. Il s'agissait du nouveau site internet \"Menu Maker\" de l'entreprise Qwenta. Le site permet aux restaurateurs de créer un menu de restaurant personnalisé afin de l'utiliser comme ils le souhaitent.\nJ'ai tout d'abord effectué une veille technologique organisée afin de sélectionner les outils du projet. J'ai ensuite créé le document qui liste les détails des spécifications techniques. J'ai alors réparti les tâches au sein d'un tableau Kanban sur Notion afin d'organiser le projet. J'ai finis par préparer la présentation au Product Owner afin de le briefer.",
      github: "https://github.com/Leo-Brd/OC_Qwenta",
      carouselImgPosition: "center",
      ProjectPageImgPosition: "left",
    },
    {
      title: "Portfolio",
      images: [Portfolio_1],
      icons: [
        { icon: SiNextdotjs, color: "text-black", darkColor: "text-white" },
        { icon: SiTailwindcss, color: "text-[#38BDF8]" },
        { icon: CiMobile1, color: "text-black", darkColor: "text-white" }],
      description:"Le dernier projet de la formation était la création de mon portfolio professionnel (celui sur lequel vous êtes actuellement ). J'ai choisi de le réaliser avec le framework Next.js et d'utiliser Tailwind CSS pour le style. Celui-ci est entièrement responsive et a été hébergé à l'aide de Vercel. Vous pouvez le parcourir afin de découvrir mon parcours, mes compétences et mes projets. Il est aussi possible de me contacter directement depuis la page de contact.",
      github: "https://github.com/Leo-Brd/Portfolio",
      carouselImgPosition: "center",
      ProjectPageImgPosition: "center",
    },
];
  

export const otherProjects = [
    {
      title: "MangaBunka",
      images: [Mangabunka, Mangabunka_2, Mangabunka_3, Mangabunka_4, Mangabunka_5, Mangabunka_6],
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiSass, color: "text-[#CC6699]" },
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" }],
      description:"Mangabunka est une plateforme de quiz interactive dédiée aux fans de mangas et d'animés. Développée avec une stack MERN (MongoDB, Express, React, Node.js), l'application propose différents modes de jeu avec des questions générées via l'API Open Trivia.\nLes utilisateurs peuvent créer un compte (via email/mot de passe ou connexion Google), personnaliser leur profil et suivre leurs statistiques (parties jouées, score moyen, niveau et XP). Trois niveaux de difficulté sont disponibles (Easy, Medium, Hard), ainsi qu'un mode \"All\" avec des questions aléatoires. Un classement permet de se mesurer aux autres joueurs.\nCe projet allie ma passion pour la culture japonaise et mes compétences en développement full-stack, avec une attention particulière portée à l'expérience utilisateur et aux bonnes pratiques de sécurité.",
      github: "https://github.com/Leo-Brd/MangaBunka",
    }
];