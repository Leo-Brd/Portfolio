"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importez usePathname
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { GB, FR } from "country-flag-icons/react/3x2";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation("common");
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Titre */}
        <Link href="/" className="text-3xl text-primary">
          {t("title")}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["home", "skills", "projects", "contact"].map((key) => (
            <Link
              key={key}
              href={`/${key === "home" ? "" : key}`}
              className={`text-2xl ${
                isActive(`/${key === "home" ? "" : key}`)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } transition-colors relative group`}
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
        <div className="flex gap-8">
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