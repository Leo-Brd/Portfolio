"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { ToolIcon } from "@/components/ui/toolIcon"
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
import ChatGPTLogo from "@/public/logos//ChatGPT_logo.png";
import { BiHandicap } from "react-icons/bi";
import { FaChrome } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { RiNotionFill } from "react-icons/ri";

const tools = [
  { icon: <SiHtml5 className="w-[40px] h-[40px] text-[#E34F26]" />, name: "HTML5", category: "Langages" },
  { icon: <SiCss3 className="w-[40px] h-[40px] text-[#1572B6]" />, name: "CSS3", category: "Langages" },
  { icon: <SiJavascript className="w-[40px] h-[40px] text-[#F7DF1E]" />, name: "JavaScript", category: "Langages" },
  { icon: <SiPython className="w-[40px] h-[40px] text-[#3776AB]" />, name: "Python", category: "Langages" },
  { icon: <SiC className="w-[40px] h-[40px] text-[#226db3]" />, name: "C", category: "Langages" },
  { icon: <SiSass className="w-[40px] h-[40px] text-[#CC6699]" />, name: "Sass", category: "Langages" },
  { icon: <TbBrandVscode className="w-[40px] h-[40px] text-[#007ACC]" />, name: "VS Code", category: "Outils de développement" },
  { icon: <SiGithub className="w-[40px] h-[40px] text-black dark:text-white" />, name: "GitHub", category: "Outils de développement" },
  { icon: <SiGit className="w-[40px] h-[40px] text-[#F05032]" />, name: "Git", category: "Outils de développement" },
  { icon: <IoTerminal className="w-[40px] h-[40px] text-black dark:text-[#ffffff]" />, name: "Terminal", category: "Outils de développement" },
  { icon: <img src={ChatGPTLogo.src} alt="Logo de ChatGPT" className="w-[40px] h-[40px] text-[#3bc5ba]" />, name: "IA", category: "Outils de développement" },
  { icon: <FaChrome className="w-[40px] h-[40px] text-[#237aff]" />, name: "Chrome Devtools", category: "Outils de développement" },
  { icon: <SiFigma className="w-[40px] h-[40px] text-[#F24E1E]" />, name: "Figma", category: "Design" },
  { icon: <SiCanva className="w-[40px] h-[40px] text-[#3bc5ba]" />, name: "Canva", category: "Design" },
  { icon: <CiMobile1 className="w-[40px] h-[40px] text-black dark:text-white" />, name: "Responsive Design", category: "Design" },
  { icon: <SiReact className="w-[40px] h-[40px] text-[#61DAFB]" />, name: "React", category: "Frameworks" },
  { icon: <SiNodedotjs className="w-[40px] h-[40px] text-[#339933]" />, name: "Node.js Express", category: "Frameworks" },
  { icon: <SiMongodb className="w-[40px] h-[40px] text-[#47A248]" />, name: "MongoDB", category: "Bases de données" },
  { icon: <TbSeo className="w-[40px] h-[40px] text-[#0D6EFD]" />, name: "Référencement", category: "Autres" },
  { icon: <BiHandicap className="w-[40px] h-[40px] text-black dark:text-white" />, name: "Accessibilité", category: "Autres" },
  { icon: <VscDebugAll className="w-[40px] h-[40px] text-[#DC3545]" />, name: "Debug", category: "Autres" },
  { icon: <SiFeedly className="w-[40px] h-[40px] text-[#3ba83b]" />, name: "Feedly (veille technologique)", category: "Autres" },
  { icon: <RiNotionFill className="w-[40px] h-[40px] text-black dark:text-white" />, name: "Notion", category: "Autres" },
];

const mainSkills = [
  { icon: <SiReact className="w-[80px] h-[80px] text-[#61DAFB]" />, name: "React", description: "Développement d'interfaces dynamiques et réactives." },
  { icon: <SiNodedotjs className="w-[80px] h-[80px] text-[#339933]" />, name: "Node.js", description: "Développement back-end avec JavaScript." },
  { icon: <SiGit className="w-[80px] h-[80px] text-[#F05032]" />, name: "Git", description: "Gestion de versions pour le travail collaboratif." },
];

const learningSkills = [
  { icon: <SiNextdotjs className="w-[60px] h-[60px] text-black dark:text-white" />, name: "Next.js", description: "Applications web performantes avec rendu côté serveur." },
  { icon: <SiTailwindcss className="w-[60px] h-[60px] text-[#38BDF8]" />, name: "Tailwind CSS", description: "Design rapide et flexible avec un framework utilitaire." },
];

export default function Skills() {
  const { t, i18n } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Langages", "Outils de développement", "Design", "Frameworks", "Bases de données", "Autres"];

  const filteredTools = selectedCategory === "Tous"
    ? tools
    : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <section className="py-20 w-full max-w-6xl mx-auto my-8">
      {/* Compétences principales */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20 mt-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Mes Compétences Principales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-8 bg-card border border-border rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl dark:shadow-white/10 transition-shadow"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-6xl">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Outils et technologies */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-28"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-left text-foreground">
          Ce que je maîtrise...
        </h2>

        {/* Boutons de filtrage */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Outils filtrés */}
        <div className="relative h-40">
          <div className="flex flex-wrap gap-6 justify-start items-start align-content-start">
            {filteredTools.map((tool, index) => (
              <ToolIcon key={index} tool={tool} index={index} />
            ))}
          </div>
        </div>

      </motion.div>

      {/* En cours d'apprentissage */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          En Cours d'Apprentissage...
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {learningSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-8 bg-card border border-border rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl dark:shadow-white/10 transition-shadow"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-6xl">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}