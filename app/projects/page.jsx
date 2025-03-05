"use client";
import Carousel from "@/components/carousel";
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
  SiPython,
  SiGithub,
  SiFigma,
  SiSass,
  SiMongodb,
  SiFeedly,
  SiCanva,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiC,
} from "react-icons/si";
import { TbBrandVscode, TbSeo } from "react-icons/tb";
import { VscDebugAll } from "react-icons/vsc";
import { IoTerminal } from "react-icons/io5";
import ChatGPTLogo from "@/public/ChatGPT_logo.png";
import { BiHandicap } from "react-icons/bi";
import { FaChrome } from "react-icons/fa";

export default function Projects() {

  const openClassroomsProjects = [
    {
      title: "Booki",
      src: Booki,
      icons: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiCss3, color: "#264de4" },
      ],
    },
    {
      title: "Sophie Bluel",
      src: SophieBluel,
      icons: [{ icon: SiJavascript, color: "#F7DF1E" }],
    },
    {
      title: "Nina Carducci",
      src: NinaCarducci,
      icons: [{ icon: SiReact, color: "#61DAFB" }],
    },
    {
      title: "Kasa",
      src: Kasa,
      icons: [
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiCss3, color: "#264de4" },
      ],
    },
    {
      title: "Mon vieux grimoire",
      src: MonVieuxGrimoire,
      icons: [{ icon: SiJavascript, color: "#F7DF1E" }],
    },
    {
      title: "Qwenta",
      src: Qwenta,
      icons: [],
    },
  ];
  

  const otherProjects = [
    {
      title: "MangaBunka",
      src: "",
      icons: [{ icon: SiJavascript, color: "#F7DF1E" }],
    },
    {
      title: "Qwenta",
      src: "",
      icons: [],
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20 my-10 space-y-20">

      <section className="mb-44">
        <h2 className="text-3xl font-bold text-center mb-10">
          Projets OpenClassrooms
        </h2>
        <Carousel slides={openClassroomsProjects} />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          Autres Projets
        </h2>
        <Carousel slides={otherProjects} />
      </section>
    </div>
  );
}