import React from "react";

interface RingIconProps {
  className?: string;
}

const RingIcon: React.FC<RingIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Ring band - slightly irregular ellipse */}
    <path d="M12.5 28c-0.5 4.2 1.5 8 5 10.2c3 1.8 6.5 2.5 10 1.8c3.5-0.8 6-3 7.5-6c1.5-3.2 1.2-7 -0.2-10c-1.5-3-4.2-5-7.5-5.5c-3.5-0.5-7 0.5-9.5 2.8c-2.5 2.2-4 5-5.2 7" />
    {/* Diamond/gem top */}
    <path d="M19.5 18.5l2-4.5l2.8-2.8l3 0.2l2.5 3l1.8 4.2" />
    {/* Diamond facets */}
    <path d="M21.5 14l2.8 5" />
    <path d="M29.5 14.5l-5.2 4.5" />
    <path d="M22 11.5l2.5 2.8l3-0.5" />
    {/* Light sparkle */}
    <path d="M31 10.5l1.2-1.5" />
    <path d="M32.5 12l1.5 0.2" />
    <path d="M31.5 9l0.2-1.5" />
  </svg>
);

export default RingIcon;
