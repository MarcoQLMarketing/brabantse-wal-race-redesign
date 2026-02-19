import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Lightbox from "@/components/Lightbox";
import { ChevronRight, Clock, MapPin, Calendar, Users, Heart, Mail, Phone, Facebook, Instagram } from "lucide-react";

import logoWhite from "@/assets/logo-white.png";
import logoColor from "@/assets/logo-color.png";
import photoFinish from "@/assets/photos/finish.jpg";
import photoCyclingGroup from "@/assets/photos/cycling-group.jpg";
import photoSwimming from "@/assets/photos/swimming.jpg";
import photoSwimming2 from "@/assets/photos/swimming-2.jpg";
import photoHighFive from "@/assets/photos/high-five.jpg";
import photoLandscape from "@/assets/photos/landscape.jpg";
import photoRunning from "@/assets/photos/running.jpg";
import photoSwimming3 from "@/assets/photos/swimming-3.jpg";
import photoCycling from "@/assets/photos/cycling.jpg";
import photoFinishArch from "@/assets/photos/finish-arch.jpg";

// Countdown logic
const EVENT_DATE = new Date("2026-06-14T09:00:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const navItems = ["Home", "Info", "Afstanden", "Foto's", "Sponsors", "Contact"];

const distances = [
  { title: "1/8 Triathlon", subtitle: "Achtste (Sprint)", swim: "500m", bike: "20km", run: "5km", color: "bg-primary" },
  { title: "1/4 Triathlon", subtitle: "Kwart (Olympisch)", swim: "1.000m", bike: "40km", run: "10km", color: "bg-accent" },
  { title: "1/2 Triathlon", subtitle: "Halve (70.3)", swim: "1.900m", bike: "90km", run: "21,1km", color: "bg-secondary" },
];

const galleryPhotos = [
  photoFinish, photoCyclingGroup, photoSwimming, photoSwimming2,
  photoHighFive, photoLandscape, photoRunning, photoSwimming3,
  photoCycling, photoFinishArch,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const countdown = useCountdown(EVENT_DATE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
        <div className="container max-w-6xl flex items-center justify-between h-14">
          <img src={logoColor} alt="TBW" className="h-8" />
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-accent-foreground/80 hover:text-primary transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide">
            Inschrijven
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-14" id="home">
        <div className="absolute inset-0">
          <img src={photoFinishArch} alt="Triathlon Brabantse Wal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logoWhite} alt="Triathlon Brabantse Wal" className="h-28 md:h-40 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
            14 juni 2026 · Bergen op Zoom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display text-lg px-10 h-14 uppercase tracking-wider shadow-lg">
              Schrijf je in <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button className="bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30 font-display text-lg px-10 h-14 uppercase tracking-wider">
              Word Vrijwilliger <Heart className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
        {/* Shape divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center translate-y-[1px]">
          <img src="/wave-divider.svg" alt="" className="block w-auto max-h-[400px]" />
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-foreground text-accent-foreground py-8">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { val: countdown.days, label: "Dagen" },
              { val: countdown.hours, label: "Uren" },
              { val: countdown.minutes, label: "Minuten" },
              { val: countdown.seconds, label: "Seconden" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl md:text-5xl font-display text-primary">{item.val}</p>
                <p className="text-xs md:text-sm text-accent-foreground/70 uppercase tracking-wider mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-accent-foreground/80">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 14 juni 2026</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Bergen op Zoom</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Start 09:00</span>
          </div>
        </div>
      </section>

      {/* Wat is TBW? */}
      <motion.section
        className="py-20 bg-background"
        id="info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-foreground">
                Wat is de Triathlon Brabantse Wal?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                De Triathlon Brabantse Wal is meer dan een wedstrijd — het is een feest. 
                Een gezellige, laagdrempelige triathlon door het prachtige landschap van de Brabantse Wal, 
                waar persoonlijke uitdaging en Brabantse gezelligheid hand in hand gaan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Of je nu voor het eerst een triathlon doet of een ervaren atleet bent, 
                bij ons voel je je welkom. High-fives bij de finish, aanmoediging langs het parcours 
                en een gezellige nazit — dat is de Brabantse Wal.
              </p>
              <Button variant="outline" className="font-display uppercase tracking-wide border-foreground text-foreground">
                Meer over het evenement <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-lg overflow-hidden aspect-[3/4]">
                  <img src={photoHighFive} alt="High-five bij finish" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img src={photoSwimming} alt="Zwemmen" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="pt-8 space-y-3">
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img src={photoCycling} alt="Fietsen" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-lg overflow-hidden aspect-[3/4]">
                  <img src={photoLandscape} alt="Brabantse Wal landschap" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Afstanden */}
      <motion.section
        className="py-20 bg-muted"
        id="afstanden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">Kies jouw afstand</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Van beginner tot ervaren triatleet — er is een afstand voor iedereen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {distances.map((d, i) => (
              <motion.div
                key={d.title}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`h-2 ${d.color}`} />
                <div className="p-6 space-y-5">
                  <h3 className="text-2xl text-foreground">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.subtitle}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">🏊</div>
                      <div>
                        <p className="text-sm text-muted-foreground">Zwemmen</p>
                        <p className="font-semibold text-foreground">{d.swim}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">🚴</div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fietsen</p>
                        <p className="font-semibold text-foreground">{d.bike}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">🏃</div>
                      <div>
                        <p className="text-sm text-muted-foreground">Hardlopen</p>
                        <p className="font-semibold text-foreground">{d.run}</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide">
                    Inschrijven <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Foto Galerij */}
      <motion.section
        className="py-20 bg-background"
        id="foto's"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-center">Sfeerbeelden</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryPhotos.map((src, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={src}
                  alt={`Sfeerbeeld ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Vrijwilligers */}
      <section className="py-20 bg-primary" id="vrijwilligers">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <Users className="h-12 w-12 text-primary-foreground mx-auto" />
            <h2 className="text-3xl md:text-4xl text-primary-foreground">
              Help mee! Word Vrijwilliger
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
              Zonder vrijwilligers geen Triathlon Brabantse Wal. Help mee om dit evenement 
              onvergetelijk te maken! Het is leuk, gezellig en je krijgt een mooi shirt.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <Users className="h-5 w-5" />
              <span className="font-display text-xl">Al 47 vrijwilligers aangemeld</span>
            </div>
            <Button className="bg-foreground text-accent-foreground hover:bg-petrol-light font-display text-lg px-10 h-14 uppercase tracking-wider">
              Meld je aan als vrijwilliger <Heart className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-muted" id="sponsors">
        <div className="container max-w-6xl text-center">
          <h2 className="text-2xl text-foreground mb-8">Onze Sponsors</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-28 h-14 bg-border rounded-md flex items-center justify-center text-xs text-muted-foreground">
                Sponsor {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-accent-foreground py-12" id="contact">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img src={logoWhite} alt="TBW" className="h-12" />
              <p className="text-accent-foreground/70 text-sm">
                Triathlon Brabantse Wal — Hét triathlonevenement van Bergen op Zoom.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-primary">Contact</h3>
              <div className="space-y-2 text-sm text-accent-foreground/70">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@triathlonbw.nl</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 06-12345678</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bergen op Zoom</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-primary">Links</h3>
              <div className="space-y-2 text-sm text-accent-foreground/70">
                <p><a href="#" className="hover:text-primary transition-colors">Route (Hello Drifter)</a></p>
                <p><a href="#" className="hover:text-primary transition-colors">Nieuwsbrief</a></p>
                <p><a href="#" className="hover:text-primary transition-colors">Reglement</a></p>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="#" className="text-accent-foreground/50 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-accent-foreground/50 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-accent-foreground/10 mt-8 pt-6 text-center text-xs text-accent-foreground/40">
            © 2026 Triathlon Brabantse Wal. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        images={galleryPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => setLightboxIndex(i)}
      />
    </div>
  );
};

export default Index;
