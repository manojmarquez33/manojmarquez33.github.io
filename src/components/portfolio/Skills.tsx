import { motion } from "motion/react";
import { Code, Boxes as FrameworksIcon, Database, Sparkles } from "lucide-react";
import { SectionHeader } from "./About";

const groups = [
  {
    icon: Code,
    title: "Languages & Runtimes",
    color: "from-blue-500 to-violet-500",
    items: [
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    ],
  },
  {
    icon: FrameworksIcon,
    title: "Frameworks & Libraries",
    color: "from-emerald-500 to-cyan-500",
    items: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Vue.js", logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
  },
  {
    icon: Database,
    title: "Tools & Databases",
    color: "from-orange-500 to-rose-500",
    items: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Sequelize ORM", logo: "https://cdn.simpleicons.org/sequelize/52B0E7" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "TanStack Query", logo: "https://cdn.simpleicons.org/reactquery/FF4154" },
    ],
  },
  {
    icon: Sparkles,
    title: "Core Concepts",
    color: "from-pink-500 to-amber-500",
    items: [
      { name: "REST APIs" },
      { name: "MVC Architecture" },
      { name: "OOP" },
      { name: "Data Structures" },
      { name: "Auth & JWT" },
      { name: "Relational DB Design" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-14 overflow-hidden">
      <div className="absolute left-[-10%] top-[10%] -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute right-[-5%] bottom-[10%] -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-float [animation-delay:-3s]" />

      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader kicker="WHAT I KNOW" title="My Skills" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl glass p-4 hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${g.color} text-white shadow-sm`}>
                  <g.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
              </div>

              {/* Pill tags */}
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground hover:border-primary/50 transition-colors"
                  >
                    {it.logo && (
                      <img
                        src={it.logo}
                        alt={it.name}
                        className="h-3.5 w-3.5 object-contain"
                        loading="lazy"
                      />
                    )}
                    {it.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
