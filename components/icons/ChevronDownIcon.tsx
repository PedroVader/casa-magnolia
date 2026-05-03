import React from "react";

interface ChevronDownIconProps {
  className?: string;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Organic down chevron */}
    <path d="M10.5 17.5c3 2.8 6.5 6 9.5 8.5c1.8 1.5 3 2.5 4.2 3c1.2-0.8 2.5-1.8 4-3.2c3.2-2.8 6.5-5.8 9.8-8.8" />
  </svg>
);

export default ChevronDownIcon;
