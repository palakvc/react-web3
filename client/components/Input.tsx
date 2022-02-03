import clsx from "clsx";
import React from "react";

const gradient =
  "bg-gradient-to-tl from-rose-500 via-fuchsia-600 to-indigo-500";

const outline = `inline-block p-[2px] rounded-full ${gradient} text-white active:text-opacity-75 focus:outline-none focus:ring`;

const styles: string = `${outline}`;
const inputStyles: string = `rounded-full text-black m-0 p-2 outline-none`;

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
