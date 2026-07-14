import { motion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Instagram, Twitter, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute left-[-5%] bottom-[10%] h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:-3s]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Manojkumar</span>
            <br />
            <span className="text-foreground/90">Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A software engineer focused on building reliable web and mobile applications. I enjoy
            solving real-world problems, writing clean and maintainable code, and turning ideas into
            practical digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow-primary"
            >
              Contact Me <Code2 className="h-4 w-4" />
            </a>
            <a
              href="/Manojkumar_resume.pdf"
              download="Manojkumar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition hover:bg-surface-elevated"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: Linkedin, href: "https://in.linkedin.com/in/manojkumar1710" },
              { icon: Github, href: "https://github.com/manojmarquez33" },
              { icon: Instagram, href: "https://instagram.com/manojmarquez33/" },
              { icon: Twitter, href: "https://twitter.com/manojmarquez33" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full glass transition hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
          <div className="relative h-full w-full rounded-[2.5rem] glass p-6 animate-float">
            <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-gradient-to-br from-surface-elevated to-surface p-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-accent/70" />
                  <span className="h-3 w-3 rounded-full bg-primary/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">~/portfolio</span>
              </div>
              <div className="font-mono text-sm leading-relaxed">
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">dev</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-foreground">'Manojkumar'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">role:</span>{" "}
                  <span className="text-foreground">'Software Engineer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">stack:</span> [
                  <span className="text-foreground">'React'</span>,{" "}
                  <span className="text-foreground">'Vue.js'</span>,{" "}
                  <span className="text-foreground">'TypeScript'</span>,
                </p>
                <p className="pl-10">
                  <span className="text-foreground">'Node'</span>,{" "}
                  <span className="text-foreground">'Laravel'</span>,{" "}
                  <span className="text-foreground">'Flutter'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">passion:</span>{" "}
                  <span className="text-foreground">'Building things'</span>,
                </p>
                <p>{"};"}</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: "2+", l: "Years" },
                  { v: "10+", l: "Projects" },
                  { v: "6+", l: "Certs" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-background/50 p-3 text-center">
                    <div className="text-xl font-bold text-gradient">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        Scroll down
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
