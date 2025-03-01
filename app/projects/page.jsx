"use client";
import Carousel from "@/components/carousel";
import Booki from "@/public/booki.png"
import SophieBluel from "@/public/sophie_bluel.png"
import NinaCarducci from "@/public/nina_carducci.png"
import Kasa from "@/public/kasa.png"
import MonVieuxGrimoire from "@/public/mon_vieux_grimoire.png"
import Qwenta from "@/public/qwenta.png"

export default function Projects() {

  const openClassroomsProjects = [
    {
      title: "Booki",
      src: Booki,
    },
    {
      title: "Sophie Bluel",
      src: SophieBluel,
    },
    {
      title: "Nina Carducci",
      src: NinaCarducci,
    },
    {
      title: "Kasa",
      src: Kasa,
    },
    {
      title: "Mon vieux grimoire",
      src: MonVieuxGrimoire,
    },
    {
      title: "Qwenta",
      src: Qwenta,
    }
  ];

  const otherProjects = [
    {
      title: "MangaBunka",
      src: "",
    },
    {
      title: "Projet Divers 2",
      src: "",
    }
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