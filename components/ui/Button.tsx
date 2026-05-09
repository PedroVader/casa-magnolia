import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

interface VariantStyle {
  stroke: string;
  fill: string;
  text: string;
}

const variantStyles: Record<ButtonVariant, VariantStyle> = {
  primary: {
    stroke: "var(--magnolia-green)",
    fill: "var(--magnolia-green)",
    text: "text-magnolia-cream",
  },
  secondary: {
    stroke: "var(--magnolia-terracota)",
    fill: "var(--magnolia-terracota)",
    text: "text-magnolia-cream",
  },
  outline: {
    stroke: "var(--magnolia-green)",
    fill: "none",
    text: "text-magnolia-green",
  },
  ghost: {
    stroke: "transparent",
    fill: "none",
    text: "text-magnolia-green",
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4.5 text-base",
};

function WobblyBorder({ stroke, fill }: { stroke: string; fill: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 200 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5 Q 40 2, 100 4 Q 160 6, 197 4
           Q 199 20, 198 30 Q 199 45, 197 56
           Q 140 58, 100 57 Q 50 58, 3 56
           Q 1 40, 2 30 Q 1 15, 3 5 Z"
        stroke={stroke}
        fill={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, href, ...props }, ref) => {
    const style = variantStyles[variant];
    const baseStyles =
      "relative inline-flex items-center justify-center font-hand text-lg transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magnolia-mustard focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.03] active:scale-[0.97]";

    const classes = `${baseStyles} ${style.text} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes}>
          <WobblyBorder stroke={style.stroke} fill={style.fill} />
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <WobblyBorder stroke={style.stroke} fill={style.fill} />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
