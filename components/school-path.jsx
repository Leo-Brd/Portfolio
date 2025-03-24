"use client";
import { useState } from "react";
import { Si42 } from "react-icons/si";
import OCLogo from "@/public/logos/OC_logo.png";
import EstiamLogo from "@/public/logos/Estiam_logo.png";
import Lyon2Logo from "@/public/logos/Lyon2_logo.png";
import JpsLogo from "@/public/logos/JPS_logo.jpg";
import { useTranslation } from 'next-i18next';

export function SchoolPath() {
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
      case "OCLogo":
        return t("oc-text");
      case "42":
        return t("42-text");
      case "EstiamLogo":
        return t("estiam-text");
      case "Lyon2Logo":
        return t("uni-text");
      case "JpsLogo":
        return t("jps-text");
      default:
        return "";
    }
  };

  return (
    <div className="relative mb-32">
      <div className="absolute left-1/2 w-1 h-full bg-primary/20 dark:bg-white/80 transform -translate-x-1/2" />

      <div className="space-y-8">
        {/* OpenClassrooms */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2024 / 2025</p>
            <p className="text-muted-foreground text-xl">
              {t("oc-title")}
            </p>
          </div>
          <div
            className="w-1/2 pl-8 relative"
            onMouseEnter={() => handleMouseEnter("OCLogo")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={OCLogo.src}
              alt="Logo d'OpenClassrooms"
              className="w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
            {hoveredLogo === "OCLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold">OpenClassroom's</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("OCLogo")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* École 42 */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <div
              onMouseEnter={() => handleMouseEnter("42")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Si42 className="w-12 h-12 transition-all duration-300 hover:scale-110 hover:shadow-lg" />
              {hoveredLogo === "42" && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/3 w-80 sm:w-64 lg:-translate-x-[700px] lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                  <h3 className="text-xl font-bold">{t("42-modal-title")}</h3>
                  <p className="text-lg text-foreground">
                    {getModalContent("42")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-xl font-semibold">{t("42-date")}</p>
            <p className="text-muted-foreground text-xl">
              {t("42-title")}
            </p>
          </div>
        </div>

        {/* ESTIAM */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2023 / 2024</p>
            <p className="text-muted-foreground text-xl">
              {t("estiam-title")}
            </p>
          </div>
          <div
            className="w-1/2 pl-8 relative"
            onMouseEnter={() => handleMouseEnter("EstiamLogo")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={EstiamLogo.src}
              alt="Logo de l'ESTIAM"
              className="w-12 h-12 rounded transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
            {hoveredLogo === "EstiamLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold">Estiam</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("EstiamLogo")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Université Lyon 2 */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Lyon2Logo")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={Lyon2Logo.src}
                alt="Logo de l'université Lyon 2"
                className="w-18 h-14 object-cover transition-all duration-300 hover:scale-110 hover:shadow-lg"
              />
              {hoveredLogo === "Lyon2Logo" && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/3 w-80 sm:w-64 lg:-translate-x-[700px] lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                  <h3 className="text-xl font-bold">{t("uni-title")}</h3>
                  <p className="text-lg text-foreground">
                    {getModalContent("Lyon2Logo")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-xl font-semibold">2022 / 2023</p>
            <p className="text-muted-foreground text-xl">
            {t("uni-title")}
            </p>
          </div>
        </div>

        {/* Lycée Jean Paul Sartre */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2021 / 2022</p>
            <p className="text-muted-foreground text-xl">
            {t("jps-title")}
            </p>
          </div>
          <div
            className="w-1/2 pl-8 relative"
            onMouseEnter={() => handleMouseEnter("JpsLogo")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={JpsLogo.src}
              alt="Logo du lycée Jean Paul Sartre"
              className="w-14 h-12 rounded transition-all duration-300 hover:scale-110 hover:shadow-lg"
            />
            {hoveredLogo === "JpsLogo" && (
              <div className="absolute top-0 left-1/2 transform -translate-x-2/3 w-80 sm:w-64 lg:-translate-x-0 lg:w-96 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold">{t("jps-title")}</h3>
                <p className="text-lg text-foreground">
                  {getModalContent("JpsLogo")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}