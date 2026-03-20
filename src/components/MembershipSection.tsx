"use client";

import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

export default function MembershipSection() {
  return (
    <section
      id="clenstvi"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[60%] w-[500px] h-[500px] bg-radial from-[var(--color-primary)]/[0.04] to-transparent" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-radial from-[var(--color-accent)]/[0.05] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <ScrollReveal>
            <div className="relative">
              <span className="section-number">05</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                  Členství
                </span>
              </div>
              <h2
                className="heading-display text-[var(--color-secondary)] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Připojte se k
                <br />
                <span className="text-[var(--color-primary)]">profesní elitě</span>
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-[480px]">
                Řádné členství je otevřené pro právnické osoby zaregistrované
                u ČNB. Fyzické osoby se mohou stát přidruženými členy.
                Přihláška je k dispozici na webu AČPM.
              </p>

              <div className="flex flex-wrap gap-5">
                <MagneticButton
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-primary-light)] transition-colors duration-300"
                >
                  Podat přihlášku
                  <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-semibold uppercase tracking-[0.12em] hover:border-[var(--color-primary)]/30 transition-colors duration-300"
                >
                  Platební řád
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Process steps */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-0">
              {[
                {
                  step: "01",
                  title: "Podání přihlášky",
                  desc: "Vyplňte a zašlete přihlášku dostupnou na webu AČPM.",
                },
                {
                  step: "02",
                  title: "Projednání a schválení",
                  desc: "Prezídium nebo valná hromada projedná vaši přihlášku.",
                },
                {
                  step: "03",
                  title: "Úhrada příspěvku",
                  desc: "Po schválení uhradíte roční členský příspěvek dle platebního řádu.",
                },
                {
                  step: "04",
                  title: "Plné členství",
                  desc: "Získáváte přístup ke všem benefitům a akcím AČPM.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-6 py-8 border-b border-[var(--color-border)] last:border-none hover:pl-2 transition-all duration-300"
                >
                  <span className="heading-display text-[var(--color-accent)] text-lg font-bold shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--color-secondary)] text-base mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
