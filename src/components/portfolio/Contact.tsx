import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Twitter, Loader2 } from "lucide-react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { SectionHeader } from "./About";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate submission to server/email API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Submitted Successfully:", data);
    toast.success("Message Sent!", {
      description: "Thanks for reaching out! I will get back to you soon.",
    });

    setIsSubmitting(false);
    reset();
  };

  return (
    <section id="contact" className="relative py-14">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="Get in touch" title="Contact Me" />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Email */}
            <div className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:border-primary/40">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Mail className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="truncate text-sm font-medium">manoj17kumar10@gmail.com</div>
              </div>
            </div>

            {/* Location card — two rows */}
            <div className="rounded-2xl glass p-4 transition hover:border-primary/40">
              <div className="flex items-center gap-2 mb-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</div>
              </div>
              <div className="flex flex-col gap-2 pl-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇴🇲</span>
                  <div>
                    <div className="text-sm font-semibold">Muscat, Oman</div>
                    <div className="text-[11px] text-primary font-medium">Current Location</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇮🇳</span>
                  <div>
                    <div className="text-sm font-semibold">Tamil Nadu, India</div>
                    <div className="text-[11px] text-muted-foreground">Home · Indian National</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl glass p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Follow me
              </div>
              <div className="mt-3 flex gap-2">
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
                    className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated transition hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl glass p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Your Name"
                registration={register("name")}
                error={errors.name?.message}
              />
              <Field
                label="Your Email"
                type="email"
                registration={register("email")}
                error={errors.email?.message}
              />
            </div>
            <div className="mt-4">
              <Field
                label="Subject"
                registration={register("subject")}
                error={errors.subject?.message}
              />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                {...register("message")}
                className={`mt-1.5 w-full resize-none rounded-xl border bg-surface-elevated/50 px-4 py-3 text-sm outline-none transition focus:border-primary ${
                  errors.message
                    ? "border-destructive/80 focus:border-destructive"
                    : "border-border focus:border-primary"
                }`}
              />
              {errors.message && (
                <span className="mt-1.5 block text-xs text-destructive">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-75 cursor-pointer glow-primary"
            >
              {isSubmitting ? (
                <>
                  Sending... <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-20 border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4">
          © {new Date().getFullYear()} Manojkumar. Built with care.
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  type = "text",
  error,
  registration,
}: {
  label: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        {...registration}
        className={`mt-1.5 w-full rounded-xl border bg-surface-elevated/50 px-4 py-3 text-sm outline-none transition focus:border-primary ${
          error
            ? "border-destructive/80 focus:border-destructive"
            : "border-border focus:border-primary"
        }`}
      />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </div>
  );
}
