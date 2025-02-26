"use client";
import { motion } from "framer-motion";
import { IconBrandReact, IconBrandJavascript, IconBrandTailwind, IconBrandNextjs, IconBrandHtml5, IconBrandCss3 } from "@tabler/icons-react";

const skills = [
    { icon: <IconBrandHtml5 className="text-[#E34F26] w-[50px] h-[50px]" />, name: "HTML5", description: "Structure sémantique et accessible des pages web." },
    { icon: <IconBrandCss3 className="text-[#1572B6] w-[50px] h-[50px]" />, name: "CSS3", description: "Stylisation avancée avec animations et design responsive." },
    { icon: <IconBrandJavascript className="text-[#F7DF1E] w-[50px] h-[50px]" />, name: "JavaScript", description: "Maîtrise du langage côté front-end et back-end." },
    { icon: <IconBrandReact className="text-[#61DAFB] w-[50px] h-[50px]" />, name: "React", description: "Développement d'interfaces dynamiques et réactives." },
    { icon: <IconBrandNextjs className="text-black dark:text-white w-[50px] h-[50px]" />, name: "Next.js", description: "Applications web performantes avec rendu côté serveur." },
    { icon: <IconBrandTailwind className="text-[#38BDF8] w-[50px] h-[50px]" />, name: "Tailwind CSS", description: "Design rapide et flexible avec un framework utilitaire." },
];

export default function SkillsSection() {
  return (
    <section className="py-20 w-full max-w-6xl mx-auto my-8">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground"
      >
        Mes Compétences
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="group p-6 bg-card border border-border rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-4xl group-hover:text-primary transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-foreground">{skill.name}</h3>
            <p className="text-muted-foreground">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
