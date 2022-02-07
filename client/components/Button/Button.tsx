import React from "react";
import clsx from "clsx";

const styles: string = `p-[1px] sublime-gd rounded-32 active:text-opacity-75 focus:outline-none`;

function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outlined" | "filled";
  }
): JSX.Element {
  const { variant } = props;
  return (
    <button
      {...props}
      className={clsx(styles, props.className && props.className)}
    >
      <span
        className={clsx(
          `block p-2 text-sm lg:text-base font-medium rounded-32`,
          {
            "bg-white text-gray-900 dark:bg-darkPrimary dark:text-white":
              variant === "outlined",
          }
        )}
      >
        {props.children}
      </span>
    </button>
  );
}

export default Button;
