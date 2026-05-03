import React from "react";

interface EnvelopeIconProps {
  className?: string;
}

const EnvelopeIcon: React.FC<EnvelopeIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Envelope body */}
    <path d="M6.5 13.5c0.2-0.3 0.8-0.8 2-0.8l31.5 0.2c1.5 0.1 2.2 0.8 2.3 1.2l0.2 20.5c-0.1 1.2-0.8 1.8-1.8 2l-32.2 0.2c-1.2-0.1-1.8-0.8-2-1.8l0.2-20c0-0.5 0.1-1 0.3-1.5z" />
    {/* Flap - top triangle */}
    <path d="M7 14c3.5 3.8 7.5 7.2 11.5 10c2 1.5 3.8 2.5 5.8 2.3c1.8-0.2 3.5-1.2 5.2-2.5c4-3 8-6.8 11.5-10.2" />
    {/* Bottom fold lines for organic feel */}
    <path d="M7.5 35.5c3.2-2.8 6.2-5.5 8.5-7.5" />
    <path d="M40.2 35c-3-2.5-6-5.2-8.5-7.2" />
  </svg>
);

export default EnvelopeIcon;
