import { InputHTMLAttributes } from "react";
import { Label } from "@/components/atom/label.tsx";
import { Input } from "@/components/atom/input.tsx";
import { HelperText } from "@/components/atom/helper-text.tsx";
import { Util } from "@/lib/utils.ts";

type phoneType = "MOBILE" | "SEOUL" | "REGIONAL" | "EXTENSION";

type PhoneInputProps = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  labelMinWidth?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  readonly?: string;
  onChange?: (value: string) => void;
  value?: string | undefined;
  allowTypes?: phoneType[];
  excludedTypes?: phoneType[];
  direction?: "row" | "col";
} & InputHTMLAttributes<HTMLInputElement>;

export const InputPhone = ({
    error,
    disabled,
    required,
    label,
    labelMinWidth,
    helperText,
    placeholder,
    value = undefined,
    className,
    allowTypes = ["MOBILE", "SEOUL", "REGIONAL", "EXTENSION"],
    excludedTypes = [],
    readonly,
    onChange,
    direction = "col",
    ...props
}: PhoneInputProps) => {
  const filteredTypes = allowTypes.filter(
    (type) => !excludedTypes.includes(type)
  );

  // 하이픈 포함 기준 maxLength 계산
  const getMaxLengthWithHyphen = (value: string | undefined) => {
    if (!value) {
      return { maxLength: 13, hypenLength: 2 };
    }
    const digits = value;
    if (
      filteredTypes.includes("MOBILE") &&
      (digits.startsWith("01") || filteredTypes.length == 1)
    )
      return { maxLength: 13, hypenLength: 2 }; // 010-1234-5678
    if (
      filteredTypes.includes("SEOUL") &&
      (digits.startsWith("02") || filteredTypes.length == 1)
    )
      return digits.length > 9
        ? { maxLength: 13, hypenLength: 2 }
        : { maxLength: 12, hypenLength: 2 }; // 02-123-4567 or 02-1234-5678
    if (
      filteredTypes.includes("REGIONAL") &&
      (/^0[3-9][0-9]/.test(digits) || filteredTypes.length == 1)
    )
      return digits.length > 10
        ? { maxLength: 14, hypenLength: 2 }
        : { maxLength: 13, hypenLength: 2 }; // 지역번호
    if (filteredTypes.includes("EXTENSION"))
      return { maxLength: 9, hypenLength: 1 }; // 내선번호
    return { maxLength: 13, hypenLength: 2 };
  };

  const formatted = Util.formatPhone(value, filteredTypes);
  const { maxLength } = getMaxLengthWithHyphen(value);

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
            {...props}
            error={error}
            value={formatted}
            onChange={(e) => {
              if (e.target.value.length > 0 && e.target.value.length <= maxLength) {
                const digits = e.target.value.replace(/\D/g, "");
                onChange?.(digits);
              }
              if (e.target.value.length == 0) {
                onChange?.("");
              }
            }}
            maxLength={maxLength}
            disabled={disabled}
            placeholder={placeholder}
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
            <Input
              {...props}
              error={error}
              value={formatted}
              onChange={(e) => {
                if (e.target.value.length > 0 && e.target.value.length <= maxLength) {
                  const digits = e.target.value.replace(/\D/g, "");
                  onChange?.(digits);
                }
                if (e.target.value.length == 0) {
                  onChange?.("");
                }
              }}
              maxLength={maxLength}
              disabled={disabled}
              placeholder={placeholder}
            />
            {helperText && (
              <HelperText
                error={error}
                helperText={helperText}
                disabled={disabled}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};