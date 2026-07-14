import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    title: "TN Local Bus TimeTable System",
    desc: "Developed and deployed a Flutter mobile app to assist passengers by providing bus timings for the Virudhunagar and Madurai areas.",
    tags: ["Flutter", "Node.js", "MySQL"],
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&auto=format&fit=crop&q=60",
    link: "https://github.com/manojmarquez33/kcet-route-map",
    year: "2021",
  },
  {
    title: "KCET E-Canteen Management System",
    desc: "Designed a real-time food ordering system reducing wait times, implementing RESTful APIs to synchronize order status and ensure data consistency for concurrent users.",
    tags: ["Flutter", "Dart", "JSON", "PHP", "MySQL"],
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&auto=format&fit=crop&q=60",
    link: "https://github.com/manojmarquez33/kcet-canteen-flutter",
    year: "2022",
  },
  {
    title: "Hello KCET",
    desc: "Deployed an academic app serving 1000+ users, implementing a hybrid database strategy where MySQL fetches metadata and SQLite caches results for offline access.",
    tags: ["Java (Android)", "Flutter", "MySQL", "SQLite"],
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=60",
    link: "https://github.com/manojmarquez33/hello_kcet_flutter",
    year: "2023",
  },
  {
    title: "Video Player Application",
    desc: "Developed a custom video player by interfacing an Ember.js UI with a Java Servlet backend, manually handling media file retrieval and HTTP response headers on a Tomcat server.",
    tags: ["Java Servlets", "Apache Tomcat", "Ember.js"],
    img: "https://images.unsplash.com/photo-1516031190212-da133013de50?w=1200&auto=format&fit=crop&q=60",
    link: "https://github.com/manojmarquez33?tab=repositories&q=video-player",
    year: "2024",
  },
];

export function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const p = projects[current];

  return (
    <section id="projects" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="My work" title="Featured Projects" />

        <div className="relative mt-10">
          {/* Main carousel card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex flex-col lg:flex-row h-full">
                {/* Image */}
                <div className="relative w-full lg:w-[45%] shrink-0 aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
                  {/* Year badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground shadow">
                    {p.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                  {/* Counter */}
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                    {current + 1} / {projects.length}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface-elevated px-3 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View on GitHub <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons — overlaid on the sides */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full glass shadow-lg transition hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full glass shadow-lg transition hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-6 text-center">
          <a
            href="https://github.com/manojmarquez33?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-2.5 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
