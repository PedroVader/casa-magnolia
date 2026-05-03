import React from "react";

interface WavyLineProps {
  className?: string;
  width?: number;
}

/**
 * A horizontal wavy line separator. Stroke only, using currentColor.
 * Used between sections for a decorative hand-drawn divider feel.
 */
export default function WavyLine({
  className,
  width = 400,
}: WavyLineProps) {
  // Build a wavy path that spans the full width.
  // Each wave segment is roughly 60px wide with varying amplitude
  // to keep the hand-drawn aesthetic.
  const segmentWidth = 60;
  const segments = Math.max(Math.round(width / segmentWidth), 2);
  const actualSegWidth = width / segments;
  const height = 40;
  const midY = height / 2;

  let d = `M0 ${midY}`;

  for (let i = 0; i < segments; i++) {
    const x0 = i * actualSegWidth;
    const x1 = x0 + actualSegWidth;
    const midX = (x0 + x1) / 2;

    // Alternate amplitude direction, with slight variation
    const amp = (i % 2 === 0 ? -1 : 1) * (10 + (i % 3) * 2);

    d += ` C${x0 + actualSegWidth * 0.25} ${midY + amp}, ${x0 + actualSegWidth * 0.75} ${midY + amp}, ${midX} ${midY}`;
    d += ` C${midX + actualSegWidth * 0.25} ${midY - amp * 0.6}, ${x1 - actualSegWidth * 0.1} ${midY}, ${x1} ${midY}`;
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
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
