import React from "react";

interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Speech bubble - organic rounded shape */}
    <path d="M10.5 36.5c-1.5-3-2.2-6.5-2-10c0.5-5.5 3-10 7-13c4-3 9-4.5 14-3.5c5 1 9 4 11.5 8.2c2.2 4 2.5 8.8 1 13c-1.5 4.5-5 8-9.5 10c-4.2 1.8-9 2-13.2 0.5l-8.5 3l2-8.5" />
    {/* Phone handset inside bubble */}
    <path d="M18.5 17c-0.5-0.2-1.2 0-1.8 0.5c-0.8 0.8-1.2 2-0.8 3.5c0.8 2.5 2.5 5 5 7.2c2.5 2.2 5 3.5 7.5 3.8c1.5 0.2 2.8-0.2 3.5-1c0.5-0.5 0.8-1.2 0.5-1.8l-1.2-2c-0.3-0.5-1-0.8-1.5-0.5l-2.2 1c-0.5 0.2-1 0-1.5-0.3c-1.2-0.8-2.5-2-3.5-3.2c-0.8-1-0.8-1.5-0.5-2l0.8-2c0.3-0.5 0.2-1.2-0.2-1.5l-2.5-1.8z" />
  </svg>
);

export default WhatsAppIcon;
