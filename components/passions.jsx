"use client";
import { motion } from "framer-motion";
import { FaCode, FaBook, FaHeadphones, FaGamepad } from "react-icons/fa";

export function Passions() {
  const passions = [
    {
      title: "Développement",
      description: "Je suis passionné par la création de solutions innovantes et l'apprentissage de nouvelles technologies. Elaborer un projet de A à Z ou bien tenter de reproduire une maquette sont des choses qui me stimulent.",
      icon: <FaCode className="w-12 h-12 text-primary" />,
    },
    {
      title: "Lecture",
      description: "J'adore explorer des univers à travers les livres, que ce soit par l'art du manga ou de la littérature. La découverte d'une nouvelle oeuvre est toujours un moment qui me procure du plaisir.",
      icon: <FaBook className="w-12 h-12 text-primary" />,
    },
    {
      title: "Musique",
      description: "La musique est une source d'inspiration pour moi. Je m'intéresse beaucoup à la culture musicale de nombreux genres comme le rap, la pop etc... Je maîtrise aussi la composition musicale via des logiciels comme FL Studio.",
      icon: <FaHeadphones className="w-12 h-12 text-primary" />,
    },
    {
      title: "Jeux Vidéo",
      description: "Les jeux vidéo sont pour moi une façon de m'évader, mais aussi un art qui explore des univers sans fin. Il s'agit d'une grande part de mon enfance et j'adore découvrir de nouveaux jeux de tous types.",
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
        Mes Passions
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
              {passion.title}
            </h3>

            <p className="text-muted-foreground text-center">
              {passion.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}