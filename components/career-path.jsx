import { Si42 } from "react-icons/si";
import OCLogo from "@/public/OC_logo.png"
import EstiamLogo from "@/public/Estiam_logo.png"
import Lyon2Logo from "@/public/Lyon2_logo.png"
import JpsLogo from "@/public/JPS_logo.jpg"

export function CareerPath() {
    return (
        <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-primary/20 transform -translate-x-1/2" />

            <div className="space-y-8">

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold">Octobre 2024</p>
                  <p className="text-muted-foreground">
                    OpenClassrooms : Formation développeur web
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <img src={OCLogo.src} alt="Logo d'OpenClassrooms" className="w-10 h-10"/>
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 flex justify-end">
                  <Si42 className="w-10 h-10" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg font-semibold">Juillet 2024</p>
                  <p className="text-muted-foreground">
                    Piscine de l'école 42
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold">2023</p>
                  <p className="text-muted-foreground">
                    ESTIAM : école d'informatique
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                    <img src={EstiamLogo.src} alt="Logo de l'ESTIAM" className="w-10 h-10 rounded"/>
                </div>
              </div>
              
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 flex justify-end">
                    <img src={Lyon2Logo.src} alt="Logo de l'université Lyon 2" className="w-16 h-12 object-cover"/>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg font-semibold">2022</p>
                  <p className="text-muted-foreground">
                    Université Lumière Lyon 2
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold">2021</p>
                  <p className="text-muted-foreground">
                    Lycée Jean Paul Sartre
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                    <img src={JpsLogo.src} alt="Logo du lycée Jean Paul Sartre" className="w-12 h-10 rounded"/>
                </div>
              </div>

              </div>
          </div>
    )
}
