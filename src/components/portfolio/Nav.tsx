import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#qualification", label: "Qualification" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll handler for navbar height change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme management initial state load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // IntersectionObserver for active link highlighting (Scrollspy)
  useEffect(() => {
    const sections = links.map((l) => l.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px", // Trigger when section occupies the active mid-region
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3 glass" : "py-5"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="relative h-9 w-9 rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-lg shrink-0">
            <img src="/profile.jpeg" alt="Manojkumar" className="h-full w-full object-cover object-top" />
          </span>
          <span className="hidden sm:inline">Manojkumar</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5">
          {links.map((l) => {
            const active = activeSection === l.href.substring(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action & Theme Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {theme !== null && (
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-surface-elevated hover:text-primary cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4.5 w-4.5" />
              ) : (
                <Sun className="h-4.5 w-4.5" />
              )}
            </button>
          )}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95 shadow-sm shadow-primary/20"
          >
            Hire me
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {theme !== null && (
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-surface-elevated cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          )}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-surface-elevated cursor-pointer"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden mx-4 mt-3 overflow-hidden rounded-2xl glass p-3 flex flex-col gap-1"
          >
            {links.map((l) => {
              const active = activeSection === l.href.substring(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
