"use client";
import { motion } from "framer-motion";
import { FaCar, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export function Certifications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">

      <div
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center hover:scale-110 transition-transform duration-300"
      >
        <FaCar className="w-12 h-12 text-primary" />
        <p className="text-lg text-primary/80 mt-2">Permis B</p>
        <p className="text-sm text-secondary mt-1">Obtenu en 2023</p>
      </div>

      <div
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center hover:scale-110 transition-transform duration-300"
      >
        <FaGraduationCap className="w-12 h-12 text-primary" />
        <p className="text-lg text-primary/80 mt-2">Bac général</p>
        <p className="text-sm text-primary/80 mt-1">Maths - Info</p>
        <p className="text-sm text-secondary mt-1">Obtenu en 2022</p>
      </div>

      <div
        className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center hover:scale-110 transition-transform duration-300"
      >
        <FaLaptopCode className="w-12 h-12 text-primary" />
        <p className="text-lg text-primary/80 mt-2">Diplôme OpenClassrooms</p>
        <p className="text-sm text-primary/80 mt-1">Développement web</p>
        <p className="text-sm text-secondary mt-1">Obtenu en 2025</p>
      </div>
    </div>
  );
}