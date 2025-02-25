"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin, IconBrandDiscord } from '@tabler/icons-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      
      
      <div className="h-96 relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
  
        <Boxes />
        <h1 className="text-8xl md:text-9xl font-pinyon text-primary animate-fade-in">
        Leo
      </h1>

      <p className="text-2xl md:text-3xl font-limelight text-muted-foreground mt-6 animate-fade-in-up">
        Développeur web
      </p>

      <div className="mt-12 flex space-x-6 animate-fade-in-up delay-300 z-20">
        <a
          href="https://github.com/Leo-Brd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <IconBrandGithub className="w-10 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/leo-bordet/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin className="w-10 h-10" />
        </a>
        <a
          href="https://discord.com/users/leo_brd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Discord"
        >
          <IconBrandDiscord className="w-10 h-10" />
        </a>
      </div>
      </div>
    </main>
    
  );
}