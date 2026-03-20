export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  category: "nieuws" | "update" | "verslag";
}

import photoFinish from "@/assets/photos/finish.jpg";
import photoCyclingGroup from "@/assets/photos/cycling-group.jpg";
import photoSwimming from "@/assets/photos/swimming.jpg";
import photoHighFive from "@/assets/photos/high-five.jpg";

export const newsItems: NewsItem[] = [
  {
    id: "inschrijving-geopend-2026",
    title: "Inschrijving editie 2026 geopend!",
    excerpt: "De inschrijving voor de Triathlon Brabantse Wal 2026 is officieel geopend. Kies je afstand en doe mee op 14 juni.",
    content: "De inschrijving voor de Triathlon Brabantse Wal 2026 is officieel geopend! Op 14 juni 2026 vindt de volgende editie plaats in Bergen op Zoom. Of je nu kiest voor de 1/8, 1/4 of 1/2 triathlon — er is een afstand voor iedereen. Schrijf je snel in, want de plekken zijn beperkt!",
    date: "2026-02-15",
    image: photoFinish,
    category: "nieuws",
  },
  {
    id: "nieuwe-fietsroute",
    title: "Vernieuwde fietsroute langs de Brabantse Wal",
    excerpt: "Dit jaar fietsen we over een vernieuwde route met prachtige uitzichten over het Markiezaatsmeer.",
    content: "We zijn trots om de vernieuwde fietsroute voor 2026 aan te kondigen. Het parcours voert je langs de mooiste plekjes van de Brabantse Wal, met adembenemende uitzichten over het Markiezaatsmeer en door de groene polders rondom Bergen op Zoom.",
    date: "2026-03-01",
    image: photoCyclingGroup,
    category: "update",
  },
  {
    id: "vrijwilligers-gezocht",
    title: "Vrijwilligers gezocht — help mee!",
    excerpt: "Zonder vrijwilligers geen triathlon. Meld je aan en maak dit evenement onvergetelijk.",
    content: "De Triathlon Brabantse Wal draait op de inzet van fantastische vrijwilligers. Of je nu wilt helpen bij de drinkposten, de finish of de organisatie — elke handeling telt. Je krijgt een mooi shirt, een gezellige dag en de dankbaarheid van alle deelnemers.",
    date: "2026-03-10",
    image: photoHighFive,
    category: "nieuws",
  },
  {
    id: "zwemlocatie-goedgekeurd",
    title: "Zwemlocatie Markiezaatsmeer goedgekeurd",
    excerpt: "De waterkwaliteit van het Markiezaatsmeer is uitstekend bevonden voor het zwemonderdeel.",
    content: "Goed nieuws! De waterkwaliteit van het Markiezaatsmeer is getest en goedgekeurd voor het zwemonderdeel van de triathlon. De metingen tonen uitstekende waarden, waardoor we op een veilige en schone zwemstart kunnen rekenen.",
    date: "2026-03-18",
    image: photoSwimming,
    category: "update",
  },
];
