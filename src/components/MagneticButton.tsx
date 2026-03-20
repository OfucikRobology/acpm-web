"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
  };

  if (href) {
    return (
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a className={`magnetic-btn inline-block ${className}`} href={href} style={style}>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button className={`magnetic-btn inline-block ${className}`} onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  );
}
