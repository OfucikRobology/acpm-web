"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoArtRef = useRef<HTMLDivElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Logo art reveal — clip-path + letters stagger
    if (logoArtRef.current) {
      const letters = logoArtRef.current.querySelectorAll(".logo-letter");
      const underline = logoArtRef.current.querySelector(".logo-underline");
      const subtitle = logoArtRef.current.querySelector(".logo-subtitle");

      tl.fromTo(
        letters,
        { y: 80, opacity: 0, rotateX: 40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
        },
        0
      );

      if (underline) {
        tl.fromTo(
          underline,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power3.inOut" },
          0.8
        );
      }

      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          1.4
        );
      }
    }

    // Decorative line
    tl.fromTo(
      decorLineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power3.out" },
      1.2
    );

    // Headline split words animation
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      tl.fromTo(
        words,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
        1.4
      );
    }

    // Subtext
    tl.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      2.0
    );

    // CTA
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
      2.3
    );
  }, []);

  const headlineWords = "Váš spolehlivý partner v pojištění".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] border border-[var(--color-primary)]/[0.04] rotate-45" />
        <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] border border-[var(--color-accent)]/[0.06] rotate-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            {/* Small label */}
            <div className="flex items-center gap-4 mb-8">
              <div
                ref={decorLineRef}
                className="h-px w-12 bg-[var(--color-accent)] origin-left"
                style={{ transform: "scaleX(0)" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                Od roku 1994
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="heading-display text-[var(--color-secondary)] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
            >
              {headlineWords.map((word, i) => (
                <span
                  key={i}
                  className="word inline-block mr-[0.3em]"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="text-lg text-[var(--color-text-muted)] max-w-[520px] leading-relaxed mb-10"
              style={{ opacity: 0, fontFamily: "var(--font-body)" }}
            >
              Respektovaná profesní organizace hájící společné zájmy
              pojišťovacích makléřů v České republice. Aktivní člen
              evropské federace BIPAR.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-wrap gap-5"
              style={{ opacity: 0 }}
            >
              <MagneticButton
                href="#clenstvi"
                className="px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-primary-light)] transition-colors duration-300"
              >
                Staňte se členem
              </MagneticButton>
              <MagneticButton
                href="#pro-verejnost"
                className="px-8 py-4 border border-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-[0.12em] hover:border-[var(--color-secondary)]/50 transition-colors duration-300"
              >
                Najít makléře
              </MagneticButton>
            </div>
          </div>

          {/* Right: Logo Art — typographic reveal */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-radial from-[var(--color-primary)]/[0.04] to-transparent rounded-full scale-150" />
            <div
              ref={logoArtRef}
              className="relative flex flex-col items-center select-none"
              style={{ perspective: "800px" }}
            >
              {/* Main AČPM letters */}
              <div className="flex items-baseline gap-[0.02em] pt-6">
                {"AČPM".split("").map((letter, i) => (
                  <span
                    key={i}
                    className="logo-letter heading-display text-[var(--color-primary)] font-bold"
                    style={{
                      fontSize: "clamp(6rem, 12vw, 10rem)",
                      opacity: 0,
                      display: "inline-block",
                      lineHeight: 0.85,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/* Decorative underline */}
              <div
                className="logo-underline w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mt-4 origin-left"
                style={{ transform: "scaleX(0)" }}
              />

              {/* Subtitle */}
              <p
                className="logo-subtitle mt-5 text-[10px] uppercase tracking-[0.35em] text-[var(--color-text-muted)] font-medium text-center"
                style={{ opacity: 0 }}
              >
                Asociace Českých Pojišťovacích Makléřů
              </p>

              {/* Background decorative diamond */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-[var(--color-primary)]/[0.05] rotate-45 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[var(--color-accent)]/[0.06] rotate-45 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Scroll
          </span>
          <div className="w-px h-10 bg-[var(--color-text-muted)]/30 relative overflow-hidden">
            <div className="w-full h-4 bg-[var(--color-primary)] animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% { transform: translateY(-16px); }
          100% { transform: translateY(40px); }
        }
      `}</style>
    </section>
  );
}
