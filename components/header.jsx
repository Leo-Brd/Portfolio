"use client";
import Link from 'next/link';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation('common');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Utilisez la clé de traduction pour le titre */}
        <Link href="/" className="text-3xl text-primary">
          {t('title')}
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-2xl text-foreground hover:text-primary transition-colors relative group"
          >
            {t('home')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/skills"
            className="text-2xl text-foreground hover:text-primary transition-colors relative group"
          >
            {t('skills')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/projects"
            className="text-2xl text-foreground hover:text-primary transition-colors relative group"
          >
            {t('projects')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-2xl text-foreground hover:text-primary transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        <div className='flex gap-8'>
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

          {/* Bouton pour changer la langue */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle language"
          >
            {i18n.language === 'fr' ? '🇫🇷' : '🇬🇧'}
          </button>
        </div>
        
      </div>
    </header>
  );
}