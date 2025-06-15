import { InputHTMLAttributes } from "react";
import { Input } from "../atom/input";
import { Label } from "../atom/label";
import { HelperText } from "../atom/helper-text";

type InputProps = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  labelMinWidth?: string;
  helperText?: string;
  unit?: string;
  className?: string;
  unitClassName?: string;
  readonly?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type Props = InputProps;

export const InputUnit = ({
  error = false,
  disabled = false,
  required,
  label,
  labelMinWidth,
  helperText,
  unit,
  className,
  unitClassName,
  ...props
}: Props) => {
  return (
    <>
      {label && (
        <div className="flex flex-row items-center w-3/12 p-2">
          <Label
            required={required}
            label={label}
            disabled={disabled}
            labelMinWidth={labelMinWidth}
          />
        </div>
      )}

      <div className={`flex flex-row items-center ${label ? "w-9/12" : ""} p-2`}>
        <div className="flex flex-row gap-2.5 items-center w-full">
          <div className={`flex flex-col ${className ? className : "w-full"}`}>
            <Input error={error} disabled={disabled} {...props} />
          </div>
          <span
            className={`${unitClassName ? unitClassName : "text-gray-40"} text-sm whitespace-nowrap`}
          >
            {unit && unit}
          </span>
        </div>
        {helperText && (
          <HelperText
            error={error}
            disabled={disabled}
            helperText={helperText}
          />
        )}
      </div>
    </>
  );
};
