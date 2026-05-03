import React from "react";

interface MatisseFlowerProps {
  className?: string;
  size?: number;
}

/**
 * A Matisse-style organic flower shape in mustard yellow.
 * Simple blob-like petals reminiscent of Matisse paper cutouts.
 * Fill only, no stroke.
 */
export default function MatisseFlower({
  className,
  size = 120,
}: MatisseFlowerProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top petal - organic blob */}
      <path
        d="M60 8 C72 8, 82 18, 80 32 C78 42, 68 48, 60 46 C52 48, 42 42, 40 32 C38 18, 48 8, 60 8Z"
        fill="#E0A52B"
      />
      {/* Right petal */}
      <path
        d="M112 60 C112 72, 102 82, 88 80 C78 78, 72 68, 74 60 C72 52, 78 42, 88 40 C102 38, 112 48, 112 60Z"
        fill="#E0A52B"
      />
      {/* Bottom petal */}
      <path
        d="M60 112 C48 112, 38 102, 40 88 C42 78, 52 72, 60 74 C68 72, 78 78, 80 88 C82 102, 72 112, 60 112Z"
        fill="#E0A52B"
      />
      {/* Left petal */}
      <path
        d="M8 60 C8 48, 18 38, 32 40 C42 42, 48 52, 46 60 C48 68, 42 78, 32 80 C18 82, 8 72, 8 60Z"
        fill="#E0A52B"
      />
      {/* Top-right petal */}
      <path
        d="M92 20 C100 26, 102 40, 92 48 C86 52, 76 50, 72 44 C68 38, 70 28, 78 22 C84 16, 88 17, 92 20Z"
        fill="#E0A52B"
      />
      {/* Bottom-right petal */}
      <path
        d="M92 100 C88 103, 84 104, 78 98 C70 92, 68 82, 72 76 C76 70, 86 68, 92 72 C102 80, 100 94, 92 100Z"
        fill="#E0A52B"
      />
      {/* Bottom-left petal */}
      <path
        d="M28 100 C20 94, 18 80, 28 72 C34 68, 44 70, 48 76 C52 82, 50 92, 42 98 C36 104, 32 103, 28 100Z"
        fill="#E0A52B"
      />
      {/* Top-left petal */}
      <path
        d="M28 20 C32 17, 36 16, 42 22 C50 28, 52 38, 48 44 C44 50, 34 52, 28 48 C18 40, 20 26, 28 20Z"
        fill="#E0A52B"
      />
      {/* Center circle */}
      <circle cx="60" cy="60" r="14" fill="#E0A52B" />
    </svg>
  );
}
