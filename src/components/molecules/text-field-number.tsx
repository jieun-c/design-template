import { InputHTMLAttributes } from "react";
import { HelperText } from "../atom/helper-text";
import { Input } from "../atom/input";
import { Label } from "../atom/label";

type Props = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
  direction?: "row" | "col";
} & InputHTMLAttributes<HTMLInputElement>;

export const TextFieldNumber = ({
  error = false,
  disabled = false,
  required,
  label,
  helperText,
  direction = "col",
  onChange,
  ...props
}: Props) => {
  // 숫자만 입력되도록 필터링하는 onChange 핸들러
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^0-9]/g, ""); // 숫자만 남기기
    if (onChange) {
      onChange({
        ...event,
        target: { ...event.target, value: newValue }, // 숫자 필터링된 값 전달
      });
    }
  };

  return (
    <>
      {direction === "col" && (
        <div className="flex flex-col gap-2.5">
          {label && (
            <Label required={required} label={label} disabled={disabled} />
          )}

          <Input
            error={error}
            disabled={disabled}
            onChange={handleChange}
            {...props}
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
              <Label required={required} label={label} disabled={disabled} />
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <Input
              error={error}
              disabled={disabled}
              onChange={handleChange}
              {...props}
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
