interface NumberLabelProps {
  number: number;
  className?: string;
}

export function NumberLabel({ number, className = "" }: NumberLabelProps) {
  const formatted = String(number).padStart(2, "0");

  return (
    <span
      className={`font-display text-5xl md:text-6xl lg:text-7xl font-light leading-none select-none ${className}`}
    >
      {formatted}
    </span>
  );
}
