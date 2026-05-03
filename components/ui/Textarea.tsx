import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${textareaId}-error`;

    return (
      <div className={className}>
        <label
          htmlFor={textareaId}
          className="block font-body text-sm tracking-wide uppercase text-magnolia-ink/70 mb-2"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          rows={4}
          className={`w-full border-b-2 bg-transparent px-0 py-3 font-body text-base text-magnolia-ink placeholder:text-magnolia-ink/30 focus:outline-none transition-colors resize-none ${
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

Textarea.displayName = "Textarea";

export { Textarea };
