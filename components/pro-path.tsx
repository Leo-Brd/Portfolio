"use client";
import { useState } from "react";
import Image from "next/image";
import MediathequeLogo from "@/public/logos/Chassieu_mediatheque.png";
import SuperPauletteLogo from "@/public/logos/Super_paulette.png";
import SeipraScoreLogo from "@/public/logos/seipra.jpg";
import { useTranslation } from 'next-i18next';

export function ProPath() {
  const { t } = useTranslation('common');
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const handleMouseEnter = (logo:string) => {
    setHoveredLogo(logo);
  };

  const handleMouseLeave = () => {
    setHoveredLogo(null);
  };

  const getModalContent = (logo: string) => {
    switch (logo) {
      case "SeipraLogo":
        return t("seipra-text");
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
      <div className="absolute left-1/2 w-1 h-full bg-primary/20 dark:bg-white/60 transform -translate-x-1/2" />

      <div className="space-y-8">
        {/* Seipra Score */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2025 / 2027</p>
            <p className="text-muted-foreground text-xl">
              {t("seipra-title")}
            </p>
          </div>
          <button
            className="w-1/2 pl-8 relative text-left"
            onMouseEnter={() => handleMouseEnter("RechercheLogo")}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleMouseEnter("RechercheLogo")}
            onBlur={handleMouseLeave}
            type="button"
          >
            <Image
              src={SeipraScoreLogo}
              alt="Logo de Seipra Score"
              className="w-17 h-12 transition-all rounded object-cover duration-300 hover:scale-110 hover:shadow-lg"
              width={68}
              height={48}
            />
            {hoveredLogo === "RechercheLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-card backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold mb-2">Seipra Score</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("SeipraLogo")}
                </p>
              </div>
            )}
          </button>
        </div>

        {/* Super Paulette */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <button
              onMouseEnter={() => handleMouseEnter("SuperPauletteLogo")}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter("SuperPauletteLogo")}
              onBlur={handleMouseLeave}
              className="relative"
              type="button"
            >
              <Image
                src={SuperPauletteLogo}
                alt="Logo de Super Paulette"
                className="w-17 h-12 transition-all rounded object-cover duration-300 hover:scale-110 hover:shadow-lg"
                width={68}
                height={48}
              />
              {hoveredLogo === "SuperPauletteLogo" && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/3 w-80 sm:w-64 lg:-translate-x-[700px] lg:w-96 bg-card backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                  <h3 className="text-xl font-bold">{t("super-paulette-modal-title")}</h3>
                  <p className="text-lg text-foreground">
                    {getModalContent("SuperPauletteLogo")}
                  </p>
                </div>
              )}
            </button>
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
          <button
            className="w-1/2 pl-8 relative text-left"
            onMouseEnter={() => handleMouseEnter("MediathequeLogo")}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleMouseEnter("MediathequeLogo")}
            onBlur={handleMouseLeave}
            type="button"
          >
            <Image
              src={MediathequeLogo}
              alt="Logo de la médiathèque de Chassieu"
              className="w-12 h-12 rounded transition-all duration-300 hover:scale-110 hover:shadow-lg"
              width={48}
              height={48}
            />
            {hoveredLogo === "MediathequeLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-card backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold">{t("mediatheque-modal-title")}</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("MediathequeLogo")}
                </p>
              </div>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}