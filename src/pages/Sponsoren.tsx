import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Handshake, Eye, Users, Trophy } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const sponsorTiers = [
  {
    name: "Hoofdsponsor",
    price: "Op aanvraag",
    color: "bg-primary",
    perks: [
      "Logo prominent op finishboog & startbanner",
      "Vermelding in alle communicatie & persberichten",
      "Eigen stand op het evenementterrein",
      "Logo op alle deelnemersshirts",
      "Social media campagne (10+ posts)",
      "VIP-area met catering voor relaties",
    ],
  },
  {
    name: "Sponsor",
    price: "Vanaf €500",
    color: "bg-accent",
    perks: [
      "Logo op website & eventborden",
      "Vermelding in nieuwsbrieven",
      "Logo op finishdoek",
      "Social media vermelding (3+ posts)",
      "2 VIP-plekken op eventdag",
    ],
  },
  {
    name: "Supporter",
    price: "Vanaf €150",
    color: "bg-secondary",
    perks: [
      "Logo op website",
      "Vermelding in nieuwsbrief",
      "Social media shout-out",
      "2 gratis deelnameplekken",
    ],
  },
];

const sponsorReasons = [
  {
    icon: Eye,
    title: "Zichtbaarheid",
    description: "Bereik honderden deelnemers, toeschouwers en een groeiend online publiek in de regio Bergen op Zoom.",
  },
  {
    icon: Handshake,
    title: "Verbinding",
    description: "Associeer je merk met sport, gezondheid en Brabantse gezelligheid — waarden die blijven hangen.",
  },
  {
    icon: Users,
    title: "Netwerk",
    description: "Ontmoet andere sponsors, ondernemers en de gemeenschap tijdens het evenement en de VIP-area.",
  },
  {
    icon: Trophy,
    title: "Impact",
    description: "Draag bij aan een evenement dat mensen in beweging brengt en de regio op de kaart zet.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const Sponsoren = () => (
  <div className="bg-background min-h-screen">
    <SiteNav />

    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-accent-foreground py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-5"
          >
            <p className="text-primary font-display text-sm uppercase tracking-widest">Partners & Sponsors</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent-foreground leading-[1.05]">
              Samen maken we het mogelijk
            </h1>
            <p className="text-accent-foreground/70 max-w-xl mx-auto text-lg">
              De Triathlon Brabantse Wal is een evenement van en voor de regio. Met jouw steun als sponsor 
              maken we er ieder jaar weer een onvergetelijke dag van.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Waarom sponsoren */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-12">Waarom sponsoren?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorReasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pakketten */}
      <motion.section
        className="py-20 bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">Sponsorpakketten</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Kies het pakket dat bij jouw organisatie past. Op maat? Neem contact op voor de mogelijkheden.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`h-2 ${tier.color}`} />
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-2xl text-foreground">{tier.name}</h3>
                    <p className="text-primary font-display text-lg mt-1">{tier.price}</p>
                  </div>
                  <ul className="space-y-2">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide" asChild>
                    <a href="mailto:info@triathlonbw.nl?subject=Sponsoring%20TBW%202026">
                      Neem contact op <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Huidige sponsors placeholder */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl text-center">
          <h2 className="text-2xl text-foreground mb-8">Onze huidige sponsors</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground border border-border">
                Sponsor {i + 1}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            Word jij de volgende? <a href="mailto:info@triathlonbw.nl" className="text-primary hover:underline">Neem contact op</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <Handshake className="h-12 w-12 text-primary-foreground mx-auto" />
            <h2 className="text-3xl md:text-4xl text-primary-foreground">
              Laten we samenwerken
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
              Heb je interesse in een sponsorpakket of wil je op een andere manier bijdragen? 
              We denken graag met je mee over de mogelijkheden.
            </p>
            <Button className="bg-foreground text-accent-foreground hover:bg-petrol-light font-display text-lg px-10 h-14 uppercase tracking-wider" asChild>
              <a href="mailto:info@triathlonbw.nl?subject=Sponsoring%20TBW%202026">
                Stuur ons een bericht <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Sponsoren;
