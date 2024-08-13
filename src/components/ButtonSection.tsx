import React, { ReactNode } from "react";

export default function ButtonSection({
  children,
  type = "default",
}: {
  children: ReactNode;
  type?: string;
}) {
  const classBasedOnType =
    type === "default" ? "flex w-1/3 justify-around" : "w-1/3 px-14";
  return <span className={classBasedOnType}>{children}</span>;
}
