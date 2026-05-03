import React from "react";

interface BranchIconProps {
  className?: string;
}

const BranchIcon: React.FC<BranchIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Main branch */}
    <path d="M8 38c4-3.5 8.5-8 14-14.5c3-3.5 7.5-8.2 12-12.8c1.2-1.2 2.8-2.5 4-3.2" />
    {/* Leaf 1 - upper left */}
    <path d="M18 22c-3.2-1.5-6.8-1.2-8.2 0.5s0.8 4.5 4.2 5.8c1.5 0.6 3.2 0 4.5-1.2" />
    <path d="M14.5 23.5c1.8 1.2 3.5 2.5 4 4" />
    {/* Leaf 2 - middle right */}
    <path d="M27 18c1-3.5 3.5-5.8 5.5-5.5s2.2 3.8 0.5 7c-0.7 1.3-2.2 2-3.8 1.5" />
    <path d="M30.5 14.2c-1.2 1.8-2.5 3.8-3.2 5" />
    {/* Leaf 3 - lower */}
    <path d="M14 30c-2.8 0.5-4.8 2.5-4.5 4.2s3.2 2 6 0.8c1.2-0.5 1.8-1.8 1.5-3.2" />
    <path d="M11.2 33c1.8 0 3.5-0.2 4.8-0.8" />
  </svg>
);

export default BranchIcon;
