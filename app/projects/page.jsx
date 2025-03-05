"use client";
import Carousel from "@/components/carousel";
import { openClassroomsProjects, otherProjects } from "@/public/projects/projects.js"
import { useTranslation } from 'next-i18next';

export default function Projects() {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="relative overflow-hidden w-full h-full py-20 my-10">

      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-foreground">Mes projets</h1>

      <section className="mb-44">
        <h2 className="text-3xl font-bold text-center mb-10">
          OpenClassroom's : Formation développeur web
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