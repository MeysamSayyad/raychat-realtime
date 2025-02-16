import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`${className} text-gray-700 text-xs outline-0 border-none`}
    />
  );
}
