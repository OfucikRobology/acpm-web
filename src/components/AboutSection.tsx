"use client";

import ScrollReveal from "./ScrollReveal";
import CounterNumber from "./CounterNumber";

export default function AboutSection() {
  return (
    <section id="o-asociaci" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left: Section label + heading */}
          <ScrollReveal>
            <div className="relative">
              <span className="section-number">01</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                  O Asociaci
                </span>
              </div>
              <h2
                className="heading-display text-[var(--color-secondary)] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Tři dekády profesionální
                <br />
                <span className="text-[var(--color-primary)]">excelence</span>
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed max-w-[480px]">
                Asociace českých pojišťovacích makléřů sdružuje přední
                pojišťovací makléře České republiky. Od roku 1994 hájíme
                profesní standardy, podporujeme vzdělávání a zastupujeme zájmy
                našich členů na národní i evropské úrovni.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Stats + detail */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12 pt-4">
                <CounterNumber end={30} suffix="+" label="Let existence" sublabel="založeno 1994" />
                <CounterNumber end={60} suffix="+" label="Členů" sublabel="přední makléřské firmy" />
                <CounterNumber end={26} suffix="+" label="Let v BIPAR" sublabel="evropská federace" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rule-line mb-8" />
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                    Zastoupení v EU
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Aktivní člen evropské federace BIPAR od roku 1998.
                    Přinášíme exkluzivní informace o regulaci pojistného trhu v EU.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                    Regulace & Dohled
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Spolupracujeme s ČNB a Ministerstvem financí na formování
                    regulačního rámce pojišťovacího zprostředkování.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
