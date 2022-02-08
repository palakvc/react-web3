import clsx from "clsx";
import User from "icons/User";
import React from "react";

interface IAvatarProps {
  src?: string;
  className?: string;
  children?: React.ReactNode;
}

function Avatar(props: IAvatarProps) {
  const { src, className, children } = props;
  return (
    <div
      className={clsx(
        "mx-3 flex items-center justify-center h-10 w-10 rounded-full bg-white bg-gray-200 dark:bg-darkPrimary",
        className
      )}
    >
      {children ? (
        children
      ) : src ? (
        <img
          src={src}
          alt="user"
          className="w-full rounded-full object-cover h-10"
        />
      ) : (
        <User className="text-gray-600 dark:text-gray-400" />
      )}
    </div>
  );
}

export default Avatar;
