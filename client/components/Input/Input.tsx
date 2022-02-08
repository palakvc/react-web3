import clsx from "clsx";
import React from "react";

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: React.ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
) {
  return (
    <>
      {props?.type === "textarea" || props?.rows ? (
        <textarea
          {...props}
          className={clsx(
            "border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-32 text-gray-600 focus:z-10 p-2 outline-none focus:ring",
            "h-auto",
            props.className && props.className
          )}
          ref={ref}
        />
      ) : (
        <input
          {...props}
          className={clsx(
            "border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-32 text-gray-600 focus:z-10 p-2 outline-none focus:ring",
            props.className && props.className
          )}
          ref={ref}
        />
      )}
    </>
  );
}

export default React.forwardRef(Input);
