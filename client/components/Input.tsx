import clsx from "clsx";
import React from "react";

// const styles: string = `sublime-gd p-[1px] rounded-32`;
const inputStyles: string = `border border-gray-300 pr-10 dark:bg-darkPrimary dark:border placeholder-gray-500 rounded-32 text-gray-600 focus:z-10 p-2 outline-none focus:ring`;

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <>
      {props?.type === "textarea" || props?.rows ? (
        <textarea
          {...props}
          className={clsx(
            inputStyles,
            "h-auto",
            props.className && props.className
          )}
        />
      ) : (
        <input
          {...props}
          className={clsx(inputStyles, props.className && props.className)}
        />
      )}
    </>
  );
}

export default Input;
