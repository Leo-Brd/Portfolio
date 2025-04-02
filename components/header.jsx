"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconSun, IconMoon, IconMenu2, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { GB, FR } from "country-flag-icons/react/3x2";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("common");
  const pathname = usePathname();

  // Détection initiale du mode préféré
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setDarkMode(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
    
    localStorage.setItem('darkMode', newMode);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="px-6 py-4 flex items-center justify-between lg:justify-around">
        
        {/* Titre */}
        <Link href="/" className="text-3xl text-primary">
          {t("title")}
        </Link>

        {/* Menu burger pour mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <IconX className="w-7 h-7 text-foreground" />
          ) : (
            <IconMenu2 className="w-7 h-7 text-foreground" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`fixed md:static top-16 left-0 w-full md:w-auto bg-background md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-8 transition-all duration-300 ease-in-out ${
            menuOpen ? "shadow-lg block h-[calc(100vh-4rem)] gap-8" : "hidden md:flex"
          }`}
        >
          {["home", "skills", "projects", "contact"].map((key) => (
            <Link
              key={key}
              href={`/${key === "home" ? "" : key}`}
              className={`text-2xl md:text-xl lg:text-2xl ${
                isActive(`/${key === "home" ? "" : key}`)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors relative group`}
              onClick={() => setMenuOpen(false)}
            >
              {t(key)}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
                  isActive(`/${key === "home" ? "" : key}`)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mode sombre et langue */}
        <div className="hidden md:flex gap-8">
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

          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle language"
          >
            {i18n.language === "fr" ? (
              <FR className="w-7 h-7" />
            ) : (
              <GB className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}