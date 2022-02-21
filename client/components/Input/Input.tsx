import clsx from "clsx";
import React from "react";

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      error?: string | boolean;
      label?: string;
    },
  ref: React.ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
) {
  const { error, type, rows, label, className, id = "", name = "" } = props;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id ? id : name}
          className="font-semibold text-sm text-secondary dark:text-darkTextSecondary inline-block mb-4"
        >
          {label}
        </label>
      )}

      {type === "textarea" || rows ? (
        <textarea
          {...props}
          className={clsx(
            "border border-gray-400 dark:border-gray-600 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-full text-secondary dark:text-darkTextSecondary focus:z-10 p-2 outline-none focus:ring",
            "h-auto",
            { "ring ring-red-600": error },
            className && className
          )}
          id={id ? id : name}
          ref={ref}
        />
      ) : (
        <input
          {...props}
          className={clsx(
            "border border-gray-400 dark:border-gray-600 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-full text-secondary dark:text-darkTextSecondary focus:z-10 p-2 outline-none focus:ring",
            { "ring ring-red-600": error },
            className && className
          )}
          ref={ref}
          id={id ? id : name}
        />
      )}

      {error && <span className="text-[12px] text-red-600">{error}</span>}
    </div>
  );
}

export default React.forwardRef(Input);
