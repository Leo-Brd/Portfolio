"use client";
import Link from 'next/link';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-pinyon text-primary">
          LeoBrd
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
            Projets
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <IconMoon className="w-6 h-6 text-foreground" />
          ) : (
            <IconSun className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}