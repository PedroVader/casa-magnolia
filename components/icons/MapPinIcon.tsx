import React from "react";

interface MapPinIconProps {
  className?: string;
}

const MapPinIcon: React.FC<MapPinIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Pin body - organic teardrop */}
    <path d="M24.2 4.5c-5 0.2-9.2 2.5-11.5 6c-2.5 3.8-3 8.2-1.2 12.5c2 4.5 5.5 9 9 13c1.5 1.8 3 3.2 3.8 4.5c0.8-1.2 2-2.8 3.5-4.8c3.5-4 7-8.5 9-13c1.5-4 1.2-8.5-1.2-12.2c-2.2-3.5-6.2-5.8-11.2-6z" />
    {/* Inner circle - slightly off center for hand-drawn feel */}
    <path d="M28.5 18.5c0.5 2.5-0.5 4.8-2.5 6c-2 1.2-4.5 1-6.2-0.5c-1.8-1.5-2.5-4-1.5-6.2c1-2.2 3.2-3.5 5.5-3.5c2.2 0 4.2 1.5 4.8 3.8" />
    {/* Ground shadow */}
    <path d="M19 43c2.2 1 5.5 1.2 8.5 0.5c1-0.2 1.8-0.5 2.2-0.8" />
  </svg>
);

export default MapPinIcon;
