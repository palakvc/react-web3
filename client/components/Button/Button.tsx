import React from "react";
import clsx from "clsx";

// const styles: string = `p-[1px] sublime-gd rounded-32 active:text-opacity-75 focus:outline-none`;

function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outlined" | "filled";
  }
): JSX.Element {
  const { variant } = props;
  return (
    <button
      {...props}
      className={clsx(
        `text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-700 p-2 text-sm lg:text-base font-medium rounded-full`,
        {
          "dark:bg-darkPrimary dark:text-white": variant === "outlined",
        },
        props.className && props.className
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
