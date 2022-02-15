import clsx from "clsx";
import React from "react";

// const styles: string = `sublime-gd p-[1px] rounded-32`;
const inputStyles: string = `border border-gray-300 dark:border-gray-700 pr-10 dark:bg-darkPrimary placeholder-gray-500 rounded-full text-gray-600 focus:z-10 p-2 outline-none focus:ring`;

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
          className="font-medium text-sm text-gray-600 inline-block mb-4"
        >
          {label}
        </label>
      )}

      {type === "textarea" || rows ? (
        <textarea
          {...props}
          className={clsx(
            "border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-full text-gray-600 focus:z-10 p-2 outline-none focus:ring",
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
            "border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-full text-gray-600 focus:z-10 p-2 outline-none focus:ring",
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
