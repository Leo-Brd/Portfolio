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
      images: [Booki, SophieBluel],
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: CiMobile1, color: "text-black", darkColor: "text-white" },],
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Sophie Bluel",
      images: [SophieBluel],
      icons: [
        { icon: SiHtml5, color: "text-[#E34F26]" },
        { icon: SiCss3, color: "text-[#1572B6]" },
        { icon: SiJavascript, color: "text-[#F7DF1E]" }],
      description:"test",
    },
    {
      title: "Nina Carducci",
      images: [NinaCarducci],
      icons: [
        { icon: VscDebugAll, color: "text-[#DC3545]" },
        { icon: BiHandicap, color: "text-black", darkColor: "text-white" },
        { icon: TbSeo, color: "text-[#0D6EFD]" }],
        description:"test",
    },
    {
      title: "Kasa",
      images: [Kasa],
      icons: [
        { icon: SiReact, color: "text-[#61DAFB]" },
        { icon: SiSass, color: "text-[#CC6699]" }],
      description:"test",
    },
    {
      title: "Mon vieux grimoire",
      images: [MonVieuxGrimoire],
      icons: [
        { icon: SiNodedotjs, color: "text-[#339933]" },
        { icon: SiMongodb, color: "text-[#47A248]" }],
      description:"test",
    },
    {
      title: "Qwenta",
      images: [Qwenta],
      icons: [
        { icon: SiFeedly, color: "text-[#339933]" },
        { icon: RiNotionFill, color: "text-black", darkColor: "text-white" }],
      description:"test",
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
    },
    {
      title: "Autre",
      images: [SophieBluel],
      icons: [],
      description:"test",
    },
];