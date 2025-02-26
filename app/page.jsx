"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandDiscord } from '@tabler/icons-react';

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
          <IconBrandGithub className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/leo-bordet/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://discord.com/users/leo_brd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Discord"
        >
          <IconBrandDiscord className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
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

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-8xl mt-20 md:text-9xl font-tinos text-primary"
      >
        Leo
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-8xl mt-20 md:text-9xl font-tinos text-primary"
      >
        Leo
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-8xl mt-20 md:text-9xl font-tinos text-primary"
      >
        Leo
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-8xl mt-20 md:text-9xl font-tinos text-primary"
      >
        Leo
      </motion.h1>
    </main>
    
  );
}