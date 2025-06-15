import { CalendarRange } from "../atom/calendar-range";
import { HelperText } from "../atom/helper-text";
import { Label } from "../atom/label";

type CalendarProps = {
  selected: string;
  onChange: (date: string) => void;
  maxDate?: string;
  minDate?: string;
  placeholder?: string;
  locale?: string;
  // error?: boolean;
  // disabled?: boolean;
};

type Props = {
  // 공통 처리
  error?: boolean;
  disabled?: boolean;

  required?: boolean;
  label?: string;
  helperText?: string;
  direction?: "row" | "col";

  // error 와 disabled 제외
  startProps: CalendarProps;
  endProps: CalendarProps;
};

export const CalendarRangeField = ({
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
          <CalendarRange
            startProps={{
              ...props.startProps,
              ...(error && { error }),
              ...(disabled && { disabled }),
            }}
            endProps={{
              ...props.endProps,
              ...(error && { error }),
              ...(disabled && { disabled }),
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

      {direction === "row" && (
        <div className="flex flex-row gap-3 items-start">
          {label && (
            <div className="flex items-center h-10">
              <Label required={required} label={label} disabled={disabled} />
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <CalendarRange
              startProps={{
                ...props.startProps,
                ...(error && { error }),
                ...(disabled && { disabled }),
              }}
              endProps={{
                ...props.endProps,
                ...(error && { error }),
                ...(disabled && { disabled }),
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
