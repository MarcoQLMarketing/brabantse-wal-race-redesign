import { useState } from "react";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Lightbox from "@/components/Lightbox";

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

const allPhotos = [
  { src: photoFinishArch, alt: "Finishboog", category: "finish" },
  { src: photoFinish, alt: "Finish", category: "finish" },
  { src: photoHighFive, alt: "High-five", category: "sfeer" },
  { src: photoSwimming, alt: "Zwemmen start", category: "zwemmen" },
  { src: photoSwimming2, alt: "Zwemmen", category: "zwemmen" },
  { src: photoSwimming3, alt: "Open water zwemmen", category: "zwemmen" },
  { src: photoCycling, alt: "Fietsen", category: "fietsen" },
  { src: photoCyclingGroup, alt: "Fietsgroep", category: "fietsen" },
  { src: photoRunning, alt: "Hardlopen", category: "hardlopen" },
  { src: photoLandscape, alt: "Brabantse Wal landschap", category: "sfeer" },
];

const categories = [
  { key: "alle", label: "Alle foto's" },
  { key: "zwemmen", label: "Zwemmen" },
  { key: "fietsen", label: "Fietsen" },
  { key: "hardlopen", label: "Hardlopen" },
  { key: "finish", label: "Finish" },
  { key: "sfeer", label: "Sfeer" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const Fotos = () => {
  const [filter, setFilter] = useState("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "alle" ? allPhotos : allPhotos.filter((p) => p.category === filter);
  const lightboxImages = filtered.map((p) => p.src);

  return (
    <div className="bg-background min-h-screen">
      <SiteNav />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground text-accent-foreground py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-5">
              <p className="text-primary font-display text-sm uppercase tracking-widest">Galerij</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent-foreground leading-[1.05]">
                Sfeerbeelden
              </h1>
              <p className="text-accent-foreground/70 max-w-xl mx-auto text-lg">
                Beleef de sfeer van de Triathlon Brabantse Wal opnieuw. 
                Klik op een foto om hem groter te bekijken.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="bg-background border-b border-border sticky top-16 z-30">
          <div className="container max-w-6xl py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-display uppercase tracking-wider transition-colors ${
                    filter === cat.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-12">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src + filter}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                Geen foto's gevonden in deze categorie.
              </p>
            )}
          </div>
        </section>
      </main>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => setLightboxIndex(i)}
      />

      <SiteFooter />
    </div>
  );
};

export default Fotos;
