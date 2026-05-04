interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
  showLine?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  accent,
  align = "left",
  showLine = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {showLine && (
        <div className={`separator w-12 mb-6 ${align === "center" ? "mx-auto" : ""}`} />
      )}
      {accent && (
        <span className="font-accent text-lg italic tracking-wide opacity-70 block mb-2">
          {accent}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
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
