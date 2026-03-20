import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight, Star, Shirt, Coffee, Music, Users, Clock } from "lucide-react";
import { registrationUrl } from "@/components/SiteNav";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

import photoHighFive from "@/assets/photos/high-five.jpg";
import photoFinish from "@/assets/photos/finish.jpg";
import photoFinishArch from "@/assets/photos/finish-arch.jpg";

const roles = [
  {
    title: "Zwemstart & waterveiligheid",
    description: "Help deelnemers veilig het water in en uit, en houd het zwemtraject in de gaten.",
    icon: "🏊",
  },
  {
    title: "Fietsparcours & verkeersregelaars",
    description: "Zorg dat het fietsparcours veilig is en wijs deelnemers de juiste richting.",
    icon: "🚴",
  },
  {
    title: "Hardlooproute & drinkposten",
    description: "Deel water en sportdrank uit en moedig lopers aan langs het parcours.",
    icon: "🏃",
  },
  {
    title: "Finish & evenementterrein",
    description: "Verwelkom finishers, deel medailles uit en help bij de organisatie op het terrein.",
    icon: "🏅",
  },
  {
    title: "Registratie & startbewijzen",
    description: "Help deelnemers bij de check-in en het uitdelen van startnummers en chipbandjes.",
    icon: "📋",
  },
  {
    title: "Opbouw & afbouw",
    description: "Help mee met het opbouwen en afbreken van het parcours en het evenementterrein.",
    icon: "🔧",
  },
];

const perks = [
  { icon: Shirt, text: "Een uniek vrijwilligers-shirt" },
  { icon: Coffee, text: "Eten & drinken de hele dag" },
  { icon: Music, text: "Een gezellige afterparty" },
  { icon: Star, text: "Eeuwige dankbaarheid van alle deelnemers" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const Vrijwilligers = () => (
  <div className="bg-background min-h-screen">
    <SiteNav />

    <main className="pt-16">
      {/* Hero — Volunteers are heroes */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={photoHighFive} alt="Vrijwilligers bij de Triathlon Brabantse Wal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-display text-sm uppercase tracking-widest mb-6">
            <Star className="h-4 w-4" /> Helden van het evenement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Zonder jou geen finish
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Elke high-five, elk bekertje water, elke aanwijzing op het parcours — 
            jij maakt het verschil. Vrijwilligers zijn de echte helden van de Triathlon Brabantse Wal.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display text-lg px-10 h-14 uppercase tracking-wider shadow-lg">
            Meld je aan <Heart className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Stats / social proof */}
      <section className="bg-foreground text-accent-foreground py-10">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { val: "47", label: "Vrijwilligers aangemeld" },
              { val: "150+", label: "Nodig in totaal" },
              { val: "1", label: "Onvergetelijke dag" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-display text-primary">{s.val}</p>
                <p className="text-xs md:text-sm text-accent-foreground/70 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat krijg je ervoor terug */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-foreground">
                Wat krijg je ervoor terug?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Een dag vol energie, gezelligheid en de voldoening dat jij honderden sporters hebt geholpen 
                hun persoonlijke uitdaging waar te maken. En dat is niet alles:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk) => (
                  <div key={perk.text} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <perk.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{perk.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={photoFinish} alt="Sfeer bij de finish" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Taken / Rollen */}
      <motion.section
        className="py-20 bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">Waar kun je helpen?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Er zijn verschillende taken waar we hulp bij kunnen gebruiken. Kies wat bij je past — wij zorgen voor de rest.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-3xl mb-3">{role.icon}</div>
                <h3 className="text-lg text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Praktische info */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-12">Praktische info</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Clock, title: "Tijdstip", text: "Vrijwilligers worden verwacht vanaf 07:00. Het evenement duurt tot ca. 17:00. Niet de hele dag beschikbaar? Geen probleem — halve diensten zijn ook welkom." },
              { icon: Users, title: "Voor wie?", text: "Iedereen vanaf 16 jaar kan meehelpen. Ervaring is niet nodig — je krijgt een briefing en begeleiding op de dag zelf." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-muted rounded-xl space-y-3">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={photoFinishArch} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <Heart className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl text-white">
              Doe mee als vrijwilliger
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Het kost je één dag, maar de voldoening en gezelligheid neem je mee voor altijd. 
              Meld je aan en word onderdeel van het team!
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display text-lg px-10 h-14 uppercase tracking-wider shadow-lg">
              Ik doe mee! <Heart className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Vrijwilligers;
