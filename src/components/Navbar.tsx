"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "O Asociaci", href: "#o-asociaci" },
  { label: "Benefity", href: "#benefity" },
  { label: "Pro veřejnost", href: "#pro-verejnost" },
  { label: "Aktuality", href: "#aktuality" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.4 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-surface)]/90 backdrop-blur-md shadow-[0_1px_0_var(--color-border)]"
          : "bg-transparent"
      }`}
      style={{ opacity: 0 }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span
              className="heading-display text-[var(--color-primary)] text-2xl font-bold tracking-tight"
            >
              AČPM
            </span>
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-medium leading-tight max-w-[140px]">
              Asociace českých pojišťovacích makléřů
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-[var(--color-text)] tracking-wide uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#clenstvi"
              className="ml-4 px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            >
              Staňte se členem
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[var(--color-text)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-[var(--color-text)] uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#clenstvi"
            className="mt-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase border border-[var(--color-primary)] text-[var(--color-primary)] text-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Staňte se členem
          </a>
        </div>
      </div>
    </nav>
  );
}
