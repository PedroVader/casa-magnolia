import { forwardRef, type SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder, id, className = "", ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${selectId}-error`;

    return (
      <div className={className}>
        <label
          htmlFor={selectId}
          className="block font-body text-sm tracking-wide uppercase text-magnolia-ink/70 mb-2"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          className={`w-full border-b-2 bg-transparent px-0 py-3 font-body text-base text-magnolia-ink focus:outline-none transition-colors appearance-none ${
            error
              ? "border-magnolia-terracota"
              : "border-magnolia-ink/20 focus:border-magnolia-green"
          }`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={errorId} className="mt-1 text-sm text-magnolia-terracota" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
