import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const SiteFooter = () => (
  <footer className="bg-foreground text-accent-foreground py-12" id="contact">
    <div className="container max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <img src={logoWhite} alt="Triathlon Brabantse Wal" className="h-12" />
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
            <p>
              <a href="/routes" className="hover:text-primary transition-colors">Routes (Hello Drifter)</a>
            </p>
            <p>
              <a href="/praktisch" className="hover:text-primary transition-colors">Programma & FAQ</a>
            </p>
            <p>
              <a href="#" className="hover:text-primary transition-colors">Reglement</a>
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-accent-foreground/50 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-accent-foreground/50 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-accent-foreground/10 mt-8 pt-6 text-center text-xs text-accent-foreground/40">
        © 2026 Triathlon Brabantse Wal. Alle rechten voorbehouden.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
