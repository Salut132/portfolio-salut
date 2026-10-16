import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Code2,
  Aperture,
  Sparkles,
  Github,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  X,
} from "lucide-react";
import { FadeIn, AnimatedText, MagneticButton } from "./motion-primitives";
import memoji from "./emoji_no_bg.png";
import aboutMemoji from "./About-me-2.png";
import contactMemoji from "./contact.png";
import photo2484 from "./image/IMG_2484.JPG";
import photo2463 from "./image/IMG_2463.JPEG";
import photo2462 from "./image/IMG_2462.JPEG";
import photo2461 from "./image/IMG_2461.JPEG";
import photo2460 from "./image/IMG_2460.JPEG";
import photo2459 from "./image/IMG_2459.JPEG";
import photo1858 from "./image/IMG_1858.JPG";
import photo1716 from "./image/IMG_1716.JPG";
import photoPortrait from "./image/F523B3AC-600F-4A74-B031-13728545EDFE.JPG";

const ease = [0.25, 0.1, 0.25, 1] as const;

/* ---------------- Navbar ---------------- */
function Navbar() {
  const links = [
    { label: "about", href: "#about" },
    { label: "what i do", href: "#pillars" },
    { label: "work", href: "#work" },
    { label: "contact", href: "#contact" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border-c)]"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--text)]">
          salut<span className="text-[var(--gold)]">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text)] hover:text-[var(--gold)] transition-colors"
        >
          say hi <ArrowUpRight size={14} />
        </a>
        <a href="#contact" className="md:hidden font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
          menu
        </a>
      </nav>
    </motion.header>
  );
}

/* ---------------- 3D Centerpiece ---------------- */
function Centerpiece() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [12, -12]), { stiffness: 80, damping: 14 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-12, 12]), { stiffness: 80, damping: 14 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set((e.clientX - cx) / (window.innerWidth / 2));
      my.set((e.clientY - cy) / (window.innerHeight / 2));
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Orbital gold ring */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="relative h-[min(90vw,720px)] w-[min(90vw,720px)]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[var(--border-c)]"
          style={{ borderColor: "rgba(232,197,71,0.18)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[8%] rounded-full border"
          style={{ borderColor: "rgba(26,255,228,0.12)" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[18%] rounded-full border border-dashed"
          style={{ borderColor: "rgba(255,140,85,0.15)" }}
        />

        {/* Center radial glow */}
        <div className="absolute inset-[28%] rounded-full radial-fade blur-2xl" />

        {/* Floating memoji centerpiece that tracks the cursor */}
        <MemojiTracker mx={mx} my={my} />


        {/* Floating UI cards - hidden on mobile to keep memoji visible */}
        <div className="hidden sm:block">
        <FloatCard
          delay={0}
          className="absolute left-[6%] top-[18%] w-44 sm:w-56"
          accent="cyan"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">
            <Code2 size={12} className="text-[var(--cyan)]" /> system.ts
          </div>
          <div className="mt-2 font-mono text-[11px] leading-relaxed text-[var(--text)]/80">
            <span className="text-[var(--orange)]">const</span>{" "}
            <span className="text-[var(--cyan)]">vibe</span> = <span className="text-[var(--gold)]">"on"</span>;
          </div>
        </FloatCard>

        <FloatCard
          delay={1.2}
          className="absolute right-[4%] top-[28%] w-40 sm:w-52"
          accent="gold"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">
            <Camera size={12} className="text-[var(--gold)]" /> roll.001
          </div>
          <div className="mt-2 flex gap-1">
            <div className="h-10 flex-1 rounded bg-[var(--gold)]/20" />
            <div className="h-10 flex-1 rounded bg-[var(--cyan)]/20" />
            <div className="h-10 flex-1 rounded bg-[var(--orange)]/20" />
          </div>
        </FloatCard>

        <FloatCard
          delay={0.6}
          className="absolute left-[10%] bottom-[14%] w-44 sm:w-56"
          accent="orange"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">
            <Aperture size={12} className="text-[var(--orange)]" /> exposure
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-[var(--text)]/80">
            <span>f/1.8</span>
            <span>1/250</span>
            <span className="text-[var(--orange)]">ISO 400</span>
          </div>
        </FloatCard>

        <FloatCard
          delay={1.8}
          className="absolute right-[8%] bottom-[20%] w-36 sm:w-44"
          accent="cyan"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">
            <Sparkles size={12} className="text-[var(--cyan)]" /> render
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--border-c)]">
            <motion.div
              animate={{ width: ["10%", "92%", "10%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-[var(--cyan)]"
            />
          </div>
        </FloatCard>
        </div>
      </motion.div>
    </div>
  );
}
function MemojiTracker({ mx, my }: { mx: ReturnType<typeof useMotionValue<number>>; my: ReturnType<typeof useMotionValue<number>> }) {
  const tx = useSpring(useTransform(mx, [-1, 1], [-28, 28]), { stiffness: 90, damping: 16 });
  const ty = useSpring(useTransform(my, [-1, 1], [-22, 22]), { stiffness: 90, damping: 16 });
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 sm:h-72 sm:w-72 md:h-96 md:w-96"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.img
        src={memoji}
        alt="salut memoji"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
        style={{ x: tx, y: ty, filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))" }}
        className="relative h-full w-full object-contain"
        draggable={false}
      />
    </motion.div>
  );
}

function SectionMemojiTracker({ src = memoji, large = false }: { src?: string; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useSpring(useTransform(mx, [-1, 1], [-28, 28]), { stiffness: 90, damping: 16 });
  const ty = useSpring(useTransform(my, [-1, 1], [-22, 22]), { stiffness: 90, damping: 16 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className={`mx-auto -mb-8 ${large ? "h-72 w-72 sm:h-96 sm:w-96 md:h-[30rem] md:w-[30rem]" : "h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96"}`}>
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="h-full w-full"
      >
        <motion.img
          src={src}
          alt="salut memoji"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
          style={{ x: tx, y: ty, filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))" }}
          className="h-full w-full object-contain"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}



function FloatCard({
  children,
  delay,
  className,
  accent,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  accent: "gold" | "cyan" | "orange";
}) {
  const map = { gold: "var(--gold)", cyan: "var(--cyan)", orange: "var(--orange)" } as const;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1 + delay, ease }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        className="rounded-xl border border-[var(--border-c)] bg-[var(--surface)]/80 p-3 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
        style={{ boxShadow: `0 0 0 1px ${map[accent]}10, 0 20px 60px -20px rgba(0,0,0,0.8)` }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------------- Hero ---------------- */
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-grain noise-overlay">
      <Centerpiece />
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-4 pt-24 sm:pt-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease }}
          className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[var(--muted)]"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--cyan)] mr-2 animate-pulse" />
          SALUT EVERYONE
        </motion.div>

        <h1
          className="hero-heading mt-8 font-mono font-bold leading-[0.62] tracking-[-0.06em]"
          style={{ fontSize: "clamp(12rem, 10vw, 5rem)" }}
        >
          <AnimatedText text="salut" delay={0.2} />
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-[var(--gold)]"
            style={{ WebkitTextFillColor: "var(--gold)" }}
          >
            _
          </motion.span>
        </h1>

        <div
          className="mt-6 font-mono font-light tracking-[-0.02em] flex flex-wrap items-center justify-center gap-x-4"
          style={{ fontSize: "clamp(1.1rem, 2.4vw, 2.2rem)" }}
        >
          <FadeIn delay={1}><span className="text-gold">code.</span></FadeIn>
          <FadeIn delay={1.15}><span className="text-cyan">shoot.</span></FadeIn>
          <FadeIn delay={1.3}><span className="text-orange">vibe.</span></FadeIn>
        </div>

        <FadeIn delay={1.5} className="mt-12 flex flex-col sm:flex-row gap-4">
          <MagneticButton href="#work" variant="primary">
            see my work <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            get in touch
          </MagneticButton>
        </FadeIn>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
        scroll ↓
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function MarqueeRow({ items, reverse = false, accent }: { items: { label: string; tag: string; hue: string }[]; reverse?: boolean; accent: string }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 will-change-transform"
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="group relative h-56 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-[var(--border-c)] bg-[var(--surface)] transition-transform duration-500 hover:scale-[1.03]"
          >
            <div
              className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${item.hue} 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${accent}20, transparent 50%)`,
              }}
            />
            <div className="absolute inset-0 bg-grain opacity-30" />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text)]/70">
                <span>{item.tag}</span>
                <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="font-mono text-2xl tracking-tight text-[var(--text)]">{item.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeSection() {
  const top = [
    { label: "neon.dev", tag: "code", hue: "rgba(232,197,71,0.35)" },
    { label: "midnight reel", tag: "video", hue: "rgba(26,255,228,0.25)" },
    { label: "portrait 0014", tag: "photo", hue: "rgba(255,140,85,0.3)" },
    { label: "shader lab", tag: "ui exp", hue: "rgba(232,197,71,0.2)" },
    { label: "city sequence", tag: "video", hue: "rgba(255,140,85,0.25)" },
  ];
  const bottom = [
    { label: "type tool 01", tag: "tool", hue: "rgba(26,255,228,0.3)" },
    { label: "golden hour", tag: "photo", hue: "rgba(232,197,71,0.3)" },
    { label: "after dark", tag: "video", hue: "rgba(255,140,85,0.25)" },
    { label: "motion lab", tag: "code", hue: "rgba(26,255,228,0.25)" },
    { label: "studio frame", tag: "photo", hue: "rgba(232,197,71,0.25)" },
  ];
  return (
    <section className="relative border-y border-[var(--border-c)] bg-[var(--surface)] py-10">
      <MarqueeRow items={top} accent="#E8C547" />
      <MarqueeRow items={bottom} reverse accent="#1AFFE4" />
    </section>
  );
}

/* ---------------- About ---------------- */
function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-32 md:py-48">
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full radial-fade blur-3xl" />
      <div className="absolute right-[-5%] bottom-10 h-96 w-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(26,255,228,0.06), transparent 70%)" }} />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] mb-8">
            About Me
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionMemojiTracker src={aboutMemoji} large />
        </FadeIn>

        

        <FadeIn delay={0.4} className="mt-4 mx-auto max-w-2xl">
          <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--muted)]">
            i'm a <span className="text-[var(--text)]">vibe coder</span>, a{" "}
            <span className="text-[var(--cyan)]">videographer</span>, and a{" "}
            <span className="text-[var(--orange)]">photographer</span> — building things for fun,
            shipping experiments at night, telling stories through frames and pixels.
            half engineer, half storyteller. all energy.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-10 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          {["typescript", "motion", "cinema 4d", "leica q3", "ableton", "after effects"].map((t) => (
            <span key={t} className="rounded-full border border-[var(--border-c)] px-4 py-1.5 text-[var(--muted)]">
              {t}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- Pillars ---------------- */
const pillars = [
  {
    n: "01",
    title: "vibe coder",
    icon: Code2,
    accent: "var(--gold)",
    desc: "shipping interfaces that feel alive. obsessed with motion, typography, and the tiny details that make software feel handmade.",
    tags: ["react", "typescript", "shaders"],
  },
  {
    n: "02",
    title: "videographer",
    icon: Camera,
    accent: "var(--cyan)",
    desc: "cinematic short films, music videos, and brand stories. shot anamorphic, graded warm, cut with intention.",
    tags: ["fx3", "davinci", "color"],
  },
  {
    n: "03",
    title: "photographer",
    icon: Aperture,
    accent: "var(--orange)",
    desc: "portraits, streets, and quiet moments. light is the subject. everything else is composition.",
    tags: ["leica", "35mm", "available light"],
  },
];

function PillarsSection() {
  return (
    <section id="pillars" className="relative py-32 md:py-48 border-t border-[var(--border-c)]">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeIn>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] mb-6">
            02 / what i do
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-mono font-bold tracking-[-0.04em] leading-[0.95] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            three things.<br />
            <span className="text-[var(--muted)]">one</span>{" "}
            <span className="hero-heading">person.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.1}>
              <PillarCard {...p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ n, title, icon: Icon, accent, desc, tags }: typeof pillars[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 15 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { mx.set(0); my.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--border-c)] bg-[var(--surface)] p-8 min-h-[26rem] transition-colors duration-500 hover:border-[color:var(--accent-c)]"
      data-accent={accent}
    >
      <style>{`.group[data-accent]:hover { --accent-c: ${accent}; box-shadow: 0 0 60px -20px ${accent}40; }`}</style>

      <div
        className="pointer-events-none absolute -right-10 -top-10 text-[14rem] font-mono font-bold leading-none opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]"
        style={{ color: accent }}
      >
        {n}
      </div>

      <div className="relative flex h-full flex-col">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-c)]"
          style={{ background: `${accent}10`, boxShadow: `0 0 30px -10px ${accent}` }}
        >
          <Icon size={20} style={{ color: accent }} />
        </div>

        <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          {n} / pillar
        </div>
        <h3 className="mt-2 font-mono text-3xl md:text-4xl font-bold tracking-tight">{title}</h3>

        <p className="mt-4 font-sans text-[var(--muted)] leading-relaxed">{desc}</p>

        <div className="mt-auto pt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border-c)] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text)]/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Portfolio (sticky stacking) ---------------- */
// ADD YOUR PROJECTS HERE - Just edit this array!
const projects = [
  {
    id: "1",
    n: 1,
    title: "Website design",
    desc: "Frontend Design.",
    category: "code",
    link: "#",
    accent: "gold",
    visual: "grid",
    images: [
      "./image/IMG_2484.JPG",       // Grid 1
      "Port.jpg",   // Grid 2
      "About-me-2.png",    // Grid 3
      "contact.png",       // Grid 4
      "emoji_no_bg.png",   // Grid 5
      "About-me-2.png",    // Grid 6
      "contact.png",       // Grid 7
      "emoji_no_bg.png",   // Grid 8
      "About-me-2.png",    // Grid 9
    ],
    gridLinks: [
      "https://your-link-1.com", // Grid 1 link
      "https://your-link-2.com", // Grid 2 link
      "https://your-link-3.com", // Grid 3 link
      "https://your-link-4.com", // Grid 4 link
      "https://your-link-5.com", // Grid 5 link
      "https://your-link-6.com", // Grid 6 link
      "https://your-link-7.com", // Grid 7 link
      "https://your-link-8.com", // Grid 8 link
      "https://your-link-9.com", // Grid 9 link
    ],
  },
  {
    id: "2",
    n: 2,
    title: "photographer",
    desc: "your project description goes here.",
    category: "photo",
    link: "#",
    accent: "blue",
    visual: "grid",
    images: [
      photo2484, // Grid 1
      photo2463, // Grid 2
      photo2462, // Grid 3
      photo2461, // Grid 4
      photo2460, // Grid 5
      photo2459, // Grid 6
      photo1858, // Grid 7
      photo1716, // Grid 8
      photoPortrait, // Grid 9
    ],
    gridLinks: [],
    lightbox: true,
  },
  {
    id: "3",
    n: 3,
    title: "social media content",
    desc: "video for instagram and tiktok.",
    category: "video",
    link: "#",
    accent: "orange",
    visual: "grid",
    images: [],
    gridLinks: [
      "https://www.instagram.com/reel/DS-qbFjCIBH/?utm_source=ig_web_copy_link", // Grid 1 link
      "https://www.instagram.com/reel/DZieh96RgRG/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==", // Grid 2 link
      "https://www.instagram.com/reel/Dced2QyNA6X/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==", // Grid 3 link
      "https://your-link-4.com", // Grid 4 link
      "https://your-link-5.com", // Grid 5 link
      "https://your-link-6.com", // Grid 6 link
      "https://your-link-7.com", // Grid 7 link
      "https://your-link-8.com", // Grid 8 link
      "https://your-link-9.com", // Grid 9 link
    ],
  },
];

function PortfolioSection() {
  return (
    <section id="work" className="relative border-t border-[var(--border-c)] py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeIn>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
            03 / selected work
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-6 font-mono font-bold tracking-[-0.04em] leading-[0.95]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            things i've <span className="italic text-[var(--gold)] font-light">made</span>.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-20">
        {projects.map((p, i) => (
          <StickyProject key={p.id} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}

function StickyProject({ project, index, total }: { project: typeof projects[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.92]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? null : (current + 1) % project.images.length,
        );
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null
            ? null
            : (current - 1 + project.images.length) % project.images.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, project.images.length]);

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current;
    const firstPhoto = gallery?.firstElementChild;
    if (!gallery || !(firstPhoto instanceof HTMLElement)) return;

    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    gallery.scrollBy({
      left: (firstPhoto.offsetWidth + gap) * direction,
      behavior: "smooth",
    });
  }

  const accentMap: Record<string, string> = {
    orange: "var(--orange)",
    pink: "rgba(255,105,180,1)",
    purple: "rgba(138,43,226,1)",
    blue: "rgba(26,255,228,1)",
    green: "rgba(46,204,113,1)",
    gold: "var(--gold)",
  };

  const accentColor = accentMap[project.accent] || project.accent;

  const visualBg: Record<string, string> = {
    orange: "linear-gradient(135deg, rgba(255,140,85,0.3) 0%, rgba(13,13,12,0.5) 100%)",
    pink: "linear-gradient(135deg, rgba(255,105,180,0.3) 0%, rgba(13,13,12,0.5) 100%)",
    purple: "linear-gradient(135deg, rgba(138,43,226,0.3) 0%, rgba(13,13,12,0.5) 100%)",
    blue: "linear-gradient(135deg, rgba(26,255,228,0.25) 0%, rgba(13,13,12,0.5) 100%)",
    green: "linear-gradient(135deg, rgba(46,204,113,0.3) 0%, rgba(13,13,12,0.5) 100%)",
    gold: "linear-gradient(135deg, rgba(232,197,71,0.3) 0%, rgba(160,136,24,0.15) 100%)",
  };

  return (
    <>
    <div ref={ref} className="relative" style={{ height: "120vh" }}>
      <div className="sticky top-24 px-6">
        <motion.article
          style={{ scale, top: `${index * 16}px` }}
          className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl border border-[var(--border-c)] bg-[var(--surface)] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
        >
          <div className="grid lg:grid-cols-2">
            {/* text side */}
            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                <span>project / {String(project.n).padStart(2, "0")}</span>
                <span style={{ color: accentColor }}>{project.category}</span>
              </div>

              <div className="my-12">
                <h3
                  className="font-mono font-bold leading-[0.9] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
                >
                  {project.title}
                </h3>
                <p className="mt-6 font-sans text-lg leading-relaxed text-[var(--muted)] max-w-md">
                  {project.desc}
                </p>
              </div>

              
            </div>

            {/* visual side */}
            <div className="relative min-h-[420px] overflow-hidden bg-[var(--bg)] lg:min-h-[600px]">
              <div className="absolute inset-0" style={{ background: visualBg[project.accent] || visualBg.orange }} />
              <div className="absolute inset-0 bg-grain opacity-50" />
              {project.lightbox ? (
                <>
                  <div
                    ref={galleryRef}
                    className="gallery-scrollbar absolute inset-x-0 top-4 bottom-12 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-3 sm:px-6"
                    aria-label={`${project.title} photo gallery`}
                    onScroll={(event) => {
                      const gallery = event.currentTarget;
                      const galleryLeft = gallery.getBoundingClientRect().left;
                      let closestIndex = 0;
                      let closestDistance = Number.POSITIVE_INFINITY;

                      Array.from(gallery.children).forEach((child, photoIndex) => {
                        const distance = Math.abs(
                          child.getBoundingClientRect().left - galleryLeft,
                        );
                        if (distance < closestDistance) {
                          closestDistance = distance;
                          closestIndex = photoIndex;
                        }
                      });

                      setActivePhoto(closestIndex);
                    }}
                  >
                    {project.images.map((image, photoIndex) => (
                      <motion.button
                        key={image}
                        type="button"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: photoIndex * 0.04, duration: 0.5, ease }}
                        onClick={() => setLightboxIndex(photoIndex)}
                        aria-label={`Open photo ${photoIndex + 1} of ${project.images.length}`}
                        className="group relative h-full min-w-[82%] snap-start overflow-hidden rounded-xl border border-[var(--text)]/10 text-left sm:min-w-[70%]"
                      >
                        <img
                          src={image}
                          alt={`${project.title}, photo ${photoIndex + 1}`}
                          loading={photoIndex === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                        <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
                          photo / {String(photoIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/25 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                          <Aperture size={16} aria-hidden="true" />
                        </span>
                      </motion.button>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-4 right-4 flex h-12 items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text)]/60 sm:left-6 sm:right-6">
                    <span>frame.{String(index + 1).padStart(3, "0")}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => scrollGallery(-1)}
                        aria-label="Scroll to previous photos"
                        className="grid h-8 w-8 place-items-center rounded-full border border-[var(--text)]/15 text-[var(--text)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
                      >
                        <ChevronLeft size={16} aria-hidden="true" />
                      </button>
                      <span className="min-w-16 text-center">
                        {String(activePhoto + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                      </span>
                      <button
                        type="button"
                        onClick={() => scrollGallery(1)}
                        aria-label="Scroll to next photos"
                        className="grid h-8 w-8 place-items-center rounded-full border border-[var(--text)]/15 text-[var(--text)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
                      >
                        <ChevronRight size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-2 sm:inset-6 sm:gap-3">
                  {Array.from({ length: 9 }).map((_, i) => {
                    const gridLink = project.gridLinks?.[i];
                    const content = project.images?.[i] ? (
                      <img
                        src={project.images[i]}
                        alt={`${project.title} ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background: i % 3 === 0
                            ? `${accentColor}25`
                            : i % 3 === 1
                            ? "rgba(237,233,224,0.04)"
                            : "rgba(13,13,12,0.6)",
                        }}
                      />
                    );
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.6, ease }}
                        whileHover={{ scale: 1.05 }}
                        className="h-full w-full overflow-hidden rounded-lg border border-[var(--text)]/5"
                      >
                        {gridLink ? (
                          <a href={gridLink} target="_blank" rel="noopener noreferrer" className="group relative block h-full w-full">
                            {content}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                              <ArrowUpRight size={20} className="text-white opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                          </a>
                        ) : content}
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {!project.lightbox && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text)]/60">
                  <span>frame.{String(index + 1).padStart(3, "0")}</span>
                  <span>{total.toString().padStart(2, "0")} / total</span>
                </div>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </div>

    {/* Lightbox - outside overflow-hidden so it covers full screen */}
    {lightboxIndex !== null && project.images[lightboxIndex] && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} photo viewer`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setLightboxIndex(null);
        }}
        className="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center bg-black/95 p-4"
      >
        <motion.img
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease }}
          src={project.images[lightboxIndex]}
          alt={`${project.title}, photo ${lightboxIndex + 1} of ${project.images.length}`}
          className="max-h-[88vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
        />
        <button
          type="button"
          onClick={() => setLightboxIndex(null)}
          aria-label="Close photo viewer"
          className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/40 text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
        >
          <X size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() =>
            setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length)
          }
          aria-label="View previous photo"
          className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/40 text-white transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] sm:left-8"
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() =>
            setLightboxIndex((lightboxIndex + 1) % project.images.length)
          }
          aria-label="View next photo"
          className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/40 text-white transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] sm:right-8"
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.25em] text-white/75">
          {String(lightboxIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
        </span>
      </motion.div>
    )}
    </>
  );
}

/* ---------------- Contact ---------------- */
function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-48 border-t border-[var(--border-c)]">
      <div className="absolute inset-0 radial-fade opacity-60" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] mb-8">
            Contact
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionMemojiTracker src={contactMemoji} />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12">
          <a
            href="mailto:amanumeet132@gmail.com"
            className="group inline-block font-mono tracking-tight text-[var(--text)] hover:text-[var(--gold)] transition-colors"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2.4rem)" }}
          >
            amanumeet132@gmail.com
            <span className="block h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
          </a>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Salut132"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-c)] bg-[var(--surface)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-all hover:border-[var(--text)] hover:text-[var(--text)]"
          >
            <Github size={14} />
            github
          </a>
          <a
            href="https://instagram.com/a_ma_nu_132"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-c)] bg-[var(--surface)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-all hover:border-[var(--text)] hover:text-[var(--text)]"
          >
            <Instagram size={14} />
            instagram
          </a>
          <a
            href="tel:+251-901-2057-88"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-c)] bg-[var(--surface)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-all hover:border-[var(--text)] hover:text-[var(--text)]"
          >
            <span className="text-[10px]">📞</span>
            +251-901-2057-88
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[var(--border-c)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="font-mono text-sm uppercase tracking-[0.3em]">
          salut<span className="text-[var(--gold)]">.</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
          built with care. no agency required.
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em]">
          <span className="text-gold">code.</span>{" "}
          <span className="text-cyan">shoot.</span>{" "}
          <span className="text-orange">vibe.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
export default function SalutPortfolio() {
  // Custom cursor accent
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <PillarsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      {mounted && null}
    </main>
  );
}
