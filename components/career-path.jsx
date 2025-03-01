
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
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="w-4 h-4 bg-primary rounded-full" />
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
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg font-semibold">2021</p>
                  <p className="text-muted-foreground">
                    Lycée Jean Paul Sartre
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
}
