import { Link } from "react-router-dom";

const updates = [
  "Wisselzone breidt uit naar stoep en fietspad.",
  "Fietsroute halve gaat langs het Schelderijnkanaal i.p.v. door de wijk.",
  "Geen loopbrug; kwart en halve delen dezelfde looproute.",
];

const routeEmbeds = [
  { title: "De halve", src: "https://www.hellodrifter.com/embedded/v1/LCuPA3" },
  { title: "Kwart", src: "https://www.hellodrifter.com/embedded/v1/AdUvUb" },
  { title: "Achtste", src: "https://www.hellodrifter.com/embedded/v1/7XuL0T" },
];

const Routes = () => (
  <div className="bg-background text-foreground">
    <section className="bg-foreground text-accent-foreground py-16">
      <div className="container max-w-4xl text-center space-y-4">
        <p className="uppercase tracking-[0.3em] text-sm text-primary">Routes 2026</p>
        <h1 className="text-4xl md:text-5xl font-display">Swim · Bike · Run langs de Brabantse Wal</h1>
        <p className="text-accent-foreground/80">
          Nagenoeg dezelfde flow als vorig jaar, met een paar praktische tweaks. Hieronder vind je de laatste routevideo’s, kaarten en embeds.
        </p>
        <div className="text-xs uppercase tracking-widest text-accent-foreground/60">Laatst bijgewerkt: conceptversie</div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl space-y-6">
        <div className="bg-muted border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
          <p className="text-sm text-muted-foreground">Update 2026</p>
          <p className="text-lg md:text-xl text-foreground">
            Routes volgen vrijwel dezelfde lijn als 2025. Houd rekening met deze aanpassingen (definitieve versie volgt):
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            {updates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
          <p className="text-sm text-muted-foreground">Update 2025</p>
          <p className="text-muted-foreground">
            We werken aan extra capaciteit zonder in te leveren op veiligheid en sfeer. Zwemoptie in de Binnenschelde (voor kwart & achtste), verkeersarme routes, veel publiekspunten
            en langere lussen voor de halve (niet langer zelfvoorzienend). Definitieve GPX’en delen we hier zodra ze rond zijn.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-display">Parcours preview</p>
          <div className="aspect-video rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Routeinfo Triathlon Brabantse Wal"
              src="https://peertube.tv/videos/embed/869fc7a8-fff7-476b-b2bc-32b8a001cbd6"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container max-w-5xl space-y-10">
        {routeEmbeds.map((route) => (
          <div key={route.title} className="space-y-4">
            <h2 className="text-3xl font-display">{route.title}</h2>
            <p className="text-muted-foreground">Klik op de kaart om lagen en onderdelen te bekijken.</p>
            <div className="rounded-3xl overflow-hidden border border-border">
              <iframe title={route.title} src={route.src} className="w-full h-[520px]" allowFullScreen />
            </div>
          </div>
        ))}

        <div className="space-y-4">
          <h2 className="text-3xl font-display">Alle afstanden bij elkaar</h2>
          <div className="rounded-3xl overflow-hidden border border-border">
            <iframe
              title="Alle routes"
              src="https://www.google.com/maps/d/embed?mid=1t00fMRC5t6dKRJrusuQ5ocQMpvV2dNw&ehbc=2E312F&noprof=1"
              className="w-full h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="pb-24">
      <div className="container max-w-4xl text-center space-y-4">
        <h3 className="text-2xl font-display">Vragen over het parcours?</h3>
        <p className="text-muted-foreground">
          Check de praktische info voor programma & FAQ, of mail de organisatie. Routes worden hier geüpdatet zodra de laatste wijzigingen definitief zijn.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/praktisch" className="px-5 py-2 rounded-full border border-border text-foreground">
            Naar programma & FAQ
          </Link>
          <a href="mailto:organisatie@triathlonbw.nl" className="px-5 py-2 rounded-full bg-primary text-primary-foreground">Mail de organisatie</a>
        </div>
      </div>
    </section>
  </div>
);

export default Routes;
