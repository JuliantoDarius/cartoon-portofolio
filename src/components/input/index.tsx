import { InputHTMLAttributes, ReactNode } from "react";

interface CustomProps {
  field: any;
  label?: string;
  rightSection?: ReactNode;
  leftSection?: ReactNode;
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomProps;

export default function Input({
  field,
  label,
  rightSection,
  leftSection,
  autoComplete = "off",
  ...props
}: Props) {
  let inputClass = "";
  return (
    <div className="space-y-2">
      <input className={inputClass} {...props} {...field} />
    </div>
  );
}
