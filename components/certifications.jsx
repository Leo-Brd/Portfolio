"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCar, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Délai entre les animations des enfants
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Départ invisible et décalé vers le bas
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animation vers le haut
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-24"
    >
      {/* Permis B */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <FaCar className="w-12 h-12 text-primary" />
        <p className="text-lg text-primary/80 dark:text-secondary mt-2">Permis B</p>
        <p className="text-sm text-secondary mt-1">Obtenu en 2023</p>
      </motion.div>

      {/* Bac général */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <FaGraduationCap className="w-12 h-12 text-primary" />
        <p className="text-lg text-primary/80 dark:text-secondary mt-2">Bac général</p>
        <p className="text-sm text-primary/80 dark:text-secondary mt-1">Mention Bien</p>
        <p className="text-sm text-secondary mt-1">Obtenu en 2022</p>
      </motion.div>

      {/* Diplôme OpenClassrooms */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <FaLaptopCode className="w-12 h-12 text-primary" />
        <p className="text-lg text-primary/80 dark:text-secondary mt-2">Diplôme OpenClassrooms</p>
        <p className="text-sm text-primary/80 dark:text-secondary mt-1">Développement web</p>
        <p className="text-sm text-secondary mt-1">Obtenu en 2025</p>
      </motion.div>
    </motion.div>
  );
}