"use client";
import { Boxes } from "@/components/background-boxes";
import { Languages } from "@/components/languages-chart";
import { ProgrammingLanguages } from "@/components/programming-languages-chart"
import { GithubActivity } from "@/components/github-activity"
import { CareerPath } from "@/components/career-path"
import { Certifications } from "@/components/certifications"
import { Passions } from "@/components/passions"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('common');

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
        className="text-8xl mt-20 md:text-9xl font-tinos text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        {"<LeoBrd />"}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl md:text-3xl text-muted-foreground mt-6"
      >
        {t("devweb")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-muted-foreground mt-4"
      >
        ウェブ開発者
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 mb-[150px] flex space-x-6 z-20"
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
          <h2 className="text-4xl font-bold text-primary mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t("a-propos-title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("a-propos-text")}
          </p>
        </motion.div>

        <Passions />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Mon parcours
          </h2>
          <CareerPath />
        </motion.div>

        <Certifications />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-28 flex justify-around"
        >
          <Languages />
          <ProgrammingLanguages />
        </motion.div>
      </section>

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="w-full max-w-6xl mt-10 px-4"
      >
        <GithubActivity />
      </motion.div>
    </main>
  );
}