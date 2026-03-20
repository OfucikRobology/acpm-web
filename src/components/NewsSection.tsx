"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    date: "15. 3. 2026",
    category: "Regulace",
    title: "Nová pravidla distribuce pojištění vstupují v platnost",
    excerpt:
      "Novelizace zákona o distribuci pojištění přináší významné změny pro pojišťovací makléře. AČPM se aktivně podílela na připomínkovém řízení.",
  },
  {
    date: "8. 3. 2026",
    category: "Akce",
    title: "Pozvánka na odborný seminář: Kybernetická rizika 2026",
    excerpt:
      "Zveme členy na seminář zaměřený na pojištění kybernetických rizik, který se koná 25. března v Praze.",
  },
  {
    date: "1. 3. 2026",
    category: "BIPAR",
    title: "Zasedání BIPAR v Bruselu — klíčové závěry",
    excerpt:
      "Prezident AČPM se zúčastnil jarního zasedání BIPAR. Hlavním tématem byla implementace směrnice IDD v členských státech.",
  },
];

export default function NewsSection() {
  return (
    <section id="aktuality" className="relative py-32 lg:py-40 bg-white/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <div className="relative">
              <span className="section-number">04</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                  Aktuality
                </span>
              </div>
              <h2
                className="heading-display text-[var(--color-secondary)]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Nejnovější <span className="text-[var(--color-primary)]">zprávy</span>
              </h2>
            </div>
            <a
              href="#"
              className="nav-link mt-6 sm:mt-0 text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-primary)] flex items-center gap-2"
            >
              Všechny zprávy
              <ArrowUpRight size={14} />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <article className="card-hover group relative flex flex-col h-full bg-white/70 border border-[var(--color-border)] hover:border-[var(--color-primary)]/15 transition-all duration-500 overflow-hidden">
                {/* Top accent bar */}
                <div className="h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {item.date}
                    </span>
                    <span className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/10">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="heading-display text-[var(--color-secondary)] text-lg mb-4 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                    {item.excerpt}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <a
                      href="#"
                      className="nav-link text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      Číst více
                      <ArrowUpRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
