import { TextareaHTMLAttributes } from "react";
import { HelperText } from "../atom/helper-text";
import { Label } from "../atom/label";
import { Textarea } from "../atom/textarea";

type Props = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
  direction?: "row" | "col";
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextFieldArea = ({
  error = false,
  disabled = false,
  required,
  label,
  helperText,
  direction = "col",
  ...props
}: Props) => {
  return (
    <>
      {direction === "col" && (
        <div className="flex flex-col gap-2.5">
          {label && (
            <Label required={required} label={label} disabled={disabled} />
          )}

          <Textarea error={error} disabled={disabled} {...props} />
          {helperText && (
            <HelperText
              error={error}
              helperText={helperText}
              disabled={disabled}
            />
          )}
        </div>
      )}

      {/* row 를 위해 label 의 높이는 input 과 동일 높이 고정 설정함. */}
      {direction === "row" && (
        <div className="flex flex-row gap-3 items-start">
          {label && (
            <div className="flex items-center h-10">
              <Label required={required} label={label} disabled={disabled} />
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <Textarea error={error} disabled={disabled} {...props} />
            {helperText && (
              <HelperText
                error={error}
                disabled={disabled}
                helperText={helperText}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
