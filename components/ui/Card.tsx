import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden ${
        hover ? "transition-transform duration-300 hover:scale-[1.02]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

export function CardImage({
  src,
  alt,
  className = "",
  overlay = true,
}: CardImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-magnolia-ink/10 transition-opacity duration-300 group-hover:bg-magnolia-ink/20" />
      )}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-4 md:p-6 ${className}`}>{children}</div>;
}
