import React from "react";

interface DecorativeStarProps {
  className?: string;
  size?: number;
}

/**
 * An asymmetric 4-6 pointed star in pink with irregular hand-drawn points.
 * Fill only, no stroke. Inspired by Matisse cutout shapes.
 */
export default function DecorativeStar({
  className,
  size = 100,
}: DecorativeStarProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/*
        Five-pointed asymmetric star.
        Each point has slightly different length/angle for a hand-cut feel.
      */}
      <path
        d={[
          // Top point (slightly off-center to the right)
          "M52 2",
          "C54 14, 56 22, 56 32",
          // Upper-right point
          "C64 26, 74 18, 94 14",
          "C84 28, 76 38, 68 44",
          // Lower-right point
          "C78 50, 88 58, 98 70",
          "C86 72, 74 68, 64 62",
          // Bottom point (leans left)
          "C62 72, 58 82, 52 98",
          "C48 84, 44 74, 42 64",
          // Lower-left point
          "C34 70, 22 76, 6 82",
          "C14 70, 26 60, 36 52",
          // Upper-left point
          "C24 44, 12 36, 4 22",
          "C18 24, 30 28, 40 34",
          // Close back to top
          "C42 24, 46 14, 52 2",
          "Z",
        ].join(" ")}
        fill="#F4C9CE"
      />
    </svg>
  );
}
