"use client"; // Indique que ce composant est côté client
import { useParams } from "next/navigation";
import { openClassroomsProjects, otherProjects } from "@/public/projects/projects.js";

export default function ProjectPage() {
  const params = useParams();

  const allProjects = [...openClassroomsProjects, ...otherProjects];

  const project = allProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.project
  );

  if (!project) {
    return <div className="text-center text-red-500">Projet introuvable.</div>;
  }

  return <h1>{project.title}</h1>;
}