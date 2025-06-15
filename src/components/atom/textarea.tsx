import { TextareaHTMLAttributes } from "react";
import { textareaVariants } from "./variants/textarea";
import { cn } from "@/lib/utils.ts";

export type Props = {
  error?: boolean;
  disabled?: boolean;
  height?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({
  error = false,
  disabled = false,
  value,
  defaultValue,
  height = "h-[100px]",
  className,
  ...props
}: Props) => {
  const haveValue = !!(value || defaultValue);

  return (
    <div className={height}>
      <textarea
        {...props}
        className={`${textareaVariants({ error, disabled, haveValue })} ${cn(className)}`}
        disabled={disabled}
        {...(defaultValue ? { defaultValue } : { value: value || "" })}
      />
    </div>
  );
};
