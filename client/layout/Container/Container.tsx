import React from "react";

interface IContainer {
  children?: React.ReactNode;
}

function Container(props: IContainer) {
  const { children } = props;
  return <div className="mx-auto max-w-screen-2xl p-8">{children}</div>;
}

export default Container;
