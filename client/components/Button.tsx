import React from "react";
import clsx from "clsx";

const styles: string = ` p-[1px] rounded-32 sublime-gd active:text-opacity-75 focus:outline-none`;

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
            "bg-transparent text-white dark:bg-darkPrimary dark:text-white":
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
