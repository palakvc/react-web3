import clsx from "clsx";
import User from "icons/User";
import Image from "next/image";
import React from "react";

interface IAvatarProps {
  src?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

function Avatar(props: IAvatarProps) {
  const { src, className, children, size } = props;
  return (
    <div
      className={clsx(
        "mx-3 flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-darkPrimary",
        className,
        {
          "h-10 w-10": size === "small",
          "h-20 w-20": size === "medium",
          " ": size === "large",
        }
      )}
    >
      {children ? (
        children
      ) : src ? (
        <Image
          src={src}
          alt="user"
          height={100}
          width={100}
          className="w-full rounded-full object-cover h-10"
        />
      ) : (
        <User className="text-gray-600 dark:text-gray-400" />
      )}
    </div>
  );
}

export default Avatar;
