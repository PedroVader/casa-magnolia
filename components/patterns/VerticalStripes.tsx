import React from "react";

interface VerticalStripesProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * A pattern of alternating pink and green vertical stripes with slightly
 * irregular edges, inspired by hand-cut paper. Used as section backgrounds.
 */
export default function VerticalStripes({
  className,
  width = 400,
  height = 300,
}: VerticalStripesProps) {
  const stripeCount = 8;
  const stripeWidth = width / stripeCount;

  const colors = ["#F4C9CE", "#2F4A2A"];

  /**
   * Build a stripe path with wobbly left and right edges.
   * Each edge is a series of cubic bezier curves whose control points
   * are offset randomly (but deterministically via a simple seed) to
   * give a hand-cut feel.
   */
  function stripePath(index: number): string {
    const x = index * stripeWidth;
    const segments = 6;
    const segH = height / segments;

    // Deterministic pseudo-random based on index + segment
    const wobble = (seed: number) => {
      const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
      return (v - Math.floor(v)) * 6 - 3; // range roughly -3..3
    };

    // Build left edge going down
    let d = `M ${x + wobble(index * 100)} 0`;
    for (let s = 1; s <= segments; s++) {
      const cy1 = segH * (s - 0.66);
      const cy2 = segH * (s - 0.33);
      const ey = segH * s;
      const cx1 = x + wobble(index * 100 + s * 10 + 1);
      const cx2 = x + wobble(index * 100 + s * 10 + 2);
      const ex = x + wobble(index * 100 + s * 10 + 3);
      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${ex} ${ey}`;
    }

    // Line across the bottom to the right edge
    const rx = x + stripeWidth;
    d += ` L ${rx + wobble(index * 200 + 50)} ${height}`;

    // Build right edge going up
    for (let s = segments - 1; s >= 0; s--) {
      const cy1 = segH * (s + 0.66);
      const cy2 = segH * (s + 0.33);
      const ey = segH * s;
      const cx1 = rx + wobble(index * 200 + s * 10 + 4);
      const cx2 = rx + wobble(index * 200 + s * 10 + 5);
      const ex = rx + wobble(index * 200 + s * 10 + 6);
      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${ex} ${ey}`;
    }

    d += " Z";
    return d;
  }

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {Array.from({ length: stripeCount }).map((_, i) => (
        <path
          key={i}
          d={stripePath(i)}
          fill={colors[i % 2]}
        />
      ))}
    </svg>
  );
}
