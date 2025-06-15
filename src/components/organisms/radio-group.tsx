import { Radio } from "@/components/molecules/radio";
import { OptionType } from "@/types";
import { Label } from "../atom/label";
import { HelperText } from "../atom/helper-text";

interface Props {
  title?: string;
  options: OptionType<string | number>[];
  value: string | number;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  direction?: "row" | "col";
  required?: boolean;
  labelMinWidth?: string;
  helperText?: string;
  error?: boolean;
}

export const RadioGroup = ({
  title,
  options,
  value,
  onChange,
  disabled = false,
  direction = "row",
  required = false,
  labelMinWidth = "",
  helperText,
  error,
}: Props) => {
  const layoutClass = direction === "row" ? "flex-row" : "flex-col";
  const optionLayout =
    direction === "row"
      ? "flex-row flex-wrap gap-x-4 gap-y-2"
      : "flex-col gap-2";

  return (
    <div className={`flex ${layoutClass} gap-3`}>
      {title && (
        <Label
          required={required}
          label={title}
          disabled={disabled}
          labelMinWidth={labelMinWidth}
          className="h-10"
        />
      )}

      <div className="flex-1 flex flex-col gap-2.5">
        <div className={`flex ${optionLayout} min-h-10 ${error ? "outline-2 outline-red-500" : ""}`}>
          {options.map((opt, idx) => (
            <div
              key={`radio-group-${opt.value}-${idx}`}
              className="flex items-center gap-2"
            >
              <Radio
                name="radio-group"
                value={opt.value}
                label={opt.label}
                checked={value === opt.value}
                onChange={onChange}
                disabled={disabled}
              />
            </div>
          ))}
        </div>
        {helperText && (
          <HelperText
            error={error}
            disabled={disabled}
            helperText={helperText}
          />
        )}
      </div>
    </div>
  );
};
