"use client";
import { useState } from "react";
import { Si42 } from "react-icons/si";
import OCLogo from "@/public/OC_logo.png";
import EstiamLogo from "@/public/Estiam_logo.png";
import Lyon2Logo from "@/public/Lyon2_logo.png";
import JpsLogo from "@/public/JPS_logo.jpg";

export function CareerPath() {
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
        return "La formation développeur web en full remote est validée après la réalisation de 8 projets professionnels. Le diplôme remis est de niveau RNCP 5 (Bac+2).";
      case "42":
        return "La piscine de l'école 42 est une expérience unique de 1 mois dans laquelle on apprend le language C. C'est une expérience très enrichissante tant techniquement que socialement car cela nous pousse à collaborer et à apprendre vite. Le système gamifié est une manière de rendre la programmation cool et ludique.";
      case "EstiamLogo":
        return "Cette première année de Bachelor dans une école privée m'a permis de développer des compétences générales en informatique et de comprendre ce qui me plaisait dans ce domaine. J'ai ensuite décidé de me tourner vers des écoles comme 42 et OpenClassrooms où la manière d'apprendre est moins scolaire.";
      case "Lyon2Logo":
        return "Après le lycée, j'ai débuté une license en Informatique / Economie que j'ai très vite arrêté ( la fac ne me correspondait pas ). Cela m'a quand même montré que l'informatique était un domaine qui m'intéressait plus que les autres. J'ai passé le reste de l'année à travailler dans une pizzeria en attendant la rentrée. 🍕";
      case "JpsLogo":
        return "J'étais au lycée à Bron de ma seconde à ma terminale. J'ai choisi les spécialités Maths et NSI ( Informatique ) et ait obtenu le diplôme du Bac avec la mention Bien.";
      default:
        return "";
    }
  };

  return (
    <div className="relative mb-32">
      <div className="absolute left-1/2 w-1 h-full bg-primary/20 transform -translate-x-1/2" />

      <div className="space-y-8">
        {/* OpenClassrooms */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2024 / 2025</p>
            <p className="text-muted-foreground text-xl">
              OpenClassrooms : Formation développeur web
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
              <div className="absolute top-0 left-40 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
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
                <div className="absolute w-80 top-0 right-40 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                  <h3 className="text-xl font-bold">Ecole 42</h3>
                  <p className="text-lg text-foreground">
                    {getModalContent("42")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-xl font-semibold">Juillet 2024</p>
            <p className="text-muted-foreground text-xl">
              Piscine de l'école 42
            </p>
          </div>
        </div>

        {/* ESTIAM */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2023 / 2024</p>
            <p className="text-muted-foreground text-xl">
              ESTIAM : école d'informatique
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
              <div className="absolute top-0 left-40 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
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
                <div className="absolute w-80 top-0 right-40 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                  <h3 className="text-xl font-bold">Université Lumière Lyon 2</h3>
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
              Université Lumière Lyon 2
            </p>
          </div>
        </div>

        {/* Lycée Jean Paul Sartre */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <p className="text-xl font-semibold">2021 / 2022</p>
            <p className="text-muted-foreground text-xl">
              Lycée Jean Paul Sartre
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
              <div className="absolute top-0 left-40 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg z-10">
                <h3 className="text-xl font-bold">Lycée Jean Paul Sartre</h3>
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