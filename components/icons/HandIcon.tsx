import React from "react";

interface HandIconProps {
  className?: string;
}

const HandIcon: React.FC<HandIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Palm */}
    <path d="M16.5 42c-2.2-1-3.8-3.2-4.5-5.5l-1.8-6.5c-0.3-1.2 0.2-2 1.2-2.2s1.8 0.5 2.2 1.5l1.5 4" />
    {/* Index finger */}
    <path d="M18 21c-0.2-3-0.5-6.5-0.3-9.5c0.1-1.5 0.8-2.5 2-2.5s2 1 2 2.5l-0.2 9.5" />
    {/* Middle finger */}
    <path d="M21.5 21l0.2-10.5c0.1-1.5 0.8-2.3 1.8-2.3s1.8 0.8 2 2.2l0.2 10.8" />
    {/* Ring finger */}
    <path d="M25.8 21.5l0.5-8.8c0.1-1.5 0.8-2.2 1.8-2s1.5 1 1.5 2.5l-0.5 8.8" />
    {/* Pinky */}
    <path d="M29.2 23l0.8-6.5c0.2-1.3 0.8-2 1.8-1.8s1.3 1.2 1.2 2.5l-1 6.5" />
    {/* Palm outline */}
    <path d="M15.2 33.5c-0.2-2 0-4.5 0.5-6.8c0.5-2.5 1-4.5 2.2-5.5c1.8-1.5 5.2-1.2 7.8-0.8c2.8 0.5 5.5 0.5 7 2c1.2 1.2 1.5 3 1 5.5c-0.8 3.5-1.5 6.2-3 8.5c-1.8 2.8-4.2 4.5-7 5c-2.5 0.5-5-0.2-7-1.5" />
    {/* Thumb */}
    <path d="M15.5 26.5c-1.5-1-3.2-1.2-4.8-0.2c-1.3 0.8-1.5 2.2-0.5 3.5l3.8 4.2" />
  </svg>
);

export default HandIcon;
