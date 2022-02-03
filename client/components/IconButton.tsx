import React from "react";
import clsx from "clsx";

const styles = `inline-block p-2 rounded-lg sublime-gd hover:text-white active:text-opacity-75 focus:outline-none focus:ring`;

function IconButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outlined" | "filled";
  }
): JSX.Element {
  const { variant, children } = props;
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
        {typeof children === "string"
          ? children[0].toLocaleUpperCase()
          : children}
      </span>
    </button>
  );
}

export default IconButton;
