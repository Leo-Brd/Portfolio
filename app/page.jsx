"use client";
import { Boxes } from "@/components/background-boxes";
import { Languages } from "@/components/languages-chart";
import { GithubActivity } from "@/components/github-activity"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground p-8">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-8xl mt-20 md:text-9xl font-tinos text-primary"
      >
        Leo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl md:text-3xl text-muted-foreground mt-6"
      >
        Développeur web
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 mb-[150px] flex space-x-6 z-20"
      >
        <a
          href="https://github.com/Leo-Brd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <SiGithub className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/leo-bordet/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://discord.com/users/leo_brd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Discord"
        >
          <SiDiscord className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="h-96 relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg"
      >
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </motion.div>

      <section className="w-full max-w-6xl mt-20 px-4">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionné par le développement web, j'aime créer des interfaces
            intuitives et des expériences utilisateur mémorables. Découvrez en un peu plus ci-dessous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Languages />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            Mon parcours
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-primary/20 transform -translate-x-1/2" />

            <div className="space-y-8">

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold">Octobre 2024</p>
                  <p className="text-muted-foreground">
                    OpenClassrooms : Formation développeur web
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg font-semibold">Juillet 2024</p>
                  <p className="text-muted-foreground">
                    Piscine de l'école 42
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold">2023</p>
                  <p className="text-muted-foreground">
                    ESTIAM : école d'informatique
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg font-semibold">2021</p>
                  <p className="text-muted-foreground">
                    Lycée Jean Paul Sartre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <GithubActivity />
    </main>
  );
}