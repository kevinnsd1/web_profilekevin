import React, { forwardRef } from "react";

export interface NeoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  variant?: "white" | "yellow" | "pink" | "cyan" | "dark";
}

const inputBgStyles = {
  white: "bg-white text-black focus:bg-white",
  yellow: "bg-[#FFFDE6] text-black focus:bg-[#FFE600]/20",
  pink: "bg-[#FFF0F7] text-black focus:bg-[#FF2E93]/10",
  cyan: "bg-[#E6FDFF] text-black focus:bg-[#00E5FF]/20",
  dark: "bg-[#18181b] text-white focus:bg-[#27272a]",
};

export const NeoInput = forwardRef<HTMLInputElement, NeoInputProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      variant = "white",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-heading font-black text-xs uppercase tracking-wider text-black dark:text-white flex items-center justify-between"
          >
            <span>{label}</span>
            {props.required && <span className="text-[#FF4757] font-bold">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-3.5 text-black shrink-0 pointer-events-none">
              {icon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className={`
              w-full border-3 sm:border-4 border-black rounded-xl
              py-3 font-semibold text-sm transition-all duration-150
              shadow-[4px_4px_0px_0px_#000000]
              focus:outline-none focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[6px_6px_0px_0px_#FF2E93]
              placeholder:text-neutral-400 placeholder:font-normal
              ${icon ? "pl-11 pr-4" : "px-4"}
              ${inputBgStyles[variant]}
              ${error ? "border-[#FF4757] focus:shadow-[6px_6px_0px_0px_#FF4757]" : ""}
              ${className}
            `}
            {...props}
          />
        </div>

        {error && (
          <p className="text-xs font-black text-[#FF4757] tracking-tight mt-0.5">
            ⚠ {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-xs font-bold text-neutral-500 mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

NeoInput.displayName = "NeoInput";

export interface NeoTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "white" | "yellow" | "pink" | "cyan" | "dark";
}

export const NeoTextarea = forwardRef<HTMLTextAreaElement, NeoTextareaProps>(
  (
    {
      label,
      error,
      helperText,
      variant = "white",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-heading font-black text-xs uppercase tracking-wider text-black dark:text-white flex items-center justify-between"
          >
            <span>{label}</span>
            {props.required && <span className="text-[#FF4757] font-bold">*</span>}
          </label>
        )}

        <textarea
          id={inputId}
          ref={ref}
          className={`
            w-full border-3 sm:border-4 border-black rounded-xl
            p-4 font-semibold text-sm transition-all duration-150
            shadow-[4px_4px_0px_0px_#000000]
            focus:outline-none focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[6px_6px_0px_0px_#FF2E93]
            placeholder:text-neutral-400 placeholder:font-normal min-h-[120px] resize-y
            ${inputBgStyles[variant]}
            ${error ? "border-[#FF4757] focus:shadow-[6px_6px_0px_0px_#FF4757]" : ""}
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-xs font-black text-[#FF4757] tracking-tight mt-0.5">
            ⚠ {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-xs font-bold text-neutral-500 mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

NeoTextarea.displayName = "NeoTextarea";
