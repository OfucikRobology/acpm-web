"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 50,
  stagger = 0.12,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const childElements = ref.current.children.length > 1
      ? Array.from(ref.current.children)
      : ref.current;

    gsap.fromTo(
      childElements,
      { y, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [delay, y, stagger, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
