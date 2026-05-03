import React from "react";

interface DecorativeButterflyProps {
  className?: string;
  size?: number;
}

/**
 * A simple butterfly with organic wing shapes.
 * Stroke only in currentColor with a hand-drawn feel.
 */
export default function DecorativeButterfly({
  className,
  size = 120,
}: DecorativeButterflyProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.85}
      viewBox="0 0 120 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left upper wing */}
      <path
        d={[
          "M60 50",
          "C52 38, 38 12, 18 8",
          "C6 6, 2 18, 6 30",
          "C10 42, 28 52, 42 54",
          "C50 55, 56 52, 60 50",
        ].join(" ")}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left lower wing */}
      <path
        d={[
          "M60 50",
          "C52 56, 36 64, 22 78",
          "C14 86, 10 96, 18 98",
          "C28 100, 44 86, 52 72",
          "C56 64, 58 56, 60 50",
        ].join(" ")}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right upper wing */}
      <path
        d={[
          "M60 50",
          "C68 36, 80 10, 100 6",
          "C112 4, 118 16, 114 28",
          "C110 40, 92 52, 78 54",
          "C70 55, 64 52, 60 50",
        ].join(" ")}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right lower wing */}
      <path
        d={[
          "M60 50",
          "C68 56, 82 62, 96 76",
          "C104 84, 108 94, 100 98",
          "C90 100, 74 88, 66 74",
          "C62 66, 61 58, 60 50",
        ].join(" ")}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Body */}
      <path
        d="M60 30 C59 38, 59 46, 60 50 C61 58, 61 66, 60 74"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left antenna */}
      <path
        d="M60 30 C54 20, 46 10, 40 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right antenna */}
      <path
        d="M60 30 C66 18, 74 8, 82 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Antenna tips */}
      <circle cx="40" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="82" cy="2" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
