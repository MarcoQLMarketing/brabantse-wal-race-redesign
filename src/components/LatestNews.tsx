import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import { newsItems } from "@/data/newsData";

const categoryColors: Record<string, string> = {
  nieuws: "bg-primary text-primary-foreground",
  update: "bg-accent text-accent-foreground",
  verslag: "bg-secondary text-secondary-foreground",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const LatestNews = () => {
  const latest = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <motion.section
      className="py-20 bg-background"
      id="nieuws"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">Laatste nieuws</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Blijf op de hoogte van het laatste nieuws rond de Triathlon Brabantse Wal.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((item, i) => (
            <motion.article
              key={item.id}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {item.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className={categoryColors[item.category]}>{item.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="text-lg text-foreground leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" className="font-display uppercase tracking-wide border-foreground text-foreground" asChild>
            <a href="/nieuws">
              Alle berichten bekijken <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestNews;
