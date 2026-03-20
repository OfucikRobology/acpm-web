"use client";

import ScrollReveal from "./ScrollReveal";
import { ShieldCheck, Search, Award } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Garance kvality",
    description:
      "Členové AČPM dodržují přísný etický kodex a standardy profesního jednání. Vaše zájmy jsou na prvním místě.",
  },
  {
    icon: Search,
    number: "02",
    title: "Nezávislost",
    description:
      "Pojišťovací makléř pracuje výhradně ve vašem zájmu. Analyzuje nabídky celého trhu a doporučí optimální řešení.",
  },
  {
    icon: Award,
    number: "03",
    title: "Odbornost",
    description:
      "Naši členové procházejí kontinuálním vzděláváním a jsou registrováni u ČNB. Máte jistotu profesionálního přístupu.",
  },
];

export default function PublicSection() {
  return (
    <section id="pro-verejnost" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <span className="section-number !left-1/2 !-translate-x-1/2">03</span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[var(--color-accent)]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                Pro veřejnost
              </span>
              <div className="h-px w-12 bg-[var(--color-accent)]" />
            </div>
            <h2
              className="heading-display text-[var(--color-secondary)] text-balance"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Proč vybrat makléře
              <br />
              <span className="text-[var(--color-primary)]">z AČPM?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="card-hover group relative p-10 lg:p-12 bg-white/60 border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 transition-all duration-500">
                {/* Number */}
                <span className="heading-display text-[var(--color-primary)]/10 text-6xl font-bold absolute top-6 right-8 pointer-events-none select-none group-hover:text-[var(--color-primary)]/15 transition-colors duration-500">
                  {pillar.number}
                </span>

                <pillar.icon
                  className="text-[var(--color-primary)] mb-6 transition-transform duration-300 group-hover:-translate-y-1"
                  size={36}
                  strokeWidth={1.5}
                />

                <h3
                  className="heading-display text-[var(--color-secondary)] text-xl mb-4"
                >
                  {pillar.title}
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
