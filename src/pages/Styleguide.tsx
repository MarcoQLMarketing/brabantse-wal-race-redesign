import logoColor from "@/assets/logo-color.png";
import logoWhite from "@/assets/logo-white.png";
import logoYellow from "@/assets/logo-yellow.png";
import photoFinish from "@/assets/photos/finish.jpg";
import photoCycling from "@/assets/photos/cycling.jpg";
import photoSwimming from "@/assets/photos/swimming.jpg";
import photoHighFive from "@/assets/photos/high-five.jpg";
import photoLandscape from "@/assets/photos/landscape.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const colors = [
  { name: "Petrol (tekst)", var: "--petrol", hsl: "195 60% 15%", className: "bg-petrol" },
  { name: "Petrol Light", var: "--petrol-light", hsl: "195 40% 30%", className: "bg-petrol-light" },
  { name: "Geel (CTA)", var: "--yellow", hsl: "46 95% 55%", className: "bg-yellow" },
  { name: "Lavender", var: "--lavender", hsl: "230 40% 92%", className: "bg-lavender" },
  { name: "Warm White", var: "--warm-white", hsl: "40 20% 98%", className: "bg-warm-white" },
  { name: "Warm Gray", var: "--warm-gray", hsl: "40 10% 94%", className: "bg-warm-gray" },
];

const Styleguide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-6">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-4">
            <img src={logoColor} alt="Triathlon Brabantse Wal" className="h-16" />
            <div>
              <h1 className="text-3xl text-foreground">Styleguide</h1>
              <p className="text-muted-foreground">Triathlon Brabantse Wal — Visuele referentie</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl py-12 space-y-16">
        {/* Kleurenpalet */}
        <section>
          <h2 className="text-2xl text-foreground mb-6">Kleurenpalet</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colors.map((c) => (
              <div key={c.var} className="space-y-2">
                <div
                  className={`w-full aspect-square rounded-lg shadow-sm border border-border`}
                  style={{ backgroundColor: `hsl(${c.hsl})` }}
                />
                <p className="font-medium text-sm text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{c.hsl}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typografie */}
        <section>
          <h2 className="text-2xl text-foreground mb-6">Typografie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-card rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Headlines — Barlow Condensed</p>
              <h1 className="text-5xl text-foreground">Triathlon Brabantse Wal</h1>
              <h2 className="text-3xl text-foreground">Schrijf je in!</h2>
              <h3 className="text-xl text-foreground">Kom je ook?</h3>
            </div>
            <div className="space-y-4 p-6 bg-card rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Bodytekst — Inter</p>
              <p className="text-lg">
                De Triathlon Brabantse Wal is hét sportevenement van Bergen op Zoom. 
                Een gezellige, persoonlijke triathlon door het prachtige landschap van de Brabantse Wal.
              </p>
              <p className="text-base text-muted-foreground">
                Secundaire tekst voor beschrijvingen, details en toelichting bij de verschillende onderdelen van het evenement.
              </p>
              <p className="text-sm font-medium">Datum: 15 juni 2026 · Bergen op Zoom</p>
            </div>
          </div>
        </section>

        {/* UI Elementen */}
        <section>
          <h2 className="text-2xl text-foreground mb-6">UI Elementen</h2>
          <div className="space-y-8">
            {/* Buttons */}
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Knoppen</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display text-lg px-8 h-12 uppercase tracking-wide">
                  Schrijf je in
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-petrol-light font-display text-lg px-8 h-12 uppercase tracking-wide">
                  Word Vrijwilliger
                </Button>
                <Button variant="outline" className="font-display text-lg px-8 h-12 uppercase tracking-wide border-foreground text-foreground">
                  Meer Info
                </Button>
                <Button variant="ghost" className="text-foreground">
                  Tekst link →
                </Button>
              </div>
            </div>

            {/* Badges */}
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Badges</p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary text-primary-foreground">Zwemmen</Badge>
                <Badge className="bg-accent text-accent-foreground">Fietsen</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Hardlopen</Badge>
                <Badge className="bg-primary text-primary-foreground">750m</Badge>
                <Badge className="bg-primary text-primary-foreground">20km</Badge>
                <Badge className="bg-primary text-primary-foreground">5km</Badge>
              </div>
            </div>

            {/* Card voorbeeld */}
            <div className="p-6 bg-card rounded-lg border border-border space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Kaarten</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Sprint", swim: "750m", bike: "20km", run: "5km" },
                  { title: "Olympisch", swim: "1500m", bike: "40km", run: "10km" },
                  { title: "Kwart", swim: "500m", bike: "20km", run: "2.5km" },
                ].map((d) => (
                  <div key={d.title} className="rounded-lg border border-border overflow-hidden bg-background">
                    <div className="p-1 bg-primary" />
                    <div className="p-5 space-y-3">
                      <h3 className="text-xl text-foreground">{d.title}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>🏊 {d.swim}</p>
                        <p>🚴 {d.bike}</p>
                        <p>🏃 {d.run}</p>
                      </div>
                      <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide">
                        Inschrijven
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Logo variaties */}
        <section>
          <h2 className="text-2xl text-foreground mb-6">Logo Variaties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-background rounded-lg border border-border flex items-center justify-center">
              <img src={logoColor} alt="Logo kleur" className="h-24 object-contain" />
            </div>
            <div className="p-8 bg-accent rounded-lg flex items-center justify-center">
              <img src={logoWhite} alt="Logo wit" className="h-24 object-contain" />
            </div>
            <div className="p-8 bg-foreground rounded-lg flex items-center justify-center">
              <img src={logoYellow} alt="Logo geel" className="h-24 object-contain" />
            </div>
          </div>
        </section>

        {/* Sfeerbeelden */}
        <section>
          <h2 className="text-2xl text-foreground mb-6">Sfeerbeelden</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[photoFinish, photoCycling, photoSwimming, photoHighFive, photoLandscape].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={src} alt={`Sfeerbeeld ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Styleguide;
