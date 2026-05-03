import React from "react";

interface CalendarIconProps {
  className?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Calendar body */}
    <path d="M9.5 12.5c0.2-1.5 1.2-2.2 2.8-2.5l23.5 0.2c1.5 0.2 2.5 1 2.8 2.5l0.2 25.5c-0.2 1.5-1.2 2.5-2.8 2.8l-23.8-0.2c-1.5-0.2-2.5-1.2-2.5-2.8l-0.2-25.5z" />
    {/* Top binding hooks */}
    <path d="M17 7v6.5" />
    <path d="M31 7.2v6.2" />
    {/* Header line */}
    <path d="M9.8 18.5l28.5 0.2" />
    {/* Date dots - organic scattered */}
    <circle cx="16" cy="24.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="24.2" cy="24.2" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="32" cy="24.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16.2" cy="31" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="24" cy="31.2" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="32.2" cy="31" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="37.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="24.2" cy="37.2" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export default CalendarIcon;
