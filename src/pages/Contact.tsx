import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "info@triathlonbw.nl", href: "mailto:info@triathlonbw.nl" },
  { icon: Phone, label: "Telefoon", value: "06-12345678", href: "tel:0612345678" },
  { icon: MapPin, label: "Locatie", value: "Bergen op Zoom", href: "https://maps.google.com/?q=Bergen+op+Zoom" },
];

const Contact = () => (
  <div className="bg-background min-h-screen">
    <SiteNav />

    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-accent-foreground py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-5">
            <p className="text-primary font-display text-sm uppercase tracking-widest">Neem contact op</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent-foreground leading-[1.05]">
              We horen graag van je
            </h1>
            <p className="text-accent-foreground/70 max-w-xl mx-auto text-lg">
              Heb je een vraag over het evenement, wil je sponsor worden of zoek je meer informatie? 
              We staan voor je klaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <motion.div
              className="md:col-span-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 bg-muted rounded-xl hover:bg-border transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg text-foreground">Volg ons</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-5 space-y-2">
                <h3 className="text-lg text-foreground">Organisatie</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  De Triathlon Brabantse Wal wordt georganiseerd door een enthousiast team vrijwilligers uit de regio
                  Bergen op Zoom. We doen dit met passie voor sport en onze mooie omgeving.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="md:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl text-foreground mb-6">Stuur een bericht</h2>
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const data = new FormData(form);
                    const subject = encodeURIComponent(String(data.get("onderwerp") || "Contact TBW"));
                    const body = encodeURIComponent(
                      `Naam: ${data.get("naam")}\nE-mail: ${data.get("email")}\n\n${data.get("bericht")}`
                    );
                    window.location.href = `mailto:info@triathlonbw.nl?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="naam" className="text-sm font-medium text-foreground">
                        Naam
                      </label>
                      <Input id="naam" name="naam" placeholder="Je naam" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mailadres
                      </label>
                      <Input id="email" name="email" type="email" placeholder="je@voorbeeld.nl" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="onderwerp" className="text-sm font-medium text-foreground">
                      Onderwerp
                    </label>
                    <Input id="onderwerp" name="onderwerp" placeholder="Waar gaat je bericht over?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bericht" className="text-sm font-medium text-foreground">
                      Bericht
                    </label>
                    <Textarea
                      id="bericht"
                      name="bericht"
                      placeholder="Typ hier je bericht..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide h-12"
                  >
                    Verstuur bericht <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Dit opent je e-mailprogramma met het ingevulde bericht.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-muted py-16">
        <div className="container max-w-6xl">
          <h2 className="text-2xl text-foreground text-center mb-8">Locatie</h2>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[21/9]">
            <iframe
              title="Locatie Bergen op Zoom"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39580.54!2d4.26!3d51.495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c414748ce7e8ed%3A0x4084e14ba5c6e9e0!2sBergen%20op%20Zoom!5e0!3m2!1snl!2snl!4v1"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Contact;
