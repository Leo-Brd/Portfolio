"use client";
import { useState } from "react";
import MediathequeLogo from "@/public/logos/Chassieu_mediatheque.png";
import SuperPauletteLogo from "@/public/logos/Super_paulette.png";
import { useTranslation } from 'next-i18next';
import { LuSearchCode } from "react-icons/lu";

export function ProPath() {
  const { t } = useTranslation('common');
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handleMouseEnter = (logo) => {
    setHoveredLogo(logo);
  };

  const handleMouseLeave = () => {
    setHoveredLogo(null);
  };

  const getModalContent = (logo) => {
    switch (logo) {
      case "RechercheLogo":
        return t("recherche-entreprise-text");
      case "SuperPauletteLogo":
        return t("super-paulette-text");
      case "MediathequeLogo":
        return t("mediatheque-text");
      default:
        return "";
    }
  };

  return (
    <div className="relative mb-32">
      <div className="absolute left-1/2 w-1 h-full bg-primary/20 dark:bg-white/80 transform -translate-x-1/2" />

      <div className="space-y-8">
        {/* Recherche d'entreprise */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2025</p>
            <p className="text-muted-foreground text-xl">
              {t("recherche-entreprise-title")}
            </p>
          </div>
          <div
            className="w-1/2 pl-8 relative"
            onMouseEnter={() => handleMouseEnter("RechercheLogo")}
            onMouseLeave={handleMouseLeave}
          >
            <LuSearchCode className="w-12 h-12 transition-all rounded duration-300 hover:scale-110 hover:shadow-lg"/>
            {hoveredLogo === "RechercheLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold mb-2">{t("recherche-entreprise-modal-title")}</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("RechercheLogo")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Super Paulette */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <div
              onMouseEnter={() => handleMouseEnter("SuperPauletteLogo")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <img
              src={SuperPauletteLogo.src}
              alt="Logo de Super Paulette"
              className="w-17 h-12 transition-all rounded object-cover duration-300 hover:scale-110 hover:shadow-lg"
            />
              {hoveredLogo === "SuperPauletteLogo" && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/3 w-80 sm:w-64 lg:-translate-x-[700px] lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                  <h3 className="text-xl font-bold">{t("super-paulette-modal-title")}</h3>
                  <p className="text-lg text-foreground">
                    {getModalContent("SuperPauletteLogo")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-xl font-semibold">{t("super-paulette-date")}</p>
            <p className="text-muted-foreground text-xl">
              {t("super-paulette-title")}
            </p>
          </div>
        </div>

        {/* Mediatheque de Chassieu */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">{t("mediatheque-date")}</p>
            <p className="text-muted-foreground text-xl">
              {t("mediatheque-title")}
            </p>
          </div>
          <div
            className="w-1/2 pl-8 relative"
            onMouseEnter={() => handleMouseEnter("MediathequeLogo")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={MediathequeLogo.src}
              alt="Logo de la médiathèque de Chassieu"
              className="w-12 h-12 rounded transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
            {hoveredLogo === "MediathequeLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold">{t("mediatheque-modal-title")}</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("MediathequeLogo")}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}