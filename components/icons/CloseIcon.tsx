import React from "react";

interface CloseIconProps {
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* X mark - two slightly irregular diagonal lines */}
    <path d="M12.5 11.5c3.5 3.8 7.2 7.5 11 11.5c3.8 4 7.5 7.8 11.5 12" />
    <path d="M35.5 12c-3.8 3.5-7.5 7.2-11.2 11c-4 3.8-7.8 7.5-12 11.5" />
  </svg>
);

export default CloseIcon;
