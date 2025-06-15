import { InputHTMLAttributes } from "react";
import { inputVariants } from "./variants/input";

export type Props = {
  error?: boolean;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  error = false,
  disabled = false,
  value,
  defaultValue,
  className,
  ...props
}: Props) => {
  const haveValue = !!(value || defaultValue);

  return (
    <input
      {...props}
      className={`${inputVariants({ error, disabled, haveValue })} ${className ?? ""}`}
      disabled={disabled}
      {...(defaultValue ? { defaultValue } : { value: value || "" })}
    />
  );
};
