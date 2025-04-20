"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { ToolIcon } from "@/components/ui/toolIcon";
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
  SiPostman,
} from "react-icons/si";
import { TbBrandVscode, TbSeo } from "react-icons/tb";
import { VscDebugAll } from "react-icons/vsc";
import { IoTerminal, IoRocket } from "react-icons/io5";
import ChatGPTLogo from "@/public/logos//ChatGPT_logo.png";
import { BiHandicap } from "react-icons/bi";
import { FaChrome, FaNpm, FaDatabase, FaPhp } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { RiNotionFill } from "react-icons/ri";
import { FcDocument } from "react-icons/fc";
import { LiaMarkdown } from "react-icons/lia";

export default function SkillsClient() {
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const tools = [
    // Frontend
    { icon: <SiHtml5 className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#E34F26]" />, name: "HTML5", category: "Frontend" },
    { icon: <SiCss3 className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#1572B6]" />, name: "CSS3", category: "Frontend" },
    { icon: <SiJavascript className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#F7DF1E]" />, name: "JavaScript", category: "Frontend" },
    { icon: <SiSass className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#CC6699]" />, name: "Sass", category: "Frontend" },
    { icon: <SiTailwindcss className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#38BDF8]" />, name: "Tailwind CSS", category: "Frontend" },
    { icon: <SiReact className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#61DAFB]" />, name: "React", category: "Frontend" },

    // Backend
    { icon: <SiNodedotjs className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#339933]" />, name: "Node.js Express", category: "Backend" },
    { icon: <SiMongodb className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#47A248]" />, name: "NoSQL", category: "Backend" },

    // Design
    { icon: <SiFigma className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#F24E1E]" />, name: "Figma", category: "Design" },
    { icon: <SiCanva className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#3bc5ba]" />, name: "Canva", category: "Design" },
    { icon: <CiMobile1 className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-white" />, name: "Responsive Design", category: "Design" },

    // Optimisation technique
    { icon: <FaChrome className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#237aff]" />, name: "Chrome Devtools", category: t("technical-optimization-name") },
    { icon: <TbSeo className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#0D6EFD]" />, name: "SEO", category: t("technical-optimization-name") },
    { icon: <BiHandicap className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-white" />, name: t("accessibility-name"), category: t("technical-optimization-name") },
    { icon: <IoRocket className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#FF6B6B]" />, name: t("performance-boost-name"), category: t("technical-optimization-name") },
    { icon: <VscDebugAll className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#DC3545]" />, name: "Debug", category: t("technical-optimization-name") },

    // Gestion de projet
    { icon: <SiGithub className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-white" />, name: "GitHub", category: t("project-management-name") },
    { icon: <SiGit className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#F05032]" />, name: "Git", category: t("project-management-name") },
    { icon: <FaNpm className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-white" />, name: t("package-manager-name"), category: t("project-management-name") },
    { icon: <SiFeedly className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#4CAF50]" />, name: t("technology-watch-name"), category: t("project-management-name") },
    { icon: <RiNotionFill className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-white" />, name: t("methode-agile-name"), category: t("project-management-name") },
    { icon: <FcDocument className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />, name: t("documentation-name"), category: t("project-management-name") },

    // Autres
    { icon: <SiPython className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#3776AB]" />, name: "Python", category: "Autres" },
    { icon: <SiC className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#226db3]" />, name: "C", category: "Autres" },
    { icon: <TbBrandVscode className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#007ACC]" />, name: "VSCode", category: "Autres" },
    { icon: <IoTerminal className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-[#ffffff]" />, name: "Terminal", category: "Autres" },
    { icon: <img src={ChatGPTLogo.src} alt="Logo de ChatGPT" className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#3bc5ba]" />, name: t("ia-name"), category: "Autres" },
    { icon: <SiPostman className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-[#FF6C37]" />, name: "Postman", category: "Autres" },
    { icon: <LiaMarkdown className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-black dark:text-white" />, name: "Markdown", category: "Autres" },
  ];
  
  const mainSkills = [
    { icon: <SiReact className="w-[80px] h-[80px] text-[#61DAFB]" />, name: "React", description: t("react-description") },
    { icon: <SiNodedotjs className="w-[80px] h-[80px] text-[#339933]" />, name: "Node.js", description: t("node-description") },
    { icon: <SiGit className="w-[80px] h-[80px] text-[#F05032]" />, name: "Git", description: t("git-description") },
  ];
  
  const learningSkills = [
    { icon: <SiNextdotjs className="w-[60px] h-[60px] text-black dark:text-white" />, name: "Next.js", description: t("next-description") },
    { icon: <FaDatabase className="w-[60px] h-[60px] text-[#00758F]" />, name: "SQL", description: t("sql-description") },
    { icon: <FaPhp className="w-[60px] h-[60px] text-[#777BB4]" />, name: "PHP", description: t("php-description") },
  ];

  const categories = ["Frontend", "Backend", "Design", t("technical-optimization-name"), t("project-management-name"), "Autres"];

  const filteredTools = selectedCategory === "Frontend"
    ? tools.filter((tool) => tool.category === "Frontend")
    : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <section className="py-20 w-full max-w-6xl mx-auto my-8 px-4">
      {/* Compétences principales */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20 mt-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          {t("main-skills-title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`p-8 bg-card border border-border rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl dark:shadow-white/10 transition-shadow ${
                index === 2 ? "sm:col-span-2 lg:col-span-1 w-full sm:w-auto" : ""
              }`}
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
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center md:text-left text-foreground">
          {t("tool-skills-title")}
        </h2>
        {/* Boutons de filtrage */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
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
        <div className="relative h-auto">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start items-start align-content-start">
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
          {t("learning-skills-title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          {learningSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-8 bg-card border border-border rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl dark:shadow-white/10 transition-shadow w-full"
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