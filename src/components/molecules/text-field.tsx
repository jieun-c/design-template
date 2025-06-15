import { InputHTMLAttributes } from "react";
import { HelperText } from "../atom/helper-text";
import { Input } from "../atom/input";
import { Label } from "../atom/label";

type Props= {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  labelMinWidth?: string;
  helperText?: string;
  regExp?: RegExp;
  direction?: "row" | "col";
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  error = false,
  disabled = false,
  required,
  label,
  labelMinWidth,
  helperText,
  regExp,
  direction = "col",
  ...props
}: Props) => {
  return (
    <>
      {direction === "col" && (
        <div className="flex flex-col gap-2.5">
          {label && (
            <Label
              required={required}
              label={label}
              disabled={disabled}
              labelMinWidth={labelMinWidth}
            />
          )}
          <Input
            error={error}
            disabled={disabled}
            {...props}
            onChange={(e) => {
              if((regExp && !regExp.test(e.target.value) && e.target.value !== "")) {
                return;
              }
              props.onChange?.(e);
            }}
          />
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
              <Label
                required={required}
                label={label}
                disabled={disabled}
                labelMinWidth={labelMinWidth}
              />
            </div>
          )}

          <div className="flex flex-col gap-2.5 flex-1">
            <Input error={error} disabled={disabled} {...props}
                   onChange={(e) => {
                     if((regExp && !regExp.test(e.target.value) && e.target.value !== "")) {
                       return;
                     }
                     props.onChange?.(e);
                   }}
            />
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
