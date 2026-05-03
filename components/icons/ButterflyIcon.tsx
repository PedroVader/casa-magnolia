import React from "react";

interface ButterflyIconProps {
  className?: string;
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Body */}
    <path d="M24 14c0.2 2.5 0 5.5-0.2 8.5c-0.2 3-0.3 6.5 0 10c0.1 1.2 0.3 2 0.5 2.5" />
    {/* Left upper wing */}
    <path d="M23.5 18c-2.5-3-5.8-5.5-9-6c-3-0.5-5.5 0.8-6.5 3.5c-0.8 2.5 0 5.5 2 8c2.2 2.8 5.5 4 8.5 3.5c2.5-0.5 4.2-2 5.2-4.5" />
    {/* Left lower wing */}
    <path d="M23.5 25c-2 2-4.5 4.5-6.5 6.5c-2 2-3 4.2-2.2 6c0.8 2 3 2.8 5.5 2.2c2.8-0.8 5-3 6-5.8c0.5-1.5 0.5-3-0.2-4.5" />
    {/* Right upper wing */}
    <path d="M24.5 18c2.2-3.2 5.5-5.8 8.5-6.2c3.2-0.5 5.8 0.5 6.8 3.2c0.8 2.5 0 5.8-2.2 8.2c-2.2 2.5-5.2 3.5-8 3c-2.5-0.5-4.2-2.2-5-4.8" />
    {/* Right lower wing */}
    <path d="M24.5 25c2.2 2 4.8 4.2 6.8 6.2c2 2 3.2 4.5 2.2 6.2c-1 1.8-3.2 2.5-5.8 1.8c-2.5-0.8-4.5-3-5.5-5.5c-0.5-1.5-0.3-3 0.2-4.5" />
    {/* Antennae */}
    <path d="M23.5 14.5c-2-2.5-4-4.5-5.5-5.5" />
    <path d="M24.5 14.5c2.2-2.2 4.2-4 6-5" />
    {/* Antenna tips */}
    <circle cx="17.8" cy="8.8" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="30.8" cy="9.2" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export default ButterflyIcon;
