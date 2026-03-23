import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import SiteNav, { registrationUrl } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

import swimmingIcon from "@/assets/icons/swimming.svg";
import cyclingIcon from "@/assets/icons/cycling.svg";
import runningIcon from "@/assets/icons/running.svg";
import photoSwimming from "@/assets/photos/swimming.jpg";
import photoCycling from "@/assets/photos/cycling.jpg";
import photoRunning from "@/assets/photos/running.jpg";

const distances = [
  {
    title: "1/8 Triathlon",
    subtitle: "Achtste (Sprint)",
    description:
      "De perfecte instap voor beginners en sportieve recreanten. Kort maar krachtig door het Brabantse landschap.",
    swim: "500m",
    bike: "20km",
    run: "5km",
    color: "bg-primary",
    image: photoSwimming,
    note: "Ideaal voor je eerste triathlon!",
  },
  {
    title: "1/4 Triathlon",
    subtitle: "Kwart",
    description:
      "De gulden middenweg: uitdagend genoeg om trots op te zijn, maar haalbaar met een goede voorbereiding.",
    swim: "1.000m",
    bike: "40km",
    run: "10km",
    color: "bg-accent",
    image: photoCycling,
    note: "Populairste afstand",
  },
  {
    title: "1/2 Triathlon",
    subtitle: "Halve (70.3)",
    description:
      "De ultieme test. Een serieuze afstand door het mooiste van de Brabantse Wal — voor wie graag grenzen verlegt.",
    swim: "1.900m",
    bike: "90km",
    run: "21,1km",
    color: "bg-secondary",
    image: photoRunning,
    note: "Voor de echte doorzetters",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const Afstanden = () => (
  <div className="bg-background min-h-screen">
    <SiteNav />

    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-accent-foreground py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-5">
            <p className="text-primary font-display text-sm uppercase tracking-widest">Editie 2026</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent-foreground leading-[1.05]">
              Kies jouw afstand
            </h1>
            <p className="text-accent-foreground/70 max-w-xl mx-auto text-lg">
              Van eerste triathlon tot halve afstand — er is een uitdaging voor iedereen. Zwemmen in het
              Markiezaatsmeer, fietsen over de Brabantse Wal en finishen in Bergen op Zoom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Distance cards */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl space-y-16">
          {distances.map((d, i) => (
            <motion.div
              key={d.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className={`space-y-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className={`h-1.5 w-12 rounded-full ${d.color}`} />
                  <span className="text-sm text-muted-foreground font-display uppercase tracking-widest">
                    {d.note}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl text-foreground">{d.title}</h2>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{d.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{d.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-muted rounded-xl p-4 text-center space-y-2">
                    <img src={swimmingIcon} alt="Zwemmen" className="h-8 w-8 mx-auto" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Zwemmen</p>
                    <p className="text-lg font-display text-foreground">{d.swim}</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center space-y-2">
                    <img src={cyclingIcon} alt="Fietsen" className="h-8 w-8 mx-auto" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Fietsen</p>
                    <p className="text-lg font-display text-foreground">{d.bike}</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center space-y-2">
                    <img src={runningIcon} alt="Hardlopen" className="h-8 w-8 mx-auto" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Hardlopen</p>
                    <p className="text-lg font-display text-foreground">{d.run}</p>
                  </div>
                </div>

                <Button
                  className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide px-8 h-12"
                  asChild
                >
                  <a href={registrationUrl} target="_blank" rel="noreferrer">
                    Inschrijven voor {d.title} <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overzicht tabel */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-3xl text-foreground text-center mb-8">Alle afstanden op een rij</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left p-4 font-display uppercase tracking-wider text-foreground">Afstand</th>
                    <th className="text-center p-4 font-display uppercase tracking-wider text-foreground">🏊 Zwemmen</th>
                    <th className="text-center p-4 font-display uppercase tracking-wider text-foreground">🚴 Fietsen</th>
                    <th className="text-center p-4 font-display uppercase tracking-wider text-foreground">🏃 Hardlopen</th>
                    <th className="text-center p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {distances.map((d) => (
                    <tr key={d.title} className="border-b border-border last:border-0">
                      <td className="p-4">
                        <p className="font-display text-foreground text-base">{d.title}</p>
                        <p className="text-xs text-muted-foreground">{d.subtitle}</p>
                      </td>
                      <td className="text-center p-4 text-foreground font-semibold">{d.swim}</td>
                      <td className="text-center p-4 text-foreground font-semibold">{d.bike}</td>
                      <td className="text-center p-4 text-foreground font-semibold">{d.run}</td>
                      <td className="text-center p-4">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase text-xs" asChild>
                          <a href={registrationUrl} target="_blank" rel="noreferrer">Inschrijven</a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-primary-foreground">Klaar voor de uitdaging?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
              Schrijf je in en daag jezelf uit op 14 juni 2026. Of het nu je eerste of je tiende triathlon is
              — de Brabantse Wal verwelkomt je met open armen.
            </p>
            <Button
              className="bg-foreground text-accent-foreground hover:bg-petrol-light font-display text-lg px-10 h-14 uppercase tracking-wider"
              asChild
            >
              <a href={registrationUrl} target="_blank" rel="noreferrer">
                Schrijf je in <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Afstanden;
