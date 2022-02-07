import React from "react";

interface IContainer {
  children?: React.ReactNode;
}

function Container(props: IContainer) {
  const { children } = props;
  return <div className="mt-32 mx-auto max-w-xl p-8">{children}</div>;
}

export default Container;
