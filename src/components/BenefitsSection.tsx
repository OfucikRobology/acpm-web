"use client";

import ScrollReveal from "./ScrollReveal";
import {
  Scale,
  Globe,
  GraduationCap,
  Trophy,
  Users,
  BookOpen,
  Handshake,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Právní poradenství",
    description: "Bezplatné právní poradenství ve spolupráci s D.A.S. pojišťovnou pro všechny členy.",
  },
  {
    icon: Globe,
    title: "Mezinárodní síť BIPAR",
    description:
      "Exkluzivní informace z EU, navazování kontaktů se zahraničními makléři a asociacemi.",
  },
  {
    icon: GraduationCap,
    title: "Vzdělávání & Semináře",
    description:
      "Odborné semináře a webináře zdarma. Doškolování dle vyhlášky ČNB, přístup do Akademie ČAP.",
  },
  {
    icon: Trophy,
    title: "Pojišťovna roku",
    description:
      "Prestižní anketa pojišťovacích makléřů — volný vstup na Makléřské odpoledne a galavečer.",
  },
  {
    icon: Users,
    title: "Networking s vedením pojišťoven",
    description:
      "Pravidelné kontakty s vedením pojišťoven a Českou asociací pojišťoven.",
  },
  {
    icon: BookOpen,
    title: "Výzkumy IPSOS",
    description:
      "Podrobné závěry z výzkumů o vnímání makléřské profese — exkluzivně pro členy.",
  },
  {
    icon: Handshake,
    title: "Interakce s regulátory",
    description:
      "Přímá komunikace s představiteli ČNB a Ministerstva financí ČR.",
  },
  {
    icon: BarChart3,
    title: "Konkurenční výhoda",
    description:
      "Členství v prestižní organizaci jako diferenciátor. Zviditelnění v rámci PR aktivit AČPM.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefity"
      className="relative py-32 lg:py-40 bg-[var(--color-secondary)]"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-radial from-[var(--color-primary)]/10 to-transparent opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-16 lg:mb-20">
            <div className="relative">
              <span className="section-number !text-white !opacity-[0.04]">02</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium">
                  Benefity členství
                </span>
              </div>
              <h2
                className="heading-display text-white mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Využijte výhod z členství
                <br />
                <span className="text-[var(--color-accent)]">v AČPM</span>
              </h2>
              <p className="text-base text-white/50 max-w-[520px] leading-relaxed">
                Členství otevírá dveře k exkluzivním zdrojům, vzdělávání
                a profesnímu uznání v pojišťovacím sektoru.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.06}>
              <div
                className="card-hover group relative p-8 h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] hover:border-[var(--color-accent)]/30 hover:bg-white/[0.07] transition-all duration-500"
              >
                <benefit.icon
                  className="text-[var(--color-accent)] mb-5 transition-transform duration-300 group-hover:scale-110"
                  size={28}
                  strokeWidth={1.5}
                />
                <h3 className="text-white font-semibold text-base mb-3 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
