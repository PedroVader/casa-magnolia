import React from "react";

interface SunIconProps {
  className?: string;
}

const SunIcon: React.FC<SunIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Sun center - slightly irregular circle */}
    <path d="M30.5 24.2c0.2 3.5-2.5 6.8-6.2 7.2c-3.8 0.3-7-2.5-7.3-6.2c-0.3-3.5 2.5-6.8 6.2-7c3.5-0.3 7 2.5 7.3 6z" />
    {/* Rays - irregular lengths and angles */}
    <path d="M24.2 10.5l-0.5-4.8" />
    <path d="M24 31.5l0.3 5.2" />
    <path d="M14 14.5l-3.5-3.2" />
    <path d="M33.5 33l3.8 3.5" />
    <path d="M10.8 24.5l-5 0.2" />
    <path d="M37.2 23.8l4.8-0.3" />
    <path d="M33.2 14.8l3.5-3.8" />
    <path d="M14.5 33.2l-3.2 3.8" />
    {/* Extra organic short rays */}
    <path d="M19 13.5l-1.5-2.8" />
    <path d="M29 13l1.2-2.5" />
    <path d="M13.5 19.5l-2.5-1.2" />
    <path d="M36.5 19l2.2-0.8" />
    <path d="M29.5 34l1 2.5" />
    <path d="M18.5 34.5l-1.2 2.2" />
  </svg>
);

export default SunIcon;
