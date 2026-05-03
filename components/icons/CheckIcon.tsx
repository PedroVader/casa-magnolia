import React from "react";

interface CheckIconProps {
  className?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Wobbly checkmark */}
    <path d="M8.5 25.5c2.5 1.5 5 3.8 7.5 6.5c1.2 1.5 2.5 3 3.8 4.5c2-4 4.5-8.5 8-13c3.5-4.5 7.2-8.5 11.5-12c1-0.8 1.8-1.5 2.5-1.8" />
  </svg>
);

export default CheckIcon;
