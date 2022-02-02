import React from "react";
import clsx from "clsx";

const outline = `inline-block p-2 rounded-lg sublime-gd hover:text-white active:text-opacity-75 focus:outline-none`;

const styles: string = `${outline}`;

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
          `p-2 font-medium rounded-full hover:bg-transparent text-white`,
          {
            "bg-white text-black hover:text-white": variant === "outlined",
          }
        )}
      >
        {props.children}
      </span>
    </button>
  );
}

export default Button;
