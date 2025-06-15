import CheckWhite from "@/assets/icons/check-white.svg";
import { HelperText } from "@/components/atom/helper-text";

interface CheckboxProps {
  id?: string;
  label?: string;
  checked: boolean | undefined;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
}

export const Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  error = false,
  helperText,
  className = "",
}: CheckboxProps) => {
  const checkboxId = id ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-start gap-2">
        <CheckboxInput
          id={checkboxId}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <CheckboxLabel
          htmlFor={checkboxId}
          label={label}
          checked={checked}
          disabled={disabled}
        />
      </div>
      {helperText && (
        <HelperText error={error} disabled={disabled} helperText={helperText} />
      )}
    </div>
  );
};

type CheckboxInputProps = React.InputHTMLAttributes<HTMLInputElement>;
const CheckboxInput = (props: CheckboxInputProps) => {
  return <input type="checkbox" className="peer hidden" {...props} />;
};

interface CheckboxLabelProps {
  htmlFor: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}
const CheckboxLabel = ({
  htmlFor,
  label,
  checked = false,
  disabled = false,
}: CheckboxLabelProps) => {
  // CheckboxLabel 라벨 텍스트 + 박스 UI + 상태 스타일
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      {/* 커스텀 체크박스 UI */}
      <div
        className={`min-w-[20px] min-h-[20px] w-[20px] h-[20px] border flex items-center justify-center transition-colors
    ${checked ? "bg-primary-60 border-gray-30" : "bg-white border-gray-30"}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {checked && <img src={CheckWhite} alt="check" />}
      </div>

      {/* 라벨 텍스트 */}
      {label && (
        <span
          className={`${disabled ? "text-gray-40" : "text-black"} text-sm min-w-fit`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
