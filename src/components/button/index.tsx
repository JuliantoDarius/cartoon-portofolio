import { Variant } from "@/types/variant";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  isBlock?: boolean;
  type?: "submit" | "button";
}

export default function Button({
  children,
  className,
  variant = "gray",
  isBlock = false,
  type = "button",
}: Props) {
  let btnClass = `btn btn-${variant}`;
  btnClass += className ? ` ${className}` : "";
  btnClass += isBlock ? " w-full" : "";
  return (
    <button className={btnClass} type={type}>
      {children}
    </button>
  );
}
