import clsx from "clsx";
import React from "react";

const styles: string = `sublime-gd p-[1px] rounded-lg`;
const inputStyles: string = `h-10 pr-10 placeholder-gray-500 rounded-lg text-gray-600 focus:z-10 p-2 outline-none focus:ring`;

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles}>
      <input
        {...props}
        className={clsx(inputStyles, props.className && props.className)}
      />
    </div>
  );
}

export default Input;
