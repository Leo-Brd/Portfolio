"use client";
import { motion } from "framer-motion";
import { FaCode, FaBook, FaHeadphones, FaGamepad } from "react-icons/fa";
import { useTranslation } from 'next-i18next';

export function Passions() {
  const { t } = useTranslation('common');

  const passions = [
    {
      title: "passions-dev-title",
      description: "passions-dev-text",
      icon: <FaCode className="w-12 h-12 text-primary" />,
    },
    {
      title: "passions-lecture-title",
      description: "passions-lecture-text",
      icon: <FaBook className="w-12 h-12 text-primary" />,
    },
    {
      title: "passions-musique-title",
      description: "passions-musique-text",
      icon: <FaHeadphones className="w-12 h-12 text-primary" />,
    },
    {
      title: "passions-jv-title",
      description: "passions-jv-text",
      icon: <FaGamepad className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center bg-background text-foreground p-8 mb-28">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-primary mb-12"
      >
        {t("passions-title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {passions.map((passion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg hover:shadow-xl dark:hover:shadow-white/10 transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {passion.icon}
            </div>

            <h3 className="text-2xl font-semibold text-primary text-center mb-4">
              {t(passion.title)}
            </h3>

            <p className="text-muted-foreground text-center">
              {t(passion.description)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}