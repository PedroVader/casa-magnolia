import React from "react";

interface PhoneIconProps {
  className?: string;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Handset earpiece */}
    <path d="M13.5 7.5c-3.5 0.5-5.8 3-6.2 6c-0.3 2.5 0.5 5 2 7.5" />
    {/* Handset mouthpiece */}
    <path d="M27 40.5c2.5 1.5 5 2.2 7.5 1.8c3-0.5 5.2-3 5.5-6.5" />
    {/* Handset body curve */}
    <path d="M9.5 21c1.5 2.8 3.5 5.5 6 8.2c2.5 2.8 5.2 5 8 7" />
    {/* Earpiece cup */}
    <path d="M13.5 7.5c1-0.2 2 0.5 2.5 2l1.5 5.5c0.3 1.2-0.2 2.2-1.2 2.8l-3 1.8c-0.8 0.5-1.5 0.3-2.2-0.5" />
    {/* Mouthpiece cup */}
    <path d="M27.2 40.2c0.5 0.8 1.5 1 2.5 0.5l3-1.5c1-0.5 1.5-1.5 1.2-2.8l-1.2-5.5c-0.3-1.5-1.2-2.2-2.5-2" />
    {/* Sound waves */}
    <path d="M19 10c1.5-1.2 3.2-1.5 4.5-0.5" />
    <path d="M21 7.5c1.5-1 3-1 4.2 0" />
  </svg>
);

export default PhoneIcon;
