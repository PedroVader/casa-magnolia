import React from "react";

interface StarIconProps {
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Asymmetric star - single hand-drawn path */}
    <path d="M24.5 5.5c0.8 3.5 1.5 6 2.5 9.2c0.5 1.2 1.2 1.8 2.5 2l9.2 1.5c-2.5 2.5-5.5 4.8-7.8 7.2c-0.8 0.8-1 1.8-0.5 3l3 9c-3-1.5-6-3.2-9-4.8c-1-0.5-2-0.5-3 0.2l-8.2 5.5c0.8-3.2 1.8-6.5 2.5-9.5c0.3-1.2-0.2-2.2-1-3l-7.5-6.5c3.5-0.2 7-0.5 10.2-1c1.2-0.2 2-0.8 2.5-2l4-10.8z" />
  </svg>
);

export default StarIcon;
