"use client";
import Link from 'next/link';
import {SiGithub, SiLinkedin, SiDiscord} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-background/80 backdrop-blur-md border-t border-border z-50">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">

        <p className="text-muted-foreground text-sm">
          © 2025 LeoBrd. Tous droits réservés.
        </p>

        <div className="flex space-x-8">
          <a
            href="https://github.com/Leo-Brd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/leo-bordet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://discord.com/users/leo_brd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Discord"
          >
            <SiDiscord className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}