import React from "react";

interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Top line - slightly wavy */}
    <path d="M8 13.5c4-0.3 9 0.2 14.5 0c5.5-0.2 10.5 0.2 17.5-0.2" />
    {/* Middle line - slightly wavy */}
    <path d="M8 24.2c5 0.3 10.5-0.2 16 0c5 0.2 9.5-0.2 16-0.5" />
    {/* Bottom line - slightly wavy */}
    <path d="M8 34.8c4.5 0.2 9.5-0.2 15 0.2c5.5 0.3 10-0.2 17 0" />
  </svg>
);

export default MenuIcon;
