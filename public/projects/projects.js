import Booki from "@/public/projects/booki.png"
import SophieBluel from "@/public/projects/sophie_bluel.png"
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
      src: Booki,
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: CiMobile1, color: "text-black", darkColor: "text-white" },
      ],
    },
    {
      title: "Sophie Bluel",
      src: SophieBluel,
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: SiJavascript, color: "text-[#F7DF1E]" }],
    },
    {
      title: "Nina Carducci",
      src: NinaCarducci,
      icons: [
        { icon: VscDebugAll, color: "text-[#DC3545]" },
        { icon: BiHandicap, color: "text-black", darkColor: "text-white" },
        { icon: TbSeo, color: "text-[#0D6EFD]" },
      ],
    },
    {
      title: "Kasa",
      src: Kasa,
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiSass, color: "text-[#CC6699]" },
      ],
    },
    {
      title: "Mon vieux grimoire",
      src: MonVieuxGrimoire,
      icons: [
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" },
      ],
    },
    {
      title: "Qwenta",
      src: Qwenta,
      icons: [
        { icon: SiFeedly, color: "text-[#339933]" },
        { icon: RiNotionFill, color: "text-black", darkColor: "text-white" },
      ],
    },
];
  

export const otherProjects = [
    {
      title: "MangaBunka",
      src: "",
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" },
      ],
    },
    {
      title: "Autre",
      src: "",
      icons: [],
    },
];