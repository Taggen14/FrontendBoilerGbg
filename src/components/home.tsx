import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/context";

export function Home() {
  const { isLoggedIn } = useContext(AuthContext) as { isLoggedIn: boolean };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Effektiv marknadsföring för ditt företag
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Vår plattform ger dig de verktyg du behöver för att nå ut till
                  dina kunder på ett effektivt och målmedvetet sätt.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {!isLoggedIn && (
                  <>
                    <Link
                      to="/register"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Registrera dig
                    </Link>
                    <Link
                      to="/login"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      {/* GÖR EN NY KOMPONENT FÖR LOGGA UT-KNAPP OCH FIXA FUNKTION SOM ÄNDRAR STATE OCH RENSAR STORAGE */}
                      {/* VISA ENDAST CAMPAIGN OCH LOG OUT NÄR MAN ÄR INLOGGAD */}
                      {/* VISA ENDAST REGISTRERA OCH LOG IN NÄR MAN ÄR UTLOGGAD */}
                      Logga in
                    </Link>
                  </>
                )}
                {isLoggedIn && (
                  <>
                    <Link
                      to="/campaigns"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Kampanjer
                    </Link>
                  </>
                )}
              </div>
            </div>
            <img
              src="../assets/craiyon.png"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
