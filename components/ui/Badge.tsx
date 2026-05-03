import type { ReactNode } from "react";

type BadgeVariant = "green" | "pink" | "mustard" | "terracota" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  green: "bg-magnolia-green text-magnolia-cream",
  pink: "bg-magnolia-pink text-magnolia-ink",
  mustard: "bg-magnolia-mustard text-magnolia-ink",
  terracota: "bg-magnolia-terracota text-magnolia-cream",
  outline: "border border-magnolia-green text-magnolia-green",
};

export function Badge({
  children,
  variant = "green",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-body tracking-widest uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
