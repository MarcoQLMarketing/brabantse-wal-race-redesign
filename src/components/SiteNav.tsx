import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-color.png";
import swimmingIcon from "@/assets/icons/swimming.svg";
import cyclingIcon from "@/assets/icons/cycling.svg";
import runningIcon from "@/assets/icons/running.svg";

const homeLink = { label: "Home", href: "/#home" };

const navLinks = [
  { label: "Afstanden", href: "/#afstanden" },
  { label: "Foto's", href: "/#foto's" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Contact", href: "/#contact" },
];

const infoLinks = [
  { label: "Programma & FAQ's", href: "/praktisch" },
  { label: "Routes", href: "/routes" },
];

export const registrationUrl =
  "https://atleta.cc/e/Fx1VoOeKOcz8?initialUrl=https%3A%2F%2Ftriathlonbw.nl%2F&finalUrl=https%3A%2F%2Ftriathlonbw.nl%2F";

const InfoDropdown = () => (
  <div className="relative group">
    <button
      type="button"
      className="flex items-center gap-1 text-sm text-accent-foreground/80 hover:text-primary transition-colors font-medium"
    >
      Info <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
    </button>
    <div className="pointer-events-none absolute top-full left-0 mt-2 hidden min-w-[220px] flex-col rounded-lg border border-border bg-background/95 p-2 text-sm shadow-lg group-hover:flex group-focus-within:flex group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
      {infoLinks.map((link) => (
        <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-foreground hover:bg-muted">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const SiteNav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
    <div className="container max-w-6xl flex items-center justify-between h-16">
      <div className="flex items-center gap-4">
        <a href="/" aria-label="Triathlon Brabantse Wal" className="flex items-center">
          <img src={logoColor} alt="Triathlon Brabantse Wal" className="h-12 md:h-14" />
        </a>
        <div className="hidden sm:flex items-center gap-2 text-white/90">
          <img src={swimmingIcon} alt="Swim" className="h-6 w-6 md:h-7 md:w-7" />
          <img src={cyclingIcon} alt="Bike" className="h-6 w-6 md:h-7 md:w-7" />
          <img src={runningIcon} alt="Run" className="h-6 w-6 md:h-7 md:w-7" />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href={homeLink.href} className="text-sm text-accent-foreground/80 hover:text-primary transition-colors font-medium">
          {homeLink.label}
        </a>
        <InfoDropdown />
        {navLinks.map((item) => (
          <a key={item.label} href={item.href} className="text-sm text-accent-foreground/80 hover:text-primary transition-colors font-medium">
            {item.label}
          </a>
        ))}
      </div>
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-yellow-hover font-display uppercase tracking-wide" asChild>
        <a href={registrationUrl} target="_blank" rel="noreferrer">
          Inschrijven
        </a>
      </Button>
    </div>
  </nav>
);

export default SiteNav;
