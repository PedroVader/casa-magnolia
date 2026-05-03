interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  accent,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {accent && (
        <span className="font-accent text-lg italic tracking-wide opacity-70">
          {accent}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-1">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl font-body leading-relaxed max-w-2xl opacity-80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
