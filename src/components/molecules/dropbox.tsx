import { OptionType } from "@/types";
import { HelperText } from "../atom/helper-text";
import { Label } from "../atom/label";
import { Select } from "../atom/select";

type Props = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  labelMinWidth?: string;
  helperText?: string;
  direction?: "row" | "col";
};

type SelectProps = {
  optionList: OptionType<string | number>[];
  selected?: OptionType<string | number>;
  onChange: (selected: OptionType<string | number>) => void;
};

export const Dropbox = ({
  error = false,
  disabled = false,
  required,
  label,
  labelMinWidth,
  helperText,
  direction = "col",
  ...props
}: Props & SelectProps) => {
  return (
    <>
      {direction === "col" && (
        <div className="flex flex-col gap-2.5">
          <Label
            required={required}
            label={label}
            disabled={disabled}
            labelMinWidth={labelMinWidth}
          />
          <Select error={error} disabled={disabled} {...props} />
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
          <div className="flex items-center h-[38px]">
            <Label
              required={required}
              label={label}
              disabled={disabled}
              labelMinWidth={labelMinWidth}
            />
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <Select error={error} disabled={disabled} {...props} />
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
