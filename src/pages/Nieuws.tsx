import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
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

const Nieuws = () => {
  const sorted = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="bg-background min-h-screen">
      <SiteNav />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground text-accent-foreground py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-5">
              <p className="text-primary font-display text-sm uppercase tracking-widest">Blijf op de hoogte</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent-foreground leading-[1.05]">
                Nieuws & Updates
              </h1>
              <p className="text-accent-foreground/70 max-w-xl mx-auto text-lg">
                Het laatste nieuws over de Triathlon Brabantse Wal: van inschrijvingen tot parcours-updates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured article */}
        {featured && (
          <motion.section
            className="py-16 bg-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="container max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {featured.image && (
                  <div className="rounded-xl overflow-hidden aspect-[16/10] shadow-md">
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className={categoryColors[featured.category]}>{featured.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl text-foreground">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{featured.content}</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Rest of articles */}
        <section className="py-16 bg-muted">
          <div className="container max-w-6xl">
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">Eerdere berichten</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((item, i) => (
                <motion.article
                  key={item.id}
                  className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className={categoryColors[item.category]}>
                        {item.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
                    </div>
                    <h3 className="text-lg text-foreground leading-snug">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Nieuws;
