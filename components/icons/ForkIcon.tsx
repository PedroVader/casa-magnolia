import React from "react";

interface ForkIconProps {
  className?: string;
}

const ForkIcon: React.FC<ForkIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Left tine */}
    <path d="M16.5 5.5c-0.2 3.5-0.5 7-0.2 10.5c0.2 1.5 0.8 2.5 1.5 3" />
    {/* Left-center tine */}
    <path d="M21 5.2c0 3.5-0.2 7 0 10.5c0.1 1.5 0.5 2.5 1.2 3" />
    {/* Right-center tine */}
    <path d="M25.5 5.5c0.2 3.2 0.2 6.8 0 10.2c-0.1 1.5-0.5 2.8-1.2 3.2" />
    {/* Right tine */}
    <path d="M30 5.8c0.3 3 0.5 6.5 0.2 10c-0.2 1.5-0.8 2.5-1.8 3.2" />
    {/* Bridge connecting tines */}
    <path d="M17.8 19c1.5 1.2 3.5 2 5.8 2.2c2.5 0.2 4.8-0.5 6.5-1.8" />
    {/* Handle */}
    <path d="M23.2 21.5c0.2 3.5 0 7.5 0.2 11.5c0.1 3.2-0.2 6.5 0.5 9.5" />
    {/* Small handle detail */}
    <path d="M22.5 42c0.5 0.5 1.2 0.8 1.8 0.5" />
  </svg>
);

export default ForkIcon;
