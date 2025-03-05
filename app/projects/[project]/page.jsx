"use client";
import { useParams } from "next/navigation";
import { openClassroomsProjects, otherProjects } from "@/public/projects/projects.js";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';

export default function ProjectPage() {
  const { t, i18n } = useTranslation('common');
  const params = useParams();

  const allProjects = [...openClassroomsProjects, ...otherProjects];

  const project = allProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.project
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  if (!project) {
    return <div className="text-center text-destructive">Projet introuvable.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12">
      <div className="max-w-[1400px] mx-auto p-8 flex flex-col lg:flex-row gap-12 bg-card rounded-2xl shadow-xl">
        {/* Carrousel d'images (à gauche) */}
        <motion.div
          className="w-full lg:w-1/2 h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-muted"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={project.images[currentImageIndex].src}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Boutons de navigation du carrousel */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-primary-foreground p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  &lt;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-primary-foreground p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Contenu à droite */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Titre du projet */}
          <h1 className="text-5xl font-bold text-primary">
            {project.title}
          </h1>

          {/* Icônes associées */}
          <div className="flex space-x-4">
            {project.icons.map(({ icon: Icon, color, darkColor }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  className={`w-10 h-10 ${color} ${darkColor ? `dark:${darkColor}` : ""}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Description détaillée */}
          <div className="prose max-w-none">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Description du Projet
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}