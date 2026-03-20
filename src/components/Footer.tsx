"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="relative bg-[var(--color-secondary)] text-white pt-24 pb-8"
    >
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="heading-display text-white text-3xl font-bold tracking-tight block mb-4">
              AČPM
            </span>
            <p className="text-sm text-white/40 leading-relaxed max-w-[260px]">
              Asociace českých pojišťovacích makléřů — respektovaná profesní
              organizace od roku 1994.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold mb-6">
              Kontakt
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:acpm@acpm.cz"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Mail size={14} className="text-[var(--color-accent)] shrink-0" />
                acpm@acpm.cz
              </a>
              <a
                href="tel:+420603200088"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Phone size={14} className="text-[var(--color-accent)] shrink-0" />
                +420 603 200 088
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={14} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>
                  nám. W. Churchilla 1800/2
                  <br />
                  130 00 Praha 3
                </span>
              </div>
            </div>
          </div>

          {/* Navigace */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold mb-6">
              Navigace
            </h4>
            <div className="space-y-3">
              {[
                { label: "O Asociaci", href: "#o-asociaci" },
                { label: "Benefity členství", href: "#benefity" },
                { label: "Pro veřejnost", href: "#pro-verejnost" },
                { label: "Aktuality", href: "#aktuality" },
                { label: "Seznam členů", href: "#" },
                { label: "Dokumenty", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Partneři */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold mb-6">
              Partneři
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.bipar.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                BIPAR — European Federation
              </a>
              <a
                href="#"
                className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Česká asociace pojišťoven
              </a>
              <a
                href="#"
                className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                oPojištění.cz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} AČPM — Asociace českých pojišťovacích makléřů. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Ochrana osobních údajů
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
