"use client";
import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa";

export function DrivingLicense() {
  return (
    <div className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 w-52 h-42 flex flex-col justify-center items-center text-center">   
        <FaCar className="w-12 h-12 text-primary" />

        <p className="text-lg text-primary/80 mt-2">Permis B</p>

        <p className="text-sm text-secondary/60 mt-1">Obtenu en 2020</p>
    </div>
  );
}