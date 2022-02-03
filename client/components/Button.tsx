import React from "react";
import clsx from "clsx";

const styles: string = `p-[1px] border-2 border-fuchsia-400 dark:border-0 dark:sublime-gd rounded-32 active:text-opacity-75 focus:outline-none`;

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
          `block p-2 font-medium rounded-32 hover:bg-transparent`,
          {
            "text-gray-900 dark:bg-darkPrimary dark:text-white":
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
