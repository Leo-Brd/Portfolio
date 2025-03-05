"use client";
import Carousel from "@/components/carousel";
import { openClassroomsProjects, otherProjects } from "@/public/projects/projects.js"

export default function Projects() {

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