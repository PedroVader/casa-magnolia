import React from "react";

interface OrganicBlobProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * An abstract organic blob shape. Accepts a color prop for flexible use
 * as background accents. The shape is intentionally asymmetric and soft.
 */
export default function OrganicBlob({
  className,
  size = 200,
  color = "#F4C9CE",
}: OrganicBlobProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={[
          "M80 16",
          "C108 8, 142 14, 162 38",
          "C182 62, 192 90, 186 118",
          "C180 146, 164 170, 140 182",
          "C116 194, 86 192, 62 178",
          "C38 164, 18 142, 12 116",
          "C6 90, 10 62, 26 42",
          "C42 22, 52 24, 80 16",
          "Z",
        ].join(" ")}
        fill={color}
      />
    </svg>
  );
}
