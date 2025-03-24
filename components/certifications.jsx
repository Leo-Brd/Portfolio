"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCar, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { useTranslation } from 'next-i18next';

export function Certifications() {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaCar className="w-12 h-12 text-primary" />
        </motion.div>
        <p className="text-lg text-primary/80 dark:text-secondary mt-2">{t("permis-title")}</p>
        <p className="text-sm text-secondary mt-1">{t("permis-date")}</p>
      </motion.div>

      {/* Bac général */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaGraduationCap className="w-12 h-12 text-primary" />
        </motion.div>
        <p className="text-lg text-primary/80 dark:text-secondary mt-2">{t("bac-title")}</p>
        <p className="text-sm text-primary/80 dark:text-secondary mt-1">{t("bac-text")}</p>
        <p className="text-sm text-secondary mt-1">{t("bac-date")}</p>
      </motion.div>

      {/* Diplôme OpenClassrooms */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaLaptopCode className="w-12 h-12 text-primary" />
        </motion.div>
        <p className="text-lg text-primary/80 dark:text-secondary mt-2">{t("oc-diploma-title")}</p>
        <p className="text-sm text-primary/80 dark:text-secondary mt-1">{t("oc-diploma-text")}</p>
        <p className="text-sm text-secondary mt-1">{t("oc-diploma-date")}</p>
      </motion.div>
    </motion.div>
  );
}