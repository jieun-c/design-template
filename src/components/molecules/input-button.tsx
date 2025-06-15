import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { Input } from "../atom/input";
import { Label } from "../atom/label";
import { HelperText } from "../atom/helper-text";
import { Button } from "../atom/button";

type CommonProps = {
  required?: boolean;
  label?: string;
  labelMinWidth?: string;
  helperText?: string;
  regExp?: RegExp;
  direction?: "row" | "col";
};

type InputProps = {
  error?: boolean;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

type ButtonProps = {
  variant?: "line" | "fill";
  color?: "base" | "red" | "blue" | "white" | "ghost" | "lightGray";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = CommonProps & {
  inputProps: InputProps;
  buttonProps: ButtonProps;
};

export const InputButton = ({
  inputProps: { error = false, disabled = false, ...inputProps },
  buttonProps: { variant, color, size, label: buttonLabel, ...buttonProps },
  required,
  label,
  labelMinWidth,
  helperText,
  regExp,
  direction = "col",
}: Props) => {
  return (
    <>
      {direction === "col" && (
        <>
          <div className="flex flex-col gap-2.5">
            {label && (
              <Label
                required={required}
                label={label}
                disabled={disabled}
                labelMinWidth={labelMinWidth}
              />
            )}
            <div className="flex flex-row gap-3">
              <Input
                error={error}
                disabled={disabled}
                {...inputProps}
                onChange={(e) => {
                  if (
                    regExp &&
                    !regExp.test(e.target.value) &&
                    e.target.value !== ""
                  ) {
                    return;
                  }
                  inputProps.onChange?.(e);
                }}
              />
              <Button
                variant={variant}
                color={color}
                size={size}
                {...buttonProps}
              >
                {buttonLabel}
              </Button>
            </div>
            {helperText && (
              <HelperText
                error={error}
                helperText={helperText}
                disabled={disabled}
              />
            )}
          </div>
        </>
      )}

      {direction === "row" && (
        <>
          <div className="flex flex-row gap-3">
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
              <Input
                error={error}
                disabled={disabled}
                {...inputProps}
                onChange={(e) => {
                  if (
                    regExp &&
                    !regExp.test(e.target.value) &&
                    e.target.value !== ""
                  ) {
                    return;
                  }
                  inputProps.onChange?.(e);
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

            <div className="flex items-center h-10">
              <Button
                variant={variant}
                color={color}
                size={size}
                {...buttonProps}
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
