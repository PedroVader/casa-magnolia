import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-magnolia-green text-magnolia-cream hover:bg-magnolia-green/90 focus-visible:ring-magnolia-green",
  secondary:
    "bg-magnolia-terracota text-magnolia-cream hover:bg-magnolia-terracota/90 focus-visible:ring-magnolia-terracota",
  outline:
    "border-2 border-magnolia-green text-magnolia-green hover:bg-magnolia-green hover:text-magnolia-cream focus-visible:ring-magnolia-green",
  ghost:
    "text-magnolia-green hover:bg-magnolia-green/10 focus-visible:ring-magnolia-green",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-body tracking-wide transition-colors duration-200 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
