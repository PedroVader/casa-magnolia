import type { ReactNode } from "react";

type BadgeVariant = "green" | "muted" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  green: "bg-magnolia-green text-magnolia-cream",
  muted: "bg-magnolia-cream text-magnolia-ink border border-magnolia-line",
  outline: "border border-magnolia-green text-magnolia-green",
};

export function Badge({
  children,
  variant = "green",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-body tracking-[0.15em] uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
