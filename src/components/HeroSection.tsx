"use client";

import { useEffect, useRef, useCallback } from "react";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const logoAreaRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const area = logoAreaRef.current;
    if (!area) return;
    const rect = area.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, mouseRef.current.x, 0.04);
      currentRef.current.y = lerp(currentRef.current.y, mouseRef.current.y, 0.04);

      const cx = currentRef.current.x;
      const cy = currentRef.current.y;

      if (orb1Ref.current) {
        orb1Ref.current.style.translate = `${cx * 50}px ${cy * 40}px`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.translate = `${cx * -35}px ${cy * 55}px`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.translate = `${cx * 25}px ${cy * -35}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  const headlineWords = "Společně hájíme zájmy. Společně posouváme profesi.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow">
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
                className="h-px w-12 bg-[var(--color-accent)] origin-left"
                style={{ animation: "heroScaleX 0.8s ease-out 1.2s both" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                Od roku 1994
              </span>
            </div>

            {/* Headline */}
            <h1
              className="heading-display text-[var(--color-secondary)] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
            >
              {headlineWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  style={{
                    animation: `heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${1.4 + i * 0.08}s both`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              className="text-lg text-[var(--color-text-muted)] max-w-[520px] leading-relaxed mb-10"
              style={{
                fontFamily: "var(--font-body)",
                animation: "heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 2s both",
              }}
            >
              Respektovaná profesní organizace hájící společné zájmy
              pojišťovacích makléřů v České republice. Aktivní člen
              evropské federace BIPAR.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-5"
              style={{ animation: "heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 2.3s both" }}
            >
              <MagneticButton
                href="/login"
                className="px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-primary-light)] transition-colors duration-300"
              >
                Vstup pro členy
              </MagneticButton>
              <MagneticButton
                href="#pro-verejnost"
                className="px-8 py-4 border border-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-[0.12em] hover:border-[var(--color-secondary)]/50 transition-colors duration-300"
              >
                Najít makléře
              </MagneticButton>
            </div>
          </div>

          {/* Right: Logo Art — interactive orbs + typographic reveal */}
          <div ref={logoAreaRef} className="hidden lg:flex items-center justify-center relative min-h-[400px]">

            {/* Orb 1 — large primary blue */}
            <div
              ref={orb1Ref}
              className="absolute will-change-[translate] pointer-events-none"
              style={{
                width: "400px",
                height: "400px",
                top: "50%",
                left: "50%",
                marginTop: "-200px",
                marginLeft: "-200px",
                filter: "blur(50px)",
                borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
                background: "radial-gradient(circle at 50% 50%, rgba(0,68,137,0.40) 0%, rgba(0,68,137,0.15) 50%, transparent 75%)",
                animation: "orbFloat1 8s ease-in-out infinite",
              }}
            />
            {/* Orb 2 — medium lighter blue, offset */}
            <div
              ref={orb2Ref}
              className="absolute will-change-[translate] pointer-events-none"
              style={{
                width: "300px",
                height: "300px",
                top: "50%",
                left: "55%",
                marginTop: "-150px",
                marginLeft: "-120px",
                filter: "blur(35px)",
                borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
                background: "radial-gradient(circle at 50% 50%, rgba(26,107,196,0.35) 0%, rgba(26,107,196,0.12) 50%, transparent 75%)",
                animation: "orbFloat2 10s ease-in-out infinite",
              }}
            />
            {/* Orb 3 — small gold accent */}
            <div
              ref={orb3Ref}
              className="absolute will-change-[translate] pointer-events-none"
              style={{
                width: "180px",
                height: "180px",
                top: "45%",
                left: "40%",
                marginTop: "-90px",
                marginLeft: "-90px",
                filter: "blur(25px)",
                borderRadius: "50% 50% 45% 55% / 55% 45% 50% 50%",
                background: "radial-gradient(circle at 50% 50%, rgba(200,169,110,0.30) 0%, rgba(200,169,110,0.10) 50%, transparent 75%)",
                animation: "orbFloat3 12s ease-in-out infinite",
              }}
            />

            <div
              className="relative flex flex-col items-center select-none z-10"
              style={{ perspective: "800px" }}
            >
              {/* Main AČPM letters */}
              <div className="flex items-baseline gap-[0.02em] pt-6">
                {"AČPM".split("").map((letter, i) => (
                  <span
                    key={i}
                    className="heading-display text-[var(--color-primary)] font-bold"
                    style={{
                      fontSize: "clamp(6rem, 12vw, 10rem)",
                      display: "inline-block",
                      lineHeight: 0.85,
                      animation: `heroLetterReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.12}s both`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/* Decorative underline */}
              <div
                className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mt-4 origin-left"
                style={{ animation: "heroScaleX 1s ease-in-out 0.8s both" }}
              />

              {/* Subtitle */}
              <p
                className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[var(--color-text-muted)] font-medium text-center"
                style={{ animation: "heroFadeUp 0.6s ease-out 1.4s both" }}
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
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(5deg); }
          50% { transform: translate(-10px, 15px) rotate(-3deg); }
          75% { transform: translate(-15px, -10px) rotate(2deg); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, 15px) rotate(-4deg); }
          50% { transform: translate(15px, -10px) rotate(6deg); }
          75% { transform: translate(10px, 20px) rotate(-2deg); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-12px, -18px) rotate(8deg); }
          66% { transform: translate(18px, 12px) rotate(-5deg); }
        }
      `}</style>
    </section>
  );
}
