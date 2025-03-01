"use client";
import { motion } from "framer-motion";
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
  SiChatbot,
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
import ChatGPTLogo from "@/public/ChatGPT_logo.png"

const tools = [
  { icon: <SiHtml5 className="w-[40px] h-[40px] text-[#E34F26]" />, name: "HTML5" },
  { icon: <SiCss3 className="w-[40px] h-[40px] text-[#1572B6]" />, name: "CSS3" },
  { icon: <SiJavascript className="w-[40px] h-[40px] text-[#F7DF1E]" />, name: "JavaScript" },
  { icon: <TbBrandVscode className="w-[40px] h-[40px] text-[#007ACC]" />, name: "VS Code" },
  { icon: <SiPython className="w-[40px] h-[40px] text-[#3776AB]" />, name: "Python" },
  { icon: <SiGithub className="w-[40px] h-[40px] text-black dark:text-white" />, name: "GitHub" },
  { icon: <SiFigma className="w-[40px] h-[40px] text-[#F24E1E]" />, name: "Figma" },
  { icon: <SiSass className="w-[40px] h-[40px] text-[#CC6699]" />, name: "Sass" },
  { icon: <TbSeo className="w-[40px] h-[40px] text-[#0D6EFD]" />, name: "SEO" },
  { icon: <VscDebugAll className="w-[40px] h-[40px] text-[#DC3545]" />, name: "Debug" },
  { icon: <SiMongodb className="w-[40px] h-[40px] text-[#47A248]" />, name: "MongoDB" },
  { icon: <SiFeedly className="w-[40px] h-[40px] text-[#3ba83b]" />, name: "Feedly" },
  { icon: <SiCanva className="w-[40px] h-[40px] text-[#3bc5ba]" />, name: "Canva" },
  { icon: <img src={ChatGPTLogo.src} alt="Logo de ChatGPT" className="w-[40px] h-[40px] text-[#3bc5ba]" />, name: "ChatGPT" },
  { icon: <IoTerminal className="w-[40px] h-[40px] text-black dark:text-[#ffffff]" />, name: "Terminal" },
  { icon: <SiC className="w-[40px] h-[40px] text-[#226db3]" />, name: "C" },
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
  return (
    <section className="py-20 w-full max-w-6xl mx-auto my-8">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Mes Compétences Principales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative flex flex-wrap gap-6 justify-center items-center my-28">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: (index % 2 === 0 ? -50 : 50), y: (index % 3 === 0 ? -50 : 50) }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.1 } }}
              className="p-4 rounded-full shadow-md bg-card flex items-center justify-center hover:shadow-lg transition-all cursor-pointer"
            >
              {tool.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

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