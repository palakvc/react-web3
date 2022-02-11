import clsx from "clsx";
import React from "react";

// const styles: string = `sublime-gd p-[1px] rounded-32`;
const inputStyles: string = `border border-gray-300 dark:border-gray-700 pr-10 dark:bg-darkPrimary placeholder-gray-500 rounded-full text-gray-600 focus:z-10 p-2 outline-none focus:ring`;

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
            "border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-full text-gray-600 focus:z-10 p-2 outline-none focus:ring",
            "h-auto",
            props.className && props.className
          )}
          ref={ref}
        />
      ) : (
        <input
          {...props}
          className={clsx(
            "border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-full text-gray-600 focus:z-10 p-2 outline-none focus:ring",
            props.className && props.className
          )}
          ref={ref}
        />
      )}
    </>
  );
}

export default React.forwardRef(Input);
