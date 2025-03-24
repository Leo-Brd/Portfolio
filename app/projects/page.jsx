"use client";
import Carousel from "@/components/carousel";
import { openClassroomsProjects, otherProjects } from "@/public/projects/projects.js"
import { useTranslation } from 'next-i18next';
import { FaGraduationCap, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation('common');

  const underlineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-[1380px] sm:h-[1520px] md:h-[1950px] lg:h-full pt-20 lg:py-20 mt-10 lg:my-10">

      {/* Titre principal avec animation */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground inline-block relative pb-2">
          Mes projets
          <motion.span 
            className="absolute bottom-0 top-14 left-[12.5%] transform -translate-x-1/2 w-3/4 h-1 bg-primary/80 dark:bg-primary"
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          />
        </h1>
      </div>

      <section className="mb-44">
        <div className="flex justify-center lg:hidden">
          <FaGraduationCap className="text-4xl text-primary text-center" />
        </div>
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <FaGraduationCap className="hidden text-4xl text-primary lg:block" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              OpenClassroom's : Formation Développeur web
            </h2>
        </div>
        <Carousel slides={openClassroomsProjects} />
      </section>

      <section>
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <FaCode className="text-4xl text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Projets personnels
          </h2>
        </div>
        <Carousel slides={otherProjects} />
      </section>
    </div>
  );
}