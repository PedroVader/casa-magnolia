import React from "react";

interface JarIconProps {
  className?: string;
}

const JarIcon: React.FC<JarIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Vase body */}
    <path d="M17.5 21c-1.2 2.5-2.8 6-3.5 10c-0.5 3 0 5.5 1 7c1.2 1.8 3.8 3 9.2 3.2c5 0 7.8-1 9-2.8c1-1.5 1.5-4 1-7.2c-0.8-4-2.2-7.5-3.5-10.2" />
    {/* Vase neck */}
    <path d="M18.5 17.5c-0.5 0.8-0.8 2-1 3.5l13.2 0.2c-0.2-1.5-0.5-2.8-1.2-3.5" />
    {/* Vase rim */}
    <path d="M17.5 17.5c0.5-0.8 2-1.2 6.5-1.2s6 0.5 6.5 1.2" />
    {/* Flower stem 1 */}
    <path d="M21 16.5c-0.5-3-0.2-5.5 0.5-7.5" />
    {/* Flower 1 */}
    <path d="M21.5 9c-1.5-1-1.8-2.5-0.8-3.5s2.8-0.5 3.2 1c0.5-1.5 2.2-2 3.2-1s0 2.5-1.5 3.2" />
    <circle cx="22.8" cy="8" r="1" fill="currentColor" stroke="none" />
    {/* Flower stem 2 */}
    <path d="M27.5 16.5c1-3.5 2.5-5.5 3.8-6.8" />
    {/* Flower 2 - simple bud */}
    <path d="M31.2 9.8c0.5-1.5 2-2.5 2.8-1.8s0.2 2.2-1 3" />
    <path d="M31.5 9.5c1.2-1 1.2-2.5 0.2-3s-2.2 0.5-2 2" />
    {/* Small leaf */}
    <path d="M22 12.5c-1.8 0.2-3.2-0.5-3.2-1.5s1.2-1.5 2.8-1" />
  </svg>
);

export default JarIcon;
