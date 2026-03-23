import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

import photoHighFive from "@/assets/photos/high-five.jpg";

const roles = [
  { id: "zwemstart", label: "🏊 Zwemstart & waterveiligheid" },
  { id: "fietsparcours", label: "🚴 Fietsparcours & verkeer" },
  { id: "hardlopen", label: "🏃 Hardlooproute & drinkposten" },
  { id: "finish", label: "🏅 Finish & evenementterrein" },
  { id: "registratie", label: "📋 Registratie & startbewijzen" },
  { id: "opbouw", label: "🔧 Opbouw & afbouw" },
];

const shifts = [
  { id: "ochtend", label: "Ochtend (07:00 – 12:00)" },
  { id: "middag", label: "Middag (12:00 – 17:00)" },
  { id: "heeleDag", label: "Hele dag (07:00 – 17:00)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const AanmeldenVrijwilligers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const toggleRole = (id: string) => {
    setSelectedRoles((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));
  };

  if (submitted) {
    return (
      <div className="bg-background min-h-screen">
        <SiteNav />
        <main className="pt-16">
          <section className="min-h-[70vh] flex items-center justify-center">
            <motion.div
              className="text-center px-4 max-w-lg space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl text-foreground">Bedankt voor je aanmelding!</h1>
              <p className="text-muted-foreground text-lg">
                Super dat je meedoet als vrijwilliger. We nemen binnenkort contact met je op met meer informatie
                over je taken en de dag zelf.
              </p>
              <Button variant="outline" className="font-display uppercase tracking-wide" asChild>
                <a href="/">
                  Terug naar home <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </section>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <SiteNav />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={photoHighFive} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="container max-w-4xl text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-display text-sm uppercase tracking-widest">
                <Heart className="h-4 w-4" /> Word vrijwilliger
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
                Meld je aan als vrijwilliger
              </h1>
              <p className="text-white/80 max-w-xl mx-auto text-lg">
                Vul het formulier hieronder in en word onderdeel van het team dat de Triathlon Brabantse Wal
                mogelijk maakt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
                <h2 className="text-2xl text-foreground mb-2">Aanmeldformulier</h2>
                <p className="text-muted-foreground mb-8">
                  Alle velden met een * zijn verplicht. We gebruiken je gegevens alleen voor de organisatie van het evenement.
                </p>

                <form
                  className="space-y-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                    window.scrollTo(0, 0);
                  }}
                >
                  {/* Persoonlijke gegevens */}
                  <div className="space-y-5">
                    <h3 className="text-lg text-foreground border-b border-border pb-2">Persoonlijke gegevens</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="voornaam" className="text-sm font-medium text-foreground">
                          Voornaam *
                        </label>
                        <Input id="voornaam" name="voornaam" required placeholder="Je voornaam" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="achternaam" className="text-sm font-medium text-foreground">
                          Achternaam *
                        </label>
                        <Input id="achternaam" name="achternaam" required placeholder="Je achternaam" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          E-mailadres *
                        </label>
                        <Input id="email" name="email" type="email" required placeholder="je@voorbeeld.nl" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telefoon" className="text-sm font-medium text-foreground">
                          Telefoonnummer *
                        </label>
                        <Input id="telefoon" name="telefoon" type="tel" required placeholder="06-12345678" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="shirtmaat" className="text-sm font-medium text-foreground">
                        Shirtmaat
                      </label>
                      <select
                        id="shirtmaat"
                        name="shirtmaat"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Selecteer maat</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                  </div>

                  {/* Voorkeur taken */}
                  <div className="space-y-5">
                    <h3 className="text-lg text-foreground border-b border-border pb-2">Waar wil je helpen?</h3>
                    <p className="text-sm text-muted-foreground">Selecteer één of meerdere taken (niet verplicht — we delen je in).</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {roles.map((role) => (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => toggleRole(role.id)}
                          className={`text-left p-3 rounded-xl border text-sm transition-colors ${
                            selectedRoles.includes(role.id)
                              ? "border-primary bg-primary/5 text-foreground"
                              : "border-border bg-card text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {role.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Beschikbaarheid */}
                  <div className="space-y-5">
                    <h3 className="text-lg text-foreground border-b border-border pb-2">Beschikbaarheid</h3>
                    <div className="space-y-3">
                      {shifts.map((shift) => (
                        <label
                          key={shift.id}
                          className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
                        >
                          <input type="radio" name="shift" value={shift.id} className="accent-[hsl(46,95%,55%)]" />
                          <span className="text-sm text-foreground">{shift.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Opmerkingen */}
                  <div className="space-y-2">
                    <label htmlFor="opmerkingen" className="text-sm font-medium text-foreground">
                      Opmerkingen
                    </label>
                    <Textarea
                      id="opmerkingen"
                      name="opmerkingen"
                      placeholder="Bijzonderheden, allergieën, ervaring..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-yellow-hover font-display text-lg uppercase tracking-wide h-14"
                  >
                    Aanmelden als vrijwilliger <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default AanmeldenVrijwilligers;
