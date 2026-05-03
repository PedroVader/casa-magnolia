import React from "react";

interface InstagramIconProps {
  className?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Camera body - rounded rectangle, slightly irregular */}
    <path d="M8.5 14.5c0.2-2.5 1-4.2 2.8-5.2c1.8-1 3.5-1.2 6-1.3l13.5 0.2c2.5 0.2 4 0.5 5.5 1.5c1.5 1 2.2 2.8 2.5 5l0.2 13c-0.1 2.5-0.5 4.2-1.5 5.5c-1 1.5-2.8 2.2-5.2 2.5l-13.5 0.2c-2.5-0.1-4.2-0.5-5.5-1.5c-1.5-1.2-2.2-3-2.5-5.5l-0.2-12.5c0-0.5 0-1.2 0.2-1.8z" />
    {/* Lens circle - slightly wobbly */}
    <path d="M30 24.2c0.2 3.2-2.2 6.2-5.5 6.5c-3.5 0.3-6.5-2-6.8-5.2c-0.3-3.2 2-6.2 5.2-6.5c3.5-0.5 6.5 2 7 5.2z" />
    {/* Flash dot */}
    <circle cx="34" cy="13.5" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

export default InstagramIcon;
