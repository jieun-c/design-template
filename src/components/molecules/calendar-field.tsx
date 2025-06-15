import { Calendar } from "../atom/calendar";
import { HelperText } from "../atom/helper-text";
import { Label } from "../atom/label";

type Props = {
  // field 에서만 사용
  required?: boolean;
  direction?: "row" | "col";
  helperText?: string;
  label?: string;
  labelMinWidth?: string;

  // 공통
  error?: boolean;
  disabled?: boolean;

  // 캘린더 props
  selected: string;
  onChange: (date: string) => void;
  maxDate?: string;
  minDate?: string;
  placeholder?: string;
  locale?: string;
  className?: string;
  readOnly?: boolean;
};

export const CalendarField = ({
  error = false,
  disabled = false,
  required,
  label,
  labelMinWidth,
  helperText,
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

          <Calendar error={error} disabled={disabled} {...props} />
          {helperText && (
            <HelperText
              error={error}
              helperText={helperText}
              disabled={disabled}
            />
          )}
        </div>
      )}

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
            <Calendar error={error} disabled={disabled} {...props} />
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
