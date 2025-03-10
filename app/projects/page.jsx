"use client";
import Carousel from "@/components/carousel";
import { openClassroomsProjects, otherProjects } from "@/public/projects/projects.js"
import { useTranslation } from 'next-i18next';

export default function Projects() {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="relative overflow-hidden w-full h-[1380px] sm:h-[1520px] md:h-[1950px] lg:h-full pt-20 lg:py-20 mt-10 lg:my-10">

      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-foreground">Mes projets</h1>

      <section className="mb-44">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          OpenClassroom's : Formation développeur web
        </h2>
        <Carousel slides={openClassroomsProjects} />
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          Autres Projets
        </h2>
        <Carousel slides={otherProjects} />
      </section>
    </div>
  );
}