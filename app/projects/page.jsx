"use client";
import Carousel from "@/components/carousel";
import Booki from "@/public/booki.png"

export default function Projects() {

  const openClassroomsProjects = [
    {
      title: "Booki",
      button: "Voir le projet",
      src: Booki,
    },
    {
      title: "Sophie Bluel",
      button: "Voir le projet",
      src: "",
    },
    {
      title: "Nina Carducci",
      button: "Voir le projet",
      src: "",
    },
    {
      title: "Kasa",
      button: "Voir le projet",
      src: "",
    },
    {
      title: "Mon vieux grimoire",
      button: "Voir le projet",
      src: "",
    },
    {
      title: "Qwenta",
      button: "Voir le projet",
      src: "",
    }
  ];

  const otherProjects = [
    {
      title: "MangaBunka",
      button: "Voir le projet",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Projet Divers 2",
      button: "Voir le projet",
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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