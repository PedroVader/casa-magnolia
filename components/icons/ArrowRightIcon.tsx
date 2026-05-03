import React from "react";

interface ArrowRightIconProps {
  className?: string;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Arrow shaft - slightly wavy */}
    <path d="M7 24.5c3.5-0.5 8-0.2 13 0c5 0.2 10.5 0.5 16-0.2c1.8-0.2 3.2-0.5 4.5-0.5" />
    {/* Arrow head top */}
    <path d="M32.5 15c2.5 2.5 5 5.2 7.5 8.5c0.5 0.5 0.8 1 0.8 1.2" />
    {/* Arrow head bottom */}
    <path d="M32 34.5c2.8-2.8 5.5-5.8 8-9.5c0.3-0.5 0.5-0.8 0.5-1" />
  </svg>
);

export default ArrowRightIcon;
