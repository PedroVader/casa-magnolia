import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${inputId}-error`;

    return (
      <div className={className}>
        <label
          htmlFor={inputId}
          className="block font-body text-sm tracking-wide uppercase text-magnolia-ink/70 mb-2"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          className={`w-full border-b-2 bg-transparent px-0 py-3 font-body text-base text-magnolia-ink placeholder:text-magnolia-ink/30 focus:outline-none transition-colors ${
            error
              ? "border-magnolia-terracota"
              : "border-magnolia-ink/20 focus:border-magnolia-green"
          }`}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1 text-sm text-magnolia-terracota" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
