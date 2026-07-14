import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Briefcase, Calendar, Trophy, Smartphone, Star, Target } from "lucide-react";
import { SectionHeader } from "./About";

type Item = {
  title: string;
  place: string;
  date: string;
  type?: string;
  bullets?: string[];
};

const education: Item[] = [
  {
    title: "B.E - Computer Science and Engineering",
    place: "Kamaraj College of Engineering and Technology",
    date: "2021 - 2025",
    bullets: ["CGPA: 8.31", "TamilNadu, India"],
  },
  {
    title: "Higher Secondary",
    place: "K.V.S Higher Secondary School, Virudhunagar",
    date: "2019 - 2021",
  },
  {
    title: "High School",
    place: "S.N. Junior Govt High School, Vellur",
    date: "2012 - 2019",
  },
];

const work: Item[] = [
  {
    title: "Software Engineer",
    place: "EMAAR Industries LLC (Muscat, Oman)",
    date: "Jun 2026 - Present",
    type: "Onsite",
    bullets: [
      "Enhanced Estimate Pro, an enterprise estimation and costing platform for sandwich panel manufacturing.",
      "Led the migration from JavaScript to TypeScript, improving maintainability, scalability, and type safety.",
      "Developed multi-building estimation, quotation versioning, approval workflows, BOM, cost analysis, and quotation PDF reports.",
      "Collaborated with cross-functional teams to deliver scalable business solutions.",
    ],
  },
  {
    title: "Software Engineer",
    place: "Srimax Software Technology (Sivakasi, India)",
    date: "May 2025 - May 2026",
    type: "Onsite",
    bullets: [
      "Developed a scalable Property Management Platform using Vue.js and Laravel, implementing the Data Forge Architecture to streamline complex data transformations and improve runtime performance.",
      "Delivered core modules for Property Maintenance, Compliance, and Agency Settings, leveraging reusable components to improve maintainability and provide an optimized user experience.",
    ],
  },
  {
    title: "Project Trainee",
    place: "Zoho Corporation (Tirunelveli, India)",
    date: "Feb 2025 - Apr 2025",
    type: "Onsite",
    bullets: [
      "Developed a custom video player by integrating an Ember.js frontend with a Java Servlet backend.",
      "Implemented media streaming and HTTP response handling on an Apache Tomcat server.",
    ],
  },
  {
    title: "Associate Software Engineer",
    place: "EMAAR Industries LLC (Muscat, Oman)",
    date: "Jul 2024 - Feb 2025",
    type: "Remote",
    bullets: [
      "Designed and developed the initial foundation for an estimation and costing platform.",
      "Designed the relational database and dynamic costing engine for real-time pricing calculations.",
      "Built secure REST APIs with JWT authentication, role-based authorization, and server-state management.",
    ],
  },
  {
    title: "Flutter App Developer (Intern)",
    place: "TeamWork Solutionz",
    date: "June 2023",
    type: "Internship",
    bullets: ["Worked on the LOGYK ADS project as a Flutter app developer during internship."],
  },
];

const highlights = [
  { icon: Trophy, v: "6+ Certifications", l: "Professional courses" },
  { icon: Smartphone, v: "10+ Apps", l: "Published & developed" },
  { icon: Star, v: "5/5 Rating", l: "Client satisfaction" },
  { icon: Target, v: "100%", l: "Project completion" },
];

export function Qualification() {
  const [tab, setTab] = useState<"education" | "work">("education");
  const items = tab === "education" ? education : work;

  return (
    <section id="qualification" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader kicker="My journey" title="Qualification" />

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-8">
          {(
            [
              { id: "education", icon: GraduationCap, label: "Education" },
              { id: "work", icon: Briefcase, label: "Work" },
            ] as const
          ).map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex items-center gap-2 pb-1 text-base font-medium transition ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <t.icon className="h-5 w-5" />
                {t.label}
                {active && (
                  <motion.span
                    layoutId="qual-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* vertical line (left-aligned on mobile, centered on desktop) */}
          <div className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 md:space-y-16"
            >
              {items.map((it, i) => {
                const left = i % 2 === 0;
                return (
                  <div
                    key={it.title}
                    className="relative grid grid-cols-[auto_1fr] items-start gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6"
                  >
                    {/* Left cell (Desktop only) */}
                    <motion.div
                      initial={{ opacity: 0, x: left ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`hidden md:block text-right ${left ? "" : "pointer-events-none opacity-0"}`}
                    >
                      {left && <QualCard item={it} align="right" />}
                    </motion.div>

                    {/* Dot column (positioned left-4 on mobile, centered on desktop) */}
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center md:h-4 md:w-4 justify-self-start md:justify-self-center z-10">
                      <span className="absolute h-4 w-4 rounded-full bg-primary/20" />
                      <span className="h-3 w-3 rounded-full bg-primary animate-pulse-dot" />
                    </div>

                    {/* Right cell (Desktop) / Main card cell (Mobile) */}
                    <motion.div
                      initial={{ opacity: 0, x: left ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`text-left w-full ${!left ? "" : "md:pointer-events-none md:opacity-0"}`}
                    >
                      {/* On mobile: show card. On desktop: show card only if not left. */}
                      <div className="md:hidden w-full">
                        <QualCard item={it} align="left" />
                      </div>
                      <div className="hidden md:block">
                        {!left && <QualCard item={it} align="left" />}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl glass p-5 text-center transition hover:-translate-y-1 hover:border-primary/40"
            >
              <h.icon className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-3 text-sm font-semibold">{h.v}</div>
              <div className="text-xs text-muted-foreground">{h.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualCard({ item, align }: { item: Item; align: "left" | "right" }) {
  return (
    <div
      className={`rounded-2xl glass p-5 shadow-sm transition hover:border-primary/30 w-full max-w-md ${align === "right" ? "ml-auto" : "mr-auto"} text-left`}
    >
      <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
      <p className="mt-1.5 text-sm font-medium text-foreground/80">
        {item.place}
        {item.type && (
          <span className="ml-2 rounded-full bg-surface-elevated px-2 py-0.5 text-[10px] font-semibold text-primary">
            {item.type}
          </span>
        )}
      </p>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5 text-primary" /> {item.date}
      </div>
      {item.bullets && item.bullets.length > 0 && (
        <ul className="mt-3 list-disc pl-4 space-y-1 text-xs text-muted-foreground">
          {item.bullets.map((b, idx) => (
            <li key={idx} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
