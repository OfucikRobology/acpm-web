"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
}

export default function CounterNumber({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
  sublabel,
}: CounterNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            if (numRef.current) {
              numRef.current.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
            }
          },
        });
      },
    });
  }, [end, suffix, prefix, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <span
        ref={numRef}
        className="heading-display text-[var(--color-primary)] block"
        style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
      >
        {prefix}0{suffix}
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-text)] mt-2 block">
        {label}
      </span>
      {sublabel && (
        <span className="text-xs text-[var(--color-text-muted)] mt-1 block">
          {sublabel}
        </span>
      )}
    </div>
  );
}
