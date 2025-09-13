// components/NumberInput.tsx
"use client";
import React, { useId, useMemo } from "react";

export type NumberInputProps = {
  value: number | "";
  onChange: (v: number | "") => void;
  label?: string;
  helperText?: string;
  error?: string;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  id?: string;
};

function clamp(v: number, min?: number, max?: number) {
  if (typeof min === "number") v = Math.max(min, v);
  if (typeof max === "number") v = Math.min(max, v);
  return v;
}

export default function NumberInput({
  value,
  onChange,
  label,
  helperText,
  error,
  min,
  max,
  step = 1,
  placeholder,
  disabled,
  prefix,
  suffix,
  className = "",
  id,
}: NumberInputProps) {
  const reactId = useId();
  const inputId = id ?? `num-${reactId}`;
  const helpId = `${inputId}-help`;
  const errId = `${inputId}-err`;

  const describedBy = useMemo(() => {
    const ids: string[] = [];
    if (helperText) ids.push(helpId);
    if (error) ids.push(errId);
    return ids.join(" ");
  }, [helperText, error, helpId, errId]);

  const canStepUp =
    typeof value === "number"
      ? typeof max === "number"
        ? value + step <= max
        : true
      : true;
  const canStepDown =
    typeof value === "number"
      ? typeof min === "number"
        ? value - step >= min
        : true
      : true;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-zinc-800 dark:text-zinc-100"
        >
          {label}
        </label>
      )}

      <div
        className={[
          "group relative flex items-stretch rounded-2xl border",
          error
            ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-500/20"
            : "border-zinc-300 dark:border-zinc-700 focus-within:border-zinc-900 focus-within:ring-zinc-900/10",
          "bg-white dark:bg-zinc-900 shadow-sm focus-within:ring-4 transition",
          disabled ? "opacity-60" : "",
        ].join(" ")}
      >
        {prefix && (
          <div className="pointer-events-none flex items-center px-3 text-zinc-500">
            {prefix}
          </div>
        )}

        <input
          id={inputId}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          onChange={(e) => {
            const raw = e.target.value;
            if (raw === "") return onChange("");
            const next = Number(raw);
            if (Number.isNaN(next)) return; // ignore invalid
            onChange(next);
          }}
          onBlur={() => {
            if (value === "") return;
            if (typeof value === "number") {
              const clamped = clamp(value, min, max);
              if (clamped !== value) onChange(clamped);
            }
          }}
          onWheel={(e) => {
            // Prevent scroll from changing value when focused
            (e.target as HTMLInputElement).blur();
          }}
          className={[
            "peer w-full flex-1 bg-transparent px-3 py-2.5 text-base",
            "text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100",
            "focus:outline-none",
            // Hide native spin buttons cross-browser
            "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          ].join(" ")}
        />

        {suffix && (
          <div className="pointer-events-none flex items-center px-3 text-zinc-500">
            {suffix}
          </div>
        )}

        {/* Stepper buttons */}
        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          <button
            type="button"
            aria-label="Increment"
            disabled={disabled || !canStepUp}
            onClick={() => {
              const base = typeof value === "number" ? value : min ?? 0;
              const next = clamp(base + step, min, max);
              onChange(next);
            }}
            className="h-6 w-9 rounded-tr-2xl disabled:opacity-40 hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto h-4 w-4 text-zinc-600 dark:text-zinc-300"
            >
              <path d="M12 8l4 4H8l4-4z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Decrement"
            disabled={disabled || !canStepDown}
            onClick={() => {
              const base = typeof value === "number" ? value : max ?? 0;
              const next = clamp(base - step, min, max);
              onChange(next);
            }}
            className="h-6 w-9 rounded-br-2xl disabled:opacity-40 hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto h-4 w-4 rotate-180 text-zinc-600 dark:text-zinc-300"
            >
              <path d="M12 8l4 4H8l4-4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Helper & Error */}
      {helperText && !error && (
        <p id={helpId} className="mt-1 text-xs text-zinc-500">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errId} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
