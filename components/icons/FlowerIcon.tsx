import React from "react";

interface FlowerIconProps {
  className?: string;
}

const FlowerIcon: React.FC<FlowerIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Center dot */}
    <circle cx="24" cy="22" r="2.8" fill="currentColor" stroke="none" />
    {/* Petal top-left */}
    <path d="M22.5 20c-2.5-4.2-6.8-6.5-8.2-5.5s0.3 5.8 3.2 9.2c1.2 1.4 3.1 1.8 5 0.8" />
    {/* Petal top-right */}
    <path d="M25.8 19.5c1.8-4.5 5.6-7.3 7.2-6.5s0.5 5.5-2 9.3c-1 1.5-2.8 2.1-4.8 1.3" />
    {/* Petal bottom-right */}
    <path d="M26 23.8c4.3 1.2 7.8 4 7.5 5.8s-4.5 1.8-8.2 0.2c-1.5-0.7-2.5-2.2-2.2-4.2" />
    {/* Petal bottom-left */}
    <path d="M22 24.2c-4 2-5.8 5.5-4.8 7s4.8 0.2 7.5-2.5c1.1-1.1 1.3-3 0.2-4.5" />
    {/* Stem */}
    <path d="M24 27c0.2 3 -0.5 7.5 0 12.5c0.2 1.8 -0.3 3.2 0.5 4" />
    {/* Small leaf on stem */}
    <path d="M24.2 34c1.8-1.5 4.5-1.8 5.5-0.5s-1.2 3-3.5 3.5" />
  </svg>
);

export default FlowerIcon;
