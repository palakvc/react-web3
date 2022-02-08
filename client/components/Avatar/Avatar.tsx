import clsx from "clsx";
import User from "icons/User";
import Image from "next/image";
import React from "react";

interface IAvatarProps {
  src?: string;
  className?: string;
  children?: React.ReactNode;
  noBorder?: boolean;
}

function Avatar(props: IAvatarProps) {
  const { src, className, children, noBorder = false } = props;
  return (
    <div
      className={clsx("p-[1px] rounded-full focus:outline-none mx-3", {
        "sublime-gd": !noBorder,
      })}
    >
      <div
        className={clsx(
          "flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-darkPrimary",
          className,
          { "bg-gray-200": noBorder }
        )}
      >
        {children ? (
          children
        ) : src ? (
          <Image
            src={src}
            alt="user"
            className="w-full rounded-full object-cover h-10"
          />
        ) : (
          <User className="text-gray-600 dark:text-gray-400" />
        )}
      </div>
    </div>
  );
}

export default Avatar;
