"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left side — branding */}
      <div className="hidden lg:flex lg:w-[45%] relative bg-[var(--color-secondary)] items-center justify-center overflow-hidden">
        {/* Blue glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            filter: "blur(80px)",
            background:
              "radial-gradient(ellipse at 40% 40%, rgba(0,68,137,0.3) 0%, transparent 60%), " +
              "radial-gradient(ellipse at 60% 60%, rgba(26,107,196,0.2) 0%, transparent 50%)",
            borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
            animation: "blobRotate 30s linear infinite",
          }}
        />

        <div className="relative z-10 text-center px-12">
          <h1
            className="heading-display text-white font-bold mb-6"
            style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 0.9 }}
          >
            AČPM
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto mb-6" />
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-medium">
            Asociace Českých Pojišťovacích Makléřů
          </p>
          <p className="text-sm text-white/30 mt-8 max-w-[280px] mx-auto leading-relaxed">
            Přístup do členské sekce je vyhrazen registrovaným členům AČPM.
          </p>
        </div>

        {/* Decorative diamonds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/[0.04] rotate-45 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-[var(--color-accent)]/[0.06] rotate-45 pointer-events-none" />
      </div>

      {/* Right side — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-[var(--color-surface)]">
        <div className="w-full max-w-[420px]">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={16} />
            Zpět na hlavní stránku
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)]/[0.08] border border-[var(--color-primary)]/10">
                <Lock size={18} className="text-[var(--color-primary)]" />
              </div>
              <h2
                className="heading-display text-[var(--color-secondary)]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                Vstup pro členy
              </h2>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Přihlaste se do členské sekce AČPM pomocí svých přihlašovacích údajů.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="vas@email.cz"
                className="w-full px-4 py-3.5 bg-white/70 border border-[var(--color-border)] text-[var(--color-text)] text-sm placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/40 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2"
              >
                Heslo
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Vaše heslo"
                  className="w-full px-4 py-3.5 pr-12 bg-white/70 border border-[var(--color-border)] text-[var(--color-text)] text-sm placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/40 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300"
                  aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[var(--color-border)] bg-white/70 accent-[var(--color-primary)]"
                />
                <span className="text-xs text-[var(--color-text-muted)]">
                  Zapamatovat si mě
                </span>
              </label>
              <a
                href="#"
                className="text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors duration-300 font-medium"
              >
                Zapomenuté heslo?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-[var(--color-primary)] text-white text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-primary-light)] transition-colors duration-300"
            >
              Přihlásit se
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Nejste členem?
            </span>
            <div className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          {/* Register CTA */}
          <a
            href="#clenstvi"
            className="block w-full py-4 text-center border border-[var(--color-border)] text-[var(--color-text)] text-sm font-semibold uppercase tracking-[0.12em] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)] transition-all duration-300"
          >
            Informace o členství
          </a>

          {/* Contact */}
          <p className="text-xs text-[var(--color-text-muted)] text-center mt-8">
            Potřebujete pomoc?{" "}
            <a
              href="mailto:acpm@acpm.cz"
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors duration-300"
            >
              acpm@acpm.cz
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blobRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
