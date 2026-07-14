import { motion } from "motion/react";
import { Rocket, Award, Layers, Users } from "lucide-react";

const stats = [
  { icon: Rocket, value: "2+", label: "Years Experience" },
  { icon: Award, value: "6+", label: "Certifications" },
  { icon: Layers, value: "10+", label: "Projects" },
  { icon: Users, value: "1000+", label: "App Users" },
];

const traits = ["Flutter", "TypeScript", "Problem Solver", "Team Player"];

export function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="Get to know me" title="About Me" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary to-accent blur-2xl opacity-40" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] ring-1 ring-primary/20 shadow-2xl">
              {/* Profile image */}
              <img
                src="/profile.jpeg"
                alt="Manojkumar R"
                className="h-full w-full object-cover object-top"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              {/* Experience pill — top right */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/40 px-3 py-1.5 shadow-sm">
                <span className="text-sm">🚀</span>
                <span className="text-xs font-semibold text-foreground">2+ yrs</span>
              </div>
              {/* Name badge at bottom */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-background/70 backdrop-blur-md px-3 py-2 border border-border/30">
                <p className="text-sm font-bold text-foreground">Manojkumar R</p>
                <p className="text-xs text-primary font-medium">Software Engineer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-medium">Manojkumar R</span>, a Software
              Engineer with experience building enterprise software solutions that streamline
              business processes and improve operational efficiency. I specialize in designing
              scalable applications, automating complex workflows, and developing reliable systems
              that support real-world business operations.
            </p>
            <p className="mt-4 text-muted-foreground">
              I am focused on writing clean, maintainable code and delivering high-quality software
              solutions aligned with business requirements. I love taking up new challenges,
              collaborating with cross-functional teams, and continuously expanding my technical
              skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {traits.map((t) => (
                <span key={t} className="rounded-full glass px-3.5 py-1.5 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl glass p-4 text-center transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <s.icon className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-2 text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}
