import React from "react";

interface MatisseLeafProps {
  className?: string;
  size?: number;
}

/**
 * An organic leaf shape in dark green, Matisse style.
 * Simple curved form with a central vein. Fill only.
 */
export default function MatisseLeaf({
  className,
  size = 100,
}: MatisseLeafProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.6}
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main leaf body - organic asymmetric shape */}
      <path
        d={[
          "M50 4",
          // Right edge curving out
          "C62 12, 78 30, 84 52",
          "C90 74, 86 100, 76 120",
          "C68 136, 58 150, 50 156",
          // Left edge curving back up (slightly different from right)
          "C42 150, 30 138, 22 120",
          "C12 100, 8 76, 14 52",
          "C20 30, 36 14, 50 4",
          "Z",
        ].join(" ")}
        fill="#2F4A2A"
      />
      {/* Central vein - slightly off-center for organic feel */}
      <path
        d="M50 18 C48 50, 52 90, 50 148"
        stroke="#1E3318"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      {/* Side veins - left */}
      <path
        d="M49 50 C40 46, 28 48, 20 54"
        stroke="#1E3318"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M49 76 C38 74, 24 78, 16 86"
        stroke="#1E3318"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M49 102 C40 100, 30 106, 24 114"
        stroke="#1E3318"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      {/* Side veins - right */}
      <path
        d="M51 44 C60 40, 72 42, 80 48"
        stroke="#1E3318"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M51 70 C62 68, 76 72, 82 80"
        stroke="#1E3318"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M51 96 C60 94, 72 98, 78 108"
        stroke="#1E3318"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}
